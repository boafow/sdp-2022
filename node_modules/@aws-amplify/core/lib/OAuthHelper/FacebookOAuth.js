"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var Logger_1 = require("../Logger");
var JS_1 = require("../JS");
var Util_1 = require("../Util");
var logger = new Logger_1.ConsoleLogger('CognitoCredentials');
var waitForInit = new Promise(function (res, rej) {
    if (!JS_1.browserOrNode().isBrowser) {
        logger.debug('not in the browser, directly resolved');
        return res();
    }
    var fb = window['FB'];
    if (fb) {
        logger.debug('FB SDK already loaded');
        return res();
    }
    else {
        setTimeout(function () {
            return res();
        }, 2000);
    }
});
var FacebookOAuth = /** @class */ (function () {
    function FacebookOAuth() {
        this.initialized = false;
        this.refreshFacebookToken = this.refreshFacebookToken.bind(this);
        this._refreshFacebookTokenImpl = this._refreshFacebookTokenImpl.bind(this);
    }
    FacebookOAuth.prototype.refreshFacebookToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.initialized) return [3 /*break*/, 2];
                        logger.debug('need to wait for the Facebook SDK loaded');
                        return [4 /*yield*/, waitForInit];
                    case 1:
                        _a.sent();
                        this.initialized = true;
                        logger.debug('finish waiting');
                        _a.label = 2;
                    case 2: return [2 /*return*/, this._refreshFacebookTokenImpl()];
                }
            });
        });
    };
    FacebookOAuth.prototype._refreshFacebookTokenImpl = function () {
        var fb = null;
        if (JS_1.browserOrNode().isBrowser)
            fb = window['FB'];
        if (!fb) {
            var errorMessage = 'no fb sdk available';
            logger.debug(errorMessage);
            return Promise.reject(new Util_1.NonRetryableError(errorMessage));
        }
        return new Promise(function (res, rej) {
            fb.getLoginStatus(function (fbResponse) {
                if (!fbResponse || !fbResponse.authResponse) {
                    var errorMessage = 'no response from facebook when refreshing the jwt token';
                    logger.debug(errorMessage);
                    // There is no definitive indication for a network error in
                    // fbResponse, so we are treating it as an invalid token.
                    rej(new Util_1.NonRetryableError(errorMessage));
                }
                else {
                    var response = fbResponse.authResponse;
                    var accessToken = response.accessToken, expiresIn = response.expiresIn;
                    var date = new Date();
                    var expires_at = expiresIn * 1000 + date.getTime();
                    if (!accessToken) {
                        var errorMessage = 'the jwtToken is undefined';
                        logger.debug(errorMessage);
                        rej(new Util_1.NonRetryableError(errorMessage));
                    }
                    res({
                        token: accessToken,
                        expires_at: expires_at,
                    });
                }
            }, { scope: 'public_profile,email' });
        });
    };
    return FacebookOAuth;
}());
exports.FacebookOAuth = FacebookOAuth;
//# sourceMappingURL=FacebookOAuth.js.map