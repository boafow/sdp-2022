"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutSessionResponseFilterSensitiveLog = exports.PutSessionRequestFilterSensitiveLog = exports.PostTextResponseFilterSensitiveLog = exports.SentimentResponseFilterSensitiveLog = exports.ResponseCardFilterSensitiveLog = exports.GenericAttachmentFilterSensitiveLog = exports.ButtonFilterSensitiveLog = exports.PredictedIntentFilterSensitiveLog = exports.IntentConfidenceFilterSensitiveLog = exports.PostTextRequestFilterSensitiveLog = exports.PostContentResponseFilterSensitiveLog = exports.PostContentRequestFilterSensitiveLog = exports.GetSessionResponseFilterSensitiveLog = exports.IntentSummaryFilterSensitiveLog = exports.DialogActionFilterSensitiveLog = exports.GetSessionRequestFilterSensitiveLog = exports.DeleteSessionResponseFilterSensitiveLog = exports.DeleteSessionRequestFilterSensitiveLog = exports.ActiveContextFilterSensitiveLog = exports.ActiveContextTimeToLiveFilterSensitiveLog = exports.ContentType = exports.UnsupportedMediaTypeException = exports.RequestTimeoutException = exports.DialogState = exports.NotAcceptableException = exports.LoopDetectedException = exports.DependencyFailedException = exports.BadGatewayException = exports.ConfirmationStatus = exports.DialogActionType = exports.MessageFormatType = exports.FulfillmentState = exports.NotFoundException = exports.LimitExceededException = exports.InternalFailureException = exports.ConflictException = exports.BadRequestException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
const LexRuntimeServiceServiceException_1 = require("./LexRuntimeServiceServiceException");
class BadRequestException extends LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException {
    constructor(opts) {
        super({
            name: "BadRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "BadRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, BadRequestException.prototype);
    }
}
exports.BadRequestException = BadRequestException;
class ConflictException extends LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException {
    constructor(opts) {
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConflictException.prototype);
    }
}
exports.ConflictException = ConflictException;
class InternalFailureException extends LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException {
    constructor(opts) {
        super({
            name: "InternalFailureException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalFailureException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalFailureException.prototype);
    }
}
exports.InternalFailureException = InternalFailureException;
class LimitExceededException extends LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
        this.retryAfterSeconds = opts.retryAfterSeconds;
    }
}
exports.LimitExceededException = LimitExceededException;
class NotFoundException extends LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException {
    constructor(opts) {
        super({
            name: "NotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "NotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, NotFoundException.prototype);
    }
}
exports.NotFoundException = NotFoundException;
var FulfillmentState;
(function (FulfillmentState) {
    FulfillmentState["FAILED"] = "Failed";
    FulfillmentState["FULFILLED"] = "Fulfilled";
    FulfillmentState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
})(FulfillmentState = exports.FulfillmentState || (exports.FulfillmentState = {}));
var MessageFormatType;
(function (MessageFormatType) {
    MessageFormatType["COMPOSITE"] = "Composite";
    MessageFormatType["CUSTOM_PAYLOAD"] = "CustomPayload";
    MessageFormatType["PLAIN_TEXT"] = "PlainText";
    MessageFormatType["SSML"] = "SSML";
})(MessageFormatType = exports.MessageFormatType || (exports.MessageFormatType = {}));
var DialogActionType;
(function (DialogActionType) {
    DialogActionType["CLOSE"] = "Close";
    DialogActionType["CONFIRM_INTENT"] = "ConfirmIntent";
    DialogActionType["DELEGATE"] = "Delegate";
    DialogActionType["ELICIT_INTENT"] = "ElicitIntent";
    DialogActionType["ELICIT_SLOT"] = "ElicitSlot";
})(DialogActionType = exports.DialogActionType || (exports.DialogActionType = {}));
var ConfirmationStatus;
(function (ConfirmationStatus) {
    ConfirmationStatus["CONFIRMED"] = "Confirmed";
    ConfirmationStatus["DENIED"] = "Denied";
    ConfirmationStatus["NONE"] = "None";
})(ConfirmationStatus = exports.ConfirmationStatus || (exports.ConfirmationStatus = {}));
class BadGatewayException extends LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException {
    constructor(opts) {
        super({
            name: "BadGatewayException",
            $fault: "server",
            ...opts,
        });
        this.name = "BadGatewayException";
        this.$fault = "server";
        Object.setPrototypeOf(this, BadGatewayException.prototype);
        this.Message = opts.Message;
    }
}
exports.BadGatewayException = BadGatewayException;
class DependencyFailedException extends LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException {
    constructor(opts) {
        super({
            name: "DependencyFailedException",
            $fault: "client",
            ...opts,
        });
        this.name = "DependencyFailedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, DependencyFailedException.prototype);
        this.Message = opts.Message;
    }
}
exports.DependencyFailedException = DependencyFailedException;
class LoopDetectedException extends LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException {
    constructor(opts) {
        super({
            name: "LoopDetectedException",
            $fault: "server",
            ...opts,
        });
        this.name = "LoopDetectedException";
        this.$fault = "server";
        Object.setPrototypeOf(this, LoopDetectedException.prototype);
        this.Message = opts.Message;
    }
}
exports.LoopDetectedException = LoopDetectedException;
class NotAcceptableException extends LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException {
    constructor(opts) {
        super({
            name: "NotAcceptableException",
            $fault: "client",
            ...opts,
        });
        this.name = "NotAcceptableException";
        this.$fault = "client";
        Object.setPrototypeOf(this, NotAcceptableException.prototype);
    }
}
exports.NotAcceptableException = NotAcceptableException;
var DialogState;
(function (DialogState) {
    DialogState["CONFIRM_INTENT"] = "ConfirmIntent";
    DialogState["ELICIT_INTENT"] = "ElicitIntent";
    DialogState["ELICIT_SLOT"] = "ElicitSlot";
    DialogState["FAILED"] = "Failed";
    DialogState["FULFILLED"] = "Fulfilled";
    DialogState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
})(DialogState = exports.DialogState || (exports.DialogState = {}));
class RequestTimeoutException extends LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException {
    constructor(opts) {
        super({
            name: "RequestTimeoutException",
            $fault: "client",
            ...opts,
        });
        this.name = "RequestTimeoutException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RequestTimeoutException.prototype);
    }
}
exports.RequestTimeoutException = RequestTimeoutException;
class UnsupportedMediaTypeException extends LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedMediaTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedMediaTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedMediaTypeException.prototype);
    }
}
exports.UnsupportedMediaTypeException = UnsupportedMediaTypeException;
var ContentType;
(function (ContentType) {
    ContentType["GENERIC"] = "application/vnd.amazonaws.card.generic";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
const ActiveContextTimeToLiveFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ActiveContextTimeToLiveFilterSensitiveLog = ActiveContextTimeToLiveFilterSensitiveLog;
const ActiveContextFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.parameters && { parameters: smithy_client_1.SENSITIVE_STRING }),
});
exports.ActiveContextFilterSensitiveLog = ActiveContextFilterSensitiveLog;
const DeleteSessionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteSessionRequestFilterSensitiveLog = DeleteSessionRequestFilterSensitiveLog;
const DeleteSessionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteSessionResponseFilterSensitiveLog = DeleteSessionResponseFilterSensitiveLog;
const GetSessionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetSessionRequestFilterSensitiveLog = GetSessionRequestFilterSensitiveLog;
const DialogActionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.slots && { slots: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.message && { message: smithy_client_1.SENSITIVE_STRING }),
});
exports.DialogActionFilterSensitiveLog = DialogActionFilterSensitiveLog;
const IntentSummaryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.slots && { slots: smithy_client_1.SENSITIVE_STRING }),
});
exports.IntentSummaryFilterSensitiveLog = IntentSummaryFilterSensitiveLog;
const GetSessionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.recentIntentSummaryView && {
        recentIntentSummaryView: obj.recentIntentSummaryView.map((item) => (0, exports.IntentSummaryFilterSensitiveLog)(item)),
    }),
    ...(obj.sessionAttributes && { sessionAttributes: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.dialogAction && { dialogAction: (0, exports.DialogActionFilterSensitiveLog)(obj.dialogAction) }),
    ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
});
exports.GetSessionResponseFilterSensitiveLog = GetSessionResponseFilterSensitiveLog;
const PostContentRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.sessionAttributes && { sessionAttributes: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.requestAttributes && { requestAttributes: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
});
exports.PostContentRequestFilterSensitiveLog = PostContentRequestFilterSensitiveLog;
const PostContentResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.message && { message: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.encodedMessage && { encodedMessage: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.encodedInputTranscript && { encodedInputTranscript: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
});
exports.PostContentResponseFilterSensitiveLog = PostContentResponseFilterSensitiveLog;
const PostTextRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.sessionAttributes && { sessionAttributes: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.requestAttributes && { requestAttributes: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.inputText && { inputText: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
});
exports.PostTextRequestFilterSensitiveLog = PostTextRequestFilterSensitiveLog;
const IntentConfidenceFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.IntentConfidenceFilterSensitiveLog = IntentConfidenceFilterSensitiveLog;
const PredictedIntentFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.slots && { slots: smithy_client_1.SENSITIVE_STRING }),
});
exports.PredictedIntentFilterSensitiveLog = PredictedIntentFilterSensitiveLog;
const ButtonFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ButtonFilterSensitiveLog = ButtonFilterSensitiveLog;
const GenericAttachmentFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GenericAttachmentFilterSensitiveLog = GenericAttachmentFilterSensitiveLog;
const ResponseCardFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ResponseCardFilterSensitiveLog = ResponseCardFilterSensitiveLog;
const SentimentResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SentimentResponseFilterSensitiveLog = SentimentResponseFilterSensitiveLog;
const PostTextResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.alternativeIntents && {
        alternativeIntents: obj.alternativeIntents.map((item) => (0, exports.PredictedIntentFilterSensitiveLog)(item)),
    }),
    ...(obj.slots && { slots: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.sessionAttributes && { sessionAttributes: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.message && { message: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
});
exports.PostTextResponseFilterSensitiveLog = PostTextResponseFilterSensitiveLog;
const PutSessionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.sessionAttributes && { sessionAttributes: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.dialogAction && { dialogAction: (0, exports.DialogActionFilterSensitiveLog)(obj.dialogAction) }),
    ...(obj.recentIntentSummaryView && {
        recentIntentSummaryView: obj.recentIntentSummaryView.map((item) => (0, exports.IntentSummaryFilterSensitiveLog)(item)),
    }),
    ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
});
exports.PutSessionRequestFilterSensitiveLog = PutSessionRequestFilterSensitiveLog;
const PutSessionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.message && { message: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.encodedMessage && { encodedMessage: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.activeContexts && { activeContexts: smithy_client_1.SENSITIVE_STRING }),
});
exports.PutSessionResponseFilterSensitiveLog = PutSessionResponseFilterSensitiveLog;
