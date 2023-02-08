import { __assign, __awaiter, __generator } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Auth } from '@aws-amplify/auth';
import { Cache } from '@aws-amplify/cache';
import { RestAPIClass } from '@aws-amplify/api-rest';
import { GraphQLAPIClass, } from '@aws-amplify/api-graphql';
import { Amplify, ConsoleLogger as Logger, Credentials, } from '@aws-amplify/core';
var logger = new Logger('API');
/**
 * @deprecated
 * Use RestApi or GraphQLAPI to reduce your application bundle size
 * Export Cloud Logic APIs
 */
var APIClass = /** @class */ (function () {
    /**
     * Initialize API with AWS configuration
     * @param {Object} options - Configuration object for API
     */
    function APIClass(options) {
        this.Auth = Auth;
        this.Cache = Cache;
        this.Credentials = Credentials;
        this._options = options;
        this._restApi = new RestAPIClass(options);
        this._graphqlApi = new GraphQLAPIClass(options);
        logger.debug('API Options', this._options);
    }
    APIClass.prototype.getModuleName = function () {
        return 'API';
    };
    /**
     * Configure API part with aws configurations
     * @param {Object} config - Configuration of the API
     * @return {Object} - The current configuration
     */
    APIClass.prototype.configure = function (options) {
        this._options = Object.assign({}, this._options, options);
        // Share Amplify instance with client for SSR
        this._restApi.Credentials = this.Credentials;
        this._graphqlApi.Auth = this.Auth;
        this._graphqlApi.Cache = this.Cache;
        this._graphqlApi.Credentials = this.Credentials;
        var restAPIConfig = this._restApi.configure(this._options);
        var graphQLAPIConfig = this._graphqlApi.configure(this._options);
        return __assign(__assign({}, restAPIConfig), graphQLAPIConfig);
    };
    /**
     * Make a GET request
     * @param apiName - The api name of the request
     * @param path - The path of the request
     * @param [init] - Request extra params
     * @return A promise that resolves to an object with response status and JSON data, if successful.
     */
    APIClass.prototype.get = function (apiName, path, init) {
        return this._restApi.get(apiName, path, init);
    };
    /**
     * Make a POST request
     * @param apiName - The api name of the request
     * @param path - The path of the request
     * @param [init] - Request extra params
     * @return A promise that resolves to an object with response status and JSON data, if successful.
     */
    APIClass.prototype.post = function (apiName, path, init) {
        return this._restApi.post(apiName, path, init);
    };
    /**
     * Make a PUT request
     * @param apiName - The api name of the request
     * @param path - The path of the request
     * @param [init] - Request extra params
     * @return A promise that resolves to an object with response status and JSON data, if successful.
     */
    APIClass.prototype.put = function (apiName, path, init) {
        return this._restApi.put(apiName, path, init);
    };
    /**
     * Make a PATCH request
     * @param apiName - The api name of the request
     * @param path - The path of the request
     * @param [init] - Request extra params
     * @return A promise that resolves to an object with response status and JSON data, if successful.
     */
    APIClass.prototype.patch = function (apiName, path, init) {
        return this._restApi.patch(apiName, path, init);
    };
    /**
     * Make a DEL request
     * @param apiName - The api name of the request
     * @param path - The path of the request
     * @param [init] - Request extra params
     * @return A promise that resolves to an object with response status and JSON data, if successful.
     */
    APIClass.prototype.del = function (apiName, path, init) {
        return this._restApi.del(apiName, path, init);
    };
    /**
     * Make a HEAD request
     * @param apiName - The api name of the request
     * @param path - The path of the request
     * @param [init] - Request extra params
     * @return A promise that resolves to an object with response status and JSON data, if successful.
     */
    APIClass.prototype.head = function (apiName, path, init) {
        return this._restApi.head(apiName, path, init);
    };
    /**
     * Checks to see if an error thrown is from an api request cancellation
     * @param error - Any error
     * @return If the error was from an api request cancellation
     */
    APIClass.prototype.isCancel = function (error) {
        return this._restApi.isCancel(error);
    };
    /**
     * Cancels an inflight request for either a GraphQL request or a Rest API request.
     * @param request - request to cancel
     * @param [message] - custom error message
     * @return If the request was cancelled
     */
    APIClass.prototype.cancel = function (request, message) {
        if (this._restApi.hasCancelToken(request)) {
            return this._restApi.cancel(request, message);
        }
        else if (this._graphqlApi.hasCancelToken(request)) {
            return this._graphqlApi.cancel(request, message);
        }
        return false;
    };
    /**
     * Getting endpoint for API
     * @param apiName - The name of the api
     * @return The endpoint of the api
     */
    APIClass.prototype.endpoint = function (apiName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._restApi.endpoint(apiName)];
            });
        });
    };
    /**
     * to get the operation type
     * @param operation
     */
    APIClass.prototype.getGraphqlOperationType = function (operation) {
        return this._graphqlApi.getGraphqlOperationType(operation);
    };
    APIClass.prototype.graphql = function (options, additionalHeaders) {
        return this._graphqlApi.graphql(options, additionalHeaders);
    };
    return APIClass;
}());
export { APIClass };
export var API = new APIClass(null);
Amplify.register(API);
//# sourceMappingURL=API.js.map