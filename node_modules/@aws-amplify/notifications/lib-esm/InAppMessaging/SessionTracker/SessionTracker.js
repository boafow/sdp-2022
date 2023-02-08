// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { browserOrNode, ConsoleLogger as Logger } from '@aws-amplify/core';
import noop from 'lodash/noop';
// Per https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
var hidden;
var visibilityChange;
var isBrowser = browserOrNode().isBrowser;
if (isBrowser && document) {
    if (typeof document.hidden !== 'undefined') {
        hidden = 'hidden';
        visibilityChange = 'visibilitychange';
    }
    else if (typeof document['msHidden'] !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
    }
    else if (typeof document['webkitHidden'] !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
    }
}
var logger = new Logger('InAppMessagingSessionTracker');
var SessionTracker = /** @class */ (function () {
    function SessionTracker(sessionStateChangeHandler) {
        var _this = this;
        if (sessionStateChangeHandler === void 0) { sessionStateChangeHandler = noop; }
        this.start = function () {
            if (isBrowser) {
                document === null || document === void 0 ? void 0 : document.addEventListener(visibilityChange, _this.visibilityChangeHandler);
            }
            return _this.getSessionState();
        };
        this.end = function () {
            if (isBrowser) {
                document === null || document === void 0 ? void 0 : document.removeEventListener(visibilityChange, _this.visibilityChangeHandler);
            }
            return _this.getSessionState();
        };
        this.getSessionState = function () {
            if (isBrowser && document && !document[hidden]) {
                return 'started';
            }
            // If, for any reason, document is undefined the session will never start
            return 'ended';
        };
        this.visibilityChangeHandler = function () {
            if (!isBrowser || !document) {
                return;
            }
            if (document[hidden]) {
                logger.debug('App is now hidden');
                _this.sessionStateChangeHandler('ended');
            }
            else {
                logger.debug('App is now visible');
                _this.sessionStateChangeHandler('started');
            }
        };
        this.sessionStateChangeHandler = sessionStateChangeHandler;
    }
    return SessionTracker;
}());
export default SessionTracker;
//# sourceMappingURL=SessionTracker.js.map