// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __assign, __read } from "tslib";
import { Amplify, ConsoleLogger as Logger, parseAWSExports, } from '@aws-amplify/core';
import { AWSS3Provider } from './providers';
import axios from 'axios';
import { AWSS3UploadTask } from './providers/AWSS3UploadTask';
var logger = new Logger('StorageClass');
var loggerStorageInstance = new Logger('Storage'); // Logging relating to Storage instance management
var DEFAULT_PROVIDER = 'AWSS3';
/**
 * Provide storage methods to use AWS S3
 */
var Storage = /** @class */ (function () {
    /**
     * Initialize Storage
     * @param {Object} config - Configuration object for storage
     */
    function Storage() {
        this._config = {};
        this._pluggables = [];
        this._cancelTokenSourceMap = new WeakMap();
        logger.debug('Storage Options', this._config);
        this.get = this.get.bind(this);
        this.put = this.put.bind(this);
        this.remove = this.remove.bind(this);
        this.list = this.list.bind(this);
    }
    Storage.prototype.getModuleName = function () {
        return 'Storage';
    };
    /**
     * add plugin into Storage category
     * @param {Object} pluggable - an instance of the plugin
     */
    Storage.prototype.addPluggable = function (pluggable) {
        if (pluggable && pluggable.getCategory() === 'Storage') {
            this._pluggables.push(pluggable);
            var config = {};
            config = pluggable.configure(this._config[pluggable.getProviderName()]);
            return config;
        }
    };
    /**
     * Get the plugin object
     * @param providerName - the name of the plugin
     */
    Storage.prototype.getPluggable = function (providerName) {
        var pluggable = this._pluggables.find(function (pluggable) { return pluggable.getProviderName() === providerName; });
        if (pluggable === undefined) {
            logger.debug('No plugin found with providerName', providerName);
            return null;
        }
        else
            return pluggable;
    };
    /**
     * Remove the plugin object
     * @param providerName - the name of the plugin
     */
    Storage.prototype.removePluggable = function (providerName) {
        this._pluggables = this._pluggables.filter(function (pluggable) { return pluggable.getProviderName() !== providerName; });
        return;
    };
    /**
     * Configure Storage
     * @param {Object} config - Configuration object for storage
     * @return {Object} - Current configuration
     */
    Storage.prototype.configure = function (config) {
        var _this = this;
        var _a;
        logger.debug('configure Storage');
        if (!config)
            return this._config;
        var amplifyConfig = parseAWSExports(config);
        var storageConfig = (_a = amplifyConfig.Storage) !== null && _a !== void 0 ? _a : {};
        var defaultProviderConfigKeys = [
            'bucket',
            'region',
            'level',
            'track',
            'customPrefix',
            'serverSideEncryption',
            'SSECustomerAlgorithm',
            'SSECustomerKey',
            'SSECustomerKeyMD5',
            'SSEKMSKeyId',
        ];
        var hasDefaultProviderConfigKeys = function (config) {
            return Object.keys(config).find(function (key) { return defaultProviderConfigKeys.includes(key); });
        };
        if (hasDefaultProviderConfigKeys(storageConfig) &&
            !storageConfig[DEFAULT_PROVIDER]) {
            storageConfig[DEFAULT_PROVIDER] = {};
        }
        Object.entries(storageConfig).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            if (key &&
                defaultProviderConfigKeys.includes(key) &&
                value !== undefined) {
                storageConfig[DEFAULT_PROVIDER][key] = value;
                delete storageConfig[key];
            }
        });
        // only update new values for each provider
        Object.keys(storageConfig).forEach(function (providerName) {
            if (typeof storageConfig[providerName] !== 'string') {
                _this._config[providerName] = __assign(__assign({}, _this._config[providerName]), storageConfig[providerName]);
            }
        });
        this._pluggables.forEach(function (pluggable) {
            pluggable.configure(_this._config[pluggable.getProviderName()]);
        });
        if (this._pluggables.length === 0) {
            this.addPluggable(new AWSS3Provider());
        }
        return this._config;
    };
    Storage.prototype.getCancellableTokenSource = function () {
        return axios.CancelToken.source();
    };
    Storage.prototype.updateRequestToBeCancellable = function (request, cancelTokenSource) {
        this._cancelTokenSourceMap.set(request, cancelTokenSource);
    };
    Storage.prototype.isUploadTask = function (x) {
        return (typeof x !== 'undefined' &&
            typeof x['pause'] === 'function' &&
            typeof x['resume'] === 'function');
    };
    Storage.prototype.cancel = function (request, message) {
        if (request instanceof AWSS3UploadTask) {
            return request._cancel();
        }
        var cancelTokenSource = this._cancelTokenSourceMap.get(request);
        if (cancelTokenSource) {
            cancelTokenSource.cancel(message);
        }
        else {
            logger.debug('The request does not map to any cancel token');
        }
    };
    Storage.prototype.copy = function (src, dest, config) {
        var provider = (config === null || config === void 0 ? void 0 : config.provider) || DEFAULT_PROVIDER;
        var prov = this._pluggables.find(function (pluggable) { return pluggable.getProviderName() === provider; });
        if (prov === undefined) {
            logger.debug('No plugin found with providerName', provider);
            return Promise.reject('No plugin found in Storage for the provider');
        }
        var cancelTokenSource = this.getCancellableTokenSource();
        if (typeof prov.copy !== 'function') {
            return Promise.reject(".copy is not implemented on provider " + prov.getProviderName());
        }
        var responsePromise = prov.copy(src, dest, __assign(__assign({}, config), { cancelTokenSource: cancelTokenSource }));
        this.updateRequestToBeCancellable(responsePromise, cancelTokenSource);
        return responsePromise;
    };
    Storage.prototype.get = function (key, config) {
        var provider = (config === null || config === void 0 ? void 0 : config.provider) || DEFAULT_PROVIDER;
        var prov = this._pluggables.find(function (pluggable) { return pluggable.getProviderName() === provider; });
        if (prov === undefined) {
            logger.debug('No plugin found with providerName', provider);
            return Promise.reject('No plugin found in Storage for the provider');
        }
        var cancelTokenSource = this.getCancellableTokenSource();
        var responsePromise = prov.get(key, __assign(__assign({}, config), { cancelTokenSource: cancelTokenSource }));
        this.updateRequestToBeCancellable(responsePromise, cancelTokenSource);
        return responsePromise;
    };
    Storage.prototype.isCancelError = function (error) {
        return axios.isCancel(error);
    };
    Storage.prototype.put = function (key, object, config) {
        var provider = (config === null || config === void 0 ? void 0 : config.provider) || DEFAULT_PROVIDER;
        var prov = this._pluggables.find(function (pluggable) { return pluggable.getProviderName() === provider; });
        if (prov === undefined) {
            logger.debug('No plugin found with providerName', provider);
            return Promise.reject('No plugin found in Storage for the provider');
        }
        var cancelTokenSource = this.getCancellableTokenSource();
        var response = prov.put(key, object, __assign(__assign({}, config), { cancelTokenSource: cancelTokenSource }));
        if (!this.isUploadTask(response)) {
            this.updateRequestToBeCancellable(response, cancelTokenSource);
        }
        return response;
    };
    Storage.prototype.remove = function (key, config) {
        var provider = (config === null || config === void 0 ? void 0 : config.provider) || DEFAULT_PROVIDER;
        var prov = this._pluggables.find(function (pluggable) { return pluggable.getProviderName() === provider; });
        if (prov === undefined) {
            logger.debug('No plugin found with providerName', provider);
            return Promise.reject('No plugin found in Storage for the provider');
        }
        return prov.remove(key, config);
    };
    Storage.prototype.list = function (path, config) {
        var provider = (config === null || config === void 0 ? void 0 : config.provider) || DEFAULT_PROVIDER;
        var prov = this._pluggables.find(function (pluggable) { return pluggable.getProviderName() === provider; });
        if (prov === undefined) {
            logger.debug('No plugin found with providerName', provider);
            return Promise.reject('No plugin found in Storage for the provider');
        }
        return prov.list(path, config);
    };
    return Storage;
}());
export { Storage };
/**
 * Configure & register Storage singleton instance.
 */
var _instance = null;
var getInstance = function () {
    if (_instance) {
        return _instance;
    }
    loggerStorageInstance.debug('Create Storage Instance, debug');
    _instance = new Storage();
    _instance.vault = new Storage();
    var old_configure = _instance.configure;
    _instance.configure = function (options) {
        loggerStorageInstance.debug('storage configure called');
        var vaultConfig = __assign({}, old_configure.call(_instance, options));
        // set level private for each provider for the vault
        Object.keys(vaultConfig).forEach(function (providerName) {
            if (typeof vaultConfig[providerName] !== 'string') {
                vaultConfig[providerName] = __assign(__assign({}, vaultConfig[providerName]), { level: 'private' });
            }
        });
        loggerStorageInstance.debug('storage vault configure called');
        _instance.vault.configure(vaultConfig);
    };
    return _instance;
};
export var StorageInstance = getInstance();
Amplify.register(StorageInstance);
//# sourceMappingURL=Storage.js.map