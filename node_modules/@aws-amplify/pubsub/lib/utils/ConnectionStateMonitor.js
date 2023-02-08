"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var zen_observable_ts_1 = tslib_1.__importDefault(require("zen-observable-ts"));
var PubSub_1 = require("../types/PubSub");
var ReachabilityMonitor_1 = require("./ReachabilityMonitor");
exports.CONNECTION_CHANGE = {
    KEEP_ALIVE_MISSED: { keepAliveState: 'unhealthy' },
    KEEP_ALIVE: { keepAliveState: 'healthy' },
    CONNECTION_ESTABLISHED: { connectionState: 'connected' },
    CONNECTION_FAILED: {
        intendedConnectionState: 'disconnected',
        connectionState: 'disconnected',
    },
    CLOSING_CONNECTION: { intendedConnectionState: 'disconnected' },
    OPENING_CONNECTION: {
        intendedConnectionState: 'connected',
        connectionState: 'connecting',
    },
    CLOSED: { connectionState: 'disconnected' },
    ONLINE: { networkState: 'connected' },
    OFFLINE: { networkState: 'disconnected' },
};
var ConnectionStateMonitor = /** @class */ (function () {
    function ConnectionStateMonitor() {
        var _this = this;
        this._networkMonitoringSubscription = undefined;
        this._linkedConnectionState = {
            networkState: 'connected',
            connectionState: 'disconnected',
            intendedConnectionState: 'disconnected',
            keepAliveState: 'healthy',
        };
        // Attempt to update the state with the current actual network state
        this._initialNetworkStateSubscription = ReachabilityMonitor_1.ReachabilityMonitor().subscribe(function (_a) {
            var online = _a.online;
            var _b;
            _this.record(online ? exports.CONNECTION_CHANGE.ONLINE : exports.CONNECTION_CHANGE.OFFLINE);
            (_b = _this._initialNetworkStateSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        });
        this._linkedConnectionStateObservable =
            new zen_observable_ts_1.default(function (connectionStateObserver) {
                connectionStateObserver.next(_this._linkedConnectionState);
                _this._linkedConnectionStateObserver = connectionStateObserver;
            });
    }
    /**
     * Turn network state monitoring on if it isn't on already
     */
    ConnectionStateMonitor.prototype.enableNetworkMonitoring = function () {
        var _this = this;
        var _a;
        // If no initial network state was discovered, stop trying
        (_a = this._initialNetworkStateSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        // Maintain the network state based on the reachability monitor
        if (this._networkMonitoringSubscription === undefined) {
            this._networkMonitoringSubscription = ReachabilityMonitor_1.ReachabilityMonitor().subscribe(function (_a) {
                var online = _a.online;
                _this.record(online ? exports.CONNECTION_CHANGE.ONLINE : exports.CONNECTION_CHANGE.OFFLINE);
            });
        }
    };
    /**
     * Turn network state monitoring off if it isn't off already
     */
    ConnectionStateMonitor.prototype.disableNetworkMonitoring = function () {
        var _a;
        (_a = this._networkMonitoringSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this._networkMonitoringSubscription = undefined;
    };
    Object.defineProperty(ConnectionStateMonitor.prototype, "connectionStateObservable", {
        /**
         * Get the observable that allows us to monitor the connection state
         *
         * @returns {Observable<ConnectionState>} - The observable that emits ConnectionState updates
         */
        get: function () {
            var _this = this;
            var previous;
            // The linked state aggregates state changes to any of the network, connection,
            // intendedConnection and keepAliveHealth. Some states will change these independent
            // states without changing the overall connection state.
            // After translating from linked states to ConnectionState, then remove any duplicates
            return this._linkedConnectionStateObservable
                .map(function (value) {
                return _this.connectionStatesTranslator(value);
            })
                .filter(function (current) {
                var toInclude = current !== previous;
                previous = current;
                return toInclude;
            });
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Updates local connection state and emits the full state to the observer.
     */
    ConnectionStateMonitor.prototype.record = function (statusUpdates) {
        // Maintain the network monitor
        if (statusUpdates.intendedConnectionState === 'connected') {
            this.enableNetworkMonitoring();
        }
        else if (statusUpdates.intendedConnectionState === 'disconnected') {
            this.disableNetworkMonitoring();
        }
        // Maintain the socket state
        var newSocketStatus = tslib_1.__assign(tslib_1.__assign({}, this._linkedConnectionState), statusUpdates);
        this._linkedConnectionState = tslib_1.__assign({}, newSocketStatus);
        this._linkedConnectionStateObserver.next(this._linkedConnectionState);
    };
    /*
     * Translate the ConnectionState structure into a specific ConnectionState string literal union
     */
    ConnectionStateMonitor.prototype.connectionStatesTranslator = function (_a) {
        var connectionState = _a.connectionState, networkState = _a.networkState, intendedConnectionState = _a.intendedConnectionState, keepAliveState = _a.keepAliveState;
        if (connectionState === 'connected' && networkState === 'disconnected')
            return PubSub_1.ConnectionState.ConnectedPendingNetwork;
        if (connectionState === 'connected' &&
            intendedConnectionState === 'disconnected')
            return PubSub_1.ConnectionState.ConnectedPendingDisconnect;
        if (connectionState === 'disconnected' &&
            intendedConnectionState === 'connected' &&
            networkState === 'disconnected')
            return PubSub_1.ConnectionState.ConnectionDisruptedPendingNetwork;
        if (connectionState === 'disconnected' &&
            intendedConnectionState === 'connected')
            return PubSub_1.ConnectionState.ConnectionDisrupted;
        if (connectionState === 'connected' && keepAliveState === 'unhealthy')
            return PubSub_1.ConnectionState.ConnectedPendingKeepAlive;
        // All remaining states directly correspond to the connection state
        if (connectionState === 'connecting')
            return PubSub_1.ConnectionState.Connecting;
        if (connectionState === 'disconnected')
            return PubSub_1.ConnectionState.Disconnected;
        return PubSub_1.ConnectionState.Connected;
    };
    return ConnectionStateMonitor;
}());
exports.ConnectionStateMonitor = ConnectionStateMonitor;
//# sourceMappingURL=ConnectionStateMonitor.js.map