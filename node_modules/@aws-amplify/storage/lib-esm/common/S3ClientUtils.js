import { __assign, __awaiter, __generator } from "tslib";
import { Credentials, Logger, getAmplifyUserAgent, } from '@aws-amplify/core';
import { S3Client } from '@aws-sdk/client-s3';
import { AxiosHttpHandler } from '../providers/axios-http-handler';
import { localTestingStorageEndpoint, SET_CONTENT_LENGTH_HEADER, } from './StorageConstants';
var logger = new Logger('S3ClientUtils');
// placeholder credentials in order to satisfy type requirement, always results in 403 when used
var INVALID_CRED = { accessKeyId: '', secretAccessKey: '' };
export var getPrefix = function (config) {
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
export var createPrefixMiddleware = function (opt, key) {
    return function (next, _context) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var credentials, cred, prefix, clonedInput, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Credentials.get()];
                    case 1:
                        credentials = _a.sent();
                        cred = Credentials.shear(credentials);
                        prefix = getPrefix(__assign(__assign({}, opt), { credentials: cred }));
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
export var autoAdjustClockskewMiddleware = function (config) {
    return function (next, _context) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var err_1, serverDate;
            return __generator(this, function (_a) {
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
export var autoAdjustClockskewMiddlewareOptions = {
    step: 'finalizeRequest',
    name: 'autoAdjustClockskewMiddleware',
};
export var prefixMiddlewareOptions = {
    step: 'initialize',
    name: 'addPrefixMiddleware',
};
export var credentialsProvider = function () { return __awaiter(void 0, void 0, void 0, function () {
    var credentials, cred, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Credentials.get()];
            case 1:
                credentials = _a.sent();
                if (!credentials)
                    return [2 /*return*/, INVALID_CRED];
                cred = Credentials.shear(credentials);
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
export var createS3Client = function (config, emitter) {
    var region = config.region, cancelTokenSource = config.cancelTokenSource, dangerouslyConnectToHttpEndpointForTesting = config.dangerouslyConnectToHttpEndpointForTesting, useAccelerateEndpoint = config.useAccelerateEndpoint;
    var localTestingConfig = {};
    if (dangerouslyConnectToHttpEndpointForTesting) {
        localTestingConfig = {
            endpoint: localTestingStorageEndpoint,
            tls: false,
            bucketEndpoint: false,
            forcePathStyle: true,
        };
    }
    var s3client = new S3Client(__assign(__assign({ region: region, 
        // Using provider instead of a static credentials, so that if an upload task was in progress, but credentials gets
        // changed or invalidated (e.g user signed out), the subsequent requests will fail.
        credentials: credentialsProvider, customUserAgent: getAmplifyUserAgent() }, localTestingConfig), { requestHandler: new AxiosHttpHandler({}, emitter, cancelTokenSource), useAccelerateEndpoint: useAccelerateEndpoint }));
    s3client.middlewareStack.remove(SET_CONTENT_LENGTH_HEADER);
    return s3client;
};
var MB = 1024 * 1024;
var GB = 1024 * MB;
var TB = 1024 * GB;
export var DEFAULT_PART_SIZE = 5 * MB;
export var MAX_OBJECT_SIZE = 5 * TB;
export var MAX_PARTS_COUNT = 10000;
export var DEFAULT_QUEUE_SIZE = 4;
export var calculatePartSize = function (totalSize) {
    var partSize = DEFAULT_PART_SIZE;
    var partsCount = Math.ceil(totalSize / partSize);
    while (partsCount > MAX_PARTS_COUNT) {
        partSize *= 2;
        partsCount = Math.ceil(totalSize / partSize);
    }
    return partSize;
};
//# sourceMappingURL=S3ClientUtils.js.map