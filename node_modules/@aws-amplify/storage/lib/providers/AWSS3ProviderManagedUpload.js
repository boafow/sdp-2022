"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@aws-amplify/core");
var client_s3_1 = require("@aws-sdk/client-s3");
var axios_http_handler_1 = require("./axios-http-handler");
var events = tslib_1.__importStar(require("events"));
var S3ClientUtils_1 = require("../common/S3ClientUtils");
var logger = new core_1.ConsoleLogger('AWSS3ProviderManagedUpload');
var AWSS3ProviderManagedUpload = /** @class */ (function () {
    function AWSS3ProviderManagedUpload(params, opts, emitter) {
        this.opts = null;
        this.completedParts = [];
        this.partSize = S3ClientUtils_1.DEFAULT_PART_SIZE;
        // Progress reporting
        this.bytesUploaded = 0;
        this.totalBytesToUpload = 0;
        this.emitter = null;
        this.params = params;
        this.opts = opts;
        this.emitter = emitter;
        this.s3client = this._createNewS3Client(opts, emitter);
    }
    AWSS3ProviderManagedUpload.prototype.upload = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var putObjectCommand, _a, numberOfPartsToUpload, parts, start, error_1;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 9, , 11]);
                        this.body = this.validateAndSanitizeBody(this.params.Body);
                        this.totalBytesToUpload = this.byteLength(this.body);
                        if (!(this.totalBytesToUpload <= S3ClientUtils_1.DEFAULT_PART_SIZE)) return [3 /*break*/, 1];
                        // Multipart upload is not required. Upload the sanitized body as is
                        this.params.Body = this.body;
                        putObjectCommand = new client_s3_1.PutObjectCommand(this.params);
                        return [2 /*return*/, this.s3client.send(putObjectCommand)];
                    case 1:
                        // Step 1: Determine appropriate part size.
                        this.partSize = S3ClientUtils_1.calculatePartSize(this.totalBytesToUpload);
                        // Step 2: Initiate the multi part upload
                        _a = this;
                        return [4 /*yield*/, this.createMultiPartUpload()];
                    case 2:
                        // Step 2: Initiate the multi part upload
                        _a.uploadId = _b.sent();
                        numberOfPartsToUpload = Math.ceil(this.totalBytesToUpload / this.partSize);
                        parts = this.createParts();
                        start = 0;
                        _b.label = 3;
                    case 3:
                        if (!(start < numberOfPartsToUpload)) return [3 /*break*/, 6];
                        // Upload as many as `queueSize` parts simultaneously
                        return [4 /*yield*/, this.uploadParts(this.uploadId, parts.slice(start, start + S3ClientUtils_1.DEFAULT_QUEUE_SIZE))];
                    case 4:
                        // Upload as many as `queueSize` parts simultaneously
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        start += S3ClientUtils_1.DEFAULT_QUEUE_SIZE;
                        return [3 /*break*/, 3];
                    case 6:
                        parts.map(function (part) {
                            _this.removeEventListener(part);
                        });
                        return [4 /*yield*/, this.finishMultiPartUpload(this.uploadId)];
                    case 7: 
                    // Step 3: Finalize the upload such that S3 can recreate the file
                    return [2 /*return*/, _b.sent()];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        error_1 = _b.sent();
                        // if any error is thrown, call cleanup
                        return [4 /*yield*/, this.cleanup(this.uploadId)];
                    case 10:
                        // if any error is thrown, call cleanup
                        _b.sent();
                        logger.error('Error. Cancelling the multipart upload.');
                        throw error_1;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    AWSS3ProviderManagedUpload.prototype.createParts = function () {
        try {
            var parts = [];
            for (var bodyStart = 0; bodyStart < this.totalBytesToUpload;) {
                var bodyEnd = Math.min(bodyStart + this.partSize, this.totalBytesToUpload);
                parts.push({
                    bodyPart: this.body.slice(bodyStart, bodyEnd),
                    partNumber: parts.length + 1,
                    emitter: new events.EventEmitter(),
                    _lastUploadedBytes: 0,
                });
                bodyStart += this.partSize;
            }
            return parts;
        }
        catch (error) {
            logger.error(error);
            throw error;
        }
    };
    AWSS3ProviderManagedUpload.prototype.createMultiPartUpload = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var createMultiPartUploadCommand, response, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        createMultiPartUploadCommand = new client_s3_1.CreateMultipartUploadCommand(this.params);
                        return [4 /*yield*/, this.s3client.send(createMultiPartUploadCommand)];
                    case 1:
                        response = _a.sent();
                        logger.debug(response.UploadId);
                        return [2 /*return*/, response.UploadId];
                    case 2:
                        error_2 = _a.sent();
                        logger.error(error_2);
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private Not to be extended outside of tests
     * @VisibleFotTesting
     */
    AWSS3ProviderManagedUpload.prototype.uploadParts = function (uploadId, parts) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var allResults, i, error_3;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all(parts.map(function (part) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var options, _a, Key, Bucket, SSECustomerAlgorithm, SSECustomerKey, SSECustomerKeyMD5, res;
                                return tslib_1.__generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            this.setupEventListener(part);
                                            options = { emitter: part.emitter };
                                            _a = this.params, Key = _a.Key, Bucket = _a.Bucket, SSECustomerAlgorithm = _a.SSECustomerAlgorithm, SSECustomerKey = _a.SSECustomerKey, SSECustomerKeyMD5 = _a.SSECustomerKeyMD5;
                                            return [4 /*yield*/, this.s3client.send(new client_s3_1.UploadPartCommand(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ PartNumber: part.partNumber, Body: part.bodyPart, UploadId: uploadId, Key: Key,
                                                    Bucket: Bucket }, (SSECustomerAlgorithm && { SSECustomerAlgorithm: SSECustomerAlgorithm })), (SSECustomerKey && { SSECustomerKey: SSECustomerKey })), (SSECustomerKeyMD5 && { SSECustomerKeyMD5: SSECustomerKeyMD5 }))), options)];
                                        case 1:
                                            res = _b.sent();
                                            return [2 /*return*/, res];
                                    }
                                });
                            }); }))];
                    case 1:
                        allResults = _a.sent();
                        // The order of resolved promises is the same as input promise order.
                        for (i = 0; i < allResults.length; i++) {
                            this.completedParts.push({
                                PartNumber: parts[i].partNumber,
                                ETag: allResults[i].ETag,
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        logger.error('Error happened while uploading a part. Cancelling the multipart upload');
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AWSS3ProviderManagedUpload.prototype.finishMultiPartUpload = function (uploadId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var input, completeUploadCommand, data, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = {
                            Bucket: this.params.Bucket,
                            Key: this.params.Key,
                            UploadId: uploadId,
                            MultipartUpload: { Parts: this.completedParts },
                        };
                        completeUploadCommand = new client_s3_1.CompleteMultipartUploadCommand(input);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.s3client.send(completeUploadCommand)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data.Key];
                    case 3:
                        error_4 = _a.sent();
                        logger.error('Error happened while finishing the upload.');
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AWSS3ProviderManagedUpload.prototype.cleanup = function (uploadId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var input, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Reset this's state
                        this.body = null;
                        this.completedParts = [];
                        this.bytesUploaded = 0;
                        this.totalBytesToUpload = 0;
                        if (!uploadId) {
                            // This is a single part upload;
                            return [2 /*return*/];
                        }
                        input = {
                            Bucket: this.params.Bucket,
                            Key: this.params.Key,
                            UploadId: uploadId,
                        };
                        return [4 /*yield*/, this.s3client.send(new client_s3_1.AbortMultipartUploadCommand(input))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.s3client.send(new client_s3_1.ListPartsCommand(input))];
                    case 2:
                        data = _a.sent();
                        if (data && data.Parts && data.Parts.length > 0) {
                            throw new Error('Multipart upload clean up failed.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AWSS3ProviderManagedUpload.prototype.removeEventListener = function (part) {
        part.emitter.removeAllListeners(axios_http_handler_1.SEND_UPLOAD_PROGRESS_EVENT);
        part.emitter.removeAllListeners(axios_http_handler_1.SEND_DOWNLOAD_PROGRESS_EVENT);
    };
    AWSS3ProviderManagedUpload.prototype.setupEventListener = function (part) {
        var _this = this;
        part.emitter.on(axios_http_handler_1.SEND_UPLOAD_PROGRESS_EVENT, function (progress) {
            _this.progressChanged(part.partNumber, progress.loaded - part._lastUploadedBytes);
            part._lastUploadedBytes = progress.loaded;
        });
    };
    AWSS3ProviderManagedUpload.prototype.progressChanged = function (partNumber, incrementalUpdate) {
        this.bytesUploaded += incrementalUpdate;
        this.emitter.emit(axios_http_handler_1.SEND_UPLOAD_PROGRESS_EVENT, {
            loaded: this.bytesUploaded,
            total: this.totalBytesToUpload,
            part: partNumber,
            key: this.params.Key,
        });
    };
    AWSS3ProviderManagedUpload.prototype.byteLength = function (input) {
        if (input === null || input === undefined)
            return 0;
        if (typeof input.byteLength === 'number') {
            return input.byteLength;
        }
        else if (typeof input.length === 'number') {
            return input.length;
        }
        else if (typeof input.size === 'number') {
            return input.size;
        }
        else if (typeof input.path === 'string') {
            /* NodeJs Support
            return require('fs').lstatSync(input.path).size;
            */
        }
        else {
            throw new Error('Cannot determine length of ' + input);
        }
    };
    AWSS3ProviderManagedUpload.prototype.validateAndSanitizeBody = function (body) {
        var sanitizedBody = this.isGenericObject(body)
            ? JSON.stringify(body)
            : body;
        /* TODO: streams and files for nodejs
        if (
            typeof body.path === 'string' &&
            require('fs').lstatSync(body.path).size > 0
        ) {
            sanitizedBody = body;
        } */
        if (this.byteLength(sanitizedBody) > S3ClientUtils_1.MAX_OBJECT_SIZE) {
            throw new Error("File size bigger than S3 Object limit of 5TB, got " + this.totalBytesToUpload + " Bytes");
        }
        return sanitizedBody;
    };
    AWSS3ProviderManagedUpload.prototype.isGenericObject = function (body) {
        if (body !== null && typeof body === 'object') {
            try {
                return !(this.byteLength(body) >= 0);
            }
            catch (error) {
                // If we cannot determine the length of the body, consider it
                // as a generic object and upload a stringified version of it
                return true;
            }
        }
        return false;
    };
    AWSS3ProviderManagedUpload.prototype._createNewS3Client = function (config, emitter) {
        var s3client = S3ClientUtils_1.createS3Client(config, emitter);
        s3client.middlewareStack.add(S3ClientUtils_1.createPrefixMiddleware(this.opts, this.params.Key), S3ClientUtils_1.prefixMiddlewareOptions);
        s3client.middlewareStack.add(S3ClientUtils_1.autoAdjustClockskewMiddleware(s3client.config), S3ClientUtils_1.autoAdjustClockskewMiddlewareOptions);
        return s3client;
    };
    return AWSS3ProviderManagedUpload;
}());
exports.AWSS3ProviderManagedUpload = AWSS3ProviderManagedUpload;
//# sourceMappingURL=AWSS3ProviderManagedUpload.js.map