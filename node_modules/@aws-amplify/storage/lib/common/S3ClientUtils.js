"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@aws-amplify/core");
var client_s3_1 = require("@aws-sdk/client-s3");
var axios_http_handler_1 = require("../providers/axios-http-handler");
var StorageConstants_1 = require("./StorageConstants");
var logger = new core_1.Logger('S3ClientUtils');
// placeholder credentials in order to satisfy type requirement, always results in 403 when used
var INVALID_CRED = { accessKeyId: '', secretAccessKey: '' };
exports.getPrefix = function (config) {
    var credentials = config.credentials, level = config.level, customPrefix = config.customPrefix, identityId = config.identityId;
    var resolvedCustomPrefix = customPrefix || {};
    var resolvedIdentityId = identityId || credentials.identityId;
    var privatePath = (resolvedCustomPrefix.private !== undefined
        ? resolvedCustomPrefix.private
        : 'private/') +
        resolvedIdentityId +
        '/';
    var protectedPath = (resolvedCustomPrefix.protected !== undefined
        ? resolvedCustomPrefix.protected
        : 'protected/') +
        resolvedIdentityId +
        '/';
    var publicPath = resolvedCustomPrefix.public !== undefined
        ? resolvedCustomPrefix.public
        : 'public/';
    switch (level) {
        case 'private':
            return privatePath;
        case 'protected':
            return protectedPath;
        default:
            return publicPath;
    }
};
exports.createPrefixMiddleware = function (opt, key) {
    return function (next, _context) {
        return function (args) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var credentials, cred, prefix, clonedInput, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, core_1.Credentials.get()];
                    case 1:
                        credentials = _a.sent();
                        cred = core_1.Credentials.shear(credentials);
                        prefix = exports.getPrefix(tslib_1.__assign(tslib_1.__assign({}, opt), { credentials: cred }));
                        clonedInput = Object.assign({}, args.input);
                        if (Object.prototype.hasOwnProperty.call(args.input, 'Key')) {
                            clonedInput.Key = prefix + key;
                            args.input = clonedInput;
                        }
                        else if (Object.prototype.hasOwnProperty.call(args.input, 'Prefix')) {
                            clonedInput.Prefix = prefix + key;
                            args.input = clonedInput;
                        }
                        result = next(args);
                        return [2 /*return*/, result];
                }
            });
        }); };
    };
};
var isTimeSkewedError = function (err) {
    return err.ServerTime &&
        typeof err.Code === 'string' &&
        err.Code === 'RequestTimeTooSkewed';
};
// we want to take the S3Client config in parameter so we can modify it's systemClockOffset
exports.autoAdjustClockskewMiddleware = function (config) {
    return function (next, _context) {
        return function (args) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var err_1, serverDate;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, next(args)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        if (isTimeSkewedError(err_1)) {
                            serverDate = new Date(err_1.ServerTime);
                            config.systemClockOffset = serverDate.getTime() - Date.now();
                        }
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    };
};
exports.autoAdjustClockskewMiddlewareOptions = {
    step: 'finalizeRequest',
    name: 'autoAdjustClockskewMiddleware',
};
exports.prefixMiddlewareOptions = {
    step: 'initialize',
    name: 'addPrefixMiddleware',
};
exports.credentialsProvider = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var credentials, cred, error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, core_1.Credentials.get()];
            case 1:
                credentials = _a.sent();
                if (!credentials)
                    return [2 /*return*/, INVALID_CRED];
                cred = core_1.Credentials.shear(credentials);
                logger.debug('credentials provider get credentials', cred);
                return [2 /*return*/, cred];
            case 2:
                error_1 = _a.sent();
                logger.warn('credentials provider error', error_1);
                return [2 /*return*/, INVALID_CRED];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createS3Client = function (config, emitter) {
    var region = config.region, cancelTokenSource = config.cancelTokenSource, dangerouslyConnectToHttpEndpointForTesting = config.dangerouslyConnectToHttpEndpointForTesting, useAccelerateEndpoint = config.useAccelerateEndpoint;
    var localTestingConfig = {};
    if (dangerouslyConnectToHttpEndpointForTesting) {
        localTestingConfig = {
            endpoint: StorageConstants_1.localTestingStorageEndpoint,
            tls: false,
            bucketEndpoint: false,
            forcePathStyle: true,
        };
    }
    var s3client = new client_s3_1.S3Client(tslib_1.__assign(tslib_1.__assign({ region: region, 
        // Using provider instead of a static credentials, so that if an upload task was in progress, but credentials gets
        // changed or invalidated (e.g user signed out), the subsequent requests will fail.
        credentials: exports.credentialsProvider, customUserAgent: core_1.getAmplifyUserAgent() }, localTestingConfig), { requestHandler: new axios_http_handler_1.AxiosHttpHandler({}, emitter, cancelTokenSource), useAccelerateEndpoint: useAccelerateEndpoint }));
    s3client.middlewareStack.remove(StorageConstants_1.SET_CONTENT_LENGTH_HEADER);
    return s3client;
};
var MB = 1024 * 1024;
var GB = 1024 * MB;
var TB = 1024 * GB;
exports.DEFAULT_PART_SIZE = 5 * MB;
exports.MAX_OBJECT_SIZE = 5 * TB;
exports.MAX_PARTS_COUNT = 10000;
exports.DEFAULT_QUEUE_SIZE = 4;
exports.calculatePartSize = function (totalSize) {
    var partSize = exports.DEFAULT_PART_SIZE;
    var partsCount = Math.ceil(totalSize / partSize);
    while (partsCount > exports.MAX_PARTS_COUNT) {
        partSize *= 2;
        partsCount = Math.ceil(totalSize / partSize);
    }
    return partSize;
};
//# sourceMappingURL=S3ClientUtils.js.map