import { __extends } from "tslib";
import { AbstractPredictionsProvider } from '../types/Providers';
import { AmazonAIConvertPredictionsProvider } from './AmazonAIConvertPredictionsProvider';
import { AmazonAIInterpretPredictionsProvider } from './AmazonAIInterpretPredictionsProvider';
import { AmazonAIIdentifyPredictionsProvider } from './AmazonAIIdentifyPredictionsProvider';
var AmazonAIPredictionsProvider = /** @class */ (function (_super) {
    __extends(AmazonAIPredictionsProvider, _super);
    function AmazonAIPredictionsProvider() {
        var _this = _super.call(this) || this;
        _this.convertProvider = new AmazonAIConvertPredictionsProvider();
        _this.identifyProvider = new AmazonAIIdentifyPredictionsProvider();
        _this.interpretProvider = new AmazonAIInterpretPredictionsProvider();
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
}(AbstractPredictionsProvider));
export { AmazonAIPredictionsProvider };
//# sourceMappingURL=AmazonAIPredictionsProvider.js.map