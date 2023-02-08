// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __assign } from "tslib";
import Observable from 'zen-observable-ts';
import { ConnectionState } from '../types/PubSub';
import { ReachabilityMonitor } from './ReachabilityMonitor';
export var CONNECTION_CHANGE = {
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
        this._initialNetworkStateSubscription = ReachabilityMonitor().subscribe(function (_a) {
            var online = _a.online;
            var _b;
            _this.record(online ? CONNECTION_CHANGE.ONLINE : CONNECTION_CHANGE.OFFLINE);
            (_b = _this._initialNetworkStateSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        });
        this._linkedConnectionStateObservable =
            new Observable(function (connectionStateObserver) {
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
            this._networkMonitoringSubscription = ReachabilityMonitor().subscribe(function (_a) {
                var online = _a.online;
                _this.record(online ? CONNECTION_CHANGE.ONLINE : CONNECTION_CHANGE.OFFLINE);
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
        var newSocketStatus = __assign(__assign({}, this._linkedConnectionState), statusUpdates);
        this._linkedConnectionState = __assign({}, newSocketStatus);
        this._linkedConnectionStateObserver.next(this._linkedConnectionState);
    };
    /*
     * Translate the ConnectionState structure into a specific ConnectionState string literal union
     */
    ConnectionStateMonitor.prototype.connectionStatesTranslator = function (_a) {
        var connectionState = _a.connectionState, networkState = _a.networkState, intendedConnectionState = _a.intendedConnectionState, keepAliveState = _a.keepAliveState;
        if (connectionState === 'connected' && networkState === 'disconnected')
            return ConnectionState.ConnectedPendingNetwork;
        if (connectionState === 'connected' &&
            intendedConnectionState === 'disconnected')
            return ConnectionState.ConnectedPendingDisconnect;
        if (connectionState === 'disconnected' &&
            intendedConnectionState === 'connected' &&
            networkState === 'disconnected')
            return ConnectionState.ConnectionDisruptedPendingNetwork;
        if (connectionState === 'disconnected' &&
            intendedConnectionState === 'connected')
            return ConnectionState.ConnectionDisrupted;
        if (connectionState === 'connected' && keepAliveState === 'unhealthy')
            return ConnectionState.ConnectedPendingKeepAlive;
        // All remaining states directly correspond to the connection state
        if (connectionState === 'connecting')
            return ConnectionState.Connecting;
        if (connectionState === 'disconnected')
            return ConnectionState.Disconnected;
        return ConnectionState.Connected;
    };
    return ConnectionStateMonitor;
}());
export { ConnectionStateMonitor };
//# sourceMappingURL=ConnectionStateMonitor.js.map