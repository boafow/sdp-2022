import { __assign } from "tslib";
import { ConsoleLogger as Logger } from '@aws-amplify/core';
var logger = new Logger('AbstractXRProvider');
var AbstractXRProvider = /** @class */ (function () {
    function AbstractXRProvider(options) {
        if (options === void 0) { options = {}; }
        this._config = options;
    }
    AbstractXRProvider.prototype.configure = function (config) {
        if (config === void 0) { config = {}; }
        this._config = __assign(__assign({}, config), this._config);
        logger.debug("configure " + this.getProviderName(), this._config);
        return this.options;
    };
    AbstractXRProvider.prototype.getCategory = function () {
        return 'XR';
    };
    Object.defineProperty(AbstractXRProvider.prototype, "options", {
        get: function () {
            return __assign({}, this._config);
        },
        enumerable: true,
        configurable: true
    });
    return AbstractXRProvider;
}());
export { AbstractXRProvider };
//# sourceMappingURL=XRProvider.js.map