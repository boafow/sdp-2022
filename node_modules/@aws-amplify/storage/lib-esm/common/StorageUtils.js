import { Hub } from '@aws-amplify/core';
import { AMPLIFY_SYMBOL } from './StorageConstants';
export var byteLength = function (x) {
    if (typeof x === 'string') {
        return x.length;
    }
    else if (isArrayBuffer(x)) {
        return x.byteLength;
    }
    else if (isBlob(x)) {
        return x.size;
    }
    else {
        throw new Error('Cannot determine byte length of ' + x);
    }
};
export var dispatchStorageEvent = function (track, event, attrs, metrics, message) {
    if (track) {
        var data = { attrs: attrs };
        if (metrics) {
            data['metrics'] = metrics;
        }
        Hub.dispatch('storage', {
            event: event,
            data: data,
            message: message,
        }, 'Storage', AMPLIFY_SYMBOL);
    }
};
export var isFile = function (x) {
    return typeof x !== 'undefined' && x instanceof File;
};
export var isBlob = function (x) {
    return typeof x !== 'undefined' && x instanceof Blob;
};
var isArrayBuffer = function (x) {
    return typeof x !== 'undefined' && x instanceof ArrayBuffer;
};
//# sourceMappingURL=StorageUtils.js.map