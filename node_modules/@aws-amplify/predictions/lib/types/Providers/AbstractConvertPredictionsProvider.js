"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Predictions_1 = require("../Predictions");
var AbstractPredictionsProvider_1 = require("./AbstractPredictionsProvider");
var core_1 = require("@aws-amplify/core");
var logger = new core_1.ConsoleLogger('AbstractConvertPredictionsProvider');
var AbstractConvertPredictionsProvider = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractConvertPredictionsProvider, _super);
    function AbstractConvertPredictionsProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractConvertPredictionsProvider.prototype.getCategory = function () {
        return 'Convert';
    };
    AbstractConvertPredictionsProvider.prototype.convert = function (input) {
        if (Predictions_1.isTranslateTextInput(input)) {
            logger.debug('translateText');
            return this.translateText(input);
        }
        else if (Predictions_1.isTextToSpeechInput(input)) {
            logger.debug('textToSpeech');
            return this.convertTextToSpeech(input);
        }
        else if (Predictions_1.isSpeechToTextInput(input)) {
            logger.debug('textToSpeech');
            return this.convertSpeechToText(input);
        }
    };
    AbstractConvertPredictionsProvider.prototype.translateText = function (translateTextInput) {
        throw new Error('convertText is not implemented by this provider');
    };
    AbstractConvertPredictionsProvider.prototype.convertTextToSpeech = function (textToSpeechInput) {
        throw new Error('convertTextToSpeech is not implemented by this provider');
    };
    AbstractConvertPredictionsProvider.prototype.convertSpeechToText = function (speechToTextInput) {
        throw new Error('convertSpeechToText is not implemented by this provider');
    };
    return AbstractConvertPredictionsProvider;
}(AbstractPredictionsProvider_1.AbstractPredictionsProvider));
exports.AbstractConvertPredictionsProvider = AbstractConvertPredictionsProvider;
//# sourceMappingURL=AbstractConvertPredictionsProvider.js.map