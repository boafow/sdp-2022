"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var version_1 = require("./version");
var BASE_USER_AGENT = "aws-amplify/" + version_1.version;
exports.Platform = {
    userAgent: BASE_USER_AGENT + " js",
    product: '',
    navigator: null,
    isReactNative: false,
};
if (typeof navigator !== 'undefined' && navigator.product) {
    exports.Platform.product = navigator.product || '';
    exports.Platform.navigator = navigator || null;
    switch (navigator.product) {
        case 'ReactNative':
            exports.Platform.userAgent = BASE_USER_AGENT + " react-native";
            exports.Platform.isReactNative = true;
            break;
        default:
            exports.Platform.userAgent = BASE_USER_AGENT + " js";
            exports.Platform.isReactNative = false;
            break;
    }
}
exports.getAmplifyUserAgent = function (content) {
    return "" + exports.Platform.userAgent + (content ? content : '');
};
//# sourceMappingURL=index.js.map