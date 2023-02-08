"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@aws-amplify/core");
var StorageConstants_1 = require("./StorageConstants");
exports.byteLength = function (x) {
    if (typeof x === 'string') {
        return x.length;
    }
    else if (isArrayBuffer(x)) {
        return x.byteLength;
    }
    else if (exports.isBlob(x)) {
        return x.size;
    }
    else {
        throw new Error('Cannot determine byte length of ' + x);
    }
};
exports.dispatchStorageEvent = function (track, event, attrs, metrics, message) {
    if (track) {
        var data = { attrs: attrs };
        if (metrics) {
            data['metrics'] = metrics;
        }
        core_1.Hub.dispatch('storage', {
            event: event,
            data: data,
            message: message,
        }, 'Storage', StorageConstants_1.AMPLIFY_SYMBOL);
    }
};
exports.isFile = function (x) {
    return typeof x !== 'undefined' && x instanceof File;
};
exports.isBlob = function (x) {
    return typeof x !== 'undefined' && x instanceof Blob;
};
var isArrayBuffer = function (x) {
    return typeof x !== 'undefined' && x instanceof ArrayBuffer;
};
//# sourceMappingURL=StorageUtils.js.map