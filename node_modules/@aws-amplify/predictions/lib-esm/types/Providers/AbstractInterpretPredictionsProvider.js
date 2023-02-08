import { __extends } from "tslib";
import { AbstractPredictionsProvider } from './AbstractPredictionsProvider';
import { isInterpretTextInput, } from '../Predictions';
var AbstractInterpretPredictionsProvider = /** @class */ (function (_super) {
    __extends(AbstractInterpretPredictionsProvider, _super);
    function AbstractInterpretPredictionsProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractInterpretPredictionsProvider.prototype.getCategory = function () {
        return 'Interpret';
    };
    AbstractInterpretPredictionsProvider.prototype.interpret = function (input) {
        if (isInterpretTextInput(input)) {
            return this.interpretText(input);
        }
    };
    AbstractInterpretPredictionsProvider.prototype.interpretText = function (input) {
        throw new Error('interpretText is not implement by this provider');
    };
    return AbstractInterpretPredictionsProvider;
}(AbstractPredictionsProvider));
export { AbstractInterpretPredictionsProvider };
//# sourceMappingURL=AbstractInterpretPredictionsProvider.js.map