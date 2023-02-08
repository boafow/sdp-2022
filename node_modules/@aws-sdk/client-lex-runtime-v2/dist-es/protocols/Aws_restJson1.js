import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { decorateServiceException as __decorateServiceException, expectInt32 as __expectInt32, expectNonNull as __expectNonNull, expectObject as __expectObject, expectString as __expectString, limitedParseDouble as __limitedParseDouble, map as __map, resolvedPath as __resolvedPath, throwDefaultError, } from "@aws-sdk/smithy-client";
import { LexRuntimeV2ServiceException as __BaseException } from "../models/LexRuntimeV2ServiceException";
import { AccessDeniedException, BadGatewayException, ConflictException, DependencyFailedException, InternalServerException, ResourceNotFoundException, StartConversationRequestEventStream, ThrottlingException, ValidationException, } from "../models/models_0";
export var serializeAws_restJson1DeleteSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
                resolvedPath = __resolvedPath(resolvedPath, input, "botId", function () { return input.botId; }, "{botId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", function () { return input.botAliasId; }, "{botAliasId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "localeId", function () { return input.localeId; }, "{localeId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", function () { return input.sessionId; }, "{sessionId}", false);
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
                resolvedPath = __resolvedPath(resolvedPath, input, "botId", function () { return input.botId; }, "{botId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", function () { return input.botAliasId; }, "{botAliasId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "localeId", function () { return input.localeId; }, "{localeId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", function () { return input.sessionId; }, "{sessionId}", false);
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PutSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = map({}, isSerializableHeaderValue, {
                    "content-type": "application/json",
                    responsecontenttype: input.responseContentType,
                });
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}";
                resolvedPath = __resolvedPath(resolvedPath, input, "botId", function () { return input.botId; }, "{botId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", function () { return input.botAliasId; }, "{botAliasId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "localeId", function () { return input.localeId; }, "{localeId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", function () { return input.sessionId; }, "{sessionId}", false);
                body = JSON.stringify(__assign(__assign(__assign({}, (input.messages != null && { messages: serializeAws_restJson1Messages(input.messages, context) })), (input.requestAttributes != null && {
                    requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
                })), (input.sessionState != null && {
                    sessionState: serializeAws_restJson1SessionState(input.sessionState, context),
                })));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1RecognizeTextCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text";
                resolvedPath = __resolvedPath(resolvedPath, input, "botId", function () { return input.botId; }, "{botId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", function () { return input.botAliasId; }, "{botAliasId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "localeId", function () { return input.localeId; }, "{localeId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", function () { return input.sessionId; }, "{sessionId}", false);
                body = JSON.stringify(__assign(__assign(__assign({}, (input.requestAttributes != null && {
                    requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
                })), (input.sessionState != null && {
                    sessionState: serializeAws_restJson1SessionState(input.sessionState, context),
                })), (input.text != null && { text: input.text })));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1RecognizeUtteranceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = map({}, isSerializableHeaderValue, {
                    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
                    "content-type": input.requestContentType || "application/octet-stream",
                    "x-amz-lex-session-state": input.sessionState,
                    "x-amz-lex-request-attributes": input.requestAttributes,
                    "response-content-type": input.responseContentType,
                });
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance";
                resolvedPath = __resolvedPath(resolvedPath, input, "botId", function () { return input.botId; }, "{botId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", function () { return input.botAliasId; }, "{botAliasId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "localeId", function () { return input.localeId; }, "{localeId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", function () { return input.sessionId; }, "{sessionId}", false);
                if (input.inputStream !== undefined) {
                    body = input.inputStream;
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1StartConversationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = map({}, isSerializableHeaderValue, {
                    "x-amz-lex-conversation-mode": input.conversationMode,
                });
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation";
                resolvedPath = __resolvedPath(resolvedPath, input, "botId", function () { return input.botId; }, "{botId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", function () { return input.botAliasId; }, "{botAliasId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "localeId", function () { return input.localeId; }, "{localeId}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", function () { return input.sessionId; }, "{sessionId}", false);
                if (input.requestEventStream !== undefined) {
                    body = serializeAws_restJson1StartConversationRequestEventStream(input.requestEventStream, context);
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1DeleteSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1DeleteSessionCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.botAliasId != null) {
                    contents.botAliasId = __expectString(data.botAliasId);
                }
                if (data.botId != null) {
                    contents.botId = __expectString(data.botId);
                }
                if (data.localeId != null) {
                    contents.localeId = __expectString(data.localeId);
                }
                if (data.sessionId != null) {
                    contents.sessionId = __expectString(data.sessionId);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1DeleteSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.lexruntimev2#AccessDeniedException": return [3, 2];
                    case "ConflictException": return [3, 4];
                    case "com.amazonaws.lexruntimev2#ConflictException": return [3, 4];
                    case "InternalServerException": return [3, 6];
                    case "com.amazonaws.lexruntimev2#InternalServerException": return [3, 6];
                    case "ResourceNotFoundException": return [3, 8];
                    case "com.amazonaws.lexruntimev2#ResourceNotFoundException": return [3, 8];
                    case "ThrottlingException": return [3, 10];
                    case "com.amazonaws.lexruntimev2#ThrottlingException": return [3, 10];
                    case "ValidationException": return [3, 12];
                    case "com.amazonaws.lexruntimev2#ValidationException": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 15;
            case 15: return [2];
        }
    });
}); };
export var deserializeAws_restJson1GetSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1GetSessionCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.interpretations != null) {
                    contents.interpretations = deserializeAws_restJson1Interpretations(data.interpretations, context);
                }
                if (data.messages != null) {
                    contents.messages = deserializeAws_restJson1Messages(data.messages, context);
                }
                if (data.sessionId != null) {
                    contents.sessionId = __expectString(data.sessionId);
                }
                if (data.sessionState != null) {
                    contents.sessionState = deserializeAws_restJson1SessionState(data.sessionState, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1GetSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.lexruntimev2#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.lexruntimev2#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.lexruntimev2#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.lexruntimev2#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.lexruntimev2#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1PutSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restJson1PutSessionCommandError(output, context)];
        }
        contents = map({
            $metadata: deserializeMetadata(output),
            contentType: [, output.headers["content-type"]],
            messages: [, output.headers["x-amz-lex-messages"]],
            sessionState: [, output.headers["x-amz-lex-session-state"]],
            requestAttributes: [, output.headers["x-amz-lex-request-attributes"]],
            sessionId: [, output.headers["x-amz-lex-session-id"]],
        });
        data = output.body;
        contents.audioStream = data;
        return [2, contents];
    });
}); };
var deserializeAws_restJson1PutSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.lexruntimev2#AccessDeniedException": return [3, 2];
                    case "BadGatewayException": return [3, 4];
                    case "com.amazonaws.lexruntimev2#BadGatewayException": return [3, 4];
                    case "ConflictException": return [3, 6];
                    case "com.amazonaws.lexruntimev2#ConflictException": return [3, 6];
                    case "DependencyFailedException": return [3, 8];
                    case "com.amazonaws.lexruntimev2#DependencyFailedException": return [3, 8];
                    case "InternalServerException": return [3, 10];
                    case "com.amazonaws.lexruntimev2#InternalServerException": return [3, 10];
                    case "ResourceNotFoundException": return [3, 12];
                    case "com.amazonaws.lexruntimev2#ResourceNotFoundException": return [3, 12];
                    case "ThrottlingException": return [3, 14];
                    case "com.amazonaws.lexruntimev2#ThrottlingException": return [3, 14];
                    case "ValidationException": return [3, 16];
                    case "com.amazonaws.lexruntimev2#ValidationException": return [3, 16];
                }
                return [3, 18];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 15: throw _d.sent();
            case 16: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 17: throw _d.sent();
            case 18:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 19;
            case 19: return [2];
        }
    });
}); };
export var deserializeAws_restJson1RecognizeTextCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1RecognizeTextCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
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
                    contents.sessionId = __expectString(data.sessionId);
                }
                if (data.sessionState != null) {
                    contents.sessionState = deserializeAws_restJson1SessionState(data.sessionState, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1RecognizeTextCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.lexruntimev2#AccessDeniedException": return [3, 2];
                    case "BadGatewayException": return [3, 4];
                    case "com.amazonaws.lexruntimev2#BadGatewayException": return [3, 4];
                    case "ConflictException": return [3, 6];
                    case "com.amazonaws.lexruntimev2#ConflictException": return [3, 6];
                    case "DependencyFailedException": return [3, 8];
                    case "com.amazonaws.lexruntimev2#DependencyFailedException": return [3, 8];
                    case "InternalServerException": return [3, 10];
                    case "com.amazonaws.lexruntimev2#InternalServerException": return [3, 10];
                    case "ResourceNotFoundException": return [3, 12];
                    case "com.amazonaws.lexruntimev2#ResourceNotFoundException": return [3, 12];
                    case "ThrottlingException": return [3, 14];
                    case "com.amazonaws.lexruntimev2#ThrottlingException": return [3, 14];
                    case "ValidationException": return [3, 16];
                    case "com.amazonaws.lexruntimev2#ValidationException": return [3, 16];
                }
                return [3, 18];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 15: throw _d.sent();
            case 16: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 17: throw _d.sent();
            case 18:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 19;
            case 19: return [2];
        }
    });
}); };
export var deserializeAws_restJson1RecognizeUtteranceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restJson1RecognizeUtteranceCommandError(output, context)];
        }
        contents = map({
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
        data = output.body;
        contents.audioStream = data;
        return [2, contents];
    });
}); };
var deserializeAws_restJson1RecognizeUtteranceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.lexruntimev2#AccessDeniedException": return [3, 2];
                    case "BadGatewayException": return [3, 4];
                    case "com.amazonaws.lexruntimev2#BadGatewayException": return [3, 4];
                    case "ConflictException": return [3, 6];
                    case "com.amazonaws.lexruntimev2#ConflictException": return [3, 6];
                    case "DependencyFailedException": return [3, 8];
                    case "com.amazonaws.lexruntimev2#DependencyFailedException": return [3, 8];
                    case "InternalServerException": return [3, 10];
                    case "com.amazonaws.lexruntimev2#InternalServerException": return [3, 10];
                    case "ResourceNotFoundException": return [3, 12];
                    case "com.amazonaws.lexruntimev2#ResourceNotFoundException": return [3, 12];
                    case "ThrottlingException": return [3, 14];
                    case "com.amazonaws.lexruntimev2#ThrottlingException": return [3, 14];
                    case "ValidationException": return [3, 16];
                    case "com.amazonaws.lexruntimev2#ValidationException": return [3, 16];
                }
                return [3, 18];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 15: throw _d.sent();
            case 16: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 17: throw _d.sent();
            case 18:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 19;
            case 19: return [2];
        }
    });
}); };
export var deserializeAws_restJson1StartConversationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restJson1StartConversationCommandError(output, context)];
        }
        contents = map({
            $metadata: deserializeMetadata(output),
        });
        data = output.body;
        contents.responseEventStream = deserializeAws_restJson1StartConversationResponseEventStream(data, context);
        return [2, contents];
    });
}); };
var deserializeAws_restJson1StartConversationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.lexruntimev2#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.lexruntimev2#InternalServerException": return [3, 4];
                    case "ThrottlingException": return [3, 6];
                    case "com.amazonaws.lexruntimev2#ThrottlingException": return [3, 6];
                    case "ValidationException": return [3, 8];
                    case "com.amazonaws.lexruntimev2#ValidationException": return [3, 8];
                }
                return [3, 10];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 11;
            case 11: return [2];
        }
    });
}); };
var map = __map;
var deserializeAws_restJson1AccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new AccessDeniedException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1BadGatewayExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new BadGatewayException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1ConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new ConflictException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1DependencyFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new DependencyFailedException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1InternalServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new InternalServerException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new ResourceNotFoundException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new ThrottlingException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1ValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new ValidationException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var serializeAws_restJson1StartConversationRequestEventStream = function (input, context) {
    var eventMarshallingVisitor = function (event) {
        return StartConversationRequestEventStream.visit(event, {
            ConfigurationEvent: function (value) { return serializeAws_restJson1ConfigurationEvent_event(value, context); },
            AudioInputEvent: function (value) { return serializeAws_restJson1AudioInputEvent_event(value, context); },
            DTMFInputEvent: function (value) { return serializeAws_restJson1DTMFInputEvent_event(value, context); },
            TextInputEvent: function (value) { return serializeAws_restJson1TextInputEvent_event(value, context); },
            PlaybackCompletionEvent: function (value) { return serializeAws_restJson1PlaybackCompletionEvent_event(value, context); },
            DisconnectionEvent: function (value) { return serializeAws_restJson1DisconnectionEvent_event(value, context); },
            _: function (value) { return value; },
        });
    };
    return context.eventStreamMarshaller.serialize(input, eventMarshallingVisitor);
};
var serializeAws_restJson1AudioInputEvent_event = function (input, context) {
    var headers = {
        ":event-type": { type: "string", value: "AudioInputEvent" },
        ":message-type": { type: "string", value: "event" },
        ":content-type": { type: "string", value: "application/json" },
    };
    var body = new Uint8Array();
    body = serializeAws_restJson1AudioInputEvent(input, context);
    body = context.utf8Decoder(JSON.stringify(body));
    return { headers: headers, body: body };
};
var serializeAws_restJson1ConfigurationEvent_event = function (input, context) {
    var headers = {
        ":event-type": { type: "string", value: "ConfigurationEvent" },
        ":message-type": { type: "string", value: "event" },
        ":content-type": { type: "string", value: "application/json" },
    };
    var body = new Uint8Array();
    body = serializeAws_restJson1ConfigurationEvent(input, context);
    body = context.utf8Decoder(JSON.stringify(body));
    return { headers: headers, body: body };
};
var serializeAws_restJson1DisconnectionEvent_event = function (input, context) {
    var headers = {
        ":event-type": { type: "string", value: "DisconnectionEvent" },
        ":message-type": { type: "string", value: "event" },
        ":content-type": { type: "string", value: "application/json" },
    };
    var body = new Uint8Array();
    body = serializeAws_restJson1DisconnectionEvent(input, context);
    body = context.utf8Decoder(JSON.stringify(body));
    return { headers: headers, body: body };
};
var serializeAws_restJson1DTMFInputEvent_event = function (input, context) {
    var headers = {
        ":event-type": { type: "string", value: "DTMFInputEvent" },
        ":message-type": { type: "string", value: "event" },
        ":content-type": { type: "string", value: "application/json" },
    };
    var body = new Uint8Array();
    body = serializeAws_restJson1DTMFInputEvent(input, context);
    body = context.utf8Decoder(JSON.stringify(body));
    return { headers: headers, body: body };
};
var serializeAws_restJson1PlaybackCompletionEvent_event = function (input, context) {
    var headers = {
        ":event-type": { type: "string", value: "PlaybackCompletionEvent" },
        ":message-type": { type: "string", value: "event" },
        ":content-type": { type: "string", value: "application/json" },
    };
    var body = new Uint8Array();
    body = serializeAws_restJson1PlaybackCompletionEvent(input, context);
    body = context.utf8Decoder(JSON.stringify(body));
    return { headers: headers, body: body };
};
var serializeAws_restJson1TextInputEvent_event = function (input, context) {
    var headers = {
        ":event-type": { type: "string", value: "TextInputEvent" },
        ":message-type": { type: "string", value: "event" },
        ":content-type": { type: "string", value: "application/json" },
    };
    var body = new Uint8Array();
    body = serializeAws_restJson1TextInputEvent(input, context);
    body = context.utf8Decoder(JSON.stringify(body));
    return { headers: headers, body: body };
};
var deserializeAws_restJson1StartConversationResponseEventStream = function (output, context) {
    return context.eventStreamMarshaller.deserialize(output, function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return __generator(this, function (_q) {
            switch (_q.label) {
                case 0:
                    if (!(event["PlaybackInterruptionEvent"] != null)) return [3, 2];
                    _a = {};
                    return [4, deserializeAws_restJson1PlaybackInterruptionEvent_event(event["PlaybackInterruptionEvent"], context)];
                case 1: return [2, (_a.PlaybackInterruptionEvent = _q.sent(),
                        _a)];
                case 2:
                    if (!(event["TranscriptEvent"] != null)) return [3, 4];
                    _b = {};
                    return [4, deserializeAws_restJson1TranscriptEvent_event(event["TranscriptEvent"], context)];
                case 3: return [2, (_b.TranscriptEvent = _q.sent(),
                        _b)];
                case 4:
                    if (!(event["IntentResultEvent"] != null)) return [3, 6];
                    _c = {};
                    return [4, deserializeAws_restJson1IntentResultEvent_event(event["IntentResultEvent"], context)];
                case 5: return [2, (_c.IntentResultEvent = _q.sent(),
                        _c)];
                case 6:
                    if (!(event["TextResponseEvent"] != null)) return [3, 8];
                    _d = {};
                    return [4, deserializeAws_restJson1TextResponseEvent_event(event["TextResponseEvent"], context)];
                case 7: return [2, (_d.TextResponseEvent = _q.sent(),
                        _d)];
                case 8:
                    if (!(event["AudioResponseEvent"] != null)) return [3, 10];
                    _e = {};
                    return [4, deserializeAws_restJson1AudioResponseEvent_event(event["AudioResponseEvent"], context)];
                case 9: return [2, (_e.AudioResponseEvent = _q.sent(),
                        _e)];
                case 10:
                    if (!(event["HeartbeatEvent"] != null)) return [3, 12];
                    _f = {};
                    return [4, deserializeAws_restJson1HeartbeatEvent_event(event["HeartbeatEvent"], context)];
                case 11: return [2, (_f.HeartbeatEvent = _q.sent(),
                        _f)];
                case 12:
                    if (!(event["AccessDeniedException"] != null)) return [3, 14];
                    _g = {};
                    return [4, deserializeAws_restJson1AccessDeniedException_event(event["AccessDeniedException"], context)];
                case 13: return [2, (_g.AccessDeniedException = _q.sent(),
                        _g)];
                case 14:
                    if (!(event["ResourceNotFoundException"] != null)) return [3, 16];
                    _h = {};
                    return [4, deserializeAws_restJson1ResourceNotFoundException_event(event["ResourceNotFoundException"], context)];
                case 15: return [2, (_h.ResourceNotFoundException = _q.sent(),
                        _h)];
                case 16:
                    if (!(event["ValidationException"] != null)) return [3, 18];
                    _j = {};
                    return [4, deserializeAws_restJson1ValidationException_event(event["ValidationException"], context)];
                case 17: return [2, (_j.ValidationException = _q.sent(),
                        _j)];
                case 18:
                    if (!(event["ThrottlingException"] != null)) return [3, 20];
                    _k = {};
                    return [4, deserializeAws_restJson1ThrottlingException_event(event["ThrottlingException"], context)];
                case 19: return [2, (_k.ThrottlingException = _q.sent(),
                        _k)];
                case 20:
                    if (!(event["InternalServerException"] != null)) return [3, 22];
                    _l = {};
                    return [4, deserializeAws_restJson1InternalServerException_event(event["InternalServerException"], context)];
                case 21: return [2, (_l.InternalServerException = _q.sent(),
                        _l)];
                case 22:
                    if (!(event["ConflictException"] != null)) return [3, 24];
                    _m = {};
                    return [4, deserializeAws_restJson1ConflictException_event(event["ConflictException"], context)];
                case 23: return [2, (_m.ConflictException = _q.sent(),
                        _m)];
                case 24:
                    if (!(event["DependencyFailedException"] != null)) return [3, 26];
                    _o = {};
                    return [4, deserializeAws_restJson1DependencyFailedException_event(event["DependencyFailedException"], context)];
                case 25: return [2, (_o.DependencyFailedException = _q.sent(),
                        _o)];
                case 26:
                    if (!(event["BadGatewayException"] != null)) return [3, 28];
                    _p = {};
                    return [4, deserializeAws_restJson1BadGatewayException_event(event["BadGatewayException"], context)];
                case 27: return [2, (_p.BadGatewayException = _q.sent(),
                        _p)];
                case 28: return [2, { $unknown: output }];
            }
        });
    }); });
};
var deserializeAws_restJson1AccessDeniedException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1AudioResponseEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                Object.assign(contents, deserializeAws_restJson1AudioResponseEvent(data, context));
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1BadGatewayException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1ConflictException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1DependencyFailedException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1HeartbeatEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                Object.assign(contents, deserializeAws_restJson1HeartbeatEvent(data, context));
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1IntentResultEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                Object.assign(contents, deserializeAws_restJson1IntentResultEvent(data, context));
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1InternalServerException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1PlaybackInterruptionEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                Object.assign(contents, deserializeAws_restJson1PlaybackInterruptionEvent(data, context));
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1ResourceNotFoundException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1TextResponseEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                Object.assign(contents, deserializeAws_restJson1TextResponseEvent(data, context));
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1ThrottlingException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1TranscriptEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                Object.assign(contents, deserializeAws_restJson1TranscriptEvent(data, context));
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1ValidationException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var serializeAws_restJson1ActiveContext = function (input, context) {
    return __assign(__assign(__assign({}, (input.contextAttributes != null && {
        contextAttributes: serializeAws_restJson1ActiveContextParametersMap(input.contextAttributes, context),
    })), (input.name != null && { name: input.name })), (input.timeToLive != null && {
        timeToLive: serializeAws_restJson1ActiveContextTimeToLive(input.timeToLive, context),
    }));
};
var serializeAws_restJson1ActiveContextParametersMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1ActiveContextsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return serializeAws_restJson1ActiveContext(entry, context);
    });
};
var serializeAws_restJson1ActiveContextTimeToLive = function (input, context) {
    return __assign(__assign({}, (input.timeToLiveInSeconds != null && { timeToLiveInSeconds: input.timeToLiveInSeconds })), (input.turnsToLive != null && { turnsToLive: input.turnsToLive }));
};
var serializeAws_restJson1AudioInputEvent = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.audioChunk != null && { audioChunk: context.base64Encoder(input.audioChunk) })), (input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis })), (input.contentType != null && { contentType: input.contentType })), (input.eventId != null && { eventId: input.eventId }));
};
var serializeAws_restJson1Button = function (input, context) {
    return __assign(__assign({}, (input.text != null && { text: input.text })), (input.value != null && { value: input.value }));
};
var serializeAws_restJson1ButtonsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return serializeAws_restJson1Button(entry, context);
    });
};
var serializeAws_restJson1ConfigurationEvent = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis })), (input.disablePlayback != null && { disablePlayback: input.disablePlayback })), (input.eventId != null && { eventId: input.eventId })), (input.requestAttributes != null && {
        requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
    })), (input.responseContentType != null && { responseContentType: input.responseContentType })), (input.sessionState != null && {
        sessionState: serializeAws_restJson1SessionState(input.sessionState, context),
    })), (input.welcomeMessages != null && {
        welcomeMessages: serializeAws_restJson1Messages(input.welcomeMessages, context),
    }));
};
var serializeAws_restJson1DialogAction = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.slotElicitationStyle != null && { slotElicitationStyle: input.slotElicitationStyle })), (input.slotToElicit != null && { slotToElicit: input.slotToElicit })), (input.subSlotToElicit != null && {
        subSlotToElicit: serializeAws_restJson1ElicitSubSlot(input.subSlotToElicit, context),
    })), (input.type != null && { type: input.type }));
};
var serializeAws_restJson1DisconnectionEvent = function (input, context) {
    return __assign(__assign({}, (input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis })), (input.eventId != null && { eventId: input.eventId }));
};
var serializeAws_restJson1DTMFInputEvent = function (input, context) {
    return __assign(__assign(__assign({}, (input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis })), (input.eventId != null && { eventId: input.eventId })), (input.inputCharacter != null && { inputCharacter: input.inputCharacter }));
};
var serializeAws_restJson1ElicitSubSlot = function (input, context) {
    return __assign(__assign({}, (input.name != null && { name: input.name })), (input.subSlotToElicit != null && {
        subSlotToElicit: serializeAws_restJson1ElicitSubSlot(input.subSlotToElicit, context),
    }));
};
var serializeAws_restJson1ImageResponseCard = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.buttons != null && { buttons: serializeAws_restJson1ButtonsList(input.buttons, context) })), (input.imageUrl != null && { imageUrl: input.imageUrl })), (input.subtitle != null && { subtitle: input.subtitle })), (input.title != null && { title: input.title }));
};
var serializeAws_restJson1Intent = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.confirmationState != null && { confirmationState: input.confirmationState })), (input.name != null && { name: input.name })), (input.slots != null && { slots: serializeAws_restJson1Slots(input.slots, context) })), (input.state != null && { state: input.state }));
};
var serializeAws_restJson1Message = function (input, context) {
    return __assign(__assign(__assign({}, (input.content != null && { content: input.content })), (input.contentType != null && { contentType: input.contentType })), (input.imageResponseCard != null && {
        imageResponseCard: serializeAws_restJson1ImageResponseCard(input.imageResponseCard, context),
    }));
};
var serializeAws_restJson1Messages = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return serializeAws_restJson1Message(entry, context);
    });
};
var serializeAws_restJson1PlaybackCompletionEvent = function (input, context) {
    return __assign(__assign({}, (input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis })), (input.eventId != null && { eventId: input.eventId }));
};
var serializeAws_restJson1RuntimeHintDetails = function (input, context) {
    return __assign(__assign({}, (input.runtimeHintValues != null && {
        runtimeHintValues: serializeAws_restJson1RuntimeHintValuesList(input.runtimeHintValues, context),
    })), (input.subSlotHints != null && {
        subSlotHints: serializeAws_restJson1SlotHintsSlotMap(input.subSlotHints, context),
    }));
};
var serializeAws_restJson1RuntimeHints = function (input, context) {
    return __assign({}, (input.slotHints != null && { slotHints: serializeAws_restJson1SlotHintsIntentMap(input.slotHints, context) }));
};
var serializeAws_restJson1RuntimeHintValue = function (input, context) {
    return __assign({}, (input.phrase != null && { phrase: input.phrase }));
};
var serializeAws_restJson1RuntimeHintValuesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return serializeAws_restJson1RuntimeHintValue(entry, context);
    });
};
var serializeAws_restJson1SessionState = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.activeContexts != null && {
        activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
    })), (input.dialogAction != null && {
        dialogAction: serializeAws_restJson1DialogAction(input.dialogAction, context),
    })), (input.intent != null && { intent: serializeAws_restJson1Intent(input.intent, context) })), (input.originatingRequestId != null && { originatingRequestId: input.originatingRequestId })), (input.runtimeHints != null && {
        runtimeHints: serializeAws_restJson1RuntimeHints(input.runtimeHints, context),
    })), (input.sessionAttributes != null && {
        sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
    }));
};
var serializeAws_restJson1Slot = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.shape != null && { shape: input.shape })), (input.subSlots != null && { subSlots: serializeAws_restJson1Slots(input.subSlots, context) })), (input.value != null && { value: serializeAws_restJson1Value(input.value, context) })), (input.values != null && { values: serializeAws_restJson1Values(input.values, context) }));
};
var serializeAws_restJson1SlotHintsIntentMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1SlotHintsSlotMap(value, context), _b));
    }, {});
};
var serializeAws_restJson1SlotHintsSlotMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1RuntimeHintDetails(value, context), _b));
    }, {});
};
var serializeAws_restJson1Slots = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1Slot(value, context), _b));
    }, {});
};
var serializeAws_restJson1StringList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return entry;
    });
};
var serializeAws_restJson1StringMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1TextInputEvent = function (input, context) {
    return __assign(__assign(__assign({}, (input.clientTimestampMillis != null && { clientTimestampMillis: input.clientTimestampMillis })), (input.eventId != null && { eventId: input.eventId })), (input.text != null && { text: input.text }));
};
var serializeAws_restJson1Value = function (input, context) {
    return __assign(__assign(__assign({}, (input.interpretedValue != null && { interpretedValue: input.interpretedValue })), (input.originalValue != null && { originalValue: input.originalValue })), (input.resolvedValues != null && {
        resolvedValues: serializeAws_restJson1StringList(input.resolvedValues, context),
    }));
};
var serializeAws_restJson1Values = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return serializeAws_restJson1Slot(entry, context);
    });
};
var deserializeAws_restJson1ActiveContext = function (output, context) {
    return {
        contextAttributes: output.contextAttributes != null
            ? deserializeAws_restJson1ActiveContextParametersMap(output.contextAttributes, context)
            : undefined,
        name: __expectString(output.name),
        timeToLive: output.timeToLive != null
            ? deserializeAws_restJson1ActiveContextTimeToLive(output.timeToLive, context)
            : undefined,
    };
};
var deserializeAws_restJson1ActiveContextParametersMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = __expectString(value), _b));
    }, {});
};
var deserializeAws_restJson1ActiveContextsList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ActiveContext(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1ActiveContextTimeToLive = function (output, context) {
    return {
        timeToLiveInSeconds: __expectInt32(output.timeToLiveInSeconds),
        turnsToLive: __expectInt32(output.turnsToLive),
    };
};
var deserializeAws_restJson1AudioResponseEvent = function (output, context) {
    return {
        audioChunk: output.audioChunk != null ? context.base64Decoder(output.audioChunk) : undefined,
        contentType: __expectString(output.contentType),
        eventId: __expectString(output.eventId),
    };
};
var deserializeAws_restJson1Button = function (output, context) {
    return {
        text: __expectString(output.text),
        value: __expectString(output.value),
    };
};
var deserializeAws_restJson1ButtonsList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Button(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1ConfidenceScore = function (output, context) {
    return {
        score: __limitedParseDouble(output.score),
    };
};
var deserializeAws_restJson1DialogAction = function (output, context) {
    return {
        slotElicitationStyle: __expectString(output.slotElicitationStyle),
        slotToElicit: __expectString(output.slotToElicit),
        subSlotToElicit: output.subSlotToElicit != null
            ? deserializeAws_restJson1ElicitSubSlot(output.subSlotToElicit, context)
            : undefined,
        type: __expectString(output.type),
    };
};
var deserializeAws_restJson1ElicitSubSlot = function (output, context) {
    return {
        name: __expectString(output.name),
        subSlotToElicit: output.subSlotToElicit != null
            ? deserializeAws_restJson1ElicitSubSlot(output.subSlotToElicit, context)
            : undefined,
    };
};
var deserializeAws_restJson1HeartbeatEvent = function (output, context) {
    return {
        eventId: __expectString(output.eventId),
    };
};
var deserializeAws_restJson1ImageResponseCard = function (output, context) {
    return {
        buttons: output.buttons != null ? deserializeAws_restJson1ButtonsList(output.buttons, context) : undefined,
        imageUrl: __expectString(output.imageUrl),
        subtitle: __expectString(output.subtitle),
        title: __expectString(output.title),
    };
};
var deserializeAws_restJson1Intent = function (output, context) {
    return {
        confirmationState: __expectString(output.confirmationState),
        name: __expectString(output.name),
        slots: output.slots != null ? deserializeAws_restJson1Slots(output.slots, context) : undefined,
        state: __expectString(output.state),
    };
};
var deserializeAws_restJson1IntentResultEvent = function (output, context) {
    return {
        eventId: __expectString(output.eventId),
        inputMode: __expectString(output.inputMode),
        interpretations: output.interpretations != null
            ? deserializeAws_restJson1Interpretations(output.interpretations, context)
            : undefined,
        requestAttributes: output.requestAttributes != null
            ? deserializeAws_restJson1StringMap(output.requestAttributes, context)
            : undefined,
        sessionId: __expectString(output.sessionId),
        sessionState: output.sessionState != null ? deserializeAws_restJson1SessionState(output.sessionState, context) : undefined,
    };
};
var deserializeAws_restJson1Interpretation = function (output, context) {
    return {
        intent: output.intent != null ? deserializeAws_restJson1Intent(output.intent, context) : undefined,
        nluConfidence: output.nluConfidence != null ? deserializeAws_restJson1ConfidenceScore(output.nluConfidence, context) : undefined,
        sentimentResponse: output.sentimentResponse != null
            ? deserializeAws_restJson1SentimentResponse(output.sentimentResponse, context)
            : undefined,
    };
};
var deserializeAws_restJson1Interpretations = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Interpretation(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1Message = function (output, context) {
    return {
        content: __expectString(output.content),
        contentType: __expectString(output.contentType),
        imageResponseCard: output.imageResponseCard != null
            ? deserializeAws_restJson1ImageResponseCard(output.imageResponseCard, context)
            : undefined,
    };
};
var deserializeAws_restJson1Messages = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Message(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1PlaybackInterruptionEvent = function (output, context) {
    return {
        causedByEventId: __expectString(output.causedByEventId),
        eventId: __expectString(output.eventId),
        eventReason: __expectString(output.eventReason),
    };
};
var deserializeAws_restJson1RuntimeHintDetails = function (output, context) {
    return {
        runtimeHintValues: output.runtimeHintValues != null
            ? deserializeAws_restJson1RuntimeHintValuesList(output.runtimeHintValues, context)
            : undefined,
        subSlotHints: output.subSlotHints != null ? deserializeAws_restJson1SlotHintsSlotMap(output.subSlotHints, context) : undefined,
    };
};
var deserializeAws_restJson1RuntimeHints = function (output, context) {
    return {
        slotHints: output.slotHints != null ? deserializeAws_restJson1SlotHintsIntentMap(output.slotHints, context) : undefined,
    };
};
var deserializeAws_restJson1RuntimeHintValue = function (output, context) {
    return {
        phrase: __expectString(output.phrase),
    };
};
var deserializeAws_restJson1RuntimeHintValuesList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RuntimeHintValue(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1SentimentResponse = function (output, context) {
    return {
        sentiment: __expectString(output.sentiment),
        sentimentScore: output.sentimentScore != null
            ? deserializeAws_restJson1SentimentScore(output.sentimentScore, context)
            : undefined,
    };
};
var deserializeAws_restJson1SentimentScore = function (output, context) {
    return {
        mixed: __limitedParseDouble(output.mixed),
        negative: __limitedParseDouble(output.negative),
        neutral: __limitedParseDouble(output.neutral),
        positive: __limitedParseDouble(output.positive),
    };
};
var deserializeAws_restJson1SessionState = function (output, context) {
    return {
        activeContexts: output.activeContexts != null
            ? deserializeAws_restJson1ActiveContextsList(output.activeContexts, context)
            : undefined,
        dialogAction: output.dialogAction != null ? deserializeAws_restJson1DialogAction(output.dialogAction, context) : undefined,
        intent: output.intent != null ? deserializeAws_restJson1Intent(output.intent, context) : undefined,
        originatingRequestId: __expectString(output.originatingRequestId),
        runtimeHints: output.runtimeHints != null ? deserializeAws_restJson1RuntimeHints(output.runtimeHints, context) : undefined,
        sessionAttributes: output.sessionAttributes != null
            ? deserializeAws_restJson1StringMap(output.sessionAttributes, context)
            : undefined,
    };
};
var deserializeAws_restJson1Slot = function (output, context) {
    return {
        shape: __expectString(output.shape),
        subSlots: output.subSlots != null ? deserializeAws_restJson1Slots(output.subSlots, context) : undefined,
        value: output.value != null ? deserializeAws_restJson1Value(output.value, context) : undefined,
        values: output.values != null ? deserializeAws_restJson1Values(output.values, context) : undefined,
    };
};
var deserializeAws_restJson1SlotHintsIntentMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1SlotHintsSlotMap(value, context), _b));
    }, {});
};
var deserializeAws_restJson1SlotHintsSlotMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1RuntimeHintDetails(value, context), _b));
    }, {});
};
var deserializeAws_restJson1Slots = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1Slot(value, context), _b));
    }, {});
};
var deserializeAws_restJson1StringList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return __expectString(entry);
    });
    return retVal;
};
var deserializeAws_restJson1StringMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = __expectString(value), _b));
    }, {});
};
var deserializeAws_restJson1TextResponseEvent = function (output, context) {
    return {
        eventId: __expectString(output.eventId),
        messages: output.messages != null ? deserializeAws_restJson1Messages(output.messages, context) : undefined,
    };
};
var deserializeAws_restJson1TranscriptEvent = function (output, context) {
    return {
        eventId: __expectString(output.eventId),
        transcript: __expectString(output.transcript),
    };
};
var deserializeAws_restJson1Value = function (output, context) {
    return {
        interpretedValue: __expectString(output.interpretedValue),
        originalValue: __expectString(output.originalValue),
        resolvedValues: output.resolvedValues != null ? deserializeAws_restJson1StringList(output.resolvedValues, context) : undefined,
    };
};
var deserializeAws_restJson1Values = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Slot(entry, context);
    });
    return retVal;
};
var deserializeMetadata = function (output) {
    var _a, _b;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_b = (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"]) !== null && _b !== void 0 ? _b : output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var isSerializableHeaderValue = function (value) {
    return value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
var parseErrorBody = function (errorBody, context) { return __awaiter(void 0, void 0, void 0, function () {
    var value;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4, parseBody(errorBody, context)];
            case 1:
                value = _b.sent();
                value.message = (_a = value.message) !== null && _a !== void 0 ? _a : value.Message;
                return [2, value];
        }
    });
}); };
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
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
    var headerKey = findKey(output.headers, "x-amzn-errortype");
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
