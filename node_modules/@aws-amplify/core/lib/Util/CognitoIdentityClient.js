"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var client_cognito_identity_1 = require("@aws-sdk/client-cognito-identity");
var Platform_1 = require("../Platform");
/**
 * Returns a CognitoIdentityClient with middleware
 * @param {CognitoIdentityClientConfig} config
 * @return {CognitoIdentityClient}
 */
function createCognitoIdentityClient(config) {
    var client = new client_cognito_identity_1.CognitoIdentityClient({
        region: config.region,
        customUserAgent: Platform_1.getAmplifyUserAgent(),
    });
    client.middlewareStack.add(function (next, _) { return function (args) {
        return next(middlewareArgs(args));
    }; }, {
        step: 'build',
        name: 'cacheControlMiddleWare',
    });
    return client;
}
exports.createCognitoIdentityClient = createCognitoIdentityClient;
function middlewareArgs(args) {
    return tslib_1.__assign(tslib_1.__assign({}, args), { request: tslib_1.__assign(tslib_1.__assign({}, args.request), { headers: tslib_1.__assign(tslib_1.__assign({}, args.request.headers), { 'cache-control': 'no-store' }) }) });
}
exports.middlewareArgs = middlewareArgs;
//# sourceMappingURL=CognitoIdentityClient.js.map