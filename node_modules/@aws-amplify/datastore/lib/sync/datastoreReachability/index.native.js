"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@aws-amplify/core");
var netinfo_1 = tslib_1.__importDefault(require("@react-native-community/netinfo"));
exports.ReachabilityMonitor = new core_1.Reachability().networkMonitor(netinfo_1.default);
//# sourceMappingURL=index.native.js.map