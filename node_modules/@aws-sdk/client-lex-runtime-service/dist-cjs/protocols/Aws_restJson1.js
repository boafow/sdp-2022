"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1PutSessionCommand = exports.deserializeAws_restJson1PostTextCommand = exports.deserializeAws_restJson1PostContentCommand = exports.deserializeAws_restJson1GetSessionCommand = exports.deserializeAws_restJson1DeleteSessionCommand = exports.serializeAws_restJson1PutSessionCommand = exports.serializeAws_restJson1PostTextCommand = exports.serializeAws_restJson1PostContentCommand = exports.serializeAws_restJson1GetSessionCommand = exports.serializeAws_restJson1DeleteSessionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const LexRuntimeServiceServiceException_1 = require("../models/LexRuntimeServiceServiceException");
const models_0_1 = require("../models/models_0");
const serializeAws_restJson1DeleteSessionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botName", () => input.botName, "{botName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botAlias", () => input.botAlias, "{botAlias}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "userId", () => input.userId, "{userId}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteSessionCommand = serializeAws_restJson1DeleteSessionCommand;
const serializeAws_restJson1GetSessionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botName", () => input.botName, "{botName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botAlias", () => input.botAlias, "{botAlias}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "userId", () => input.userId, "{userId}", false);
    const query = map({
        checkpointLabelFilter: [, input.checkpointLabelFilter],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetSessionCommand = serializeAws_restJson1GetSessionCommand;
const serializeAws_restJson1PostContentCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
        "content-type": input.contentType || "application/octet-stream",
        "x-amz-lex-session-attributes": [
            () => isSerializableHeaderValue(input.sessionAttributes),
            () => context.base64Encoder(Buffer.from(smithy_client_1.LazyJsonString.fromObject(input.sessionAttributes))),
        ],
        "x-amz-lex-request-attributes": [
            () => isSerializableHeaderValue(input.requestAttributes),
            () => context.base64Encoder(Buffer.from(smithy_client_1.LazyJsonString.fromObject(input.requestAttributes))),
        ],
        accept: input.accept,
        "x-amz-lex-active-contexts": [
            () => isSerializableHeaderValue(input.activeContexts),
            () => context.base64Encoder(Buffer.from(smithy_client_1.LazyJsonString.fromObject(input.activeContexts))),
        ],
    });
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/bot/{botName}/alias/{botAlias}/user/{userId}/content";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botName", () => input.botName, "{botName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botAlias", () => input.botAlias, "{botAlias}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "userId", () => input.userId, "{userId}", false);
    let body;
    if (input.inputStream !== undefined) {
        body = input.inputStream;
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PostContentCommand = serializeAws_restJson1PostContentCommand;
const serializeAws_restJson1PostTextCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/bot/{botName}/alias/{botAlias}/user/{userId}/text";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botName", () => input.botName, "{botName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botAlias", () => input.botAlias, "{botAlias}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "userId", () => input.userId, "{userId}", false);
    let body;
    body = JSON.stringify({
        ...(input.activeContexts != null && {
            activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
        }),
        ...(input.inputText != null && { inputText: input.inputText }),
        ...(input.requestAttributes != null && {
            requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
        }),
        ...(input.sessionAttributes != null && {
            sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
        }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PostTextCommand = serializeAws_restJson1PostTextCommand;
const serializeAws_restJson1PutSessionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/json",
        accept: input.accept,
    });
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botName", () => input.botName, "{botName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botAlias", () => input.botAlias, "{botAlias}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "userId", () => input.userId, "{userId}", false);
    let body;
    body = JSON.stringify({
        ...(input.activeContexts != null && {
            activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
        }),
        ...(input.dialogAction != null && {
            dialogAction: serializeAws_restJson1DialogAction(input.dialogAction, context),
        }),
        ...(input.recentIntentSummaryView != null && {
            recentIntentSummaryView: serializeAws_restJson1IntentSummaryList(input.recentIntentSummaryView, context),
        }),
        ...(input.sessionAttributes != null && {
            sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
        }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutSessionCommand = serializeAws_restJson1PutSessionCommand;
const deserializeAws_restJson1DeleteSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSessionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.botAlias != null) {
        contents.botAlias = (0, smithy_client_1.expectString)(data.botAlias);
    }
    if (data.botName != null) {
        contents.botName = (0, smithy_client_1.expectString)(data.botName);
    }
    if (data.sessionId != null) {
        contents.sessionId = (0, smithy_client_1.expectString)(data.sessionId);
    }
    if (data.userId != null) {
        contents.userId = (0, smithy_client_1.expectString)(data.userId);
    }
    return contents;
};
exports.deserializeAws_restJson1DeleteSessionCommand = deserializeAws_restJson1DeleteSessionCommand;
const deserializeAws_restJson1DeleteSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lexruntimeservice#BadRequestException":
            throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.lexruntimeservice#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalFailureException":
        case "com.amazonaws.lexruntimeservice#InternalFailureException":
            throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.lexruntimeservice#LimitExceededException":
            throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
        case "NotFoundException":
        case "com.amazonaws.lexruntimeservice#NotFoundException":
            throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1GetSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSessionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.activeContexts != null) {
        contents.activeContexts = deserializeAws_restJson1ActiveContextsList(data.activeContexts, context);
    }
    if (data.dialogAction != null) {
        contents.dialogAction = deserializeAws_restJson1DialogAction(data.dialogAction, context);
    }
    if (data.recentIntentSummaryView != null) {
        contents.recentIntentSummaryView = deserializeAws_restJson1IntentSummaryList(data.recentIntentSummaryView, context);
    }
    if (data.sessionAttributes != null) {
        contents.sessionAttributes = deserializeAws_restJson1StringMap(data.sessionAttributes, context);
    }
    if (data.sessionId != null) {
        contents.sessionId = (0, smithy_client_1.expectString)(data.sessionId);
    }
    return contents;
};
exports.deserializeAws_restJson1GetSessionCommand = deserializeAws_restJson1GetSessionCommand;
const deserializeAws_restJson1GetSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.lexruntimeservice#BadRequestException":
            throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
        case "InternalFailureException":
        case "com.amazonaws.lexruntimeservice#InternalFailureException":
            throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.lexruntimeservice#LimitExceededException":
            throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
        case "NotFoundException":
        case "com.amazonaws.lexruntimeservice#NotFoundException":
            throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1PostContentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PostContentCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        contentType: [, output.headers["content-type"]],
        intentName: [, output.headers["x-amz-lex-intent-name"]],
        nluIntentConfidence: [
            () => void 0 !== output.headers["x-amz-lex-nlu-intent-confidence"],
            () => new smithy_client_1.LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-nlu-intent-confidence"])).toString("utf8")),
        ],
        alternativeIntents: [
            () => void 0 !== output.headers["x-amz-lex-alternative-intents"],
            () => new smithy_client_1.LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-alternative-intents"])).toString("utf8")),
        ],
        slots: [
            () => void 0 !== output.headers["x-amz-lex-slots"],
            () => new smithy_client_1.LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-slots"])).toString("utf8")),
        ],
        sessionAttributes: [
            () => void 0 !== output.headers["x-amz-lex-session-attributes"],
            () => new smithy_client_1.LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-session-attributes"])).toString("utf8")),
        ],
        sentimentResponse: [, output.headers["x-amz-lex-sentiment"]],
        message: [, output.headers["x-amz-lex-message"]],
        encodedMessage: [, output.headers["x-amz-lex-encoded-message"]],
        messageFormat: [, output.headers["x-amz-lex-message-format"]],
        dialogState: [, output.headers["x-amz-lex-dialog-state"]],
        slotToElicit: [, output.headers["x-amz-lex-slot-to-elicit"]],
        inputTranscript: [, output.headers["x-amz-lex-input-transcript"]],
        encodedInputTranscript: [, output.headers["x-amz-lex-encoded-input-transcript"]],
        botVersion: [, output.headers["x-amz-lex-bot-version"]],
        sessionId: [, output.headers["x-amz-lex-session-id"]],
        activeContexts: [
            () => void 0 !== output.headers["x-amz-lex-active-contexts"],
            () => new smithy_client_1.LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-active-contexts"])).toString("utf8")),
        ],
    });
    const data = output.body;
    contents.audioStream = data;
    return contents;
};
exports.deserializeAws_restJson1PostContentCommand = deserializeAws_restJson1PostContentCommand;
const deserializeAws_restJson1PostContentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.lexruntimeservice#BadGatewayException":
            throw await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context);
        case "BadRequestException":
        case "com.amazonaws.lexruntimeservice#BadRequestException":
            throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.lexruntimeservice#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "DependencyFailedException":
        case "com.amazonaws.lexruntimeservice#DependencyFailedException":
            throw await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context);
        case "InternalFailureException":
        case "com.amazonaws.lexruntimeservice#InternalFailureException":
            throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.lexruntimeservice#LimitExceededException":
            throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
        case "LoopDetectedException":
        case "com.amazonaws.lexruntimeservice#LoopDetectedException":
            throw await deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context);
        case "NotAcceptableException":
        case "com.amazonaws.lexruntimeservice#NotAcceptableException":
            throw await deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context);
        case "NotFoundException":
        case "com.amazonaws.lexruntimeservice#NotFoundException":
            throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
        case "RequestTimeoutException":
        case "com.amazonaws.lexruntimeservice#RequestTimeoutException":
            throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
        case "UnsupportedMediaTypeException":
        case "com.amazonaws.lexruntimeservice#UnsupportedMediaTypeException":
            throw await deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1PostTextCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PostTextCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.activeContexts != null) {
        contents.activeContexts = deserializeAws_restJson1ActiveContextsList(data.activeContexts, context);
    }
    if (data.alternativeIntents != null) {
        contents.alternativeIntents = deserializeAws_restJson1IntentList(data.alternativeIntents, context);
    }
    if (data.botVersion != null) {
        contents.botVersion = (0, smithy_client_1.expectString)(data.botVersion);
    }
    if (data.dialogState != null) {
        contents.dialogState = (0, smithy_client_1.expectString)(data.dialogState);
    }
    if (data.intentName != null) {
        contents.intentName = (0, smithy_client_1.expectString)(data.intentName);
    }
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    if (data.messageFormat != null) {
        contents.messageFormat = (0, smithy_client_1.expectString)(data.messageFormat);
    }
    if (data.nluIntentConfidence != null) {
        contents.nluIntentConfidence = deserializeAws_restJson1IntentConfidence(data.nluIntentConfidence, context);
    }
    if (data.responseCard != null) {
        contents.responseCard = deserializeAws_restJson1ResponseCard(data.responseCard, context);
    }
    if (data.sentimentResponse != null) {
        contents.sentimentResponse = deserializeAws_restJson1SentimentResponse(data.sentimentResponse, context);
    }
    if (data.sessionAttributes != null) {
        contents.sessionAttributes = deserializeAws_restJson1StringMap(data.sessionAttributes, context);
    }
    if (data.sessionId != null) {
        contents.sessionId = (0, smithy_client_1.expectString)(data.sessionId);
    }
    if (data.slotToElicit != null) {
        contents.slotToElicit = (0, smithy_client_1.expectString)(data.slotToElicit);
    }
    if (data.slots != null) {
        contents.slots = deserializeAws_restJson1StringMap(data.slots, context);
    }
    return contents;
};
exports.deserializeAws_restJson1PostTextCommand = deserializeAws_restJson1PostTextCommand;
const deserializeAws_restJson1PostTextCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.lexruntimeservice#BadGatewayException":
            throw await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context);
        case "BadRequestException":
        case "com.amazonaws.lexruntimeservice#BadRequestException":
            throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.lexruntimeservice#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "DependencyFailedException":
        case "com.amazonaws.lexruntimeservice#DependencyFailedException":
            throw await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context);
        case "InternalFailureException":
        case "com.amazonaws.lexruntimeservice#InternalFailureException":
            throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.lexruntimeservice#LimitExceededException":
            throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
        case "LoopDetectedException":
        case "com.amazonaws.lexruntimeservice#LoopDetectedException":
            throw await deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context);
        case "NotFoundException":
        case "com.amazonaws.lexruntimeservice#NotFoundException":
            throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1PutSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutSessionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        contentType: [, output.headers["content-type"]],
        intentName: [, output.headers["x-amz-lex-intent-name"]],
        slots: [
            () => void 0 !== output.headers["x-amz-lex-slots"],
            () => new smithy_client_1.LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-slots"])).toString("utf8")),
        ],
        sessionAttributes: [
            () => void 0 !== output.headers["x-amz-lex-session-attributes"],
            () => new smithy_client_1.LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-session-attributes"])).toString("utf8")),
        ],
        message: [, output.headers["x-amz-lex-message"]],
        encodedMessage: [, output.headers["x-amz-lex-encoded-message"]],
        messageFormat: [, output.headers["x-amz-lex-message-format"]],
        dialogState: [, output.headers["x-amz-lex-dialog-state"]],
        slotToElicit: [, output.headers["x-amz-lex-slot-to-elicit"]],
        sessionId: [, output.headers["x-amz-lex-session-id"]],
        activeContexts: [
            () => void 0 !== output.headers["x-amz-lex-active-contexts"],
            () => new smithy_client_1.LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-active-contexts"])).toString("utf8")),
        ],
    });
    const data = output.body;
    contents.audioStream = data;
    return contents;
};
exports.deserializeAws_restJson1PutSessionCommand = deserializeAws_restJson1PutSessionCommand;
const deserializeAws_restJson1PutSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadGatewayException":
        case "com.amazonaws.lexruntimeservice#BadGatewayException":
            throw await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context);
        case "BadRequestException":
        case "com.amazonaws.lexruntimeservice#BadRequestException":
            throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.lexruntimeservice#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "DependencyFailedException":
        case "com.amazonaws.lexruntimeservice#DependencyFailedException":
            throw await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context);
        case "InternalFailureException":
        case "com.amazonaws.lexruntimeservice#InternalFailureException":
            throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.lexruntimeservice#LimitExceededException":
            throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
        case "NotAcceptableException":
        case "com.amazonaws.lexruntimeservice#NotAcceptableException":
            throw await deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context);
        case "NotFoundException":
        case "com.amazonaws.lexruntimeservice#NotFoundException":
            throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LexRuntimeServiceServiceException_1.LexRuntimeServiceServiceException,
                errorCode,
            });
    }
};
const map = smithy_client_1.map;
const deserializeAws_restJson1BadGatewayExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.Message != null) {
        contents.Message = (0, smithy_client_1.expectString)(data.Message);
    }
    const exception = new models_0_1.BadGatewayException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.BadRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.ConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1DependencyFailedExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.Message != null) {
        contents.Message = (0, smithy_client_1.expectString)(data.Message);
    }
    const exception = new models_0_1.DependencyFailedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.InternalFailureException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = map({
        retryAfterSeconds: [, parsedOutput.headers["retry-after"]],
    });
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1LoopDetectedExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.Message != null) {
        contents.Message = (0, smithy_client_1.expectString)(data.Message);
    }
    const exception = new models_0_1.LoopDetectedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1NotAcceptableExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.NotAcceptableException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.NotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1RequestTimeoutExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.RequestTimeoutException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.UnsupportedMediaTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const serializeAws_restJson1ActiveContext = (input, context) => {
    return {
        ...(input.name != null && { name: input.name }),
        ...(input.parameters != null && {
            parameters: serializeAws_restJson1ActiveContextParametersMap(input.parameters, context),
        }),
        ...(input.timeToLive != null && {
            timeToLive: serializeAws_restJson1ActiveContextTimeToLive(input.timeToLive, context),
        }),
    };
};
const serializeAws_restJson1ActiveContextParametersMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1ActiveContextsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_restJson1ActiveContext(entry, context);
    });
};
const serializeAws_restJson1ActiveContextTimeToLive = (input, context) => {
    return {
        ...(input.timeToLiveInSeconds != null && { timeToLiveInSeconds: input.timeToLiveInSeconds }),
        ...(input.turnsToLive != null && { turnsToLive: input.turnsToLive }),
    };
};
const serializeAws_restJson1DialogAction = (input, context) => {
    return {
        ...(input.fulfillmentState != null && { fulfillmentState: input.fulfillmentState }),
        ...(input.intentName != null && { intentName: input.intentName }),
        ...(input.message != null && { message: input.message }),
        ...(input.messageFormat != null && { messageFormat: input.messageFormat }),
        ...(input.slotToElicit != null && { slotToElicit: input.slotToElicit }),
        ...(input.slots != null && { slots: serializeAws_restJson1StringMap(input.slots, context) }),
        ...(input.type != null && { type: input.type }),
    };
};
const serializeAws_restJson1IntentSummary = (input, context) => {
    return {
        ...(input.checkpointLabel != null && { checkpointLabel: input.checkpointLabel }),
        ...(input.confirmationStatus != null && { confirmationStatus: input.confirmationStatus }),
        ...(input.dialogActionType != null && { dialogActionType: input.dialogActionType }),
        ...(input.fulfillmentState != null && { fulfillmentState: input.fulfillmentState }),
        ...(input.intentName != null && { intentName: input.intentName }),
        ...(input.slotToElicit != null && { slotToElicit: input.slotToElicit }),
        ...(input.slots != null && { slots: serializeAws_restJson1StringMap(input.slots, context) }),
    };
};
const serializeAws_restJson1IntentSummaryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_restJson1IntentSummary(entry, context);
    });
};
const serializeAws_restJson1StringMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1ActiveContext = (output, context) => {
    return {
        name: (0, smithy_client_1.expectString)(output.name),
        parameters: output.parameters != null
            ? deserializeAws_restJson1ActiveContextParametersMap(output.parameters, context)
            : undefined,
        timeToLive: output.timeToLive != null
            ? deserializeAws_restJson1ActiveContextTimeToLive(output.timeToLive, context)
            : undefined,
    };
};
const deserializeAws_restJson1ActiveContextParametersMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: (0, smithy_client_1.expectString)(value),
        };
    }, {});
};
const deserializeAws_restJson1ActiveContextsList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ActiveContext(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1ActiveContextTimeToLive = (output, context) => {
    return {
        timeToLiveInSeconds: (0, smithy_client_1.expectInt32)(output.timeToLiveInSeconds),
        turnsToLive: (0, smithy_client_1.expectInt32)(output.turnsToLive),
    };
};
const deserializeAws_restJson1Button = (output, context) => {
    return {
        text: (0, smithy_client_1.expectString)(output.text),
        value: (0, smithy_client_1.expectString)(output.value),
    };
};
const deserializeAws_restJson1DialogAction = (output, context) => {
    return {
        fulfillmentState: (0, smithy_client_1.expectString)(output.fulfillmentState),
        intentName: (0, smithy_client_1.expectString)(output.intentName),
        message: (0, smithy_client_1.expectString)(output.message),
        messageFormat: (0, smithy_client_1.expectString)(output.messageFormat),
        slotToElicit: (0, smithy_client_1.expectString)(output.slotToElicit),
        slots: output.slots != null ? deserializeAws_restJson1StringMap(output.slots, context) : undefined,
        type: (0, smithy_client_1.expectString)(output.type),
    };
};
const deserializeAws_restJson1GenericAttachment = (output, context) => {
    return {
        attachmentLinkUrl: (0, smithy_client_1.expectString)(output.attachmentLinkUrl),
        buttons: output.buttons != null ? deserializeAws_restJson1listOfButtons(output.buttons, context) : undefined,
        imageUrl: (0, smithy_client_1.expectString)(output.imageUrl),
        subTitle: (0, smithy_client_1.expectString)(output.subTitle),
        title: (0, smithy_client_1.expectString)(output.title),
    };
};
const deserializeAws_restJson1genericAttachmentList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GenericAttachment(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1IntentConfidence = (output, context) => {
    return {
        score: (0, smithy_client_1.limitedParseDouble)(output.score),
    };
};
const deserializeAws_restJson1IntentList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PredictedIntent(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1IntentSummary = (output, context) => {
    return {
        checkpointLabel: (0, smithy_client_1.expectString)(output.checkpointLabel),
        confirmationStatus: (0, smithy_client_1.expectString)(output.confirmationStatus),
        dialogActionType: (0, smithy_client_1.expectString)(output.dialogActionType),
        fulfillmentState: (0, smithy_client_1.expectString)(output.fulfillmentState),
        intentName: (0, smithy_client_1.expectString)(output.intentName),
        slotToElicit: (0, smithy_client_1.expectString)(output.slotToElicit),
        slots: output.slots != null ? deserializeAws_restJson1StringMap(output.slots, context) : undefined,
    };
};
const deserializeAws_restJson1IntentSummaryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IntentSummary(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1listOfButtons = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Button(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1PredictedIntent = (output, context) => {
    return {
        intentName: (0, smithy_client_1.expectString)(output.intentName),
        nluIntentConfidence: output.nluIntentConfidence != null
            ? deserializeAws_restJson1IntentConfidence(output.nluIntentConfidence, context)
            : undefined,
        slots: output.slots != null ? deserializeAws_restJson1StringMap(output.slots, context) : undefined,
    };
};
const deserializeAws_restJson1ResponseCard = (output, context) => {
    return {
        contentType: (0, smithy_client_1.expectString)(output.contentType),
        genericAttachments: output.genericAttachments != null
            ? deserializeAws_restJson1genericAttachmentList(output.genericAttachments, context)
            : undefined,
        version: (0, smithy_client_1.expectString)(output.version),
    };
};
const deserializeAws_restJson1SentimentResponse = (output, context) => {
    return {
        sentimentLabel: (0, smithy_client_1.expectString)(output.sentimentLabel),
        sentimentScore: (0, smithy_client_1.expectString)(output.sentimentScore),
    };
};
const deserializeAws_restJson1StringMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: (0, smithy_client_1.expectString)(value),
        };
    }, {});
};
const deserializeMetadata = (output) => {
    var _a, _b;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_b = (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"]) !== null && _b !== void 0 ? _b : output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    var _a;
    const value = await parseBody(errorBody, context);
    value.message = (_a = value.message) !== null && _a !== void 0 ? _a : value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};
