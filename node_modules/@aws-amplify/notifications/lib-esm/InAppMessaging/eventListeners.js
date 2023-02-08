// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var _a;
import { InAppMessageInteractionEvent, } from './types';
var onMessageActionListeners = (_a = {},
    _a[InAppMessageInteractionEvent.MESSAGE_RECEIVED] = new Set(),
    _a[InAppMessageInteractionEvent.MESSAGE_DISPLAYED] = new Set(),
    _a[InAppMessageInteractionEvent.MESSAGE_DISMISSED] = new Set(),
    _a[InAppMessageInteractionEvent.MESSAGE_ACTION_TAKEN] = new Set(),
    _a);
export var notifyMessageInteractionEventListeners = function (message, event) {
    onMessageActionListeners[event].forEach(function (listener) {
        listener.handleEvent(message);
    });
};
export var addMessageInteractionEventListener = function (handler, event) {
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