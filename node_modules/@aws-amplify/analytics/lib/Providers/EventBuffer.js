"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@aws-amplify/core");
var client_pinpoint_1 = require("@aws-sdk/client-pinpoint");
var AppUtils_1 = require("../utils/AppUtils");
var logger = new core_1.ConsoleLogger('EventsBuffer');
var RETRYABLE_CODES = [429, 500];
var ACCEPTED_CODES = [202];
var EventsBuffer = /** @class */ (function () {
    function EventsBuffer(client, config) {
        this._pause = false;
        this._flush = false;
        logger.debug('Instantiating buffer with config:', config);
        this._buffer = [];
        this._client = client;
        this._config = config;
        this._sendBatch = this._sendBatch.bind(this);
        this._startLoop();
    }
    EventsBuffer.prototype.push = function (event) {
        var _a;
        // if the buffer is currently at the configured limit, pushing would exceed it
        if (this._buffer.length >= this._config.bufferSize) {
            logger.debug('Exceeded analytics events buffer size');
            return event.handlers.reject(new Error('Exceeded the size of analytics events buffer'));
        }
        var eventId = event.params.event.eventId;
        var bufferElement = (_a = {}, _a[eventId] = event, _a);
        this._buffer.push(bufferElement);
    };
    EventsBuffer.prototype.pause = function () {
        this._pause = true;
    };
    EventsBuffer.prototype.resume = function () {
        this._pause = false;
    };
    EventsBuffer.prototype.updateClient = function (client) {
        this._client = client;
    };
    EventsBuffer.prototype.flush = function () {
        this._flush = true;
    };
    EventsBuffer.prototype._startLoop = function () {
        if (this._interval) {
            clearInterval(this._interval);
        }
        var flushInterval = this._config.flushInterval;
        this._interval = setInterval(this._sendBatch, flushInterval);
    };
    EventsBuffer.prototype._sendBatch = function () {
        var bufferLength = this._buffer.length;
        if (this._flush && !bufferLength) {
            clearInterval(this._interval);
        }
        // Do not send the batch of events if
        // the Buffer is paused or is empty or the App is not in the foreground
        // Apps should be in the foreground since
        // the OS may restrict access to the network in the background
        if (this._pause || !bufferLength || !AppUtils_1.isAppInForeground()) {
            return;
        }
        var flushSize = this._config.flushSize;
        var batchSize = Math.min(flushSize, bufferLength);
        var bufferSubset = this._buffer.splice(0, batchSize);
        this._putEvents(bufferSubset);
    };
    EventsBuffer.prototype._putEvents = function (buffer) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var eventMap, batchEventParams, command, data, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eventMap = this._bufferToMap(buffer);
                        batchEventParams = this._generateBatchEventParams(eventMap);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        command = new client_pinpoint_1.PutEventsCommand(batchEventParams);
                        return [4 /*yield*/, this._client.send(command)];
                    case 2:
                        data = _a.sent();
                        this._processPutEventsSuccessResponse(data, eventMap);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, this._handlePutEventsFailure(err_1, eventMap)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EventsBuffer.prototype._generateBatchEventParams = function (eventMap) {
        var batchEventParams = {
            ApplicationId: '',
            EventsRequest: {
                BatchItem: {},
            },
        };
        Object.values(eventMap).forEach(function (item) {
            var params = item.params;
            var event = params.event, timestamp = params.timestamp, config = params.config;
            var name = event.name, attributes = event.attributes, metrics = event.metrics, eventId = event.eventId, session = event.session;
            var appId = config.appId, endpointId = config.endpointId;
            var batchItem = batchEventParams.EventsRequest.BatchItem;
            batchEventParams.ApplicationId = batchEventParams.ApplicationId || appId;
            if (!batchItem[endpointId]) {
                batchItem[endpointId] = {
                    Endpoint: {},
                    Events: {},
                };
            }
            batchItem[endpointId].Events[eventId] = {
                EventType: name,
                Timestamp: new Date(timestamp).toISOString(),
                Attributes: attributes,
                Metrics: metrics,
                Session: session,
            };
        });
        return batchEventParams;
    };
    EventsBuffer.prototype._handlePutEventsFailure = function (err, eventMap) {
        logger.debug('_putEvents Failed: ', err);
        var statusCode = err.$metadata && err.$metadata.httpStatusCode;
        if (RETRYABLE_CODES.includes(statusCode)) {
            var retryableEvents = Object.values(eventMap);
            this._retry(retryableEvents);
            return;
        }
    };
    EventsBuffer.prototype._processPutEventsSuccessResponse = function (data, eventMap) {
        var Results = data.EventsResponse.Results;
        var retryableEvents = [];
        Object.entries(Results).forEach(function (_a) {
            var _b = tslib_1.__read(_a, 2), endpointId = _b[0], endpointValues = _b[1];
            var responses = endpointValues.EventsItemResponse;
            Object.entries(responses).forEach(function (_a) {
                var _b, _c;
                var _d = tslib_1.__read(_a, 2), eventId = _d[0], _e = _d[1], StatusCode = _e.StatusCode, Message = _e.Message;
                var eventObject = eventMap[eventId];
                // manually crafting handlers response to keep API consistant
                var response = {
                    EventsResponse: {
                        Results: (_b = {},
                            _b[endpointId] = {
                                EventsItemResponse: (_c = {},
                                    _c[eventId] = { StatusCode: StatusCode, Message: Message },
                                    _c),
                            },
                            _b),
                    },
                };
                if (ACCEPTED_CODES.includes(StatusCode)) {
                    eventObject.handlers.resolve(response);
                    return;
                }
                if (RETRYABLE_CODES.includes(StatusCode)) {
                    retryableEvents.push(eventObject);
                    return;
                }
                var name = eventObject.params.event.name;
                logger.error("event " + eventId + " : " + name + " failed with error: " + Message);
                return eventObject.handlers.reject(response);
            });
        });
        if (retryableEvents.length) {
            this._retry(retryableEvents);
        }
    };
    EventsBuffer.prototype._retry = function (retryableEvents) {
        var _a;
        // retryable events that haven't reached the resendLimit
        var eligibleEvents = [];
        retryableEvents.forEach(function (event) {
            var _a;
            var params = event.params;
            var _b = params.event, eventId = _b.eventId, name = _b.name;
            if (params.resendLimit-- > 0) {
                logger.debug("resending event " + eventId + " : " + name + " with " + params.resendLimit + " retry attempts remaining");
                eligibleEvents.push((_a = {}, _a[eventId] = event, _a));
                return;
            }
            logger.debug("no retry attempts remaining for event " + eventId + " : " + name);
        });
        // add the events to the front of the buffer
        (_a = this._buffer).unshift.apply(_a, tslib_1.__spread(eligibleEvents));
    };
    // convert buffer to map, i.e. { eventId1: { params, handler }, eventId2: { params, handlers } }
    // this allows us to easily access the handlers after receiving a batch response
    EventsBuffer.prototype._bufferToMap = function (buffer) {
        return buffer.reduce(function (acc, curVal) {
            var _a = tslib_1.__read(Object.entries(curVal), 1), _b = tslib_1.__read(_a[0], 2), key = _b[0], value = _b[1];
            acc[key] = value;
            return acc;
        }, {});
    };
    return EventsBuffer;
}());
exports.default = EventsBuffer;
//# sourceMappingURL=EventBuffer.js.map