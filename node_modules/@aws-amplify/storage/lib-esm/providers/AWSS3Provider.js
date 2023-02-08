import { __assign, __awaiter, __generator, __read, __spread } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ConsoleLogger as Logger, Credentials, StorageHelper, Hub, parseAWSExports, } from '@aws-amplify/core';
import { GetObjectCommand, DeleteObjectCommand, ListObjectsV2Command, CopyObjectCommand, } from '@aws-sdk/client-s3';
import { formatUrl } from '@aws-sdk/util-format-url';
import { createRequest } from '@aws-sdk/util-create-request';
import { S3RequestPresigner } from '@aws-sdk/s3-request-presigner';
import { SEND_DOWNLOAD_PROGRESS_EVENT, SEND_UPLOAD_PROGRESS_EVENT, } from './axios-http-handler';
import { StorageErrorStrings } from '../common/StorageErrorStrings';
import { dispatchStorageEvent } from '../common/StorageUtils';
import { createPrefixMiddleware, prefixMiddlewareOptions, getPrefix, autoAdjustClockskewMiddleware, autoAdjustClockskewMiddlewareOptions, createS3Client, } from '../common/S3ClientUtils';
import { AWSS3ProviderManagedUpload } from './AWSS3ProviderManagedUpload';
import { AWSS3UploadTask, TaskEvents } from './AWSS3UploadTask';
import { UPLOADS_STORAGE_KEY } from '../common/StorageConstants';
import * as events from 'events';
var logger = new Logger('AWSS3Provider');
var DEFAULT_STORAGE_LEVEL = 'public';
var DEFAULT_PRESIGN_EXPIRATION = 900;
/**
 * Provide storage methods to use AWS S3
 */
