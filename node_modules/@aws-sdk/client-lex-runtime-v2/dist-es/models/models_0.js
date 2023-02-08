import { __assign, __extends } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { LexRuntimeV2ServiceException as __BaseException } from "./LexRuntimeV2ServiceException";
var AccessDeniedException = (function (_super) {
    __extends(AccessDeniedException, _super);
    function AccessDeniedException(opts) {
        var _this = _super.call(this, __assign({ name: "AccessDeniedException", $fault: "client" }, opts)) || this;
        _this.name = "AccessDeniedException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, AccessDeniedException.prototype);
        return _this;
    }
    return AccessDeniedException;
}(__BaseException));
export { AccessDeniedException };
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
var InternalServerException = (function (_super) {
    __extends(InternalServerException, _super);
    function InternalServerException(opts) {
        var _this = _super.call(this, __assign({ name: "InternalServerException", $fault: "server" }, opts)) || this;
        _this.name = "InternalServerException";
        _this.$fault = "server";
        Object.setPrototypeOf(_this, InternalServerException.prototype);
        return _this;
    }
    return InternalServerException;
}(__BaseException));
export { InternalServerException };
var ResourceNotFoundException = (function (_super) {
    __extends(ResourceNotFoundException, _super);
    function ResourceNotFoundException(opts) {
        var _this = _super.call(this, __assign({ name: "ResourceNotFoundException", $fault: "client" }, opts)) || this;
        _this.name = "ResourceNotFoundException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, ResourceNotFoundException.prototype);
        return _this;
    }
    return ResourceNotFoundException;
}(__BaseException));
export { ResourceNotFoundException };
var ThrottlingException = (function (_super) {
    __extends(ThrottlingException, _super);
    function ThrottlingException(opts) {
        var _this = _super.call(this, __assign({ name: "ThrottlingException", $fault: "client" }, opts)) || this;
        _this.name = "ThrottlingException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, ThrottlingException.prototype);
        return _this;
    }
    return ThrottlingException;
}(__BaseException));
export { ThrottlingException };
var ValidationException = (function (_super) {
    __extends(ValidationException, _super);
    function ValidationException(opts) {
        var _this = _super.call(this, __assign({ name: "ValidationException", $fault: "client" }, opts)) || this;
        _this.name = "ValidationException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, ValidationException.prototype);
        return _this;
    }
    return ValidationException;
}(__BaseException));
export { ValidationException };
export var ConfirmationState;
(function (ConfirmationState) {
    ConfirmationState["CONFIRMED"] = "Confirmed";
    ConfirmationState["DENIED"] = "Denied";
    ConfirmationState["NONE"] = "None";
})(ConfirmationState || (ConfirmationState = {}));
export var Shape;
(function (Shape) {
    Shape["COMPOSITE"] = "Composite";
    Shape["LIST"] = "List";
    Shape["SCALAR"] = "Scalar";
})(Shape || (Shape = {}));
export var IntentState;
(function (IntentState) {
    IntentState["FAILED"] = "Failed";
    IntentState["FULFILLED"] = "Fulfilled";
    IntentState["FULFILLMENT_IN_PROGRESS"] = "FulfillmentInProgress";
    IntentState["IN_PROGRESS"] = "InProgress";
    IntentState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
    IntentState["WAITING"] = "Waiting";
})(IntentState || (IntentState = {}));
export var SentimentType;
(function (SentimentType) {
    SentimentType["MIXED"] = "MIXED";
    SentimentType["NEGATIVE"] = "NEGATIVE";
    SentimentType["NEUTRAL"] = "NEUTRAL";
    SentimentType["POSITIVE"] = "POSITIVE";
})(SentimentType || (SentimentType = {}));
export var MessageContentType;
(function (MessageContentType) {
    MessageContentType["CUSTOM_PAYLOAD"] = "CustomPayload";
    MessageContentType["IMAGE_RESPONSE_CARD"] = "ImageResponseCard";
    MessageContentType["PLAIN_TEXT"] = "PlainText";
    MessageContentType["SSML"] = "SSML";
})(MessageContentType || (MessageContentType = {}));
export var StyleType;
(function (StyleType) {
    StyleType["DEFAULT"] = "Default";
    StyleType["SPELL_BY_LETTER"] = "SpellByLetter";
    StyleType["SPELL_BY_WORD"] = "SpellByWord";
})(StyleType || (StyleType = {}));
export var DialogActionType;
(function (DialogActionType) {
    DialogActionType["CLOSE"] = "Close";
    DialogActionType["CONFIRM_INTENT"] = "ConfirmIntent";
    DialogActionType["DELEGATE"] = "Delegate";
    DialogActionType["ELICIT_INTENT"] = "ElicitIntent";
    DialogActionType["ELICIT_SLOT"] = "ElicitSlot";
    DialogActionType["NONE"] = "None";
})(DialogActionType || (DialogActionType = {}));
var BadGatewayException = (function (_super) {
    __extends(BadGatewayException, _super);
    function BadGatewayException(opts) {
        var _this = _super.call(this, __assign({ name: "BadGatewayException", $fault: "server" }, opts)) || this;
        _this.name = "BadGatewayException";
        _this.$fault = "server";
        Object.setPrototypeOf(_this, BadGatewayException.prototype);
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
        return _this;
    }
    return DependencyFailedException;
}(__BaseException));
export { DependencyFailedException };
export var ConversationMode;
(function (ConversationMode) {
    ConversationMode["AUDIO"] = "AUDIO";
    ConversationMode["TEXT"] = "TEXT";
})(ConversationMode || (ConversationMode = {}));
export var InputMode;
(function (InputMode) {
    InputMode["DTMF"] = "DTMF";
    InputMode["SPEECH"] = "Speech";
    InputMode["TEXT"] = "Text";
})(InputMode || (InputMode = {}));
export var PlaybackInterruptionReason;
(function (PlaybackInterruptionReason) {
    PlaybackInterruptionReason["DTMF_START_DETECTED"] = "DTMF_START_DETECTED";
    PlaybackInterruptionReason["TEXT_DETECTED"] = "TEXT_DETECTED";
    PlaybackInterruptionReason["VOICE_START_DETECTED"] = "VOICE_START_DETECTED";
})(PlaybackInterruptionReason || (PlaybackInterruptionReason = {}));
export var StartConversationRequestEventStream;
(function (StartConversationRequestEventStream) {
    StartConversationRequestEventStream.visit = function (value, visitor) {
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
})(StartConversationRequestEventStream || (StartConversationRequestEventStream = {}));
export var StartConversationResponseEventStream;
(function (StartConversationResponseEventStream) {
    StartConversationResponseEventStream.visit = function (value, visitor) {
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
})(StartConversationResponseEventStream || (StartConversationResponseEventStream = {}));
export var ActiveContextTimeToLiveFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ActiveContextFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.contextAttributes && { contextAttributes: SENSITIVE_STRING }))); };
export var AudioInputEventFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var AudioResponseEventFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeleteSessionRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeleteSessionResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetSessionRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ValueFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ConfidenceScoreFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var SentimentScoreFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var SentimentResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ButtonFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ImageResponseCardFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var MessageFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.content && { content: SENSITIVE_STRING }))); };
export var RuntimeHintValueFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var PutSessionResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var RecognizeUtteranceRequestFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.sessionState && { sessionState: SENSITIVE_STRING })), (obj.requestAttributes && { requestAttributes: SENSITIVE_STRING }))); };
export var RecognizeUtteranceResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DisconnectionEventFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DTMFInputEventFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.inputCharacter && { inputCharacter: SENSITIVE_STRING }))); };
export var PlaybackCompletionEventFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var TextInputEventFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.text && { text: SENSITIVE_STRING }))); };
export var HeartbeatEventFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var PlaybackInterruptionEventFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var TextResponseEventFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.messages && { messages: obj.messages.map(function (item) { return MessageFilterSensitiveLog(item); }) }))); };
export var TranscriptEventFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ElicitSubSlotFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DialogActionFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var RuntimeHintDetailsFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var RuntimeHintsFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var SlotFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var IntentFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var InterpretationFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var SessionStateFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.activeContexts && {
    activeContexts: obj.activeContexts.map(function (item) { return ActiveContextFilterSensitiveLog(item); }),
}))); };
export var ConfigurationEventFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.welcomeMessages && { welcomeMessages: obj.welcomeMessages.map(function (item) { return MessageFilterSensitiveLog(item); }) }))); };
export var PutSessionRequestFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.messages && { messages: obj.messages.map(function (item) { return MessageFilterSensitiveLog(item); }) }))); };
export var RecognizeTextRequestFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.text && { text: SENSITIVE_STRING }))); };
export var StartConversationRequestEventStreamFilterSensitiveLog = function (obj) {
    var _a;
    if (obj.ConfigurationEvent !== undefined)
        return { ConfigurationEvent: ConfigurationEventFilterSensitiveLog(obj.ConfigurationEvent) };
    if (obj.AudioInputEvent !== undefined)
        return { AudioInputEvent: AudioInputEventFilterSensitiveLog(obj.AudioInputEvent) };
    if (obj.DTMFInputEvent !== undefined)
        return { DTMFInputEvent: DTMFInputEventFilterSensitiveLog(obj.DTMFInputEvent) };
    if (obj.TextInputEvent !== undefined)
        return { TextInputEvent: TextInputEventFilterSensitiveLog(obj.TextInputEvent) };
    if (obj.PlaybackCompletionEvent !== undefined)
        return { PlaybackCompletionEvent: PlaybackCompletionEventFilterSensitiveLog(obj.PlaybackCompletionEvent) };
    if (obj.DisconnectionEvent !== undefined)
        return { DisconnectionEvent: DisconnectionEventFilterSensitiveLog(obj.DisconnectionEvent) };
    if (obj.$unknown !== undefined)
        return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
};
export var StartConversationRequestFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.requestEventStream && { requestEventStream: "STREAMING_CONTENT" }))); };
export var GetSessionResponseFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.messages && { messages: obj.messages.map(function (item) { return MessageFilterSensitiveLog(item); }) }))); };
export var IntentResultEventFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var RecognizeTextResponseFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.messages && { messages: obj.messages.map(function (item) { return MessageFilterSensitiveLog(item); }) }))); };
export var StartConversationResponseEventStreamFilterSensitiveLog = function (obj) {
    var _a;
    if (obj.PlaybackInterruptionEvent !== undefined)
        return { PlaybackInterruptionEvent: PlaybackInterruptionEventFilterSensitiveLog(obj.PlaybackInterruptionEvent) };
    if (obj.TranscriptEvent !== undefined)
        return { TranscriptEvent: TranscriptEventFilterSensitiveLog(obj.TranscriptEvent) };
    if (obj.IntentResultEvent !== undefined)
        return { IntentResultEvent: IntentResultEventFilterSensitiveLog(obj.IntentResultEvent) };
    if (obj.TextResponseEvent !== undefined)
        return { TextResponseEvent: TextResponseEventFilterSensitiveLog(obj.TextResponseEvent) };
    if (obj.AudioResponseEvent !== undefined)
        return { AudioResponseEvent: AudioResponseEventFilterSensitiveLog(obj.AudioResponseEvent) };
    if (obj.HeartbeatEvent !== undefined)
        return { HeartbeatEvent: HeartbeatEventFilterSensitiveLog(obj.HeartbeatEvent) };
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
        return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
};
export var StartConversationResponseFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.responseEventStream && { responseEventStream: "STREAMING_CONTENT" }))); };
