"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
var JS_1 = require("../JS");
var StorageHelper_1 = require("../StorageHelper");
exports.Linking = {};
exports.AppState = {
    addEventListener: function (action, handler) { return undefined; },
};
// if not in react native, just use local storage
exports.AsyncStorage = JS_1.browserOrNode().isBrowser
    ? new StorageHelper_1.StorageHelper().getStorage()
    : undefined;
//# sourceMappingURL=index.js.map