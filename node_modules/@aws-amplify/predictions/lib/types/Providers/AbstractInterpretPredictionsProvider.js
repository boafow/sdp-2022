"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AbstractPredictionsProvider_1 = require("./AbstractPredictionsProvider");
var Predictions_1 = require("../Predictions");
var AbstractInterpretPredictionsProvider = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractInterpretPredictionsProvider, _super);
    function AbstractInterpretPredictionsProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractInterpretPredictionsProvider.prototype.getCategory = function () {
        return 'Interpret';
    };
    AbstractInterpretPredictionsProvider.prototype.interpret = function (input) {
        if (Predictions_1.isInterpretTextInput(input)) {
            return this.interpretText(input);
        }
    };
    AbstractInterpretPredictionsProvider.prototype.interpretText = function (input) {
        throw new Error('interpretText is not implement by this provider');
    };
    return AbstractInterpretPredictionsProvider;
}(AbstractPredictionsProvider_1.AbstractPredictionsProvider));
exports.AbstractInterpretPredictionsProvider = AbstractInterpretPredictionsProvider;
//# sourceMappingURL=AbstractInterpretPredictionsProvider.js.map