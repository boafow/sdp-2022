"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@aws-amplify/core");
var logger = new core_1.ConsoleLogger('AbstractXRProvider');
var AbstractXRProvider = /** @class */ (function () {
    function AbstractXRProvider(options) {
        if (options === void 0) { options = {}; }
        this._config = options;
    }
    AbstractXRProvider.prototype.configure = function (config) {
        if (config === void 0) { config = {}; }
        this._config = tslib_1.__assign(tslib_1.__assign({}, config), this._config);
        logger.debug("configure " + this.getProviderName(), this._config);
        return this.options;
    };
    AbstractXRProvider.prototype.getCategory = function () {
        return 'XR';
    };
    Object.defineProperty(AbstractXRProvider.prototype, "options", {
        get: function () {
            return tslib_1.__assign({}, this._config);
        },
        enumerable: true,
        configurable: true
    });
    return AbstractXRProvider;
}());
exports.AbstractXRProvider = AbstractXRProvider;
//# sourceMappingURL=XRProvider.js.map