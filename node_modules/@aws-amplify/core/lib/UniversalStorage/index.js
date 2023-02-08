"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var universal_cookie_1 = tslib_1.__importDefault(require("universal-cookie"));
var JS_1 = require("../JS");
var isBrowser = JS_1.browserOrNode().isBrowser;
var ONE_YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;
var UniversalStorage = /** @class */ (function () {
    function UniversalStorage(context) {
        if (context === void 0) { context = {}; }
        this.cookies = new universal_cookie_1.default();
        this.store = isBrowser ? window.localStorage : Object.create(null);
        this.cookies = context.req
            ? new universal_cookie_1.default(context.req.headers.cookie)
            : new universal_cookie_1.default();
        Object.assign(this.store, this.cookies.getAll());
    }
    Object.defineProperty(UniversalStorage.prototype, "length", {
        get: function () {
            return Object.entries(this.store).length;
        },
        enumerable: true,
        configurable: true
    });
    UniversalStorage.prototype.clear = function () {
        var _this = this;
        Array.from(new Array(this.length))
            .map(function (_, i) { return _this.key(i); })
            .forEach(function (key) { return _this.removeItem(key); });
    };
    UniversalStorage.prototype.getItem = function (key) {
        return this.getLocalItem(key);
    };
    UniversalStorage.prototype.getLocalItem = function (key) {
        return Object.prototype.hasOwnProperty.call(this.store, key)
            ? this.store[key]
            : null;
    };
    UniversalStorage.prototype.getUniversalItem = function (key) {
        return this.cookies.get(key);
    };
    UniversalStorage.prototype.key = function (index) {
        return Object.keys(this.store)[index];
    };
    UniversalStorage.prototype.removeItem = function (key) {
        this.removeLocalItem(key);
        this.removeUniversalItem(key);
    };
    UniversalStorage.prototype.removeLocalItem = function (key) {
        delete this.store[key];
    };
    UniversalStorage.prototype.removeUniversalItem = function (key) {
        this.cookies.remove(key, {
            path: '/',
        });
    };
    UniversalStorage.prototype.setItem = function (key, value) {
        this.setLocalItem(key, value);
        // keys take the shape:
        //  1. `${ProviderPrefix}.${userPoolClientId}.${username}.${tokenType}
        //  2. `${ProviderPrefix}.${userPoolClientId}.LastAuthUser
        var tokenType = key.split('.').pop();
        var sessionTokenTypes = [
            'LastAuthUser',
            'accessToken',
            // refreshToken originates on the client, but SSR pages won't fail when this expires
            // Note: the new `accessToken` will also be refreshed on the client (since Amplify doesn't set server-side cookies)
            'refreshToken',
            // Required for CognitoUserSession
            'idToken',
        ];
        if (sessionTokenTypes.includes(tokenType !== null && tokenType !== void 0 ? tokenType : '')) {
            this.setUniversalItem(key, value, {
                expires: new Date(Date.now() + ONE_YEAR_IN_MS),
            });
        }
    };
    UniversalStorage.prototype.setLocalItem = function (key, value) {
        this.store[key] = value;
    };
    UniversalStorage.prototype.setUniversalItem = function (key, value, options) {
        if (options === void 0) { options = {}; }
        this.cookies.set(key, value, tslib_1.__assign(tslib_1.__assign({}, options), { path: '/', 
            // `httpOnly` cannot be set via JavaScript: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#JavaScript_access_using_Document.cookie
            sameSite: true, 
            // Allow unsecure requests to http://localhost:3000/ when in development.
            secure: isBrowser && window.location.hostname === 'localhost' ? false : true }));
    };
    return UniversalStorage;
}());
exports.UniversalStorage = UniversalStorage;
//# sourceMappingURL=index.js.map