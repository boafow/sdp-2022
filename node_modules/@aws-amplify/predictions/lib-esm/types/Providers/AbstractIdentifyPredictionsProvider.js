import { __extends } from "tslib";
import { AbstractPredictionsProvider } from './AbstractPredictionsProvider';
import { isIdentifyLabelsInput, isIdentifyEntitiesInput, isIdentifyTextInput, } from '../Predictions';
import { Logger } from '@aws-amplify/core';
var logger = new Logger('AbstractIdentifyPredictionsProvider');
var AbstractIdentifyPredictionsProvider = /** @class */ (function (_super) {
    __extends(AbstractIdentifyPredictionsProvider, _super);
    function AbstractIdentifyPredictionsProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractIdentifyPredictionsProvider.prototype.getCategory = function () {
        return 'Identify';
    };
    AbstractIdentifyPredictionsProvider.prototype.identify = function (input) {
        if (isIdentifyTextInput(input)) {
            logger.debug('identifyText');
            return this.identifyText(input);
        }
        else if (isIdentifyLabelsInput(input)) {
            logger.debug('identifyLabels');
            return this.identifyLabels(input);
        }
        else if (isIdentifyEntitiesInput(input)) {
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
}(AbstractPredictionsProvider));
export { AbstractIdentifyPredictionsProvider };
//# sourceMappingURL=AbstractIdentifyPredictionsProvider.js.map