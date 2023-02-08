import { __awaiter, __generator, __read, __spread, __values } from "tslib";
import { OpType, } from '../types';
import { getIdentifierValue } from './utils';
// https://github.com/aws-amplify/amplify-js/blob/datastore-docs/packages/datastore/docs/sync-engine.md#merger
var ModelMerger = /** @class */ (function () {
    function ModelMerger(outbox, ownSymbol) {
        this.outbox = outbox;
        this.ownSymbol = ownSymbol;
    }
    /**
     *
     * @param storage Storage adapter that contains the data.
     * @param model The model from an outbox mutation.
     * @returns The type of operation (INSERT/UPDATE/DELETE)
     */
    ModelMerger.prototype.merge = function (storage, model, modelDefinition) {
        return __awaiter(this, void 0, void 0, function () {
            var result, mutationsForModel, isDelete;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.outbox.getForModel(storage, model, modelDefinition)];
                    case 1:
                        mutationsForModel = _c.sent();
                        isDelete = model._deleted;
                        if (!(mutationsForModel.length === 0)) return [3 /*break*/, 5];
                        if (!isDelete) return [3 /*break*/, 3];
                        result = OpType.DELETE;
                        return [4 /*yield*/, storage.delete(model, undefined, this.ownSymbol)];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, storage.save(model, undefined, this.ownSymbol)];
                    case 4:
                        _a = __read.apply(void 0, [_c.sent(), 1]), _b = __read(_a[0], 2), result = _b[1];
                        _c.label = 5;
                    case 5: return [2 /*return*/, result];
                }
            });
        });
    };
    ModelMerger.prototype.mergePage = function (storage, modelConstructor, items, modelDefinition) {
        return __awaiter(this, void 0, void 0, function () {
            var itemsMap, items_1, items_1_1, item, modelId, page;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        itemsMap = new Map();
                        try {
                            for (items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                                item = items_1_1.value;
                                modelId = getIdentifierValue(modelDefinition, item);
                                itemsMap.set(modelId, item);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        page = __spread(itemsMap.values());
                        return [4 /*yield*/, storage.batchSave(modelConstructor, page, this.ownSymbol)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    return ModelMerger;
}());
export { ModelMerger };
//# sourceMappingURL=merger.js.map