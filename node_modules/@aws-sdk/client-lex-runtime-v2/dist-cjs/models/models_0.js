"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeHintsFilterSensitiveLog = exports.RuntimeHintDetailsFilterSensitiveLog = exports.DialogActionFilterSensitiveLog = exports.ElicitSubSlotFilterSensitiveLog = exports.TranscriptEventFilterSensitiveLog = exports.TextResponseEventFilterSensitiveLog = exports.PlaybackInterruptionEventFilterSensitiveLog = exports.HeartbeatEventFilterSensitiveLog = exports.TextInputEventFilterSensitiveLog = exports.PlaybackCompletionEventFilterSensitiveLog = exports.DTMFInputEventFilterSensitiveLog = exports.DisconnectionEventFilterSensitiveLog = exports.RecognizeUtteranceResponseFilterSensitiveLog = exports.RecognizeUtteranceRequestFilterSensitiveLog = exports.PutSessionResponseFilterSensitiveLog = exports.RuntimeHintValueFilterSensitiveLog = exports.MessageFilterSensitiveLog = exports.ImageResponseCardFilterSensitiveLog = exports.ButtonFilterSensitiveLog = exports.SentimentResponseFilterSensitiveLog = exports.SentimentScoreFilterSensitiveLog = exports.ConfidenceScoreFilterSensitiveLog = exports.ValueFilterSensitiveLog = exports.GetSessionRequestFilterSensitiveLog = exports.DeleteSessionResponseFilterSensitiveLog = exports.DeleteSessionRequestFilterSensitiveLog = exports.AudioResponseEventFilterSensitiveLog = exports.AudioInputEventFilterSensitiveLog = exports.ActiveContextFilterSensitiveLog = exports.ActiveContextTimeToLiveFilterSensitiveLog = exports.StartConversationResponseEventStream = exports.StartConversationRequestEventStream = exports.PlaybackInterruptionReason = exports.InputMode = exports.ConversationMode = exports.DependencyFailedException = exports.BadGatewayException = exports.DialogActionType = exports.StyleType = exports.MessageContentType = exports.SentimentType = exports.IntentState = exports.Shape = exports.ConfirmationState = exports.ValidationException = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.AccessDeniedException = void 0;
exports.StartConversationResponseFilterSensitiveLog = exports.StartConversationResponseEventStreamFilterSensitiveLog = exports.RecognizeTextResponseFilterSensitiveLog = exports.IntentResultEventFilterSensitiveLog = exports.GetSessionResponseFilterSensitiveLog = exports.StartConversationRequestFilterSensitiveLog = exports.StartConversationRequestEventStreamFilterSensitiveLog = exports.RecognizeTextRequestFilterSensitiveLog = exports.PutSessionRequestFilterSensitiveLog = exports.ConfigurationEventFilterSensitiveLog = exports.SessionStateFilterSensitiveLog = exports.InterpretationFilterSensitiveLog = exports.IntentFilterSensitiveLog = exports.SlotFilterSensitiveLog = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
const LexRuntimeV2ServiceException_1 = require("./LexRuntimeV2ServiceException");
class AccessDeniedException extends LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
    }
}
exports.AccessDeniedException = AccessDeniedException;
class ConflictException extends LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException {
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
class InternalServerException extends LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException {
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerException.prototype);
    }
}
exports.InternalServerException = InternalServerException;
class ResourceNotFoundException extends LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class ThrottlingException extends LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException {
    constructor(opts) {
        super({
            name: "ThrottlingException",
            $fault: "client",
            ...opts,
        });
        this.name = "ThrottlingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ThrottlingException.prototype);
    }
}
exports.ThrottlingException = ThrottlingException;
class ValidationException extends LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException {
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ValidationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ValidationException.prototype);
    }
}
exports.ValidationException = ValidationException;
var ConfirmationState;
(function (ConfirmationState) {
    ConfirmationState["CONFIRMED"] = "Confirmed";
    ConfirmationState["DENIED"] = "Denied";
    ConfirmationState["NONE"] = "None";
})(ConfirmationState = exports.ConfirmationState || (exports.ConfirmationState = {}));
var Shape;
(function (Shape) {
    Shape["COMPOSITE"] = "Composite";
    Shape["LIST"] = "List";
    Shape["SCALAR"] = "Scalar";
})(Shape = exports.Shape || (exports.Shape = {}));
var IntentState;
(function (IntentState) {
    IntentState["FAILED"] = "Failed";
    IntentState["FULFILLED"] = "Fulfilled";
    IntentState["FULFILLMENT_IN_PROGRESS"] = "FulfillmentInProgress";
    IntentState["IN_PROGRESS"] = "InProgress";
    IntentState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
    IntentState["WAITING"] = "Waiting";
})(IntentState = exports.IntentState || (exports.IntentState = {}));
var SentimentType;
(function (SentimentType) {
    SentimentType["MIXED"] = "MIXED";
    SentimentType["NEGATIVE"] = "NEGATIVE";
    SentimentType["NEUTRAL"] = "NEUTRAL";
    SentimentType["POSITIVE"] = "POSITIVE";
})(SentimentType = exports.SentimentType || (exports.SentimentType = {}));
var MessageContentType;
(function (MessageContentType) {
    MessageContentType["CUSTOM_PAYLOAD"] = "CustomPayload";
    MessageContentType["IMAGE_RESPONSE_CARD"] = "ImageResponseCard";
    MessageContentType["PLAIN_TEXT"] = "PlainText";
    MessageContentType["SSML"] = "SSML";
})(MessageContentType = exports.MessageContentType || (exports.MessageContentType = {}));
var StyleType;
(function (StyleType) {
    StyleType["DEFAULT"] = "Default";
    StyleType["SPELL_BY_LETTER"] = "SpellByLetter";
    StyleType["SPELL_BY_WORD"] = "SpellByWord";
})(StyleType = exports.StyleType || (exports.StyleType = {}));
var DialogActionType;
(function (DialogActionType) {
    DialogActionType["CLOSE"] = "Close";
    DialogActionType["CONFIRM_INTENT"] = "ConfirmIntent";
    DialogActionType["DELEGATE"] = "Delegate";
    DialogActionType["ELICIT_INTENT"] = "ElicitIntent";
    DialogActionType["ELICIT_SLOT"] = "ElicitSlot";
    DialogActionType["NONE"] = "None";
})(DialogActionType = exports.DialogActionType || (exports.DialogActionType = {}));
class BadGatewayException extends LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException {
    constructor(opts) {
        super({
            name: "BadGatewayException",
            $fault: "server",
            ...opts,
        });
        this.name = "BadGatewayException";
        this.$fault = "server";
        Object.setPrototypeOf(this, BadGatewayException.prototype);
    }
}
exports.BadGatewayException = BadGatewayException;
class DependencyFailedException extends LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException {
    constructor(opts) {
        super({
            name: "DependencyFailedException",
            $fault: "client",
            ...opts,
        });
        this.name = "DependencyFailedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, DependencyFailedException.prototype);
    }
}
exports.DependencyFailedException = DependencyFailedException;
var ConversationMode;
(function (ConversationMode) {
    ConversationMode["AUDIO"] = "AUDIO";
    ConversationMode["TEXT"] = "TEXT";
})(ConversationMode = exports.ConversationMode || (exports.ConversationMode = {}));
var InputMode;
(function (InputMode) {
    InputMode["DTMF"] = "DTMF";
    InputMode["SPEECH"] = "Speech";
    InputMode["TEXT"] = "Text";
})(InputMode = exports.InputMode || (exports.InputMode = {}));
var PlaybackInterruptionReason;
(function (PlaybackInterruptionReason) {
    PlaybackInterruptionReason["DTMF_START_DETECTED"] = "DTMF_START_DETECTED";
    PlaybackInterruptionReason["TEXT_DETECTED"] = "TEXT_DETECTED";
    PlaybackInterruptionReason["VOICE_START_DETECTED"] = "VOICE_START_DETECTED";
})(PlaybackInterruptionReason = exports.PlaybackInterruptionReason || (exports.PlaybackInterruptionReason = {}));
var StartConversationRequestEventStream;
(function (StartConversationRequestEventStream) {
    StartConversationRequestEventStream.visit = (value, visitor) => {
        if (value.ConfigurationEvent !== undefined)
            return visitor.ConfigurationEvent(value.ConfigurationEvent);
        if (value.AudioInputEvent !== undefined)
            return visitor.AudioInputEvent(value.AudioInputEvent);
        if (value.DTMFInputEvent !== undefined)
            return visitor.DTMFInputEvent(value.DTMFInputEvent);
        if (value.TextInputEvent !== undefined)
            return visitor.TextInputEvent(value.TextInputEvent);
        if (value.PlaybackCompletionEvent !== undefined)
            return visitor.PlaybackCompletionEvent(value.PlaybackCompletionEvent);
        if (value.DisconnectionEvent !== undefined)
            return visitor.DisconnectionEvent(value.DisconnectionEvent);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(StartConversationRequestEventStream = exports.StartConversationRequestEventStream || (exports.StartConversationRequestEventStream = {}));
var StartConversationResponseEventStream;
(function (StartConversationResponseEventStream) {
    StartConversationResponseEventStream.visit = (value, visitor) => {
        if (value.PlaybackInterruptionEvent !== undefined)
            return visitor.PlaybackInterruptionEvent(value.PlaybackInterruptionEvent);
        if (value.TranscriptEvent !== undefined)
            return visitor.TranscriptEvent(value.TranscriptEvent);
        if (value.IntentResultEvent !== undefined)
            return visitor.IntentResultEvent(value.IntentResultEvent);
        if (value.TextResponseEvent !== undefined)
            return visitor.TextResponseEvent(value.TextResponseEvent);
        if (value.AudioResponseEvent !== undefined)
            return visitor.AudioResponseEvent(value.AudioResponseEvent);
        if (value.HeartbeatEvent !== undefined)
            return visitor.HeartbeatEvent(value.HeartbeatEvent);
        if (value.AccessDeniedException !== undefined)
            return visitor.AccessDeniedException(value.AccessDeniedException);
        if (value.ResourceNotFoundException !== undefined)
            return visitor.ResourceNotFoundException(value.ResourceNotFoundException);
        if (value.ValidationException !== undefined)
            return visitor.ValidationException(value.ValidationException);
        if (value.ThrottlingException !== undefined)
            return visitor.ThrottlingException(value.ThrottlingException);
        if (value.InternalServerException !== undefined)
            return visitor.InternalServerException(value.InternalServerException);
        if (value.ConflictException !== undefined)
            return visitor.ConflictException(value.ConflictException);
        if (value.DependencyFailedException !== undefined)
            return visitor.DependencyFailedException(value.DependencyFailedException);
        if (value.BadGatewayException !== undefined)
            return visitor.BadGatewayException(value.BadGatewayException);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(StartConversationResponseEventStream = exports.StartConversationResponseEventStream || (exports.StartConversationResponseEventStream = {}));
const ActiveContextTimeToLiveFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ActiveContextTimeToLiveFilterSensitiveLog = ActiveContextTimeToLiveFilterSensitiveLog;
const ActiveContextFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.contextAttributes && { contextAttributes: smithy_client_1.SENSITIVE_STRING }),
});
exports.ActiveContextFilterSensitiveLog = ActiveContextFilterSensitiveLog;
const AudioInputEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AudioInputEventFilterSensitiveLog = AudioInputEventFilterSensitiveLog;
const AudioResponseEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AudioResponseEventFilterSensitiveLog = AudioResponseEventFilterSensitiveLog;
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
const ValueFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ValueFilterSensitiveLog = ValueFilterSensitiveLog;
const ConfidenceScoreFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ConfidenceScoreFilterSensitiveLog = ConfidenceScoreFilterSensitiveLog;
const SentimentScoreFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SentimentScoreFilterSensitiveLog = SentimentScoreFilterSensitiveLog;
const SentimentResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SentimentResponseFilterSensitiveLog = SentimentResponseFilterSensitiveLog;
const ButtonFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ButtonFilterSensitiveLog = ButtonFilterSensitiveLog;
const ImageResponseCardFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ImageResponseCardFilterSensitiveLog = ImageResponseCardFilterSensitiveLog;
const MessageFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.content && { content: smithy_client_1.SENSITIVE_STRING }),
});
exports.MessageFilterSensitiveLog = MessageFilterSensitiveLog;
const RuntimeHintValueFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RuntimeHintValueFilterSensitiveLog = RuntimeHintValueFilterSensitiveLog;
const PutSessionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutSessionResponseFilterSensitiveLog = PutSessionResponseFilterSensitiveLog;
const RecognizeUtteranceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.sessionState && { sessionState: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.requestAttributes && { requestAttributes: smithy_client_1.SENSITIVE_STRING }),
});
exports.RecognizeUtteranceRequestFilterSensitiveLog = RecognizeUtteranceRequestFilterSensitiveLog;
const RecognizeUtteranceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RecognizeUtteranceResponseFilterSensitiveLog = RecognizeUtteranceResponseFilterSensitiveLog;
const DisconnectionEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DisconnectionEventFilterSensitiveLog = DisconnectionEventFilterSensitiveLog;
const DTMFInputEventFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.inputCharacter && { inputCharacter: smithy_client_1.SENSITIVE_STRING }),
});
exports.DTMFInputEventFilterSensitiveLog = DTMFInputEventFilterSensitiveLog;
const PlaybackCompletionEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PlaybackCompletionEventFilterSensitiveLog = PlaybackCompletionEventFilterSensitiveLog;
const TextInputEventFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.text && { text: smithy_client_1.SENSITIVE_STRING }),
});
exports.TextInputEventFilterSensitiveLog = TextInputEventFilterSensitiveLog;
const HeartbeatEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.HeartbeatEventFilterSensitiveLog = HeartbeatEventFilterSensitiveLog;
const PlaybackInterruptionEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PlaybackInterruptionEventFilterSensitiveLog = PlaybackInterruptionEventFilterSensitiveLog;
const TextResponseEventFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.messages && { messages: obj.messages.map((item) => (0, exports.MessageFilterSensitiveLog)(item)) }),
});
exports.TextResponseEventFilterSensitiveLog = TextResponseEventFilterSensitiveLog;
const TranscriptEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TranscriptEventFilterSensitiveLog = TranscriptEventFilterSensitiveLog;
const ElicitSubSlotFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ElicitSubSlotFilterSensitiveLog = ElicitSubSlotFilterSensitiveLog;
const DialogActionFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DialogActionFilterSensitiveLog = DialogActionFilterSensitiveLog;
const RuntimeHintDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RuntimeHintDetailsFilterSensitiveLog = RuntimeHintDetailsFilterSensitiveLog;
const RuntimeHintsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RuntimeHintsFilterSensitiveLog = RuntimeHintsFilterSensitiveLog;
const SlotFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SlotFilterSensitiveLog = SlotFilterSensitiveLog;
const IntentFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.IntentFilterSensitiveLog = IntentFilterSensitiveLog;
const InterpretationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.InterpretationFilterSensitiveLog = InterpretationFilterSensitiveLog;
const SessionStateFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.activeContexts && {
        activeContexts: obj.activeContexts.map((item) => (0, exports.ActiveContextFilterSensitiveLog)(item)),
    }),
});
exports.SessionStateFilterSensitiveLog = SessionStateFilterSensitiveLog;
const ConfigurationEventFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.welcomeMessages && { welcomeMessages: obj.welcomeMessages.map((item) => (0, exports.MessageFilterSensitiveLog)(item)) }),
});
exports.ConfigurationEventFilterSensitiveLog = ConfigurationEventFilterSensitiveLog;
const PutSessionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.messages && { messages: obj.messages.map((item) => (0, exports.MessageFilterSensitiveLog)(item)) }),
});
exports.PutSessionRequestFilterSensitiveLog = PutSessionRequestFilterSensitiveLog;
const RecognizeTextRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.text && { text: smithy_client_1.SENSITIVE_STRING }),
});
exports.RecognizeTextRequestFilterSensitiveLog = RecognizeTextRequestFilterSensitiveLog;
const StartConversationRequestEventStreamFilterSensitiveLog = (obj) => {
    if (obj.ConfigurationEvent !== undefined)
        return { ConfigurationEvent: (0, exports.ConfigurationEventFilterSensitiveLog)(obj.ConfigurationEvent) };
    if (obj.AudioInputEvent !== undefined)
        return { AudioInputEvent: (0, exports.AudioInputEventFilterSensitiveLog)(obj.AudioInputEvent) };
    if (obj.DTMFInputEvent !== undefined)
        return { DTMFInputEvent: (0, exports.DTMFInputEventFilterSensitiveLog)(obj.DTMFInputEvent) };
    if (obj.TextInputEvent !== undefined)
        return { TextInputEvent: (0, exports.TextInputEventFilterSensitiveLog)(obj.TextInputEvent) };
    if (obj.PlaybackCompletionEvent !== undefined)
        return { PlaybackCompletionEvent: (0, exports.PlaybackCompletionEventFilterSensitiveLog)(obj.PlaybackCompletionEvent) };
    if (obj.DisconnectionEvent !== undefined)
        return { DisconnectionEvent: (0, exports.DisconnectionEventFilterSensitiveLog)(obj.DisconnectionEvent) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
exports.StartConversationRequestEventStreamFilterSensitiveLog = StartConversationRequestEventStreamFilterSensitiveLog;
const StartConversationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.requestEventStream && { requestEventStream: "STREAMING_CONTENT" }),
});
exports.StartConversationRequestFilterSensitiveLog = StartConversationRequestFilterSensitiveLog;
const GetSessionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.messages && { messages: obj.messages.map((item) => (0, exports.MessageFilterSensitiveLog)(item)) }),
});
exports.GetSessionResponseFilterSensitiveLog = GetSessionResponseFilterSensitiveLog;
const IntentResultEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.IntentResultEventFilterSensitiveLog = IntentResultEventFilterSensitiveLog;
const RecognizeTextResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.messages && { messages: obj.messages.map((item) => (0, exports.MessageFilterSensitiveLog)(item)) }),
});
exports.RecognizeTextResponseFilterSensitiveLog = RecognizeTextResponseFilterSensitiveLog;
const StartConversationResponseEventStreamFilterSensitiveLog = (obj) => {
    if (obj.PlaybackInterruptionEvent !== undefined)
        return { PlaybackInterruptionEvent: (0, exports.PlaybackInterruptionEventFilterSensitiveLog)(obj.PlaybackInterruptionEvent) };
    if (obj.TranscriptEvent !== undefined)
        return { TranscriptEvent: (0, exports.TranscriptEventFilterSensitiveLog)(obj.TranscriptEvent) };
    if (obj.IntentResultEvent !== undefined)
        return { IntentResultEvent: (0, exports.IntentResultEventFilterSensitiveLog)(obj.IntentResultEvent) };
    if (obj.TextResponseEvent !== undefined)
        return { TextResponseEvent: (0, exports.TextResponseEventFilterSensitiveLog)(obj.TextResponseEvent) };
    if (obj.AudioResponseEvent !== undefined)
        return { AudioResponseEvent: (0, exports.AudioResponseEventFilterSensitiveLog)(obj.AudioResponseEvent) };
    if (obj.HeartbeatEvent !== undefined)
        return { HeartbeatEvent: (0, exports.HeartbeatEventFilterSensitiveLog)(obj.HeartbeatEvent) };
    if (obj.AccessDeniedException !== undefined)
        return { AccessDeniedException: obj.AccessDeniedException };
    if (obj.ResourceNotFoundException !== undefined)
        return { ResourceNotFoundException: obj.ResourceNotFoundException };
    if (obj.ValidationException !== undefined)
        return { ValidationException: obj.ValidationException };
    if (obj.ThrottlingException !== undefined)
        return { ThrottlingException: obj.ThrottlingException };
    if (obj.InternalServerException !== undefined)
        return { InternalServerException: obj.InternalServerException };
    if (obj.ConflictException !== undefined)
        return { ConflictException: obj.ConflictException };
    if (obj.DependencyFailedException !== undefined)
        return { DependencyFailedException: obj.DependencyFailedException };
    if (obj.BadGatewayException !== undefined)
        return { BadGatewayException: obj.BadGatewayException };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
exports.StartConversationResponseEventStreamFilterSensitiveLog = StartConversationResponseEventStreamFilterSensitiveLog;
const StartConversationResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.responseEventStream && { responseEventStream: "STREAMING_CONTENT" }),
});
exports.StartConversationResponseFilterSensitiveLog = StartConversationResponseFilterSensitiveLog;
