"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var async_storage_1 = tslib_1.__importDefault(require("@react-native-async-storage/async-storage"));
// See: https://react-native-async-storage.github.io/async-storage/
function createInMemoryStore() {
    return async_storage_1.default;
}
exports.createInMemoryStore = createInMemoryStore;
//# sourceMappingURL=InMemoryStore.native.js.map