var AWSS3Provider = /** @class */ (function () {
    /**
     * Initialize Storage with AWS configurations
     * @param {Object} config - Configuration object for storage
     */
    function AWSS3Provider(config) {
        var _this = this;
        this._config = config ? config : {};
        this._storage = new StorageHelper().getStorage();
        Hub.listen('auth', function (data) {
            var payload = data.payload;
            if (payload.event === 'signOut' || payload.event === 'signIn') {
                _this._storage.removeItem(UPLOADS_STORAGE_KEY);
            }
        });
        logger.debug('Storage Options', this._config);
    }
    /**
     * get the category of the plugin
     */
    AWSS3Provider.prototype.getCategory = function () {
        return AWSS3Provider.CATEGORY;
    };
    /**
     * get provider name of the plugin
     */
    AWSS3Provider.prototype.getProviderName = function () {
        return AWSS3Provider.PROVIDER_NAME;
    };
    /**
     * Configure Storage part with aws configuration
     * @param {Object} config - Configuration of the Storage
     * @return {Object} - Current configuration
     */
    AWSS3Provider.prototype.configure = function (config) {
        logger.debug('configure Storage', config);
        if (!config)
            return this._config;
        var amplifyConfig = parseAWSExports(config);
        this._config = Object.assign({}, this._config, amplifyConfig.Storage);
        if (!this._config.bucket) {
            logger.debug('Do not have bucket yet');
        }
        return this._config;
    };
    AWSS3Provider.prototype.startResumableUpload = function (addTaskInput, config) {
        var s3Client = addTaskInput.s3Client, emitter = addTaskInput.emitter, key = addTaskInput.key, file = addTaskInput.file, params = addTaskInput.params;
        var progressCallback = config.progressCallback, completeCallback = config.completeCallback, errorCallback = config.errorCallback, _a = config.track, track = _a === void 0 ? false : _a;
        if (!(file instanceof Blob)) {
            throw new Error(StorageErrorStrings.INVALID_BLOB);
        }
        emitter.on(TaskEvents.UPLOAD_PROGRESS, function (event) {
            if (progressCallback) {
                if (typeof progressCallback === 'function') {
                    progressCallback(event);
                }
                else {
                    logger.warn('progressCallback should be a function, not a ' +
                        typeof progressCallback);
                }
            }
        });
        emitter.on(TaskEvents.UPLOAD_COMPLETE, function (event) {
            if (completeCallback) {
                if (typeof completeCallback === 'function') {
                    completeCallback(event);
                }
                else {
                    logger.warn('completeCallback should be a function, not a ' +
                        typeof completeCallback);
                }
            }
        });
        emitter.on(TaskEvents.ERROR, function (err) {
            if (errorCallback) {
                if (typeof errorCallback === 'function') {
                    errorCallback(err);
                }
                else {
                    logger.warn('errorCallback should be a function, not a ' + typeof errorCallback);
                }
            }
        });
        // we want to keep this function sync so we defer this promise to AWSS3UploadTask to resolve when it's needed
        // when its doing a final check with _listSingleFile function
        var prefixPromise = Credentials.get().then(function (credentials) {
            var cred = Credentials.shear(credentials);
            return getPrefix(__assign(__assign({}, config), { credentials: cred }));
        });
        var task = new AWSS3UploadTask({
            s3Client: s3Client,
            file: file,
            emitter: emitter,
            level: config.level,
            storage: this._storage,
            params: params,
            prefixPromise: prefixPromise,
        });
        dispatchStorageEvent(track, 'upload', { method: 'put', result: 'success' }, null, "Upload Task created successfully for " + key);
        // automatically start the upload task
        task.resume();
        return task;
    };
    /**
     * Copy an object from a source object to a new object within the same bucket. Can optionally copy files across
     * different level or identityId (if source object's level is 'protected').
     *
     * @async
     * @param {S3CopySource} src - Key and optionally access level and identityId of the source object.
     * @param {S3CopyDestination} dest - Key and optionally access level of the destination object.
     * @param {S3ProviderCopyConfig} [config] - Optional configuration for s3 commands.
     * @return {Promise<S3ProviderCopyOutput>} The key of the copied object.
     */
    AWSS3Provider.prototype.copy = function (src, dest, config) {
        return __awaiter(this, void 0, void 0, function () {
            var credentialsOK, opt, acl, bucket, cacheControl, expires, track, serverSideEncryption, SSECustomerAlgorithm, SSECustomerKey, SSECustomerKeyMD5, SSEKMSKeyId, _a, srcLevel, srcIdentityId, srcKey, _b, destLevel, destKey, srcPrefix, destPrefix, finalSrcKey, finalDestKey, params, s3, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._ensureCredentials()];
                    case 1:
                        credentialsOK = _c.sent();
                        if (!credentialsOK || !this._isWithCredentials(this._config)) {
                            throw new Error(StorageErrorStrings.NO_CREDENTIALS);
                        }
                        opt = Object.assign({}, this._config, config);
                        acl = opt.acl, bucket = opt.bucket, cacheControl = opt.cacheControl, expires = opt.expires, track = opt.track, serverSideEncryption = opt.serverSideEncryption, SSECustomerAlgorithm = opt.SSECustomerAlgorithm, SSECustomerKey = opt.SSECustomerKey, SSECustomerKeyMD5 = opt.SSECustomerKeyMD5, SSEKMSKeyId = opt.SSEKMSKeyId;
                        _a = src.level, srcLevel = _a === void 0 ? DEFAULT_STORAGE_LEVEL : _a, srcIdentityId = src.identityId, srcKey = src.key;
                        _b = dest.level, destLevel = _b === void 0 ? DEFAULT_STORAGE_LEVEL : _b, destKey = dest.key;
                        if (!srcKey || typeof srcKey !== 'string') {
                            throw new Error(StorageErrorStrings.NO_SRC_KEY);
                        }
                        if (!destKey || typeof destKey !== 'string') {
                            throw new Error(StorageErrorStrings.NO_DEST_KEY);
                        }
                        if (srcLevel !== 'protected' && srcIdentityId) {
                            logger.warn("You may copy files from another user if the source level is \"protected\", currently it's " + srcLevel);
                        }
                        srcPrefix = this._prefix(__assign(__assign(__assign({}, opt), { level: srcLevel }), (srcIdentityId && { identityId: srcIdentityId })));
                        destPrefix = this._prefix(__assign(__assign({}, opt), { level: destLevel }));
                        finalSrcKey = bucket + "/" + srcPrefix + srcKey;
                        finalDestKey = "" + destPrefix + destKey;
                        logger.debug("copying " + finalSrcKey + " to " + finalDestKey);
                        params = {
                            Bucket: bucket,
                            CopySource: finalSrcKey,
                            Key: finalDestKey,
                            // Copies over metadata like contentType as well
                            MetadataDirective: 'COPY',
                        };
                        if (cacheControl)
                            params.CacheControl = cacheControl;
                        if (expires)
                            params.Expires = expires;
                        if (serverSideEncryption) {
                            params.ServerSideEncryption = serverSideEncryption;
                        }
                        if (SSECustomerAlgorithm) {
                            params.SSECustomerAlgorithm = SSECustomerAlgorithm;
                        }
                        if (SSECustomerKey) {
                            params.SSECustomerKey = SSECustomerKey;
                        }
                        if (SSECustomerKeyMD5) {
                            params.SSECustomerKeyMD5 = SSECustomerKeyMD5;
                        }
                        if (SSEKMSKeyId) {
                            params.SSEKMSKeyId = SSEKMSKeyId;
                        }
                        if (acl)
                            params.ACL = acl;
                        s3 = this._createNewS3Client(opt);
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, s3.send(new CopyObjectCommand(params))];
                    case 3:
                        _c.sent();
                        dispatchStorageEvent(track, 'copy', {
                            method: 'copy',
                            result: 'success',
                        }, null, "Copy success from " + srcKey + " to " + destKey);
                        return [2 /*return*/, {
                                key: destKey,
                            }];
                    case 4:
                        error_1 = _c.sent();
                        dispatchStorageEvent(track, 'copy', {
                            method: 'copy',
                            result: 'failed',
                        }, null, "Copy failed from " + srcKey + " to " + destKey);
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AWSS3Provider.prototype.get = function (key, config) {
        return __awaiter(this, void 0, void 0, function () {
            var credentialsOK, opt, bucket, download, cacheControl, contentDisposition, contentEncoding, contentLanguage, contentType, expires, track, SSECustomerAlgorithm, SSECustomerKey, SSECustomerKeyMD5, progressCallback, prefix, final_key, emitter, s3, params, getObjectCommand, response, error_2, signer, request, url, _a, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._ensureCredentials()];
                    case 1:
                        credentialsOK = _b.sent();
                        if (!credentialsOK || !this._isWithCredentials(this._config)) {
                            throw new Error(StorageErrorStrings.NO_CREDENTIALS);
                        }
                        opt = Object.assign({}, this._config, config);
                        bucket = opt.bucket, download = opt.download, cacheControl = opt.cacheControl, contentDisposition = opt.contentDisposition, contentEncoding = opt.contentEncoding, contentLanguage = opt.contentLanguage, contentType = opt.contentType, expires = opt.expires, track = opt.track, SSECustomerAlgorithm = opt.SSECustomerAlgorithm, SSECustomerKey = opt.SSECustomerKey, SSECustomerKeyMD5 = opt.SSECustomerKeyMD5, progressCallback = opt.progressCallback;
                        prefix = this._prefix(opt);
                        final_key = prefix + key;
                        emitter = new events.EventEmitter();
                        s3 = this._createNewS3Client(opt, emitter);
                        logger.debug('get ' + key + ' from ' + final_key);
                        params = {
                            Bucket: bucket,
                            Key: final_key,
                        };
                        // See: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property
                        if (cacheControl)
                            params.ResponseCacheControl = cacheControl;
                        if (contentDisposition)
                            params.ResponseContentDisposition = contentDisposition;
                        if (contentEncoding)
                            params.ResponseContentEncoding = contentEncoding;
                        if (contentLanguage)
                            params.ResponseContentLanguage = contentLanguage;
                        if (contentType)
                            params.ResponseContentType = contentType;
                        if (SSECustomerAlgorithm) {
                            params.SSECustomerAlgorithm = SSECustomerAlgorithm;
                        }
                        if (SSECustomerKey) {
                            params.SSECustomerKey = SSECustomerKey;
                        }
                        if (SSECustomerKeyMD5) {
                            params.SSECustomerKeyMD5 = SSECustomerKeyMD5;
                        }
                        if (!(download === true)) return [3 /*break*/, 5];
                        getObjectCommand = new GetObjectCommand(params);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        if (progressCallback) {
                            if (typeof progressCallback === 'function') {
                                emitter.on(SEND_DOWNLOAD_PROGRESS_EVENT, function (progress) {
                                    progressCallback(progress);
                                });
                            }
                            else {
                                logger.warn('progressCallback should be a function, not a ' +
                                    typeof progressCallback);
                            }
                        }
                        return [4 /*yield*/, s3.send(getObjectCommand)];
                    case 3:
                        response = _b.sent();
                        emitter.removeAllListeners(SEND_DOWNLOAD_PROGRESS_EVENT);
                        dispatchStorageEvent(track, 'download', { method: 'get', result: 'success' }, {
                            fileSize: Number(response.Body['size'] || response.Body['length']),
                        }, "Download success for " + key);
                        return [2 /*return*/, response];
                    case 4:
                        error_2 = _b.sent();
                        dispatchStorageEvent(track, 'download', {
                            method: 'get',
                            result: 'failed',
                        }, null, "Download failed with " + error_2.message);
                        throw error_2;
                    case 5:
                        _b.trys.push([5, 8, , 9]);
                        signer = new S3RequestPresigner(__assign({}, s3.config));
                        return [4 /*yield*/, createRequest(s3, new GetObjectCommand(params))];
                    case 6:
                        request = _b.sent();
                        _a = formatUrl;
                        return [4 /*yield*/, signer.presign(request, {
                                expiresIn: expires || DEFAULT_PRESIGN_EXPIRATION,
                            })];
                    case 7:
                        url = _a.apply(void 0, [_b.sent()]);
                        dispatchStorageEvent(track, 'getSignedUrl', { method: 'get', result: 'success' }, null, "Signed URL: " + url);
                        return [2 /*return*/, url];
                    case 8:
                        error_3 = _b.sent();
                        logger.warn('get signed url error', error_3);
                        dispatchStorageEvent(track, 'getSignedUrl', { method: 'get', result: 'failed' }, null, "Could not get a signed URL for " + key);
                        throw error_3;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Put a file in S3 bucket specified to configure method
     * @param key - key of the object
     * @param object - File to be put in Amazon S3 bucket
     * @param [config] - Optional configuration for the underlying S3 command
     * @return an instance of AWSS3UploadTask or a promise that resolves to an object with the new object's key on
     * success.
     */
    AWSS3Provider.prototype.put = function (key, object, config) {
        var opt = Object.assign({}, this._config, config);
        var bucket = opt.bucket, track = opt.track, progressCallback = opt.progressCallback, level = opt.level, resumable = opt.resumable;
        var contentType = opt.contentType, contentDisposition = opt.contentDisposition, contentEncoding = opt.contentEncoding, cacheControl = opt.cacheControl, expires = opt.expires, metadata = opt.metadata, tagging = opt.tagging, acl = opt.acl;
        var serverSideEncryption = opt.serverSideEncryption, SSECustomerAlgorithm = opt.SSECustomerAlgorithm, SSECustomerKey = opt.SSECustomerKey, SSECustomerKeyMD5 = opt.SSECustomerKeyMD5, SSEKMSKeyId = opt.SSEKMSKeyId;
        var type = contentType ? contentType : 'binary/octet-stream';
        var params = {
            Bucket: bucket,
            Key: key,
            Body: object,
            ContentType: type,
        };
        if (cacheControl) {
            params.CacheControl = cacheControl;
        }
        if (contentDisposition) {
            params.ContentDisposition = contentDisposition;
        }
        if (contentEncoding) {
            params.ContentEncoding = contentEncoding;
        }
        if (expires) {
            params.Expires = expires;
        }
        if (metadata) {
            params.Metadata = metadata;
        }
        if (tagging) {
            params.Tagging = tagging;
        }
        if (serverSideEncryption) {
            params.ServerSideEncryption = serverSideEncryption;
        }
        if (SSECustomerAlgorithm) {
            params.SSECustomerAlgorithm = SSECustomerAlgorithm;
        }
        if (SSECustomerKey) {
            params.SSECustomerKey = SSECustomerKey;
        }
        if (SSECustomerKeyMD5) {
            params.SSECustomerKeyMD5 = SSECustomerKeyMD5;
        }
        if (SSEKMSKeyId) {
            params.SSEKMSKeyId = SSEKMSKeyId;
        }
        var emitter = new events.EventEmitter();
        var uploader = new AWSS3ProviderManagedUpload(params, opt, emitter);
        if (acl) {
            params.ACL = acl;
        }
        if (resumable === true) {
            var s3Client = this._createNewS3Client(opt);
            // we are using aws sdk middleware to inject the prefix to key, this way we don't have to call
            // this._ensureCredentials() which allows us to make this function sync so we can return non-Promise like UploadTask
            s3Client.middlewareStack.add(createPrefixMiddleware(opt, key), prefixMiddlewareOptions);
            var addTaskInput = {
                bucket: bucket,
                key: key,
                s3Client: s3Client,
                file: object,
                emitter: emitter,
                accessLevel: level,
                params: params,
            };
            // explicitly asserting the type here as Typescript could not infer that resumable is of type true
            return this.startResumableUpload(addTaskInput, config);
        }
        try {
            if (progressCallback) {
                if (typeof progressCallback === 'function') {
                    emitter.on(SEND_UPLOAD_PROGRESS_EVENT, function (progress) {
                        progressCallback(progress);
                    });
                }
                else {
                    logger.warn('progressCallback should be a function, not a ' +
                        typeof progressCallback);
                }
            }
            return uploader.upload().then(function (response) {
                logger.debug('upload result', response);
                dispatchStorageEvent(track, 'upload', { method: 'put', result: 'success' }, null, "Upload success for " + key);
                return { key: key };
            });
        }
        catch (error) {
            logger.warn('error uploading', error);
            dispatchStorageEvent(track, 'upload', { method: 'put', result: 'failed' }, null, "Error uploading " + key);
            throw error;
        }
    };
    /**
     * Remove the object for specified key
     * @param {string} key - key of the object
     * @param {S3ProviderRemoveConfig} [config] - Optional configuration for the underlying S3 command
     * @return {Promise<S3ProviderRemoveOutput>} - Promise resolves upon successful removal of the object
     */
    AWSS3Provider.prototype.remove = function (key, config) {
        return __awaiter(this, void 0, void 0, function () {
            var credentialsOK, opt, bucket, track, prefix, final_key, s3, params, deleteObjectCommand, response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._ensureCredentials()];
                    case 1:
                        credentialsOK = _a.sent();
                        if (!credentialsOK || !this._isWithCredentials(this._config)) {
                            throw new Error(StorageErrorStrings.NO_CREDENTIALS);
                        }
                        opt = Object.assign({}, this._config, config);
                        bucket = opt.bucket, track = opt.track;
                        prefix = this._prefix(opt);
                        final_key = prefix + key;
                        s3 = this._createNewS3Client(opt);
                        logger.debug('remove ' + key + ' from ' + final_key);
                        params = {
                            Bucket: bucket,
                            Key: final_key,
                        };
                        deleteObjectCommand = new DeleteObjectCommand(params);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, s3.send(deleteObjectCommand)];
                    case 3:
                        response = _a.sent();
                        dispatchStorageEvent(track, 'delete', { method: 'remove', result: 'success' }, null, "Deleted " + key + " successfully");
                        return [2 /*return*/, response];
                    case 4:
                        error_4 = _a.sent();
                        dispatchStorageEvent(track, 'delete', { method: 'remove', result: 'failed' }, null, "Deletion of " + key + " failed with " + error_4);
                        throw error_4;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AWSS3Provider.prototype._list = function (params, opt, prefix) {
        return __awaiter(this, void 0, void 0, function () {
            var list, s3, listObjectsV2Command, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = {
                            results: [],
                            hasNextToken: false,
                        };
                        s3 = this._createNewS3Client(opt);
                        listObjectsV2Command = new ListObjectsV2Command(__assign({}, params));
                        return [4 /*yield*/, s3.send(listObjectsV2Command)];
                    case 1:
                        response = _a.sent();
                        if (response && response.Contents) {
                            list.results = response.Contents.map(function (item) {
                                return {
                                    key: item.Key.substr(prefix.length),
                                    eTag: item.ETag,
                                    lastModified: item.LastModified,
                                    size: item.Size,
                                };
                            });
                            list.nextToken = response.NextContinuationToken;
                            list.hasNextToken = response.IsTruncated;
                        }
                        return [2 /*return*/, list];
                }
            });
        });
    };
    /**
     * List bucket objects relative to the level and prefix specified
     * @param {string} path - the path that contains objects
     * @param {S3ProviderListConfig} [config] - Optional configuration for the underlying S3 command
     * @return {Promise<S3ProviderListOutput>} - Promise resolves to list of keys, eTags, lastModified
     * and file size for all objects in path
     */
    AWSS3Provider.prototype.list = function (path, config) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var credentialsOK, opt, bucket, track, pageSize, nextToken, prefix, final_path, list, MAX_PAGE_SIZE, listResult, params, error_5;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this._ensureCredentials()];
                    case 1:
                        credentialsOK = _d.sent();
                        if (!credentialsOK || !this._isWithCredentials(this._config)) {
                            throw new Error(StorageErrorStrings.NO_CREDENTIALS);
                        }
                        opt = Object.assign({}, this._config, config);
                        bucket = opt.bucket, track = opt.track, pageSize = opt.pageSize, nextToken = opt.nextToken;
                        prefix = this._prefix(opt);
                        final_path = prefix + path;
                        logger.debug('list ' + path + ' from ' + final_path);
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 10, , 11]);
                        list = {
                            results: [],
                            hasNextToken: false,
                        };
                        MAX_PAGE_SIZE = 1000;
                        listResult = void 0;
                        params = {
                            Bucket: bucket,
                            Prefix: final_path,
                            MaxKeys: MAX_PAGE_SIZE,
                            ContinuationToken: nextToken,
                        };
                        params.ContinuationToken = nextToken;
                        if (!(pageSize === 'ALL')) return [3 /*break*/, 7];
                        _d.label = 3;
                    case 3: return [4 /*yield*/, this._list(params, opt, prefix)];
                    case 4:
                        listResult = _d.sent();
                        (_b = list.results).push.apply(_b, __spread(listResult.results));
                        if (listResult.nextToken)
                            params.ContinuationToken = listResult.nextToken;
                        _d.label = 5;
                    case 5:
                        if (listResult.nextToken) return [3 /*break*/, 3];
                        _d.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        if (pageSize &&
                            pageSize <= MAX_PAGE_SIZE &&
                            typeof pageSize === 'number')
                            params.MaxKeys = pageSize;
                        else
                            logger.warn("pageSize should be from 0 - " + MAX_PAGE_SIZE + ".");
                        return [4 /*yield*/, this._list(params, opt, prefix)];
                    case 8:
                        listResult = _d.sent();
                        (_c = list.results).push.apply(_c, __spread(listResult.results));
                        list.hasNextToken = listResult.hasNextToken;
                        list.nextToken = (_a = null) !== null && _a !== void 0 ? _a : listResult.nextToken;
                        _d.label = 9;
                    case 9:
                        dispatchStorageEvent(track, 'list', { method: 'list', result: 'success' }, null, list.results.length + " items returned from list operation");
                        logger.debug('list', list);
                        return [2 /*return*/, list];
                    case 10:
                        error_5 = _d.sent();
                        logger.error('list InvalidArgument', error_5);
                        dispatchStorageEvent(track, 'list', { method: 'list', result: 'failed' }, null, "Listing items failed: " + error_5.message);
                        throw error_5;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    AWSS3Provider.prototype._ensureCredentials = function () {
        return __awaiter(this, void 0, void 0, function () {
            var credentials, cred, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Credentials.get()];
                    case 1:
                        credentials = _a.sent();
                        if (!credentials)
                            return [2 /*return*/, false];
                        cred = Credentials.shear(credentials);
                        logger.debug('set credentials for storage', cred);
                        this._config.credentials = cred;
                        return [2 /*return*/, true];
                    case 2:
                        error_6 = _a.sent();
                        logger.warn('ensure credentials error', error_6);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AWSS3Provider.prototype._isWithCredentials = function (config) {
        return typeof config === 'object' && config.hasOwnProperty('credentials');
    };
    AWSS3Provider.prototype._prefix = function (config) {
        var credentials = config.credentials, level = config.level;
        var customPrefix = config.customPrefix || {};
        var identityId = config.identityId || credentials.identityId;
        var privatePath = (customPrefix.private !== undefined ? customPrefix.private : 'private/') +
            identityId +
            '/';
        var protectedPath = (customPrefix.protected !== undefined
            ? customPrefix.protected
            : 'protected/') +
            identityId +
            '/';
        var publicPath = customPrefix.public !== undefined ? customPrefix.public : 'public/';
        switch (level) {
            case 'private':
                return privatePath;
            case 'protected':
                return protectedPath;
            default:
                return publicPath;
        }
    };
    /**
     * Creates an S3 client with new V3 aws sdk
     */
    AWSS3Provider.prototype._createNewS3Client = function (config, emitter) {
        var s3client = createS3Client(config, emitter);
        s3client.middlewareStack.add(autoAdjustClockskewMiddleware(s3client.config), autoAdjustClockskewMiddlewareOptions);
        return s3client;
    };
    AWSS3Provider.CATEGORY = 'Storage';
    AWSS3Provider.PROVIDER_NAME = 'AWSS3';
    return AWSS3Provider;
}());
export { AWSS3Provider };
//# sourceMappingURL=AWSS3Provider.js.map