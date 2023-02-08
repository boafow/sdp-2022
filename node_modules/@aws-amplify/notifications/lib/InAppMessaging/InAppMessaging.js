"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@aws-amplify/core");
var flatten_1 = tslib_1.__importDefault(require("lodash/flatten"));
var Providers_1 = require("./Providers");
var eventListeners_1 = require("./eventListeners");
var types_1 = require("./types");
var STORAGE_KEY_SUFFIX = '_inAppMessages';
var logger = new core_1.ConsoleLogger('Notifications.InAppMessaging');
var InAppMessaging = /** @class */ (function () {
    function InAppMessaging() {
        var _this = this;
        this.config = {};
        this.listeningForAnalyticEvents = false;
        this.pluggables = [];
        this.storageSynced = false;
        /**
         * Configure InAppMessaging
         * @param {Object} config - InAppMessaging configuration object
         */
        this.configure = function (_a) {
            if (_a === void 0) { _a = {}; }
            var _b = _a.listenForAnalyticsEvents, listenForAnalyticsEvents = _b === void 0 ? true : _b, config = tslib_1.__rest(_a, ["listenForAnalyticsEvents"]);
            _this.config = tslib_1.__assign(tslib_1.__assign({}, _this.config), config);
            logger.debug('configure InAppMessaging', _this.config);
            _this.pluggables.forEach(function (pluggable) {
                pluggable.configure(_this.config[pluggable.getProviderName()]);
            });
            if (_this.pluggables.length === 0) {
                _this.addPluggable(new Providers_1.AWSPinpointProvider());
            }
            if (listenForAnalyticsEvents && !_this.listeningForAnalyticEvents) {
                core_1.Hub.listen('analytics', _this.analyticsListener);
                _this.listeningForAnalyticEvents = true;
            }
            return _this.config;
        };
        /**
         * Get a plugin from added plugins
         * @param {string} providerName - the name of the plugin to get
         */
        this.getPluggable = function (providerName) {
            var _a;
            var pluggable = (_a = _this.pluggables.find(function (pluggable) { return pluggable.getProviderName() === providerName; })) !== null && _a !== void 0 ? _a : null;
            if (!pluggable) {
                logger.debug("No plugin found with name " + providerName);
            }
            return pluggable;
        };
        /**
         * Add plugin into InAppMessaging
         * @param {InAppMessagingProvider} pluggable - an instance of the plugin
         */
        this.addPluggable = function (pluggable) {
            if (pluggable &&
                pluggable.getCategory() === 'Notifications' &&
                pluggable.getSubCategory() === 'InAppMessaging') {
                if (_this.getPluggable(pluggable.getProviderName())) {
                    throw new Error("Pluggable " + pluggable.getProviderName() + " has already been added.");
                }
                _this.pluggables.push(pluggable);
                pluggable.configure(_this.config[pluggable.getProviderName()]);
            }
        };
        /**
         * Remove a plugin from added plugins
         * @param {string} providerName - the name of the plugin to remove
         */
        this.removePluggable = function (providerName) {
            var index = _this.pluggables.findIndex(function (pluggable) { return pluggable.getProviderName() === providerName; });
            if (index === -1) {
                logger.debug("No plugin found with name " + providerName);
            }
            else {
                _this.pluggables.splice(index, 1);
            }
        };
        /**
         * Get the map resources that are currently available through the provider
         * @param {string} provider
         * @returns - Array of available map resources
         */
        this.syncMessages = function () {
            return Promise.all(_this.pluggables.map(function (pluggable) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var messages, key, err_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, pluggable.getInAppMessages()];
                        case 1:
                            messages = _a.sent();
                            key = "" + pluggable.getProviderName() + STORAGE_KEY_SUFFIX;
                            return [4 /*yield*/, this.setMessages(key, messages)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            logger.error('Failed to sync messages', err_1);
                            throw err_1;
                        case 4: return [2 /*return*/];
                    }
                });
            }); }));
        };
        this.clearMessages = function () {
            return Promise.all(_this.pluggables.map(function (pluggable) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var key;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            key = "" + pluggable.getProviderName() + STORAGE_KEY_SUFFIX;
                            return [4 /*yield*/, this.removeMessages(key)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }));
        };
        this.dispatchEvent = function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var messages, flattenedMessages;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(this.pluggables.map(function (pluggable) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var key, messages;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        key = "" + pluggable.getProviderName() + STORAGE_KEY_SUFFIX;
                                        return [4 /*yield*/, this.getMessages(key)];
                                    case 1:
                                        messages = _a.sent();
                                        return [2 /*return*/, pluggable.processInAppMessages(messages, event)];
                                }
                            });
                        }); }))];
                    case 1:
                        messages = _a.sent();
                        flattenedMessages = flatten_1.default(messages);
                        if (flattenedMessages.length) {
                            eventListeners_1.notifyMessageInteractionEventListeners(this.conflictHandler(flattenedMessages), types_1.InAppMessageInteractionEvent.MESSAGE_RECEIVED);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.identifyUser = function (userId, userInfo) {
            return Promise.all(_this.pluggables.map(function (pluggable) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var err_2;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, pluggable.identifyUser(userId, userInfo)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            err_2 = _a.sent();
                            logger.error('Failed to identify user', err_2);
                            throw err_2;
                        case 3: return [2 /*return*/];
                    }
                });
            }); }));
        };
        this.onMessageReceived = function (handler) {
            return eventListeners_1.addMessageInteractionEventListener(handler, types_1.InAppMessageInteractionEvent.MESSAGE_RECEIVED);
        };
        this.onMessageDisplayed = function (handler) {
            return eventListeners_1.addMessageInteractionEventListener(handler, types_1.InAppMessageInteractionEvent.MESSAGE_DISPLAYED);
        };
        this.onMessageDismissed = function (handler) {
            return eventListeners_1.addMessageInteractionEventListener(handler, types_1.InAppMessageInteractionEvent.MESSAGE_DISMISSED);
        };
        this.onMessageActionTaken = function (handler) {
            return eventListeners_1.addMessageInteractionEventListener(handler, types_1.InAppMessageInteractionEvent.MESSAGE_ACTION_TAKEN);
        };
        this.notifyMessageInteraction = function (message, event) {
            eventListeners_1.notifyMessageInteractionEventListeners(message, event);
        };
        this.setConflictHandler = function (handler) {
            _this.conflictHandler = handler;
        };
        this.analyticsListener = function (_a) {
            var payload = _a.payload;
            var event = payload.event, data = payload.data;
            switch (event) {
                case 'record': {
                    _this.dispatchEvent(data);
                    break;
                }
                default:
                    break;
            }
        };
        this.syncStorage = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var storage, err_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storage = this.config.storage;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!(typeof storage.sync === 'function')) return [3 /*break*/, 3];
                        return [4 /*yield*/, storage.sync()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.storageSynced = true;
                        return [3 /*break*/, 5];
                    case 4:
                        err_3 = _a.sent();
                        logger.error('Failed to sync storage', err_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.getMessages = function (key) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var storage, storedMessages, err_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!!this.storageSynced) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.syncStorage()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        storage = this.config.storage;
                        storedMessages = storage.getItem(key);
                        return [2 /*return*/, storedMessages ? JSON.parse(storedMessages) : []];
                    case 3:
                        err_4 = _a.sent();
                        logger.error('Failed to retrieve in-app messages from storage', err_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.setMessages = function (key, messages) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var storage, err_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!messages) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!!this.storageSynced) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.syncStorage()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        storage = this.config.storage;
                        storage.setItem(key, JSON.stringify(messages));
                        return [3 /*break*/, 5];
                    case 4:
                        err_5 = _a.sent();
                        logger.error('Failed to store in-app messages', err_5);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.removeMessages = function (key) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var storage, err_6;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!!this.storageSynced) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.syncStorage()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        storage = this.config.storage;
                        storage.removeItem(key);
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        logger.error('Failed to remove in-app messages from storage', err_6);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.defaultConflictHandler = function (messages) {
            // default behavior is to return the message closest to expiry
            // this function assumes that messages processed by providers already filters out expired messages
            var sorted = messages.sort(function (a, b) {
                var _a, _b;
                var endDateA = (_a = a.metadata) === null || _a === void 0 ? void 0 : _a.endDate;
                var endDateB = (_b = b.metadata) === null || _b === void 0 ? void 0 : _b.endDate;
                // if both message end dates are falsy or have the same date string, treat them as equal
                if (endDateA === endDateB) {
                    return 0;
                }
                // if only message A has an end date, treat it as closer to expiry
                if (endDateA && !endDateB) {
                    return -1;
                }
                // if only message B has an end date, treat it as closer to expiry
                if (!endDateA && endDateB) {
                    return 1;
                }
                // otherwise, compare them
                return new Date(endDateA) < new Date(endDateB) ? -1 : 1;
            });
            // always return the top sorted
            return sorted[0];
        };
        this.config = {
            storage: new core_1.StorageHelper().getStorage(),
        };
        this.setConflictHandler(this.defaultConflictHandler);
    }
    /**
     * Get the name of this module
     * @returns {string} name of this module
     */
    InAppMessaging.prototype.getModuleName = function () {
        return 'InAppMessaging';
    };
    return InAppMessaging;
}());
exports.default = InAppMessaging;
//# sourceMappingURL=InAppMessaging.js.map