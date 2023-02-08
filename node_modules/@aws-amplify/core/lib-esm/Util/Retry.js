import { __awaiter, __extends, __generator, __read, __spread } from "tslib";
import { ConsoleLogger as Logger } from '../Logger/ConsoleLogger';
var logger = new Logger('Util');
var NonRetryableError = /** @class */ (function (_super) {
    __extends(NonRetryableError, _super);
    function NonRetryableError(message) {
        var _this = _super.call(this, message) || this;
        _this.nonRetryable = true;
        return _this;
    }
    return NonRetryableError;
}(Error));
export { NonRetryableError };
export var isNonRetryableError = function (obj) {
    var key = 'nonRetryable';
    return obj && obj[key];
};
/**
 * @private
 * Internal use of Amplify only
 */
export function retry(functionToRetry, args, delayFn, onTerminate) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            if (typeof functionToRetry !== 'function') {
                throw Error('functionToRetry must be a function');
            }
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var attempt, terminated, timeout, wakeUp, lastError, _loop_1, state_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                attempt = 0;
                                terminated = false;
                                wakeUp = function () { };
                                onTerminate &&
                                    onTerminate.then(function () {
                                        // signal not to try anymore.
                                        terminated = true;
                                        // stop sleeping if we're sleeping.
                                        clearTimeout(timeout);
                                        wakeUp();
                                    });
                                _loop_1 = function () {
                                    var _a, _b, err_1, retryIn_1;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                attempt++;
                                                logger.debug(functionToRetry.name + " attempt #" + attempt + " with this vars: " + JSON.stringify(args));
                                                _c.label = 1;
                                            case 1:
                                                _c.trys.push([1, 3, , 7]);
                                                _a = {};
                                                _b = resolve;
                                                return [4 /*yield*/, functionToRetry.apply(void 0, __spread(args))];
                                            case 2: return [2 /*return*/, (_a.value = _b.apply(void 0, [_c.sent()]), _a)];
                                            case 3:
                                                err_1 = _c.sent();
                                                lastError = err_1;
                                                logger.debug("error on " + functionToRetry.name, err_1);
                                                if (isNonRetryableError(err_1)) {
                                                    logger.debug(functionToRetry.name + " non retryable error", err_1);
                                                    return [2 /*return*/, { value: reject(err_1) }];
                                                }
                                                retryIn_1 = delayFn(attempt, args, err_1);
                                                logger.debug(functionToRetry.name + " retrying in " + retryIn_1 + " ms");
                                                if (!(retryIn_1 === false || terminated)) return [3 /*break*/, 4];
                                                return [2 /*return*/, { value: reject(err_1) }];
                                            case 4: return [4 /*yield*/, new Promise(function (r) {
                                                    wakeUp = r; // export wakeUp for onTerminate handling
                                                    timeout = setTimeout(wakeUp, retryIn_1);
                                                })];
                                            case 5:
                                                _c.sent();
                                                _c.label = 6;
                                            case 6: return [3 /*break*/, 7];
                                            case 7: return [2 /*return*/];
                                        }
                                    });
                                };
                                _a.label = 1;
                            case 1:
                                if (!!terminated) return [3 /*break*/, 3];
                                return [5 /*yield**/, _loop_1()];
                            case 2:
                                state_1 = _a.sent();
                                if (typeof state_1 === "object")
                                    return [2 /*return*/, state_1.value];
                                return [3 /*break*/, 1];
                            case 3:
                                // reached if terminated while waiting for a timer.
                                reject(lastError);
                                return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
var MAX_DELAY_MS = 5 * 60 * 1000;
/**
 * @private
 * Internal use of Amplify only
 */
export function jitteredBackoff(maxDelayMs) {
    if (maxDelayMs === void 0) { maxDelayMs = MAX_DELAY_MS; }
    var BASE_TIME_MS = 100;
    var JITTER_FACTOR = 100;
    return function (attempt) {
        var delay = Math.pow(2, attempt) * BASE_TIME_MS + JITTER_FACTOR * Math.random();
        return delay > maxDelayMs ? false : delay;
    };
}
/**
 * @private
 * Internal use of Amplify only
 */
export var jitteredExponentialRetry = function (functionToRetry, args, maxDelayMs, onTerminate) {
    if (maxDelayMs === void 0) { maxDelayMs = MAX_DELAY_MS; }
    return retry(functionToRetry, args, jitteredBackoff(maxDelayMs), onTerminate);
};
//# sourceMappingURL=Retry.js.map