"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var graphql_1 = require("graphql");
var core_1 = require("@aws-amplify/core");
var pubsub_1 = require("@aws-amplify/pubsub");
var auth_1 = require("@aws-amplify/auth");
var cache_1 = require("@aws-amplify/cache");
var types_1 = require("./types");
var api_rest_1 = require("@aws-amplify/api-rest");
var USER_AGENT_HEADER = 'x-amz-user-agent';
var logger = new core_1.ConsoleLogger('GraphQLAPI');
exports.graphqlOperation = function (query, variables, authToken, userAgentSuffix) {
    if (variables === void 0) { variables = {}; }
    return ({
        query: query,
        variables: variables,
        authToken: authToken,
        userAgentSuffix: userAgentSuffix,
    });
};
/**
 * Export Cloud Logic APIs
 */
var GraphQLAPIClass = /** @class */ (function () {
    /**
     * Initialize GraphQL API with AWS configuration
     * @param {Object} options - Configuration object for API
     */
    function GraphQLAPIClass(options) {
        this._api = null;
        this.Auth = auth_1.Auth;
        this.Cache = cache_1.Cache;
        this.Credentials = core_1.Credentials;
        this._options = options;
        logger.debug('API Options', this._options);
    }
    GraphQLAPIClass.prototype.getModuleName = function () {
        return 'GraphQLAPI';
    };
    /**
     * Configure API
     * @param {Object} config - Configuration of the API
     * @return {Object} - The current configuration
     */
    GraphQLAPIClass.prototype.configure = function (options) {
        var _a = options || {}, _b = _a.API, API = _b === void 0 ? {} : _b, otherOptions = tslib_1.__rest(_a, ["API"]);
        var opt = tslib_1.__assign(tslib_1.__assign({}, otherOptions), API);
        logger.debug('configure GraphQL API', { opt: opt });
        if (opt['aws_project_region']) {
            opt = Object.assign({}, opt, {
                region: opt['aws_project_region'],
                header: {},
            });
        }
        if (typeof opt.graphql_headers !== 'undefined' &&
            typeof opt.graphql_headers !== 'function') {
            logger.warn('graphql_headers should be a function');
            opt.graphql_headers = undefined;
        }
        this._options = Object.assign({}, this._options, opt);
        this.createInstance();
        return this._options;
    };
    /**
     * Create an instance of API for the library
     * @return - A promise of true if Success
     */
    GraphQLAPIClass.prototype.createInstance = function () {
        logger.debug('create Rest instance');
        if (this._options) {
            this._api = new api_rest_1.RestClient(this._options);
            // Share instance Credentials with client for SSR
            this._api.Credentials = this.Credentials;
            return true;
        }
        else {
            return Promise.reject('API not configured');
        }
    };
    GraphQLAPIClass.prototype._headerBasedAuth = function (defaultAuthenticationType, additionalHeaders) {
        if (additionalHeaders === void 0) { additionalHeaders = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, aws_appsync_authenticationType, apiKey, authenticationType, headers, _b, credentialsOK, token, federatedInfo, currentUser, e_1, session, e_2;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this._options, aws_appsync_authenticationType = _a.aws_appsync_authenticationType, apiKey = _a.aws_appsync_apiKey;
                        authenticationType = defaultAuthenticationType || aws_appsync_authenticationType || 'AWS_IAM';
                        headers = {};
                        _b = authenticationType;
                        switch (_b) {
                            case 'API_KEY': return [3 /*break*/, 1];
                            case 'AWS_IAM': return [3 /*break*/, 2];
                            case 'OPENID_CONNECT': return [3 /*break*/, 4];
                            case 'AMAZON_COGNITO_USER_POOLS': return [3 /*break*/, 11];
                            case 'AWS_LAMBDA': return [3 /*break*/, 15];
                        }
                        return [3 /*break*/, 16];
                    case 1:
                        if (!apiKey) {
                            throw new Error(types_1.GraphQLAuthError.NO_API_KEY);
                        }
                        headers = {
                            Authorization: null,
                            'X-Api-Key': apiKey,
                        };
                        return [3 /*break*/, 17];
                    case 2: return [4 /*yield*/, this._ensureCredentials()];
                    case 3:
                        credentialsOK = _c.sent();
                        if (!credentialsOK) {
                            throw new Error(types_1.GraphQLAuthError.NO_CREDENTIALS);
                        }
                        return [3 /*break*/, 17];
                    case 4:
                        _c.trys.push([4, 9, , 10]);
                        token = void 0;
                        return [4 /*yield*/, cache_1.Cache.getItem('federatedInfo')];
                    case 5:
                        federatedInfo = _c.sent();
                        if (!federatedInfo) return [3 /*break*/, 6];
                        token = federatedInfo.token;
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, auth_1.Auth.currentAuthenticatedUser()];
                    case 7:
                        currentUser = _c.sent();
                        if (currentUser) {
                            token = currentUser.token;
                        }
                        _c.label = 8;
                    case 8:
                        if (!token) {
                            throw new Error(types_1.GraphQLAuthError.NO_FEDERATED_JWT);
                        }
                        headers = {
                            Authorization: token,
                        };
                        return [3 /*break*/, 10];
                    case 9:
                        e_1 = _c.sent();
                        throw new Error(types_1.GraphQLAuthError.NO_CURRENT_USER);
                    case 10: return [3 /*break*/, 17];
                    case 11:
                        _c.trys.push([11, 13, , 14]);
                        return [4 /*yield*/, this.Auth.currentSession()];
                    case 12:
                        session = _c.sent();
                        headers = {
                            Authorization: session.getAccessToken().getJwtToken(),
                        };
                        return [3 /*break*/, 14];
                    case 13:
                        e_2 = _c.sent();
                        throw new Error(types_1.GraphQLAuthError.NO_CURRENT_USER);
                    case 14: return [3 /*break*/, 17];
                    case 15:
                        if (!additionalHeaders.Authorization) {
                            throw new Error(types_1.GraphQLAuthError.NO_AUTH_TOKEN);
                        }
                        headers = {
                            Authorization: additionalHeaders.Authorization,
                        };
                        return [3 /*break*/, 17];
                    case 16:
                        headers = {
                            Authorization: null,
                        };
                        return [3 /*break*/, 17];
                    case 17: return [2 /*return*/, headers];
                }
            });
        });
    };
    /**
     * to get the operation type
     * @param operation
     */
    GraphQLAPIClass.prototype.getGraphqlOperationType = function (operation) {
        var doc = graphql_1.parse(operation);
        var definitions = doc.definitions;
        var _a = tslib_1.__read(definitions, 1), operationType = _a[0].operation;
        return operationType;
    };
    /**
     * Executes a GraphQL operation
     *
     * @param options - GraphQL Options
     * @param [additionalHeaders] - headers to merge in after any `graphql_headers` set in the config
     * @returns An Observable if the query is a subscription query, else a promise of the graphql result.
     */
    GraphQLAPIClass.prototype.graphql = function (_a, additionalHeaders) {
        var paramQuery = _a.query, _b = _a.variables, variables = _b === void 0 ? {} : _b, authMode = _a.authMode, authToken = _a.authToken, userAgentSuffix = _a.userAgentSuffix;
        var query = typeof paramQuery === 'string'
            ? graphql_1.parse(paramQuery)
            : graphql_1.parse(graphql_1.print(paramQuery));
        var _c = tslib_1.__read(query.definitions.filter(function (def) { return def.kind === 'OperationDefinition'; }), 1), _d = _c[0], operationDef = _d === void 0 ? {} : _d;
        var operationType = operationDef.operation;
        var headers = additionalHeaders || {};
        // if an authorization header is set, have the explicit authToken take precedence
        if (authToken) {
            headers.Authorization = authToken;
        }
        switch (operationType) {
            case 'query':
            case 'mutation':
                this.createInstanceIfNotCreated();
                var cancellableToken = this._api.getCancellableToken();
                var initParams = {
                    cancellableToken: cancellableToken,
                    withCredentials: this._options.withCredentials,
                };
                var responsePromise = this._graphql({ query: query, variables: variables, authMode: authMode, userAgentSuffix: userAgentSuffix }, headers, initParams);
                this._api.updateRequestToBeCancellable(responsePromise, cancellableToken);
                return responsePromise;
            case 'subscription':
                return this._graphqlSubscribe({ query: query, variables: variables, authMode: authMode }, headers);
            default:
                throw new Error("invalid operation type: " + operationType);
        }
    };
    GraphQLAPIClass.prototype._graphql = function (_a, additionalHeaders, initParams) {
        var query = _a.query, variables = _a.variables, authMode = _a.authMode, userAgentSuffix = _a.userAgentSuffix;
        if (additionalHeaders === void 0) { additionalHeaders = {}; }
        if (initParams === void 0) { initParams = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _b, region, appSyncGraphqlEndpoint, _c, graphql_headers, customGraphqlEndpoint, customEndpointRegion, headers, _d, _e, _f, _g, _h, _j, body, init, endpoint, error, response, err_1, errors;
            var _k;
            return tslib_1.__generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        this.createInstanceIfNotCreated();
                        _b = this._options, region = _b.aws_appsync_region, appSyncGraphqlEndpoint = _b.aws_appsync_graphqlEndpoint, _c = _b.graphql_headers, graphql_headers = _c === void 0 ? function () { return ({}); } : _c, customGraphqlEndpoint = _b.graphql_endpoint, customEndpointRegion = _b.graphql_endpoint_iam_region;
                        _d = [{}];
                        _e = !customGraphqlEndpoint;
                        if (!_e) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._headerBasedAuth(authMode, additionalHeaders)];
                    case 1:
                        _e = (_l.sent());
                        _l.label = 2;
                    case 2:
                        _f = [tslib_1.__assign.apply(void 0, _d.concat([(_e)]))];
                        _g = customGraphqlEndpoint;
                        if (!_g) return [3 /*break*/, 6];
                        if (!customEndpointRegion) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._headerBasedAuth(authMode, additionalHeaders)];
                    case 3:
                        _h = _l.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _h = { Authorization: null };
                        _l.label = 5;
                    case 5:
                        _g = (_h);
                        _l.label = 6;
                    case 6:
                        _j = [tslib_1.__assign.apply(void 0, _f.concat([(_g)]))];
                        return [4 /*yield*/, graphql_headers({ query: query, variables: variables })];
                    case 7:
                        headers = tslib_1.__assign.apply(void 0, [tslib_1.__assign.apply(void 0, [tslib_1.__assign.apply(void 0, _j.concat([(_l.sent())])), additionalHeaders]), (!customGraphqlEndpoint && (_k = {},
                                _k[USER_AGENT_HEADER] = core_1.getAmplifyUserAgent(userAgentSuffix),
                                _k))]);
                        body = {
                            query: graphql_1.print(query),
                            variables: variables,
                        };
                        init = Object.assign({
                            headers: headers,
                            body: body,
                            signerServiceInfo: {
                                service: !customGraphqlEndpoint ? 'appsync' : 'execute-api',
                                region: !customGraphqlEndpoint ? region : customEndpointRegion,
                            },
                        }, initParams);
                        endpoint = customGraphqlEndpoint || appSyncGraphqlEndpoint;
                        if (!endpoint) {
                            error = new graphql_1.GraphQLError('No graphql endpoint provided.');
                            throw {
                                data: {},
                                errors: [error],
                            };
                        }
                        _l.label = 8;
                    case 8:
                        _l.trys.push([8, 10, , 11]);
                        return [4 /*yield*/, this._api.post(endpoint, init)];
                    case 9:
                        response = _l.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        err_1 = _l.sent();
                        // If the exception is because user intentionally
                        // cancelled the request, do not modify the exception
                        // so that clients can identify the exception correctly.
                        if (this._api.isCancel(err_1)) {
                            throw err_1;
                        }
                        response = {
                            data: {},
                            errors: [new graphql_1.GraphQLError(err_1.message, null, null, null, null, err_1)],
                        };
                        return [3 /*break*/, 11];
                    case 11:
                        errors = response.errors;
                        if (errors && errors.length) {
                            throw response;
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    GraphQLAPIClass.prototype.createInstanceIfNotCreated = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._api) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createInstance()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Checks to see if an error thrown is from an api request cancellation
     * @param {any} error - Any error
     * @return {boolean} - A boolean indicating if the error was from an api request cancellation
     */
    GraphQLAPIClass.prototype.isCancel = function (error) {
        return this._api.isCancel(error);
    };
    /**
     * Cancels an inflight request. Only applicable for graphql queries and mutations
     * @param {any} request - request to cancel
     * @return {boolean} - A boolean indicating if the request was cancelled
     */
    GraphQLAPIClass.prototype.cancel = function (request, message) {
        return this._api.cancel(request, message);
    };
    /**
     * Check if the request has a corresponding cancel token in the WeakMap.
     * @params request - The request promise
     * @return if the request has a corresponding cancel token.
     */
    GraphQLAPIClass.prototype.hasCancelToken = function (request) {
        return this._api.hasCancelToken(request);
    };
    GraphQLAPIClass.prototype._graphqlSubscribe = function (_a, additionalHeaders) {
        var query = _a.query, variables = _a.variables, defaultAuthenticationType = _a.authMode, authToken = _a.authToken;
        if (additionalHeaders === void 0) { additionalHeaders = {}; }
        var _b = this._options, region = _b.aws_appsync_region, appSyncGraphqlEndpoint = _b.aws_appsync_graphqlEndpoint, aws_appsync_authenticationType = _b.aws_appsync_authenticationType, apiKey = _b.aws_appsync_apiKey, _c = _b.graphql_headers, graphql_headers = _c === void 0 ? function () { return ({}); } : _c;
        var authenticationType = defaultAuthenticationType || aws_appsync_authenticationType || 'AWS_IAM';
        if (pubsub_1.PubSub && typeof pubsub_1.PubSub.subscribe === 'function') {
            return pubsub_1.PubSub.subscribe('', {
                provider: core_1.INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER,
                appSyncGraphqlEndpoint: appSyncGraphqlEndpoint,
                authenticationType: authenticationType,
                apiKey: apiKey,
                query: graphql_1.print(query),
                region: region,
                variables: variables,
                graphql_headers: graphql_headers,
                additionalHeaders: additionalHeaders,
                authToken: authToken,
            });
        }
        else {
            logger.debug('No pubsub module applied for subscription');
            throw new Error('No pubsub module applied for subscription');
        }
    };
    /**
     * @private
     */
    GraphQLAPIClass.prototype._ensureCredentials = function () {
        var _this = this;
        return this.Credentials.get()
            .then(function (credentials) {
            if (!credentials)
                return false;
            var cred = _this.Credentials.shear(credentials);
            logger.debug('set credentials for api', cred);
            return true;
        })
            .catch(function (err) {
            logger.warn('ensure credentials error', err);
            return false;
        });
    };
    return GraphQLAPIClass;
}());
exports.GraphQLAPIClass = GraphQLAPIClass;
exports.GraphQLAPI = new GraphQLAPIClass(null);
core_1.Amplify.register(exports.GraphQLAPI);
//# sourceMappingURL=GraphQLAPI.js.map