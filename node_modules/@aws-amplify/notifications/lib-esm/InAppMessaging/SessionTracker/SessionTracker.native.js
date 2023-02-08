// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ConsoleLogger as Logger } from '@aws-amplify/core';
import { AppState } from 'react-native';
import noop from 'lodash/noop';
var isActive = function (appState) { return appState === 'active'; };
var isInactive = function (appState) {
    return appState === 'inactive' || appState === 'background';
};
var logger = new Logger('InAppMessagingSessionTracker');
var SessionTracker = /** @class */ (function () {
    function SessionTracker(sessionStateChangeHandler) {
        var _this = this;
        if (sessionStateChangeHandler === void 0) { sessionStateChangeHandler = noop; }
        this.start = function () {
            AppState.addEventListener('change', _this.appStateChangeHandler);
            return _this.getSessionState();
        };
        this.end = function () {
            AppState.removeEventListener('change', _this.appStateChangeHandler);
            return _this.getSessionState();
        };
        this.getSessionState = function () {
            if (isActive(_this.currentAppState)) {
                return 'started';
            }
            // consider any other app state as session ended
            return 'ended';
        };
        this.appStateChangeHandler = function (nextAppState) {
            // if going from active to inactive
            if (isActive(_this.currentAppState) && isInactive(nextAppState)) {
                logger.debug('App has gone to the background');
                _this.sessionStateChangeHandler('ended');
            }
            // if going from inactive to active
            if (isInactive(_this.currentAppState) && isActive(nextAppState)) {
                logger.debug('App has come to the foreground');
                _this.sessionStateChangeHandler('started');
            }
            // otherwise do nothing but always update current state
            _this.currentAppState = nextAppState;
        };
        this.currentAppState = 'active';
        this.sessionStateChangeHandler = sessionStateChangeHandler;
    }
    return SessionTracker;
}());
export default SessionTracker;
//# sourceMappingURL=SessionTracker.native.js.map