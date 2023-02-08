// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __read, __spread, __values } from "tslib";
import { AWS_CLOUDWATCH_CATEGORY } from '../Util/Constants';
var LOG_LEVELS = {
    VERBOSE: 1,
    DEBUG: 2,
    INFO: 3,
    WARN: 4,
    ERROR: 5,
};
export var LOG_TYPE;
(function (LOG_TYPE) {
    LOG_TYPE["DEBUG"] = "DEBUG";
    LOG_TYPE["ERROR"] = "ERROR";
    LOG_TYPE["INFO"] = "INFO";
    LOG_TYPE["WARN"] = "WARN";
    LOG_TYPE["VERBOSE"] = "VERBOSE";
})(LOG_TYPE || (LOG_TYPE = {}));
/**
 * Write logs
 * @class Logger
 */
var ConsoleLogger = /** @class */ (function () {
    /**
     * @constructor
     * @param {string} name - Name of the logger
     */
    function ConsoleLogger(name, level) {
        if (level === void 0) { level = LOG_TYPE.WARN; }
        this.name = name;
        this.level = level;
        this._pluggables = [];
    }
    ConsoleLogger.prototype._padding = function (n) {
        return n < 10 ? '0' + n : '' + n;
    };
    ConsoleLogger.prototype._ts = function () {
        var dt = new Date();
        return ([this._padding(dt.getMinutes()), this._padding(dt.getSeconds())].join(':') +
            '.' +
            dt.getMilliseconds());
    };
    ConsoleLogger.prototype.configure = function (config) {
        if (!config)
            return this._config;
        this._config = config;
        return this._config;
    };
    /**
     * Write log
     * @method
     * @memeberof Logger
     * @param {LOG_TYPE|string} type - log type, default INFO
     * @param {string|object} msg - Logging message or object
     */
    ConsoleLogger.prototype._log = function (type) {
        var e_1, _a;
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        var logger_level_name = this.level;
        if (ConsoleLogger.LOG_LEVEL) {
            logger_level_name = ConsoleLogger.LOG_LEVEL;
        }
        if (typeof window !== 'undefined' && window.LOG_LEVEL) {
            logger_level_name = window.LOG_LEVEL;
        }
        var logger_level = LOG_LEVELS[logger_level_name];
        var type_level = LOG_LEVELS[type];
        if (!(type_level >= logger_level)) {
            // Do nothing if type is not greater than or equal to logger level (handle undefined)
            return;
        }
        var log = console.log.bind(console);
        if (type === LOG_TYPE.ERROR && console.error) {
            log = console.error.bind(console);
        }
        if (type === LOG_TYPE.WARN && console.warn) {
            log = console.warn.bind(console);
        }
        var prefix = "[" + type + "] " + this._ts() + " " + this.name;
        var message = '';
        if (msg.length === 1 && typeof msg[0] === 'string') {
            message = prefix + " - " + msg[0];
            log(message);
        }
        else if (msg.length === 1) {
            message = prefix + " " + msg[0];
            log(prefix, msg[0]);
        }
        else if (typeof msg[0] === 'string') {
            var obj = msg.slice(1);
            if (obj.length === 1) {
                obj = obj[0];
            }
            message = prefix + " - " + msg[0] + " " + obj;
            log(prefix + " - " + msg[0], obj);
        }
        else {
            message = prefix + " " + msg;
            log(prefix, msg);
        }
        try {
            for (var _b = __values(this._pluggables), _c = _b.next(); !_c.done; _c = _b.next()) {
                var plugin = _c.value;
                var logEvent = { message: message, timestamp: Date.now() };
                plugin.pushLogs([logEvent]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Write General log. Default to INFO
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    ConsoleLogger.prototype.log = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this._log.apply(this, __spread([LOG_TYPE.INFO], msg));
    };
    /**
     * Write INFO log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    ConsoleLogger.prototype.info = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this._log.apply(this, __spread([LOG_TYPE.INFO], msg));
    };
    /**
     * Write WARN log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    ConsoleLogger.prototype.warn = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this._log.apply(this, __spread([LOG_TYPE.WARN], msg));
    };
    /**
     * Write ERROR log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    ConsoleLogger.prototype.error = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this._log.apply(this, __spread([LOG_TYPE.ERROR], msg));
    };
    /**
     * Write DEBUG log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    ConsoleLogger.prototype.debug = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this._log.apply(this, __spread([LOG_TYPE.DEBUG], msg));
    };
    /**
     * Write VERBOSE log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    ConsoleLogger.prototype.verbose = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this._log.apply(this, __spread([LOG_TYPE.VERBOSE], msg));
    };
    ConsoleLogger.prototype.addPluggable = function (pluggable) {
        if (pluggable && pluggable.getCategoryName() === AWS_CLOUDWATCH_CATEGORY) {
            this._pluggables.push(pluggable);
            pluggable.configure(this._config);
        }
    };
    ConsoleLogger.prototype.listPluggables = function () {
        return this._pluggables;
    };
    ConsoleLogger.LOG_LEVEL = null;
    return ConsoleLogger;
}());
export { ConsoleLogger };
//# sourceMappingURL=ConsoleLogger.js.map