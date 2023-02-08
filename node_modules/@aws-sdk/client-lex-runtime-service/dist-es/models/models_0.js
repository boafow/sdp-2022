import { __assign, __extends } from "tslib";
import { SENSITIVE_STRING, } from "@aws-sdk/smithy-client";
import { LexRuntimeServiceServiceException as __BaseException } from "./LexRuntimeServiceServiceException";
var BadRequestException = (function (_super) {
    __extends(BadRequestException, _super);
    function BadRequestException(opts) {
        var _this = _super.call(this, __assign({ name: "BadRequestException", $fault: "client" }, opts)) || this;
        _this.name = "BadRequestException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, BadRequestException.prototype);
        return _this;
    }
    return BadRequestException;
}(__BaseException));
export { BadRequestException };
var ConflictException = (function (_super) {
    __extends(ConflictException, _super);
    function ConflictException(opts) {
        var _this = _super.call(this, __assign({ name: "ConflictException", $fault: "client" }, opts)) || this;
        _this.name = "ConflictException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, ConflictException.prototype);
        return _this;
    }
    return ConflictException;
}(__BaseException));
export { ConflictException };
var InternalFailureException = (function (_super) {
    __extends(InternalFailureException, _super);
    function InternalFailureException(opts) {
        var _this = _super.call(this, __assign({ name: "InternalFailureException", $fault: "server" }, opts)) || this;
        _this.name = "InternalFailureException";
        _this.$fault = "server";
        Object.setPrototypeOf(_this, InternalFailureException.prototype);
        return _this;
    }
    return InternalFailureException;
}(__BaseException));
export { InternalFailureException };
var LimitExceededException = (function (_super) {
    __extends(LimitExceededException, _super);
    function LimitExceededException(opts) {
        var _this = _super.call(this, __assign({ name: "LimitExceededException", $fault: "client" }, opts)) || this;
        _this.name = "LimitExceededException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, LimitExceededException.prototype);
        _this.retryAfterSeconds = opts.retryAfterSeconds;
        return _this;
    }
    return LimitExceededException;
}(__BaseException));
export { LimitExceededException };
var NotFoundException = (function (_super) {
    __extends(NotFoundException, _super);
    function NotFoundException(opts) {
        var _this = _super.call(this, __assign({ name: "NotFoundException", $fault: "client" }, opts)) || this;
        _this.name = "NotFoundException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, NotFoundException.prototype);
        return _this;
    }
    return NotFoundException;
}(__BaseException));
export { NotFoundException };
export var FulfillmentState;
(function (FulfillmentState) {
    FulfillmentState["FAILED"] = "Failed";
    FulfillmentState["FULFILLED"] = "Fulfilled";
    FulfillmentState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
})(FulfillmentState || (FulfillmentState = {}));
export var MessageFormatType;
(function (MessageFormatType) {
    MessageFormatType["COMPOSITE"] = "Composite";
    MessageFormatType["CUSTOM_PAYLOAD"] = "CustomPayload";
    MessageFormatType["PLAIN_TEXT"] = "PlainText";
    MessageFormatType["SSML"] = "SSML";
})(MessageFormatType || (MessageFormatType = {}));
export var DialogActionType;
(function (DialogActionType) {
    DialogActionType["CLOSE"] = "Close";
    DialogActionType["CONFIRM_INTENT"] = "ConfirmIntent";
    DialogActionType["DELEGATE"] = "Delegate";
    DialogActionType["ELICIT_INTENT"] = "ElicitIntent";
    DialogActionType["ELICIT_SLOT"] = "ElicitSlot";
})(DialogActionType || (DialogActionType = {}));
export var ConfirmationStatus;
(function (ConfirmationStatus) {
    ConfirmationStatus["CONFIRMED"] = "Confirmed";
    ConfirmationStatus["DENIED"] = "Denied";
    ConfirmationStatus["NONE"] = "None";
})(ConfirmationStatus || (ConfirmationStatus = {}));
var BadGatewayException = (function (_super) {
    __extends(BadGatewayException, _super);
    function BadGatewayException(opts) {
        var _this = _super.call(this, __assign({ name: "BadGatewayException", $fault: "server" }, opts)) || this;
        _this.name = "BadGatewayException";
        _this.$fault = "server";
        Object.setPrototypeOf(_this, BadGatewayException.prototype);
        _this.Message = opts.Message;
        return _this;
    }
    return BadGatewayException;
}(__BaseException));
export { BadGatewayException };
var DependencyFailedException = (function (_super) {
    __extends(DependencyFailedException, _super);
    function DependencyFailedException(opts) {
        var _this = _super.call(this, __assign({ name: "DependencyFailedException", $fault: "client" }, opts)) || this;
        _this.name = "DependencyFailedException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, DependencyFailedException.prototype);
        _this.Message = opts.Message;
        return _this;
    }
    return DependencyFailedException;
}(__BaseException));
export { DependencyFailedException };
var LoopDetectedException = (function (_super) {
    __extends(LoopDetectedException, _super);
    function LoopDetectedException(opts) {
        var _this = _super.call(this, __assign({ name: "LoopDetectedException", $fault: "server" }, opts)) || this;
        _this.name = "LoopDetectedException";
        _this.$fault = "server";
        Object.setPrototypeOf(_this, LoopDetectedException.prototype);
        _this.Message = opts.Message;
        return _this;
    }
    return LoopDetectedException;
}(__BaseException));
export { LoopDetectedException };
var NotAcceptableException = (function (_super) {
    __extends(NotAcceptableException, _super);
    function NotAcceptableException(opts) {
        var _this = _super.call(this, __assign({ name: "NotAcceptableException", $fault: "client" }, opts)) || this;
        _this.name = "NotAcceptableException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, NotAcceptableException.prototype);
        return _this;
    }
    return NotAcceptableException;
}(__BaseException));
export { NotAcceptableException };
export var DialogState;
(function (DialogState) {
    DialogState["CONFIRM_INTENT"] = "ConfirmIntent";
    DialogState["ELICIT_INTENT"] = "ElicitIntent";
    DialogState["ELICIT_SLOT"] = "ElicitSlot";
    DialogState["FAILED"] = "Failed";
    DialogState["FULFILLED"] = "Fulfilled";
    DialogState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
})(DialogState || (DialogState = {}));
var RequestTimeoutException = (function (_super) {
    __extends(RequestTimeoutException, _super);
    function RequestTimeoutException(opts) {
        var _this = _super.call(this, __assign({ name: "RequestTimeoutException", $fault: "client" }, opts)) || this;
        _this.name = "RequestTimeoutException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, RequestTimeoutException.prototype);
        return _this;
    }
    return RequestTimeoutException;
}(__BaseException));
export { RequestTimeoutException };
var UnsupportedMediaTypeException = (function (_super) {
    __extends(UnsupportedMediaTypeException, _super);
    function UnsupportedMediaTypeException(opts) {
        var _this = _super.call(this, __assign({ name: "UnsupportedMediaTypeException", $fault: "client" }, opts)) || this;
        _this.name = "UnsupportedMediaTypeException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, UnsupportedMediaTypeException.prototype);
        return _this;
    }
    return UnsupportedMediaTypeException;
}(__BaseException));
export { UnsupportedMediaTypeException };
export var ContentType;
(function (ContentType) {
    ContentType["GENERIC"] = "application/vnd.amazonaws.card.generic";
})(ContentType || (ContentType = {}));
export var ActiveContextTimeToLiveFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ActiveContextFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.parameters && { parameters: SENSITIVE_STRING }))); };
export var DeleteSessionRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeleteSessionResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetSessionRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DialogActionFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.slots && { slots: SENSITIVE_STRING })), (obj.message && { message: SENSITIVE_STRING }))); };
export var IntentSummaryFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.slots && { slots: SENSITIVE_STRING }))); };
export var GetSessionResponseFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.recentIntentSummaryView && {
    recentIntentSummaryView: obj.recentIntentSummaryView.map(function (item) { return IntentSummaryFilterSensitiveLog(item); }),
})), (obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING })), (obj.dialogAction && { dialogAction: DialogActionFilterSensitiveLog(obj.dialogAction) })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
export var PostContentRequestFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING })), (obj.requestAttributes && { requestAttributes: SENSITIVE_STRING })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
export var PostContentResponseFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.message && { message: SENSITIVE_STRING })), (obj.encodedMessage && { encodedMessage: SENSITIVE_STRING })), (obj.encodedInputTranscript && { encodedInputTranscript: SENSITIVE_STRING })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
export var PostTextRequestFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING })), (obj.requestAttributes && { requestAttributes: SENSITIVE_STRING })), (obj.inputText && { inputText: SENSITIVE_STRING })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
export var IntentConfidenceFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var PredictedIntentFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.slots && { slots: SENSITIVE_STRING }))); };
export var ButtonFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GenericAttachmentFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ResponseCardFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var SentimentResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var PostTextResponseFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign(__assign({}, obj), (obj.alternativeIntents && {
    alternativeIntents: obj.alternativeIntents.map(function (item) { return PredictedIntentFilterSensitiveLog(item); }),
})), (obj.slots && { slots: SENSITIVE_STRING })), (obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING })), (obj.message && { message: SENSITIVE_STRING })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
export var PutSessionRequestFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.sessionAttributes && { sessionAttributes: SENSITIVE_STRING })), (obj.dialogAction && { dialogAction: DialogActionFilterSensitiveLog(obj.dialogAction) })), (obj.recentIntentSummaryView && {
    recentIntentSummaryView: obj.recentIntentSummaryView.map(function (item) { return IntentSummaryFilterSensitiveLog(item); }),
})), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
export var PutSessionResponseFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.message && { message: SENSITIVE_STRING })), (obj.encodedMessage && { encodedMessage: SENSITIVE_STRING })), (obj.activeContexts && { activeContexts: SENSITIVE_STRING }))); };
