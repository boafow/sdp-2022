"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@aws-amplify/core");
var cache_1 = require("@aws-amplify/cache");
var client_pinpoint_1 = require("@aws-sdk/client-pinpoint");
var uuid_1 = require("uuid");
var eventListeners_1 = require("../../eventListeners");
var SessionTracker_1 = tslib_1.__importDefault(require("../../SessionTracker"));
var types_1 = require("../../types");
var types_2 = require("./types");
var utils_1 = require("./utils");
var MESSAGE_DAILY_COUNT_KEY = 'pinpointProvider_inAppMessages_dailyCount';
var MESSAGE_TOTAL_COUNT_KEY = 'pinpointProvider_inAppMessages_totalCount';
var AWSPinpointProvider = /** @class */ (function () {
    function AWSPinpointProvider() {
        var _this = this;
        var _a;
        this.config = {};
        this.configured = false;
        this.endpointInitialized = false;
        this.initialized = false;
        this.configure = function (config) {
            if (config === void 0) { config = {}; }
            _this.config = tslib_1.__assign(tslib_1.__assign({}, _this.config), config);
            utils_1.logger.debug('configure AWSPinpointProvider', _this.config);
            // some configuration steps should not be re-run even if provider is re-configured for some reason
            if (!_this.configured) {
                _this.sessionTracker = new SessionTracker_1.default(_this.sessionStateChangeHandler);
                _this.sessionTracker.start();
                // wire up default Pinpoint message event handling
                eventListeners_1.addMessageInteractionEventListener(function (message) {
                    _this.recordMessageEvent(message, types_2.AWSPinpointMessageEvent.MESSAGE_DISPLAYED);
                }, types_1.InAppMessageInteractionEvent.MESSAGE_DISPLAYED);
                eventListeners_1.addMessageInteractionEventListener(function (message) {
                    _this.recordMessageEvent(message, types_2.AWSPinpointMessageEvent.MESSAGE_DISMISSED);
                }, types_1.InAppMessageInteractionEvent.MESSAGE_DISMISSED);
                eventListeners_1.addMessageInteractionEventListener(function (message) {
                    _this.recordMessageEvent(message, types_2.AWSPinpointMessageEvent.MESSAGE_ACTION_TAKEN);
                }, types_1.InAppMessageInteractionEvent.MESSAGE_ACTION_TAKEN);
            }
            _this.configured = true;
            utils_1.dispatchInAppMessagingEvent('pinpointProvider_configured', null);
            return _this.config;
        };
        this.getInAppMessages = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, appId, endpointId, pinpointClient, input, command, response, messages, err_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.initialized) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        // There is no way to granuarly reconcile the filter memoization as the keys are composited from a message id and
                        // event properties thus opting to just clear them out when getting messages rather than leave potentially
                        // obsolete entries that will no longer serve any purpose.
                        utils_1.clearMemo();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 6, , 7]);
                        return [4 /*yield*/, this.updateEndpoint()];
                    case 4:
                        _b.sent();
                        _a = this.config, appId = _a.appId, endpointId = _a.endpointId, pinpointClient = _a.pinpointClient;
                        input = {
                            ApplicationId: appId,
                            EndpointId: endpointId,
                        };
                        command = new client_pinpoint_1.GetInAppMessagesCommand(input);
                        utils_1.logger.debug('getting in-app messages', input);
                        return [4 /*yield*/, pinpointClient.send(command)];
                    case 5:
                        response = _b.sent();
                        messages = response.InAppMessagesResponse.InAppMessageCampaigns;
                        utils_1.dispatchInAppMessagingEvent('getInAppMessages', messages);
                        return [2 /*return*/, messages];
                    case 6:
                        err_1 = _b.sent();
                        utils_1.logger.error('Error getting in-app messages', err_1);
                        throw err_1;
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.processInAppMessages = function (messages, event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var highestPrioritySeen;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.initialized) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.normalizeMessages(messages.reduce(function (acc, message) {
                            var messageQualifies = utils_1.matchesEventType(message, event) &&
                                utils_1.matchesAttributes(message, event) &&
                                utils_1.matchesMetrics(message, event) &&
                                utils_1.isBeforeEndDate(message) &&
                                _this.isBelowCap(message);
                            // filter all qualifying messages returning only those that are of (relative) highest priority
                            if (messageQualifies) {
                                // have not yet encountered message with priority
                                if (!highestPrioritySeen) {
                                    // this message has priority, so reset the accumulator with this message only
                                    if (message.Priority) {
                                        highestPrioritySeen = message.Priority;
                                        return [message];
                                    }
                                    else {
                                        // this message also has no priority, so just add this message to accumulator
                                        acc.push(message);
                                    }
                                    // have previously encountered message with priority, so only messages with priority matter now
                                }
                                else if (message.Priority) {
                                    // this message has higher priority (lower number), so reset the accumulator with this message only
                                    if (message.Priority < highestPrioritySeen) {
                                        highestPrioritySeen = message.Priority;
                                        return [message];
                                        // this message has the same priority, so just add this message to accumulator
                                    }
                                    else if (message.Priority === highestPrioritySeen) {
                                        acc.push(message);
                                    }
                                }
                            }
                            return acc;
                        }, []))];
                }
            });
        }); };
        this.identifyUser = function (userId, userInfo) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var err_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.initialized) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.updateEndpoint(userId, userInfo)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_2 = _a.sent();
                        utils_1.logger.error('Error identifying user', err_2);
                        throw err_2;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.init = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, endpointId, storage, providerName, _b, err_3;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.config, endpointId = _a.endpointId, storage = _a.storage;
                        providerName = this.getProviderName();
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, , 7]);
                        if (!(typeof storage.sync === 'function')) return [3 /*break*/, 3];
                        return [4 /*yield*/, storage.sync()];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        if (!!endpointId) return [3 /*break*/, 5];
                        _b = this.config;
                        return [4 /*yield*/, this.getEndpointId()];
                    case 4:
                        _b.endpointId = _c.sent();
                        _c.label = 5;
                    case 5:
                        this.initialized = true;
                        return [3 /*break*/, 7];
                    case 6:
                        err_3 = _c.sent();
                        utils_1.logger.error("Failed to initialize " + providerName, err_3);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.initPinpointClient = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, appId, credentials, pinpointClient, region;
            return tslib_1.__generator(this, function (_b) {
                _a = this.config, appId = _a.appId, credentials = _a.credentials, pinpointClient = _a.pinpointClient, region = _a.region;
                if (!appId || !credentials || !region) {
                    throw new Error('One or more of credentials, appId or region is not configured');
                }
                if (pinpointClient) {
                    pinpointClient.destroy();
                }
                this.config.pinpointClient = new client_pinpoint_1.PinpointClient({
                    region: region,
                    credentials: credentials,
                    customUserAgent: core_1.getAmplifyUserAgent(),
                });
                return [2 /*return*/];
            });
        }); };
        this.getEndpointId = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var appId, cacheKey, cachedEndpointId, endpointId, ttl, expiration;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        appId = this.config.appId;
                        cacheKey = this.getSubCategory() + ":" + this.getProviderName() + ":" + appId;
                        return [4 /*yield*/, cache_1.Cache.getItem(cacheKey)];
                    case 1:
                        cachedEndpointId = _a.sent();
                        // Found in cache, just return it
                        if (cachedEndpointId) {
                            return [2 /*return*/, cachedEndpointId];
                        }
                        endpointId = uuid_1.v4();
                        ttl = 1000 * 60 * 60 * 24 * 365 * 100;
                        expiration = new Date().getTime() + ttl;
                        cache_1.Cache.setItem(cacheKey, endpointId, {
                            expires: expiration,
                            priority: 1,
                        });
                        return [2 /*return*/, endpointId];
                }
            });
        }); };
        this.updateEndpoint = function (userId, userInfo) {
            if (userId === void 0) { userId = null; }
            if (userInfo === void 0) { userInfo = null; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var _a, appId, credentials, endpointId, _b, endpointInfo, pinpointClient, currentCredentials, credentialsUpdated, _c, address, attributes, demographic, location_1, metrics, optOut, _d, appVersion, make, model, platform, version, input, command, err_4;
                var _e;
                return tslib_1.__generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            _a = this.config, appId = _a.appId, credentials = _a.credentials, endpointId = _a.endpointId, _b = _a.endpointInfo, endpointInfo = _b === void 0 ? {} : _b, pinpointClient = _a.pinpointClient;
                            return [4 /*yield*/, this.getCredentials()];
                        case 1:
                            currentCredentials = _f.sent();
                            credentialsUpdated = !credentials ||
                                Object.keys(currentCredentials).some(function (key) { return currentCredentials[key] !== credentials[key]; });
                            // If endpoint is already initialized, and nothing else is changing, just early return
                            if (this.endpointInitialized &&
                                !credentialsUpdated &&
                                !userId &&
                                !userInfo) {
                                return [2 /*return*/];
                            }
                            // Update credentials
                            this.config.credentials = currentCredentials;
                            _f.label = 2;
                        case 2:
                            _f.trys.push([2, 6, , 7]);
                            if (!(!pinpointClient || credentialsUpdated)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.initPinpointClient()];
                        case 3:
                            _f.sent();
                            _f.label = 4;
                        case 4:
                            _c = userInfo !== null && userInfo !== void 0 ? userInfo : {}, address = _c.address, attributes = _c.attributes, demographic = _c.demographic, location_1 = _c.location, metrics = _c.metrics, optOut = _c.optOut;
                            _d = this.clientInfo, appVersion = _d.appVersion, make = _d.make, model = _d.model, platform = _d.platform, version = _d.version;
                            input = {
                                ApplicationId: appId,
                                EndpointId: endpointId,
                                EndpointRequest: {
                                    RequestId: uuid_1.v4(),
                                    EffectiveDate: new Date().toISOString(),
                                    ChannelType: client_pinpoint_1.ChannelType.IN_APP,
                                    Address: address !== null && address !== void 0 ? address : endpointInfo.address,
                                    Attributes: tslib_1.__assign(tslib_1.__assign({}, endpointInfo.attributes), attributes),
                                    Demographic: tslib_1.__assign({ AppVersion: appVersion, Make: make, Model: model, ModelVersion: version, Platform: platform }, core_1.transferKeyToUpperCase(tslib_1.__assign(tslib_1.__assign({}, endpointInfo.demographic), demographic))),
                                    Location: core_1.transferKeyToUpperCase(tslib_1.__assign(tslib_1.__assign({}, endpointInfo.location), location_1)),
                                    Metrics: tslib_1.__assign(tslib_1.__assign({}, endpointInfo.metrics), metrics),
                                    OptOut: optOut !== null && optOut !== void 0 ? optOut : endpointInfo.optOut,
                                    User: {
                                        UserId: (_e = userId !== null && userId !== void 0 ? userId : endpointInfo.userId) !== null && _e !== void 0 ? _e : currentCredentials.identityId,
                                        UserAttributes: attributes !== null && attributes !== void 0 ? attributes : endpointInfo.userAttributes,
                                    },
                                },
                            };
                            command = new client_pinpoint_1.UpdateEndpointCommand(input);
                            utils_1.logger.debug('updating endpoint', input);
                            return [4 /*yield*/, this.config.pinpointClient.send(command)];
                        case 5:
                            _f.sent();
                            this.endpointInitialized = true;
                            return [3 /*break*/, 7];
                        case 6:
                            err_4 = _f.sent();
                            throw err_4;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        this.getCredentials = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var credentials, err_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, core_1.Credentials.get()];
                    case 1:
                        credentials = _a.sent();
                        if (!credentials) {
                            utils_1.logger.debug('no credentials found');
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, core_1.Credentials.shear(credentials)];
                    case 2:
                        err_5 = _a.sent();
                        utils_1.logger.error('Error getting credentials:', err_5);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.sessionStateChangeHandler = function (state) {
            if (state === 'started') {
                // reset all session counts
                _this.sessionMessageCountMap = {};
            }
        };
        this.isBelowCap = function (_a) {
            var CampaignId = _a.CampaignId, SessionCap = _a.SessionCap, DailyCap = _a.DailyCap, TotalCap = _a.TotalCap;
            var _b = _this.getMessageCounts(CampaignId), sessionCount = _b.sessionCount, dailyCount = _b.dailyCount, totalCount = _b.totalCount;
            return ((!SessionCap || sessionCount < SessionCap) &&
                (!DailyCap || dailyCount < DailyCap) &&
                (!TotalCap || totalCount < TotalCap));
        };
        // Use the current session count in memory or initialize as empty count
        this.getSessionCount = function (messageId) {
            return _this.sessionMessageCountMap[messageId] || 0;
        };
        this.getDailyCount = function () {
            var storage = _this.config.storage;
            var today = utils_1.getStartOfDay();
            var item = storage.getItem(MESSAGE_DAILY_COUNT_KEY);
            // Parse stored count or initialize as empty count
            var counter = item
                ? JSON.parse(item)
                : { count: 0, lastCountTimestamp: today };
            // If the stored counter timestamp is today, use it as the count, otherwise reset to 0
            return counter.lastCountTimestamp === today ? counter.count : 0;
        };
        this.getTotalCountMap = function () {
            var storage = _this.config.storage;
            var item = storage.getItem(MESSAGE_TOTAL_COUNT_KEY);
            // Parse stored count map or initialize as empty
            return item ? JSON.parse(item) : {};
        };
        this.getTotalCount = function (messageId) {
            var countMap = _this.getTotalCountMap();
            // Return stored count or initialize as empty count
            return countMap[messageId] || 0;
        };
        this.getMessageCounts = function (messageId) {
            try {
                return {
                    sessionCount: _this.getSessionCount(messageId),
                    dailyCount: _this.getDailyCount(),
                    totalCount: _this.getTotalCount(messageId),
                };
            }
            catch (err) {
                utils_1.logger.error('Failed to get message counts from storage', err);
            }
        };
        this.setSessionCount = function (messageId, count) {
            _this.sessionMessageCountMap[messageId] = count;
        };
        this.setDailyCount = function (count) {
            var storage = _this.config.storage;
            var dailyCount = {
                count: count,
                lastCountTimestamp: utils_1.getStartOfDay(),
            };
            try {
                storage.setItem(MESSAGE_DAILY_COUNT_KEY, JSON.stringify(dailyCount));
            }
            catch (err) {
                utils_1.logger.error('Failed to save daily message count to storage', err);
            }
        };
        this.setTotalCountMap = function (countMap) {
            var storage = _this.config.storage;
            try {
                storage.setItem(MESSAGE_TOTAL_COUNT_KEY, JSON.stringify(countMap));
            }
            catch (err) {
                utils_1.logger.error('Failed to save total count to storage', err);
            }
        };
        this.setTotalCount = function (messageId, count) {
            var _a;
            var updatedMap = tslib_1.__assign(tslib_1.__assign({}, _this.getTotalCountMap()), (_a = {}, _a[messageId] = count, _a));
            _this.setTotalCountMap(updatedMap);
        };
        this.incrementCounts = function (messageId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, sessionCount, dailyCount, totalCount;
            return tslib_1.__generator(this, function (_b) {
                _a = this.getMessageCounts(messageId), sessionCount = _a.sessionCount, dailyCount = _a.dailyCount, totalCount = _a.totalCount;
                this.setSessionCount(messageId, sessionCount + 1);
                this.setDailyCount(dailyCount + 1);
                this.setTotalCount(messageId, totalCount + 1);
                return [2 /*return*/];
            });
        }); };
        this.normalizeMessages = function (messages) {
            return messages.map(function (message) {
                var CampaignId = message.CampaignId, InAppMessage = message.InAppMessage;
                return {
                    id: CampaignId,
                    content: utils_1.extractContent(message),
                    layout: utils_1.interpretLayout(InAppMessage.Layout),
                    metadata: utils_1.extractMetadata(message),
                };
            });
        };
        this.recordMessageEvent = function (message, event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.initialized) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        utils_1.recordAnalyticsEvent(event, message);
                        if (!(event === types_2.AWSPinpointMessageEvent.MESSAGE_DISPLAYED)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.incrementCounts(message.id)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.sessionMessageCountMap = {};
        this.config = {
            storage: new core_1.StorageHelper().getStorage(),
        };
        this.clientInfo = (_a = core_1.ClientDevice.clientInfo()) !== null && _a !== void 0 ? _a : {};
    }
    /**
     * get the category of the plugin
     */
    AWSPinpointProvider.prototype.getCategory = function () {
        return AWSPinpointProvider.category;
    };
    /**
     * get the sub-category of the plugin
     */
    AWSPinpointProvider.prototype.getSubCategory = function () {
        return AWSPinpointProvider.subCategory;
    };
    /**
     * get provider name of the plugin
     */
    AWSPinpointProvider.prototype.getProviderName = function () {
        return AWSPinpointProvider.providerName;
    };
    AWSPinpointProvider.category = 'Notifications';
    AWSPinpointProvider.subCategory = 'InAppMessaging';
    AWSPinpointProvider.providerName = 'AWSPinpoint';
    return AWSPinpointProvider;
}());
exports.default = AWSPinpointProvider;
//# sourceMappingURL=index.js.map