import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { decorateServiceException as __decorateServiceException, expectInt32 as __expectInt32, expectNonNull as __expectNonNull, expectObject as __expectObject, expectString as __expectString, LazyJsonString as __LazyJsonString, limitedParseDouble as __limitedParseDouble, map as __map, resolvedPath as __resolvedPath, throwDefaultError, } from "@aws-sdk/smithy-client";
import { LexRuntimeServiceServiceException as __BaseException } from "../models/LexRuntimeServiceServiceException";
import { BadGatewayException, BadRequestException, ConflictException, DependencyFailedException, InternalFailureException, LimitExceededException, LoopDetectedException, NotAcceptableException, NotFoundException, RequestTimeoutException, UnsupportedMediaTypeException, } from "../models/models_0";
export var serializeAws_restJson1DeleteSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
                resolvedPath = __resolvedPath(resolvedPath, input, "botName", function () { return input.botName; }, "{botName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", function () { return input.botAlias; }, "{botAlias}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "userId", function () { return input.userId; }, "{userId}", false);
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
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, query, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
                resolvedPath = __resolvedPath(resolvedPath, input, "botName", function () { return input.botName; }, "{botName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", function () { return input.botAlias; }, "{botAlias}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "userId", function () { return input.userId; }, "{userId}", false);
                query = map({
                    checkpointLabelFilter: [, input.checkpointLabelFilter],
                });
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PostContentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = map({}, isSerializableHeaderValue, {
                    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
                    "content-type": input.contentType || "application/octet-stream",
                    "x-amz-lex-session-attributes": [
                        function () { return isSerializableHeaderValue(input.sessionAttributes); },
                        function () { return context.base64Encoder(Buffer.from(__LazyJsonString.fromObject(input.sessionAttributes))); },
                    ],
                    "x-amz-lex-request-attributes": [
                        function () { return isSerializableHeaderValue(input.requestAttributes); },
                        function () { return context.base64Encoder(Buffer.from(__LazyJsonString.fromObject(input.requestAttributes))); },
                    ],
                    accept: input.accept,
                    "x-amz-lex-active-contexts": [
                        function () { return isSerializableHeaderValue(input.activeContexts); },
                        function () { return context.base64Encoder(Buffer.from(__LazyJsonString.fromObject(input.activeContexts))); },
                    ],
                });
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/bot/{botName}/alias/{botAlias}/user/{userId}/content";
                resolvedPath = __resolvedPath(resolvedPath, input, "botName", function () { return input.botName; }, "{botName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", function () { return input.botAlias; }, "{botAlias}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "userId", function () { return input.userId; }, "{userId}", false);
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
export var serializeAws_restJson1PostTextCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    "/bot/{botName}/alias/{botAlias}/user/{userId}/text";
                resolvedPath = __resolvedPath(resolvedPath, input, "botName", function () { return input.botName; }, "{botName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", function () { return input.botAlias; }, "{botAlias}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "userId", function () { return input.userId; }, "{userId}", false);
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.activeContexts != null && {
                    activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
                })), (input.inputText != null && { inputText: input.inputText })), (input.requestAttributes != null && {
                    requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
                })), (input.sessionAttributes != null && {
                    sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
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
export var serializeAws_restJson1PutSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = map({}, isSerializableHeaderValue, {
                    "content-type": "application/json",
                    accept: input.accept,
                });
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
                resolvedPath = __resolvedPath(resolvedPath, input, "botName", function () { return input.botName; }, "{botName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "botAlias", function () { return input.botAlias; }, "{botAlias}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "userId", function () { return input.userId; }, "{userId}", false);
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.activeContexts != null && {
                    activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
                })), (input.dialogAction != null && {
                    dialogAction: serializeAws_restJson1DialogAction(input.dialogAction, context),
                })), (input.recentIntentSummaryView != null && {
                    recentIntentSummaryView: serializeAws_restJson1IntentSummaryList(input.recentIntentSummaryView, context),
                })), (input.sessionAttributes != null && {
                    sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
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
                if (data.botAlias != null) {
                    contents.botAlias = __expectString(data.botAlias);
                }
                if (data.botName != null) {
                    contents.botName = __expectString(data.botName);
                }
                if (data.sessionId != null) {
                    contents.sessionId = __expectString(data.sessionId);
                }
                if (data.userId != null) {
                    contents.userId = __expectString(data.userId);
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
                    case "BadRequestException": return [3, 2];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3, 2];
                    case "ConflictException": return [3, 4];
                    case "com.amazonaws.lexruntimeservice#ConflictException": return [3, 4];
                    case "InternalFailureException": return [3, 6];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3, 6];
                    case "LimitExceededException": return [3, 8];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3, 8];
                    case "NotFoundException": return [3, 10];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
                    contents.sessionId = __expectString(data.sessionId);
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
                    case "BadRequestException": return [3, 2];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3, 2];
                    case "InternalFailureException": return [3, 4];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3, 4];
                    case "LimitExceededException": return [3, 6];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3, 6];
                    case "NotFoundException": return [3, 8];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3, 8];
                }
                return [3, 10];
            case 2: return [4, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PostContentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restJson1PostContentCommandError(output, context)];
        }
        contents = map({
            $metadata: deserializeMetadata(output),
            contentType: [, output.headers["content-type"]],
            intentName: [, output.headers["x-amz-lex-intent-name"]],
            nluIntentConfidence: [
                function () { return void 0 !== output.headers["x-amz-lex-nlu-intent-confidence"]; },
                function () {
                    return new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-nlu-intent-confidence"])).toString("utf8"));
                },
            ],
            alternativeIntents: [
                function () { return void 0 !== output.headers["x-amz-lex-alternative-intents"]; },
                function () {
                    return new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-alternative-intents"])).toString("utf8"));
                },
            ],
            slots: [
                function () { return void 0 !== output.headers["x-amz-lex-slots"]; },
                function () {
                    return new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-slots"])).toString("utf8"));
                },
            ],
            sessionAttributes: [
                function () { return void 0 !== output.headers["x-amz-lex-session-attributes"]; },
                function () {
                    return new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-session-attributes"])).toString("utf8"));
                },
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
                function () { return void 0 !== output.headers["x-amz-lex-active-contexts"]; },
                function () {
                    return new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-active-contexts"])).toString("utf8"));
                },
            ],
        });
        data = output.body;
        contents.audioStream = data;
        return [2, contents];
    });
}); };
var deserializeAws_restJson1PostContentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadGatewayException": return [3, 2];
                    case "com.amazonaws.lexruntimeservice#BadGatewayException": return [3, 2];
                    case "BadRequestException": return [3, 4];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3, 4];
                    case "ConflictException": return [3, 6];
                    case "com.amazonaws.lexruntimeservice#ConflictException": return [3, 6];
                    case "DependencyFailedException": return [3, 8];
                    case "com.amazonaws.lexruntimeservice#DependencyFailedException": return [3, 8];
                    case "InternalFailureException": return [3, 10];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3, 10];
                    case "LimitExceededException": return [3, 12];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3, 12];
                    case "LoopDetectedException": return [3, 14];
                    case "com.amazonaws.lexruntimeservice#LoopDetectedException": return [3, 14];
                    case "NotAcceptableException": return [3, 16];
                    case "com.amazonaws.lexruntimeservice#NotAcceptableException": return [3, 16];
                    case "NotFoundException": return [3, 18];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3, 18];
                    case "RequestTimeoutException": return [3, 20];
                    case "com.amazonaws.lexruntimeservice#RequestTimeoutException": return [3, 20];
                    case "UnsupportedMediaTypeException": return [3, 22];
                    case "com.amazonaws.lexruntimeservice#UnsupportedMediaTypeException": return [3, 22];
                }
                return [3, 24];
            case 2: return [4, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14: return [4, deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context)];
            case 15: throw _d.sent();
            case 16: return [4, deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context)];
            case 17: throw _d.sent();
            case 18: return [4, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 19: throw _d.sent();
            case 20: return [4, deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)];
            case 21: throw _d.sent();
            case 22: return [4, deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse(parsedOutput, context)];
            case 23: throw _d.sent();
            case 24:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 25;
            case 25: return [2];
        }
    });
}); };
export var deserializeAws_restJson1PostTextCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1PostTextCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.activeContexts != null) {
                    contents.activeContexts = deserializeAws_restJson1ActiveContextsList(data.activeContexts, context);
                }
                if (data.alternativeIntents != null) {
                    contents.alternativeIntents = deserializeAws_restJson1IntentList(data.alternativeIntents, context);
                }
                if (data.botVersion != null) {
                    contents.botVersion = __expectString(data.botVersion);
                }
                if (data.dialogState != null) {
                    contents.dialogState = __expectString(data.dialogState);
                }
                if (data.intentName != null) {
                    contents.intentName = __expectString(data.intentName);
                }
                if (data.message != null) {
                    contents.message = __expectString(data.message);
                }
                if (data.messageFormat != null) {
                    contents.messageFormat = __expectString(data.messageFormat);
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
                    contents.sessionId = __expectString(data.sessionId);
                }
                if (data.slotToElicit != null) {
                    contents.slotToElicit = __expectString(data.slotToElicit);
                }
                if (data.slots != null) {
                    contents.slots = deserializeAws_restJson1StringMap(data.slots, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1PostTextCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadGatewayException": return [3, 2];
                    case "com.amazonaws.lexruntimeservice#BadGatewayException": return [3, 2];
                    case "BadRequestException": return [3, 4];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3, 4];
                    case "ConflictException": return [3, 6];
                    case "com.amazonaws.lexruntimeservice#ConflictException": return [3, 6];
                    case "DependencyFailedException": return [3, 8];
                    case "com.amazonaws.lexruntimeservice#DependencyFailedException": return [3, 8];
                    case "InternalFailureException": return [3, 10];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3, 10];
                    case "LimitExceededException": return [3, 12];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3, 12];
                    case "LoopDetectedException": return [3, 14];
                    case "com.amazonaws.lexruntimeservice#LoopDetectedException": return [3, 14];
                    case "NotFoundException": return [3, 16];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3, 16];
                }
                return [3, 18];
            case 2: return [4, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14: return [4, deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context)];
            case 15: throw _d.sent();
            case 16: return [4, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2, deserializeAws_restJson1PutSessionCommandError(output, context)];
        }
        contents = map({
            $metadata: deserializeMetadata(output),
            contentType: [, output.headers["content-type"]],
            intentName: [, output.headers["x-amz-lex-intent-name"]],
            slots: [
                function () { return void 0 !== output.headers["x-amz-lex-slots"]; },
                function () {
                    return new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-slots"])).toString("utf8"));
                },
            ],
            sessionAttributes: [
                function () { return void 0 !== output.headers["x-amz-lex-session-attributes"]; },
                function () {
                    return new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-session-attributes"])).toString("utf8"));
                },
            ],
            message: [, output.headers["x-amz-lex-message"]],
            encodedMessage: [, output.headers["x-amz-lex-encoded-message"]],
            messageFormat: [, output.headers["x-amz-lex-message-format"]],
            dialogState: [, output.headers["x-amz-lex-dialog-state"]],
            slotToElicit: [, output.headers["x-amz-lex-slot-to-elicit"]],
            sessionId: [, output.headers["x-amz-lex-session-id"]],
            activeContexts: [
                function () { return void 0 !== output.headers["x-amz-lex-active-contexts"]; },
                function () {
                    return new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-amz-lex-active-contexts"])).toString("utf8"));
                },
            ],
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
                    case "BadGatewayException": return [3, 2];
                    case "com.amazonaws.lexruntimeservice#BadGatewayException": return [3, 2];
                    case "BadRequestException": return [3, 4];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3, 4];
                    case "ConflictException": return [3, 6];
                    case "com.amazonaws.lexruntimeservice#ConflictException": return [3, 6];
                    case "DependencyFailedException": return [3, 8];
                    case "com.amazonaws.lexruntimeservice#DependencyFailedException": return [3, 8];
                    case "InternalFailureException": return [3, 10];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3, 10];
                    case "LimitExceededException": return [3, 12];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3, 12];
                    case "NotAcceptableException": return [3, 14];
                    case "com.amazonaws.lexruntimeservice#NotAcceptableException": return [3, 14];
                    case "NotFoundException": return [3, 16];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3, 16];
                }
                return [3, 18];
            case 2: return [4, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14: return [4, deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context)];
            case 15: throw _d.sent();
            case 16: return [4, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
var map = __map;
var deserializeAws_restJson1BadGatewayExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.Message != null) {
            contents.Message = __expectString(data.Message);
        }
        exception = new BadGatewayException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1BadRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new BadRequestException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
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
        if (data.Message != null) {
            contents.Message = __expectString(data.Message);
        }
        exception = new DependencyFailedException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1InternalFailureExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new InternalFailureException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({
            retryAfterSeconds: [, parsedOutput.headers["retry-after"]],
        });
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new LimitExceededException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1LoopDetectedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.Message != null) {
            contents.Message = __expectString(data.Message);
        }
        exception = new LoopDetectedException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1NotAcceptableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new NotAcceptableException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1NotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new NotFoundException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1RequestTimeoutExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new RequestTimeoutException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.message = __expectString(data.message);
        }
        exception = new UnsupportedMediaTypeException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var serializeAws_restJson1ActiveContext = function (input, context) {
    return __assign(__assign(__assign({}, (input.name != null && { name: input.name })), (input.parameters != null && {
        parameters: serializeAws_restJson1ActiveContextParametersMap(input.parameters, context),
    })), (input.timeToLive != null && {
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
var serializeAws_restJson1DialogAction = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.fulfillmentState != null && { fulfillmentState: input.fulfillmentState })), (input.intentName != null && { intentName: input.intentName })), (input.message != null && { message: input.message })), (input.messageFormat != null && { messageFormat: input.messageFormat })), (input.slotToElicit != null && { slotToElicit: input.slotToElicit })), (input.slots != null && { slots: serializeAws_restJson1StringMap(input.slots, context) })), (input.type != null && { type: input.type }));
};
var serializeAws_restJson1IntentSummary = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.checkpointLabel != null && { checkpointLabel: input.checkpointLabel })), (input.confirmationStatus != null && { confirmationStatus: input.confirmationStatus })), (input.dialogActionType != null && { dialogActionType: input.dialogActionType })), (input.fulfillmentState != null && { fulfillmentState: input.fulfillmentState })), (input.intentName != null && { intentName: input.intentName })), (input.slotToElicit != null && { slotToElicit: input.slotToElicit })), (input.slots != null && { slots: serializeAws_restJson1StringMap(input.slots, context) }));
};
var serializeAws_restJson1IntentSummaryList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return serializeAws_restJson1IntentSummary(entry, context);
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
var deserializeAws_restJson1ActiveContext = function (output, context) {
    return {
        name: __expectString(output.name),
        parameters: output.parameters != null
            ? deserializeAws_restJson1ActiveContextParametersMap(output.parameters, context)
            : undefined,
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
var deserializeAws_restJson1Button = function (output, context) {
    return {
        text: __expectString(output.text),
        value: __expectString(output.value),
    };
};
var deserializeAws_restJson1DialogAction = function (output, context) {
    return {
        fulfillmentState: __expectString(output.fulfillmentState),
        intentName: __expectString(output.intentName),
        message: __expectString(output.message),
        messageFormat: __expectString(output.messageFormat),
        slotToElicit: __expectString(output.slotToElicit),
        slots: output.slots != null ? deserializeAws_restJson1StringMap(output.slots, context) : undefined,
        type: __expectString(output.type),
    };
};
var deserializeAws_restJson1GenericAttachment = function (output, context) {
    return {
        attachmentLinkUrl: __expectString(output.attachmentLinkUrl),
        buttons: output.buttons != null ? deserializeAws_restJson1listOfButtons(output.buttons, context) : undefined,
        imageUrl: __expectString(output.imageUrl),
        subTitle: __expectString(output.subTitle),
        title: __expectString(output.title),
    };
};
var deserializeAws_restJson1genericAttachmentList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GenericAttachment(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1IntentConfidence = function (output, context) {
    return {
        score: __limitedParseDouble(output.score),
    };
};
var deserializeAws_restJson1IntentList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PredictedIntent(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1IntentSummary = function (output, context) {
    return {
        checkpointLabel: __expectString(output.checkpointLabel),
        confirmationStatus: __expectString(output.confirmationStatus),
        dialogActionType: __expectString(output.dialogActionType),
        fulfillmentState: __expectString(output.fulfillmentState),
        intentName: __expectString(output.intentName),
        slotToElicit: __expectString(output.slotToElicit),
        slots: output.slots != null ? deserializeAws_restJson1StringMap(output.slots, context) : undefined,
    };
};
var deserializeAws_restJson1IntentSummaryList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IntentSummary(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1listOfButtons = function (output, context) {
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
var deserializeAws_restJson1PredictedIntent = function (output, context) {
    return {
        intentName: __expectString(output.intentName),
        nluIntentConfidence: output.nluIntentConfidence != null
            ? deserializeAws_restJson1IntentConfidence(output.nluIntentConfidence, context)
            : undefined,
        slots: output.slots != null ? deserializeAws_restJson1StringMap(output.slots, context) : undefined,
    };
};
var deserializeAws_restJson1ResponseCard = function (output, context) {
    return {
        contentType: __expectString(output.contentType),
        genericAttachments: output.genericAttachments != null
            ? deserializeAws_restJson1genericAttachmentList(output.genericAttachments, context)
            : undefined,
        version: __expectString(output.version),
    };
};
var deserializeAws_restJson1SentimentResponse = function (output, context) {
    return {
        sentimentLabel: __expectString(output.sentimentLabel),
        sentimentScore: __expectString(output.sentimentScore),
    };
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
