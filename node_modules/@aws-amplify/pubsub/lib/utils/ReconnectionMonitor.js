"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Providers/constants");
var ReconnectEvent;
(function (ReconnectEvent) {
    ReconnectEvent["START_RECONNECT"] = "START_RECONNECT";
    ReconnectEvent["HALT_RECONNECT"] = "HALT_RECONNECT";
})(ReconnectEvent = exports.ReconnectEvent || (exports.ReconnectEvent = {}));
/**
 * Captures the reconnect event logic used to determine when to reconnect to PubSub providers.
 *   Reconnnect attempts are delayed by 5 seconds to let the interface settle.
 *   Attempting to reconnect only once creates unrecoverable states when the network state isn't
 *   supported by the browser, so this keeps retrying every minute until halted.
 */
var ReconnectionMonitor = /** @class */ (function () {
    function ReconnectionMonitor() {
        this.reconnectObservers = [];
    }
    /**
     * Add reconnect observer to the list of observers to alert on reconnect
     */
    ReconnectionMonitor.prototype.addObserver = function (reconnectObserver) {
        this.reconnectObservers.push(reconnectObserver);
    };
    /**
     * Given a reconnect event, start the appropriate behavior
     */
    ReconnectionMonitor.prototype.record = function (event) {
        var _this = this;
        if (event === ReconnectEvent.START_RECONNECT) {
            // If the reconnection hasn't been started
            if (this.reconnectSetTimeoutId === undefined &&
                this.reconnectIntervalId === undefined) {
                this.reconnectSetTimeoutId = setTimeout(function () {
                    // Reconnect now
                    _this._triggerReconnect();
                    // Retry reconnect every periodically until it works
                    _this.reconnectIntervalId = setInterval(function () {
                        _this._triggerReconnect();
                    }, constants_1.RECONNECT_INTERVAL);
                }, constants_1.RECONNECT_DELAY);
            }
        }
        if (event === ReconnectEvent.HALT_RECONNECT) {
            if (this.reconnectIntervalId) {
                clearInterval(this.reconnectIntervalId);
                this.reconnectIntervalId = undefined;
            }
            if (this.reconnectSetTimeoutId) {
                clearTimeout(this.reconnectSetTimeoutId);
                this.reconnectSetTimeoutId = undefined;
            }
        }
    };
    /**
     * Complete all reconnect observers
     */
    ReconnectionMonitor.prototype.close = function () {
        this.reconnectObservers.forEach(function (reconnectObserver) {
            var _a;
            (_a = reconnectObserver.complete) === null || _a === void 0 ? void 0 : _a.call(reconnectObserver);
        });
    };
    ReconnectionMonitor.prototype._triggerReconnect = function () {
        this.reconnectObservers.forEach(function (reconnectObserver) {
            var _a;
            (_a = reconnectObserver.next) === null || _a === void 0 ? void 0 : _a.call(reconnectObserver);
        });
    };
    return ReconnectionMonitor;
}());
exports.ReconnectionMonitor = ReconnectionMonitor;
//# sourceMappingURL=ReconnectionMonitor.js.map