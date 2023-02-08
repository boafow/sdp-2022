"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Providers_1 = require("../types/Providers");
var AmazonAIConvertPredictionsProvider_1 = require("./AmazonAIConvertPredictionsProvider");
var AmazonAIInterpretPredictionsProvider_1 = require("./AmazonAIInterpretPredictionsProvider");
var AmazonAIIdentifyPredictionsProvider_1 = require("./AmazonAIIdentifyPredictionsProvider");
var AmazonAIPredictionsProvider = /** @class */ (function (_super) {
    tslib_1.__extends(AmazonAIPredictionsProvider, _super);
    function AmazonAIPredictionsProvider() {
        var _this = _super.call(this) || this;
        _this.convertProvider = new AmazonAIConvertPredictionsProvider_1.AmazonAIConvertPredictionsProvider();
        _this.identifyProvider = new AmazonAIIdentifyPredictionsProvider_1.AmazonAIIdentifyPredictionsProvider();
        _this.interpretProvider = new AmazonAIInterpretPredictionsProvider_1.AmazonAIInterpretPredictionsProvider();
        return _this;
    }
    AmazonAIPredictionsProvider.prototype.getCategory = function () {
        return 'Predictions';
    };
    AmazonAIPredictionsProvider.prototype.getProviderName = function () {
        return 'AmazonAIPredictionsProvider';
    };
    AmazonAIPredictionsProvider.prototype.configure = function (config) {
        this.convertProvider.configure(config.convert);
        this.identifyProvider.configure(config.identify);
        this.interpretProvider.configure(config.interpret);
        return config;
    };
    AmazonAIPredictionsProvider.prototype.interpret = function (input) {
        return this.interpretProvider.interpret(input);
    };
    AmazonAIPredictionsProvider.prototype.convert = function (input) {
        return this.convertProvider.convert(input);
    };
    AmazonAIPredictionsProvider.prototype.identify = function (input) {
        return this.identifyProvider.identify(input);
    };
    return AmazonAIPredictionsProvider;
}(Providers_1.AbstractPredictionsProvider));
exports.AmazonAIPredictionsProvider = AmazonAIPredictionsProvider;
//# sourceMappingURL=AmazonAIPredictionsProvider.js.map