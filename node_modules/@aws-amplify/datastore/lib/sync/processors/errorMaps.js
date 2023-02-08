"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var connectionTimeout = function (error) {
    return /^Connection failed: Connection Timeout/.test(error.message);
};
var serverError = function (error) {
    return /^Error: Request failed with status code 5\d\d/.test(error.message);
};
exports.mutationErrorMap = {
    BadModel: function () { return false; },
    BadRecord: function (error) {
        var message = error.message;
        return (/^Cannot return \w+ for [\w-_]+ type/.test(message) ||
            /^Variable '.+' has coerced Null value for NonNull type/.test(message)); // newly required field, out of date client
    },
    ConfigError: function () { return false; },
    Transient: function (error) { return connectionTimeout(error) || serverError(error); },
    Unauthorized: function (error) {
        return /^Request failed with status code 401/.test(error.message);
    },
};
exports.subscriptionErrorMap = {
    BadModel: function () { return false; },
    BadRecord: function () { return false; },
    ConfigError: function () { return false; },
    Transient: function (observableError) {
        var error = unwrapObservableError(observableError);
        return connectionTimeout(error) || serverError(error);
    },
    Unauthorized: function (observableError) {
        var error = unwrapObservableError(observableError);
        return /Connection failed.+Unauthorized/.test(error.message);
    },
};
exports.syncErrorMap = {
    BadModel: function () { return false; },
    BadRecord: function (error) { return /^Cannot return \w+ for [\w-_]+ type/.test(error.message); },
    ConfigError: function () { return false; },
    Transient: function (error) { return connectionTimeout(error) || serverError(error); },
    Unauthorized: function () { return false; },
};
/**
 * Get the first error reason of an observable.
 * Allows for error maps to be easily applied to observable errors
 *
 * @param observableError an error from ZenObservable subscribe error callback
 */
function unwrapObservableError(observableError) {
    var _a = observableError.error, _b = tslib_1.__read((_a === void 0 ? {
        errors: [],
    } : _a).errors, 1), error = _b[0];
    return error;
}
function getMutationErrorType(error) {
    return mapErrorToType(exports.mutationErrorMap, error);
}
exports.getMutationErrorType = getMutationErrorType;
function getSubscriptionErrorType(error) {
    return mapErrorToType(exports.subscriptionErrorMap, error);
}
exports.getSubscriptionErrorType = getSubscriptionErrorType;
function getSyncErrorType(error) {
    return mapErrorToType(exports.syncErrorMap, error);
}
exports.getSyncErrorType = getSyncErrorType;
/**
 * Categorizes an error with a broad error type, intended to make
 * customer error handling code simpler.
 * @param errorMap Error names and a list of patterns that indicate them (each pattern as a regex or function)
 * @param error The underying error to categorize.
 */
function mapErrorToType(errorMap, error) {
    var e_1, _a;
    var errorTypes = tslib_1.__spread(Object.keys(errorMap));
    try {
        for (var errorTypes_1 = tslib_1.__values(errorTypes), errorTypes_1_1 = errorTypes_1.next(); !errorTypes_1_1.done; errorTypes_1_1 = errorTypes_1.next()) {
            var errorType = errorTypes_1_1.value;
            var matcher = errorMap[errorType];
            if (matcher === null || matcher === void 0 ? void 0 : matcher(error)) {
                return errorType;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (errorTypes_1_1 && !errorTypes_1_1.done && (_a = errorTypes_1.return)) _a.call(errorTypes_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return 'Unknown';
}
exports.mapErrorToType = mapErrorToType;
//# sourceMappingURL=errorMaps.js.map