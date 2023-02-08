"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var onMessageActionListeners = (_a = {},
    _a[types_1.InAppMessageInteractionEvent.MESSAGE_RECEIVED] = new Set(),
    _a[types_1.InAppMessageInteractionEvent.MESSAGE_DISPLAYED] = new Set(),
    _a[types_1.InAppMessageInteractionEvent.MESSAGE_DISMISSED] = new Set(),
    _a[types_1.InAppMessageInteractionEvent.MESSAGE_ACTION_TAKEN] = new Set(),
    _a);
exports.notifyMessageInteractionEventListeners = function (message, event) {
    onMessageActionListeners[event].forEach(function (listener) {
        listener.handleEvent(message);
    });
};
exports.addMessageInteractionEventListener = function (handler, event) {
    var listener = {
        handleEvent: handler,
        remove: function () {
            onMessageActionListeners[event].delete(listener);
        },
    };
    onMessageActionListeners[event].add(listener);
    return listener;
};
//# sourceMappingURL=eventListeners.js.map