"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AbstractPredictionsProvider_1 = require("./AbstractPredictionsProvider");
var Predictions_1 = require("../Predictions");
var core_1 = require("@aws-amplify/core");
var logger = new core_1.Logger('AbstractIdentifyPredictionsProvider');
var AbstractIdentifyPredictionsProvider = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractIdentifyPredictionsProvider, _super);
    function AbstractIdentifyPredictionsProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractIdentifyPredictionsProvider.prototype.getCategory = function () {
        return 'Identify';
    };
    AbstractIdentifyPredictionsProvider.prototype.identify = function (input) {
        if (Predictions_1.isIdentifyTextInput(input)) {
            logger.debug('identifyText');
            return this.identifyText(input);
        }
        else if (Predictions_1.isIdentifyLabelsInput(input)) {
            logger.debug('identifyLabels');
            return this.identifyLabels(input);
        }
        else if (Predictions_1.isIdentifyEntitiesInput(input)) {
            logger.debug('identifyEntities');
            return this.identifyEntities(input);
        }
    };
    AbstractIdentifyPredictionsProvider.prototype.identifyText = function (input) {
        throw new Error('identifyText is not implemented by this provider.');
    };
    AbstractIdentifyPredictionsProvider.prototype.identifyLabels = function (input) {
        throw new Error('identifyLabels is not implemented by this provider');
    };
    AbstractIdentifyPredictionsProvider.prototype.identifyEntities = function (input) {
        throw new Error('identifyEntities is not implemented by this provider');
    };
    return AbstractIdentifyPredictionsProvider;
}(AbstractPredictionsProvider_1.AbstractPredictionsProvider));
exports.AbstractIdentifyPredictionsProvider = AbstractIdentifyPredictionsProvider;
//# sourceMappingURL=AbstractIdentifyPredictionsProvider.js.map