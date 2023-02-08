"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1StartConversationCommand = exports.deserializeAws_restJson1RecognizeUtteranceCommand = exports.deserializeAws_restJson1RecognizeTextCommand = exports.deserializeAws_restJson1PutSessionCommand = exports.deserializeAws_restJson1GetSessionCommand = exports.deserializeAws_restJson1DeleteSessionCommand = exports.serializeAws_restJson1StartConversationCommand = exports.serializeAws_restJson1RecognizeUtteranceCommand = exports.serializeAws_restJson1RecognizeTextCommand = exports.serializeAws_restJson1PutSessionCommand = exports.serializeAws_restJson1GetSessionCommand = exports.serializeAws_restJson1DeleteSessionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const LexRuntimeV2ServiceException_1 = require("../models/LexRuntimeV2ServiceException");
const models_0_1 = require("../models/models_0");
const serializeAws_restJson1DeleteSessionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botId", () => input.botId, "{botId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botAliasId", () => input.botAliasId, "{botAliasId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "localeId", () => input.localeId, "{localeId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "sessionId", () => input.sessionId, "{sessionId}", false);
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
        "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botId", () => input.botId, "{botId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botAliasId", () => input.botAliasId, "{botAliasId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "localeId", () => input.localeId, "{localeId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "sessionId", () => input.sessionId, "{sessionId}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetSessionCommand = serializeAws_restJson1GetSessionCommand;
const serializeAws_restJson1PutSessionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/json",
        responsecontenttype: input.responseContentType,
    });
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botId", () => input.botId, "{botId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botAliasId", () => input.botAliasId, "{botAliasId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "localeId", () => input.localeId, "{localeId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "sessionId", () => input.sessionId, "{sessionId}", false);
    let body;
    body = JSON.stringify({
        ...(input.messages != null && { messages: serializeAws_restJson1Messages(input.messages, context) }),
        ...(input.requestAttributes != null && {
            requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
        }),
        ...(input.sessionState != null && {
            sessionState: serializeAws_restJson1SessionState(input.sessionState, context),
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
const serializeAws_restJson1RecognizeTextCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botId", () => input.botId, "{botId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botAliasId", () => input.botAliasId, "{botAliasId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "localeId", () => input.localeId, "{localeId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "sessionId", () => input.sessionId, "{sessionId}", false);
    let body;
    body = JSON.stringify({
        ...(input.requestAttributes != null && {
            requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
        }),
        ...(input.sessionState != null && {
            sessionState: serializeAws_restJson1SessionState(input.sessionState, context),
        }),
        ...(input.text != null && { text: input.text }),
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
exports.serializeAws_restJson1RecognizeTextCommand = serializeAws_restJson1RecognizeTextCommand;
const serializeAws_restJson1RecognizeUtteranceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
        "content-type": input.requestContentType || "application/octet-stream",
        "x-amz-lex-session-state": input.sessionState,
        "x-amz-lex-request-attributes": input.requestAttributes,
        "response-content-type": input.responseContentType,
    });
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botId", () => input.botId, "{botId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botAliasId", () => input.botAliasId, "{botAliasId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "localeId", () => input.localeId, "{localeId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "sessionId", () => input.sessionId, "{sessionId}", false);
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
exports.serializeAws_restJson1RecognizeUtteranceCommand = serializeAws_restJson1RecognizeUtteranceCommand;
const serializeAws_restJson1StartConversationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-lex-conversation-mode": input.conversationMode,
    });
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botId", () => input.botId, "{botId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "botAliasId", () => input.botAliasId, "{botAliasId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "localeId", () => input.localeId, "{localeId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "sessionId", () => input.sessionId, "{sessionId}", false);
    let body;
    if (input.requestEventStream !== undefined) {
        body = serializeAws_restJson1StartConversationRequestEventStream(input.requestEventStream, context);
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
exports.serializeAws_restJson1StartConversationCommand = serializeAws_restJson1StartConversationCommand;
const deserializeAws_restJson1DeleteSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSessionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.botAliasId != null) {
        contents.botAliasId = (0, smithy_client_1.expectString)(data.botAliasId);
    }
    if (data.botId != null) {
        contents.botId = (0, smithy_client_1.expectString)(data.botId);
    }
    if (data.localeId != null) {
        contents.localeId = (0, smithy_client_1.expectString)(data.localeId);
    }
    if (data.sessionId != null) {
        contents.sessionId = (0, smithy_client_1.expectString)(data.sessionId);
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
        case "AccessDeniedException":
        case "com.amazonaws.lexruntimev2#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.lexruntimev2#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.lexruntimev2#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.lexruntimev2#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.lexruntimev2#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException,
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
    if (data.interpretations != null) {
        contents.interpretations = deserializeAws_restJson1Interpretations(data.interpretations, context);
    }
    if (data.messages != null) {
        contents.messages = deserializeAws_restJson1Messages(data.messages, context);
    }
    if (data.sessionId != null) {
        contents.sessionId = (0, smithy_client_1.expectString)(data.sessionId);
    }
    if (data.sessionState != null) {
        contents.sessionState = deserializeAws_restJson1SessionState(data.sessionState, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.lexruntimev2#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.lexruntimev2#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.lexruntimev2#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.lexruntimev2#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException,
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
        messages: [, output.headers["x-amz-lex-messages"]],
        sessionState: [, output.headers["x-amz-lex-session-state"]],
        requestAttributes: [, output.headers["x-amz-lex-request-attributes"]],
        sessionId: [, output.headers["x-amz-lex-session-id"]],
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
        case "AccessDeniedException":
        case "com.amazonaws.lexruntimev2#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "BadGatewayException":
        case "com.amazonaws.lexruntimev2#BadGatewayException":
            throw await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.lexruntimev2#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "DependencyFailedException":
        case "com.amazonaws.lexruntimev2#DependencyFailedException":
            throw await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.lexruntimev2#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.lexruntimev2#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.lexruntimev2#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1RecognizeTextCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RecognizeTextCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.interpretations != null) {
        contents.interpretations = deserializeAws_restJson1Interpretations(data.interpretations, context);
    }
    if (data.messages != null) {
        contents.messages = deserializeAws_restJson1Messages(data.messages, context);
    }
    if (data.requestAttributes != null) {
        contents.requestAttributes = deserializeAws_restJson1StringMap(data.requestAttributes, context);
    }
    if (data.sessionId != null) {
        contents.sessionId = (0, smithy_client_1.expectString)(data.sessionId);
    }
    if (data.sessionState != null) {
        contents.sessionState = deserializeAws_restJson1SessionState(data.sessionState, context);
    }
    return contents;
};
exports.deserializeAws_restJson1RecognizeTextCommand = deserializeAws_restJson1RecognizeTextCommand;
const deserializeAws_restJson1RecognizeTextCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lexruntimev2#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "BadGatewayException":
        case "com.amazonaws.lexruntimev2#BadGatewayException":
            throw await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.lexruntimev2#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "DependencyFailedException":
        case "com.amazonaws.lexruntimev2#DependencyFailedException":
            throw await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.lexruntimev2#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.lexruntimev2#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.lexruntimev2#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1RecognizeUtteranceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RecognizeUtteranceCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        inputMode: [, output.headers["x-amz-lex-input-mode"]],
        contentType: [, output.headers["content-type"]],
        messages: [, output.headers["x-amz-lex-messages"]],
        interpretations: [, output.headers["x-amz-lex-interpretations"]],
        sessionState: [, output.headers["x-amz-lex-session-state"]],
        requestAttributes: [, output.headers["x-amz-lex-request-attributes"]],
        sessionId: [, output.headers["x-amz-lex-session-id"]],
        inputTranscript: [, output.headers["x-amz-lex-input-transcript"]],
    });
    const data = output.body;
    contents.audioStream = data;
    return contents;
};
exports.deserializeAws_restJson1RecognizeUtteranceCommand = deserializeAws_restJson1RecognizeUtteranceCommand;
const deserializeAws_restJson1RecognizeUtteranceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lexruntimev2#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "BadGatewayException":
        case "com.amazonaws.lexruntimev2#BadGatewayException":
            throw await deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.lexruntimev2#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "DependencyFailedException":
        case "com.amazonaws.lexruntimev2#DependencyFailedException":
            throw await deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.lexruntimev2#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lexruntimev2#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.lexruntimev2#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.lexruntimev2#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1StartConversationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartConversationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = output.body;
    contents.responseEventStream = deserializeAws_restJson1StartConversationResponseEventStream(data, context);
    return contents;
};
exports.deserializeAws_restJson1StartConversationCommand = deserializeAws_restJson1StartConversationCommand;
const deserializeAws_restJson1StartConversationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lexruntimev2#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.lexruntimev2#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.lexruntimev2#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.lexruntimev2#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LexRuntimeV2ServiceException_1.LexRuntimeV2ServiceException,
                errorCode,
            });
    }
};
const map = smithy_client_1.map;
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1BadGatewayExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.BadGatewayException({
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
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.DependencyFailedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.ThrottlingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.ValidationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const serializeAws_restJson1StartConversationRequestEventStream = (input, context) => {
    const eventMarshallingVisitor = (event) => models_0_1.StartConversationRequestEventStream.visit(event, {
        ConfigurationEvent: (value) => serializeAws_restJson1ConfigurationEvent_event(value, context),
        AudioInputEvent: (value) => serializeAws_restJson1AudioInputEvent_event(value, context),
        DTMFInputEvent: (value) => serializeAws_restJson1DTMFInputEvent_event(value, context),
        TextInputEvent: (value) => serializeAws_restJson1TextInputEvent_event(value, context),
        PlaybackCompletionEvent: (value) => serializeAws_restJson1PlaybackCompletionEvent_event(value, context),
        DisconnectionEvent: (value) => serializeAws_restJson1DisconnectionEvent_event(value, context),
        _: (value) => value,
    });
    return context.eventStreamMarshaller.serialize(input, eventMarshallingVisitor);
};
const serializeAws_restJson1AudioInputEvent_event = (input, context) => {
    const headers = {
        ":event-type": { type: "string", value: "AudioInputEvent" },
        ":message-type": { type: "string", value: "event" },
        ":content-type": { type: "string", value: "application/json" },
    };
    let body = new Uint8Array();
    body = serializeAws_restJson1AudioInputEvent(input, context);
    body = context.utf8Decoder(JSON.stringify(body));
    return { headers, body };
};
const serializeAws_restJson1ConfigurationEvent_event = (input, context) => {
    const headers = {
        ":event-type": { type: "string", value: "ConfigurationEvent" },
        ":message-type": { type: "string", value: "event" },
        ":content-type": { type: "string", value: "application/json" },
    };
    let body = new Uint8Array();
    body = serializeAws_restJson1ConfigurationEvent(input, context);
    body = context.utf8Decoder(JSON.stringify(body));
    return { headers, body };
};
const serializeAws_restJson1DisconnectionEvent_event = (input, context) => {
    const headers = {
        ":event-type": { type: "string", value: "DisconnectionEvent" },
        ":message-type": { type: "string", value: "event" },
        ":content-type": { type: "string", value: "application/json" },
    };
    let body = new Uint8Array();
    body = serializeAws_restJson1DisconnectionEvent(input, context);
    body = context.utf8Decoder(JSON.stringify(body));
    return { headers, body };
};
const serializeAws_restJson1DTMFInputEvent_event = (input, context) => {
    const headers = {
        ":event-type": { type: "string", value: "DTMFInputEvent" },
        ":message-type": { type: "string", value: "event" },
        ":content-type": { type: "string", value: "application/json" },
    };
    let body = new Uint8Array();
    body = serializeAws_restJson1DTMFInputEvent(input, context);
    body = context.utf8Decoder(JSON.stringify(body));
    return { headers, body };
};
const serializeAws_restJson1PlaybackCompletionEvent_event = (input, context) => {
    const headers = {
        ":event-type": { type: "string", value: "PlaybackCompletionEvent" },
        ":message-type": { type: "string", value: "event" },
        ":content-type": { type: "string", value: "application/json" },
    };
    let body = new Uint8Array();
    body = serializeAws_restJson1PlaybackCompletionEvent(input, context);
    body = context.utf8Decoder(JSON.stringify(body));
    return { headers, body };
};
const serializeAws_restJson1TextInputEvent_event = (input, context) => {
    const headers = {
        ":event-type": { type: "string", value: "TextInputEvent" },
        ":message-type": { type: "string", value: "event" },
        ":content-type": { type: "string", value: "application/json" },
    };
    let body = new Uint8Array();
    body = serializeAws_restJson1TextInputEvent(input, context);
    body = context.utf8Decoder(JSON.stringify(body));
    return { headers, body };
};
const deserializeAws_restJson1StartConversationResponseEventStream = (output, context) => {
    return context.eventStreamMarshaller.deserialize(output, async (event) => {
        if (event["PlaybackInterruptionEvent"] != null) {
            return {
                PlaybackInterruptionEvent: await deserializeAws_restJson1PlaybackInterruptionEvent_event(event["PlaybackInterruptionEvent"], context),
            };
        }
        if (event["TranscriptEvent"] != null) {
            return {
                TranscriptEvent: await deserializeAws_restJson1TranscriptEvent_event(event["TranscriptEvent"], context),
            };
        }
        if (event["IntentResultEvent"] != null) {
            return {
                IntentResultEvent: await deserializeAws_restJson1IntentResultEvent_event(event["IntentResultEvent"], context),
            };
        }
        if (event["TextResponseEvent"] != null) {
            return {
                TextResponseEvent: await deserializeAws_restJson1TextResponseEvent_event(event["TextResponseEvent"], context),
            };
        }
        if (event["AudioResponseEvent"] != null) {
            return {
                AudioResponseEvent: await deserializeAws_restJson1AudioResponseEvent_event(event["AudioResponseEvent"], context),
            };
        }
        if (event["HeartbeatEvent"] != null) {
            return {
                HeartbeatEvent: await deserializeAws_restJson1HeartbeatEvent_event(event["HeartbeatEvent"], context),
            };
        }
        if (event["AccessDeniedException"] != null) {
            return {
                AccessDeniedException: await deserializeAws_restJson1AccessDeniedException_event(event["AccessDeniedException"], context),
            };
        }
        if (event["ResourceNotFoundException"] != null) {
            return {
                ResourceNotFoundException: await deserializeAws_restJson1ResourceNotFoundException_event(event["ResourceNotFoundException"], context),
            };
        }
        if (event["ValidationException"] != null) {
            return {
                ValidationException: await deserializeAws_restJson1ValidationException_event(event["ValidationException"], context),
            };
        }
        if (event["ThrottlingException"] != null) {
            return {
                ThrottlingException: await deserializeAws_restJson1ThrottlingException_event(event["ThrottlingException"], context),
            };
        }
        if (event["InternalServerException"] != null) {
            return {
                InternalServerException: await deserializeAws_restJson1InternalServerException_event(event["InternalServerException"], context),
            };
        }
        if (event["ConflictException"] != null) {
            return {
                ConflictException: await deserializeAws_restJson1ConflictException_event(event["ConflictException"], context),
            };
        }
        if (event["DependencyFailedException"] != null) {
            return {
                DependencyFailedException: await deserializeAws_restJson1DependencyFailedException_event(event["DependencyFailedException"], context),
            };
        }
        if (event["BadGatewayException"] != null) {
            return {
                BadGatewayException: await deserializeAws_restJson1BadGatewayException_event(event["BadGatewayException"], context),
            };
        }
        return { $unknown: output };
    });
};
const deserializeAws_restJson1AccessDeniedException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1AudioResponseEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    Object.assign(contents, deserializeAws_restJson1AudioResponseEvent(data, context));
    return contents;
};
const deserializeAws_restJson1BadGatewayException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1ConflictException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1DependencyFailedException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1HeartbeatEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    Object.assign(contents, deserializeAws_restJson1HeartbeatEvent(data, context));
    return contents;
};
const deserializeAws_restJson1IntentResultEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    Object.assign(contents, deserializeAws_restJson1IntentResultEvent(data, context));
    return contents;
};
const deserializeAws_restJson1InternalServerException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1PlaybackInterruptionEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    Object.assign(contents, deserializeAws_restJson1PlaybackInterruptionEvent(data, context));
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1TextResponseEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    Object.assign(contents, deserializeAws_restJson1TextResponseEvent(data, context));
    return contents;
};
const deserializeAws_restJson1ThrottlingException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1TranscriptEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    Object.assign(contents, deserializeAws_restJson1TranscriptEvent(data, context));
    return contents;
};
const deserializeAws_restJson1ValidationException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
};
const serializeAws_restJson1ActiveContext = (input, context) => {
    return {
        ...(input.contextAttributes != null && {
            contextAttributes: serializeAws_restJson1ActiveContextParametersMap(input.contextAttributes, context),
        }),
        ...(input.name != null && { name: input.name }),
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
const serializeAws_restJson1AudioInputEvent = (input, context) => {
    return {
        ...(input.audioChunk != null && { audioChunk: context.base64Encoder(input.audioChunk) }),
        ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
        ...(input.contentType != null && { contentType: input.contentType }),
        ...(input.eventId != null && { eventId: input.eventId }),
    };
};
const serializeAws_restJson1Button = (input, context) => {
    return {
        ...(input.text != null && { text: input.text }),
        ...(input.value != null && { value: input.value }),
    };
};
const serializeAws_restJson1ButtonsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_restJson1Button(entry, context);
    });
};
const serializeAws_restJson1ConfigurationEvent = (input, context) => {
    return {
        ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
        ...(input.disablePlayback != null && { disablePlayback: input.disablePlayback }),
        ...(input.eventId != null && { eventId: input.eventId }),
        ...(input.requestAttributes != null && {
            requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
        }),
        ...(input.responseContentType != null && { responseContentType: input.responseContentType }),
        ...(input.sessionState != null && {
            sessionState: serializeAws_restJson1SessionState(input.sessionState, context),
        }),
        ...(input.welcomeMessages != null && {
            welcomeMessages: serializeAws_restJson1Messages(input.welcomeMessages, context),
        }),
    };
};
const serializeAws_restJson1DialogAction = (input, context) => {
    return {
        ...(input.slotElicitationStyle != null && { slotElicitationStyle: input.slotElicitationStyle }),
        ...(input.slotToElicit != null && { slotToElicit: input.slotToElicit }),
        ...(input.subSlotToElicit != null && {
            subSlotToElicit: serializeAws_restJson1ElicitSubSlot(input.subSlotToElicit, context),
        }),
        ...(input.type != null && { type: input.type }),
    };
};
const serializeAws_restJson1DisconnectionEvent = (input, context) => {
    return {
        ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
        ...(input.eventId != null && { eventId: input.eventId }),
    };
};
const serializeAws_restJson1DTMFInputEvent = (input, context) => {
    return {
        ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
        ...(input.eventId != null && { eventId: input.eventId }),
        ...(input.inputCharacter != null && { inputCharacter: input.inputCharacter }),
    };
};
const serializeAws_restJson1ElicitSubSlot = (input, context) => {
    return {
        ...(input.name != null && { name: input.name }),
        ...(input.subSlotToElicit != null && {
            subSlotToElicit: serializeAws_restJson1ElicitSubSlot(input.subSlotToElicit, context),
        }),
    };
};
const serializeAws_restJson1ImageResponseCard = (input, context) => {
    return {
        ...(input.buttons != null && { buttons: serializeAws_restJson1ButtonsList(input.buttons, context) }),
        ...(input.imageUrl != null && { imageUrl: input.imageUrl }),
        ...(input.subtitle != null && { subtitle: input.subtitle }),
        ...(input.title != null && { title: input.title }),
    };
};
const serializeAws_restJson1Intent = (input, context) => {
    return {
        ...(input.confirmationState != null && { confirmationState: input.confirmationState }),
        ...(input.name != null && { name: input.name }),
        ...(input.slots != null && { slots: serializeAws_restJson1Slots(input.slots, context) }),
        ...(input.state != null && { state: input.state }),
    };
};
const serializeAws_restJson1Message = (input, context) => {
    return {
        ...(input.content != null && { content: input.content }),
        ...(input.contentType != null && { contentType: input.contentType }),
        ...(input.imageResponseCard != null && {
            imageResponseCard: serializeAws_restJson1ImageResponseCard(input.imageResponseCard, context),
        }),
    };
};
const serializeAws_restJson1Messages = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_restJson1Message(entry, context);
    });
};
const serializeAws_restJson1PlaybackCompletionEvent = (input, context) => {
    return {
        ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
        ...(input.eventId != null && { eventId: input.eventId }),
    };
};
const serializeAws_restJson1RuntimeHintDetails = (input, context) => {
    return {
        ...(input.runtimeHintValues != null && {
            runtimeHintValues: serializeAws_restJson1RuntimeHintValuesList(input.runtimeHintValues, context),
        }),
        ...(input.subSlotHints != null && {
            subSlotHints: serializeAws_restJson1SlotHintsSlotMap(input.subSlotHints, context),
        }),
    };
};
const serializeAws_restJson1RuntimeHints = (input, context) => {
    return {
        ...(input.slotHints != null && { slotHints: serializeAws_restJson1SlotHintsIntentMap(input.slotHints, context) }),
    };
};
const serializeAws_restJson1RuntimeHintValue = (input, context) => {
    return {
        ...(input.phrase != null && { phrase: input.phrase }),
    };
};
const serializeAws_restJson1RuntimeHintValuesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_restJson1RuntimeHintValue(entry, context);
    });
};
const serializeAws_restJson1SessionState = (input, context) => {
    return {
        ...(input.activeContexts != null && {
            activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
        }),
        ...(input.dialogAction != null && {
            dialogAction: serializeAws_restJson1DialogAction(input.dialogAction, context),
        }),
        ...(input.intent != null && { intent: serializeAws_restJson1Intent(input.intent, context) }),
        ...(input.originatingRequestId != null && { originatingRequestId: input.originatingRequestId }),
        ...(input.runtimeHints != null && {
            runtimeHints: serializeAws_restJson1RuntimeHints(input.runtimeHints, context),
        }),
        ...(input.sessionAttributes != null && {
            sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
        }),
    };
};
const serializeAws_restJson1Slot = (input, context) => {
    return {
        ...(input.shape != null && { shape: input.shape }),
        ...(input.subSlots != null && { subSlots: serializeAws_restJson1Slots(input.subSlots, context) }),
        ...(input.value != null && { value: serializeAws_restJson1Value(input.value, context) }),
        ...(input.values != null && { values: serializeAws_restJson1Values(input.values, context) }),
    };
};
const serializeAws_restJson1SlotHintsIntentMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1SlotHintsSlotMap(value, context),
        };
    }, {});
};
const serializeAws_restJson1SlotHintsSlotMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1RuntimeHintDetails(value, context),
        };
    }, {});
};
const serializeAws_restJson1Slots = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1Slot(value, context),
        };
    }, {});
};
const serializeAws_restJson1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
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
const serializeAws_restJson1TextInputEvent = (input, context) => {
    return {
        ...(input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis }),
        ...(input.eventId != null && { eventId: input.eventId }),
        ...(input.text != null && { text: input.text }),
    };
};
const serializeAws_restJson1Value = (input, context) => {
    return {
        ...(input.interpretedValue != null && { interpretedValue: input.interpretedValue }),
        ...(input.originalValue != null && { originalValue: input.originalValue }),
        ...(input.resolvedValues != null && {
            resolvedValues: serializeAws_restJson1StringList(input.resolvedValues, context),
        }),
    };
};
const serializeAws_restJson1Values = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_restJson1Slot(entry, context);
    });
};
const deserializeAws_restJson1ActiveContext = (output, context) => {
    return {
        contextAttributes: output.contextAttributes != null
            ? deserializeAws_restJson1ActiveContextParametersMap(output.contextAttributes, context)
            : undefined,
        name: (0, smithy_client_1.expectString)(output.name),
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
const deserializeAws_restJson1AudioResponseEvent = (output, context) => {
    return {
        audioChunk: output.audioChunk != null ? context.base64Decoder(output.audioChunk) : undefined,
        contentType: (0, smithy_client_1.expectString)(output.contentType),
        eventId: (0, smithy_client_1.expectString)(output.eventId),
    };
};
const deserializeAws_restJson1Button = (output, context) => {
    return {
        text: (0, smithy_client_1.expectString)(output.text),
        value: (0, smithy_client_1.expectString)(output.value),
    };
};
const deserializeAws_restJson1ButtonsList = (output, context) => {
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
const deserializeAws_restJson1ConfidenceScore = (output, context) => {
    return {
        score: (0, smithy_client_1.limitedParseDouble)(output.score),
    };
};
const deserializeAws_restJson1DialogAction = (output, context) => {
    return {
        slotElicitationStyle: (0, smithy_client_1.expectString)(output.slotElicitationStyle),
        slotToElicit: (0, smithy_client_1.expectString)(output.slotToElicit),
        subSlotToElicit: output.subSlotToElicit != null
            ? deserializeAws_restJson1ElicitSubSlot(output.subSlotToElicit, context)
            : undefined,
        type: (0, smithy_client_1.expectString)(output.type),
    };
};
const deserializeAws_restJson1ElicitSubSlot = (output, context) => {
    return {
        name: (0, smithy_client_1.expectString)(output.name),
        subSlotToElicit: output.subSlotToElicit != null
            ? deserializeAws_restJson1ElicitSubSlot(output.subSlotToElicit, context)
            : undefined,
    };
};
const deserializeAws_restJson1HeartbeatEvent = (output, context) => {
    return {
        eventId: (0, smithy_client_1.expectString)(output.eventId),
    };
};
const deserializeAws_restJson1ImageResponseCard = (output, context) => {
    return {
        buttons: output.buttons != null ? deserializeAws_restJson1ButtonsList(output.buttons, context) : undefined,
        imageUrl: (0, smithy_client_1.expectString)(output.imageUrl),
        subtitle: (0, smithy_client_1.expectString)(output.subtitle),
        title: (0, smithy_client_1.expectString)(output.title),
    };
};
const deserializeAws_restJson1Intent = (output, context) => {
    return {
        confirmationState: (0, smithy_client_1.expectString)(output.confirmationState),
        name: (0, smithy_client_1.expectString)(output.name),
        slots: output.slots != null ? deserializeAws_restJson1Slots(output.slots, context) : undefined,
        state: (0, smithy_client_1.expectString)(output.state),
    };
};
const deserializeAws_restJson1IntentResultEvent = (output, context) => {
    return {
        eventId: (0, smithy_client_1.expectString)(output.eventId),
        inputMode: (0, smithy_client_1.expectString)(output.inputMode),
        interpretations: output.interpretations != null
            ? deserializeAws_restJson1Interpretations(output.interpretations, context)
            : undefined,
        requestAttributes: output.requestAttributes != null
            ? deserializeAws_restJson1StringMap(output.requestAttributes, context)
            : undefined,
        sessionId: (0, smithy_client_1.expectString)(output.sessionId),
        sessionState: output.sessionState != null ? deserializeAws_restJson1SessionState(output.sessionState, context) : undefined,
    };
};
const deserializeAws_restJson1Interpretation = (output, context) => {
    return {
        intent: output.intent != null ? deserializeAws_restJson1Intent(output.intent, context) : undefined,
        nluConfidence: output.nluConfidence != null ? deserializeAws_restJson1ConfidenceScore(output.nluConfidence, context) : undefined,
        sentimentResponse: output.sentimentResponse != null
            ? deserializeAws_restJson1SentimentResponse(output.sentimentResponse, context)
            : undefined,
    };
};
const deserializeAws_restJson1Interpretations = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Interpretation(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1Message = (output, context) => {
    return {
        content: (0, smithy_client_1.expectString)(output.content),
        contentType: (0, smithy_client_1.expectString)(output.contentType),
        imageResponseCard: output.imageResponseCard != null
            ? deserializeAws_restJson1ImageResponseCard(output.imageResponseCard, context)
            : undefined,
    };
};
const deserializeAws_restJson1Messages = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Message(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1PlaybackInterruptionEvent = (output, context) => {
    return {
        causedByEventId: (0, smithy_client_1.expectString)(output.causedByEventId),
        eventId: (0, smithy_client_1.expectString)(output.eventId),
        eventReason: (0, smithy_client_1.expectString)(output.eventReason),
    };
};
const deserializeAws_restJson1RuntimeHintDetails = (output, context) => {
    return {
        runtimeHintValues: output.runtimeHintValues != null
            ? deserializeAws_restJson1RuntimeHintValuesList(output.runtimeHintValues, context)
            : undefined,
        subSlotHints: output.subSlotHints != null ? deserializeAws_restJson1SlotHintsSlotMap(output.subSlotHints, context) : undefined,
    };
};
const deserializeAws_restJson1RuntimeHints = (output, context) => {
    return {
        slotHints: output.slotHints != null ? deserializeAws_restJson1SlotHintsIntentMap(output.slotHints, context) : undefined,
    };
};
const deserializeAws_restJson1RuntimeHintValue = (output, context) => {
    return {
        phrase: (0, smithy_client_1.expectString)(output.phrase),
    };
};
const deserializeAws_restJson1RuntimeHintValuesList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RuntimeHintValue(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1SentimentResponse = (output, context) => {
    return {
        sentiment: (0, smithy_client_1.expectString)(output.sentiment),
        sentimentScore: output.sentimentScore != null
            ? deserializeAws_restJson1SentimentScore(output.sentimentScore, context)
            : undefined,
    };
};
const deserializeAws_restJson1SentimentScore = (output, context) => {
    return {
        mixed: (0, smithy_client_1.limitedParseDouble)(output.mixed),
        negative: (0, smithy_client_1.limitedParseDouble)(output.negative),
        neutral: (0, smithy_client_1.limitedParseDouble)(output.neutral),
        positive: (0, smithy_client_1.limitedParseDouble)(output.positive),
    };
};
const deserializeAws_restJson1SessionState = (output, context) => {
    return {
        activeContexts: output.activeContexts != null
            ? deserializeAws_restJson1ActiveContextsList(output.activeContexts, context)
            : undefined,
        dialogAction: output.dialogAction != null ? deserializeAws_restJson1DialogAction(output.dialogAction, context) : undefined,
        intent: output.intent != null ? deserializeAws_restJson1Intent(output.intent, context) : undefined,
        originatingRequestId: (0, smithy_client_1.expectString)(output.originatingRequestId),
        runtimeHints: output.runtimeHints != null ? deserializeAws_restJson1RuntimeHints(output.runtimeHints, context) : undefined,
        sessionAttributes: output.sessionAttributes != null
            ? deserializeAws_restJson1StringMap(output.sessionAttributes, context)
            : undefined,
    };
};
const deserializeAws_restJson1Slot = (output, context) => {
    return {
        shape: (0, smithy_client_1.expectString)(output.shape),
        subSlots: output.subSlots != null ? deserializeAws_restJson1Slots(output.subSlots, context) : undefined,
        value: output.value != null ? deserializeAws_restJson1Value(output.value, context) : undefined,
        values: output.values != null ? deserializeAws_restJson1Values(output.values, context) : undefined,
    };
};
const deserializeAws_restJson1SlotHintsIntentMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1SlotHintsSlotMap(value, context),
        };
    }, {});
};
const deserializeAws_restJson1SlotHintsSlotMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1RuntimeHintDetails(value, context),
        };
    }, {});
};
const deserializeAws_restJson1Slots = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1Slot(value, context),
        };
    }, {});
};
const deserializeAws_restJson1StringList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return (0, smithy_client_1.expectString)(entry);
    });
    return retVal;
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
const deserializeAws_restJson1TextResponseEvent = (output, context) => {
    return {
        eventId: (0, smithy_client_1.expectString)(output.eventId),
        messages: output.messages != null ? deserializeAws_restJson1Messages(output.messages, context) : undefined,
    };
};
const deserializeAws_restJson1TranscriptEvent = (output, context) => {
    return {
        eventId: (0, smithy_client_1.expectString)(output.eventId),
        transcript: (0, smithy_client_1.expectString)(output.transcript),
    };
};
const deserializeAws_restJson1Value = (output, context) => {
    return {
        interpretedValue: (0, smithy_client_1.expectString)(output.interpretedValue),
        originalValue: (0, smithy_client_1.expectString)(output.originalValue),
        resolvedValues: output.resolvedValues != null ? deserializeAws_restJson1StringList(output.resolvedValues, context) : undefined,
    };
};
const deserializeAws_restJson1Values = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Slot(entry, context);
    });
    return retVal;
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
