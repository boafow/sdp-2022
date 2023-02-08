// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __assign } from "tslib";
import { CognitoIdentityClient, } from '@aws-sdk/client-cognito-identity';
import { getAmplifyUserAgent } from '../Platform';
/**
 * Returns a CognitoIdentityClient with middleware
 * @param {CognitoIdentityClientConfig} config
 * @return {CognitoIdentityClient}
 */
export function createCognitoIdentityClient(config) {
    var client = new CognitoIdentityClient({
        region: config.region,
        customUserAgent: getAmplifyUserAgent(),
    });
    client.middlewareStack.add(function (next, _) { return function (args) {
        return next(middlewareArgs(args));
    }; }, {
        step: 'build',
        name: 'cacheControlMiddleWare',
    });
    return client;
}
export function middlewareArgs(args) {
    return __assign(__assign({}, args), { request: __assign(__assign({}, args.request), { headers: __assign(__assign({}, args.request.headers), { 'cache-control': 'no-store' }) }) });
}
//# sourceMappingURL=CognitoIdentityClient.js.map