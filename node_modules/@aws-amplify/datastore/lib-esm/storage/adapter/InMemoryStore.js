import { __awaiter, __generator, __read } from "tslib";
var InMemoryStore = /** @class */ (function () {
    function InMemoryStore() {
        var _this = this;
        this.db = new Map();
        this.getAllKeys = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Array.from(this.db.keys())];
            });
        }); };
        this.multiGet = function (keys) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, keys.reduce(function (res, k) { return (res.push([k, _this.db.get(k)]), res); }, [])];
            });
        }); };
        this.multiRemove = function (keys, callback) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                keys.forEach(function (k) { return _this.db.delete(k); });
                typeof callback === 'function' && callback();
                return [2 /*return*/];
            });
        }); };
        this.multiSet = function (entries, callback) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                entries.forEach(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    _this.setItem(key, value);
                });
                typeof callback === 'function' && callback();
                return [2 /*return*/];
            });
        }); };
        this.setItem = function (key, value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.db.set(key, value)];
            });
        }); };
        this.removeItem = function (key) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.db.delete(key)];
            });
        }); };
        this.getItem = function (key) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.db.get(key)];
            });
        }); };
    }
    return InMemoryStore;
}());
export { InMemoryStore };
export function createInMemoryStore() {
    return new InMemoryStore();
}
//# sourceMappingURL=InMemoryStore.js.map