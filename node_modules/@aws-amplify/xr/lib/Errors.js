"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var XRError = /** @class */ (function (_super) {
    tslib_1.__extends(XRError, _super);
    function XRError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return XRError;
}(Error));
exports.XRError = XRError;
var XRNoSceneConfiguredError = /** @class */ (function (_super) {
    tslib_1.__extends(XRNoSceneConfiguredError, _super);
    function XRNoSceneConfiguredError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return XRNoSceneConfiguredError;
}(XRError));
exports.XRNoSceneConfiguredError = XRNoSceneConfiguredError;
var XRSceneNotFoundError = /** @class */ (function (_super) {
    tslib_1.__extends(XRSceneNotFoundError, _super);
    function XRSceneNotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return XRSceneNotFoundError;
}(XRError));
exports.XRSceneNotFoundError = XRSceneNotFoundError;
var XRSceneNotLoadedError = /** @class */ (function (_super) {
    tslib_1.__extends(XRSceneNotLoadedError, _super);
    function XRSceneNotLoadedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return XRSceneNotLoadedError;
}(XRError));
exports.XRSceneNotLoadedError = XRSceneNotLoadedError;
var XRNoDomElement = /** @class */ (function (_super) {
    tslib_1.__extends(XRNoDomElement, _super);
    function XRNoDomElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return XRNoDomElement;
}(XRError));
exports.XRNoDomElement = XRNoDomElement;
var XRSceneLoadFailure = /** @class */ (function (_super) {
    tslib_1.__extends(XRSceneLoadFailure, _super);
    function XRSceneLoadFailure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return XRSceneLoadFailure;
}(XRError));
exports.XRSceneLoadFailure = XRSceneLoadFailure;
var XRProviderNotConfigured = /** @class */ (function (_super) {
    tslib_1.__extends(XRProviderNotConfigured, _super);
    function XRProviderNotConfigured() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return XRProviderNotConfigured;
}(XRError));
exports.XRProviderNotConfigured = XRProviderNotConfigured;
//# sourceMappingURL=Errors.js.map