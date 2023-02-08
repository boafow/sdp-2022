import { __awaiter, __generator, __read, __values } from "tslib";
import { OpType, QueryOne, } from '../../types';
import { DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR, indexNameFromKeys, monotonicUlidFactory, } from '../../util';
import { createInMemoryStore } from './InMemoryStore';
var DB_NAME = '@AmplifyDatastore';
var COLLECTION = 'Collection';
var DATA = 'Data';
var monotonicFactoriesMap = new Map();
var AsyncStorageDatabase = /** @class */ (function () {
    function AsyncStorageDatabase() {
        /**
         * Maps storeNames to a map of ulid->id
         */
        this._collectionInMemoryIndex = new Map();
        this.storage = createInMemoryStore();
    }
    /**
     * Collection index is map of stores (i.e. sync, metadata, mutation event, and data)
     * @param storeName {string} - Name of the store
     * @returns Map of ulid->id
     */
    AsyncStorageDatabase.prototype.getCollectionIndex = function (storeName) {
        if (!this._collectionInMemoryIndex.has(storeName)) {
            this._collectionInMemoryIndex.set(storeName, new Map());
        }
        return this._collectionInMemoryIndex.get(storeName);
    };
    /**
     * Return ULID for store if it exists, otherwise create a new one
     * @param storeName {string} - Name of the store
     * @returns ulid
     */
    AsyncStorageDatabase.prototype.getMonotonicFactory = function (storeName) {
        if (!monotonicFactoriesMap.has(storeName)) {
            monotonicFactoriesMap.set(storeName, monotonicUlidFactory());
        }
        return monotonicFactoriesMap.get(storeName);
    };
    AsyncStorageDatabase.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allKeys, keysForCollectionEntries, allKeys_1, allKeys_1_1, key, _a, dbName, storeName, recordType, ulidOrId, id, ulid, id_1, newUlid, oldKey, newKey, item, e_1_1;
            var e_1, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this._collectionInMemoryIndex.clear();
                        return [4 /*yield*/, this.storage.getAllKeys()];
                    case 1:
                        allKeys = _c.sent();
                        keysForCollectionEntries = [];
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 12, 13, 14]);
                        allKeys_1 = __values(allKeys), allKeys_1_1 = allKeys_1.next();
                        _c.label = 3;
                    case 3:
                        if (!!allKeys_1_1.done) return [3 /*break*/, 11];
                        key = allKeys_1_1.value;
                        _a = __read(key.split('::'), 5), dbName = _a[0], storeName = _a[1], recordType = _a[2], ulidOrId = _a[3], id = _a[4];
                        if (!(dbName === DB_NAME)) return [3 /*break*/, 10];
                        if (!(recordType === DATA)) return [3 /*break*/, 9];
                        ulid = void 0;
                        if (!(id === undefined)) return [3 /*break*/, 7];
                        id_1 = ulidOrId;
                        newUlid = this.getMonotonicFactory(storeName)();
                        oldKey = this.getLegacyKeyForItem(storeName, id_1);
                        newKey = this.getKeyForItem(storeName, id_1, newUlid);
                        return [4 /*yield*/, this.storage.getItem(oldKey)];
                    case 4:
                        item = _c.sent();
                        return [4 /*yield*/, this.storage.setItem(newKey, item)];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, this.storage.removeItem(oldKey)];
                    case 6:
                        _c.sent();
                        ulid = newUlid;
                        return [3 /*break*/, 8];
                    case 7:
                        ulid = ulidOrId;
                        _c.label = 8;
                    case 8:
                        this.getCollectionIndex(storeName).set(id, ulid);
                        return [3 /*break*/, 10];
                    case 9:
                        if (recordType === COLLECTION) {
                            keysForCollectionEntries.push(key);
                        }
                        _c.label = 10;
                    case 10:
                        allKeys_1_1 = allKeys_1.next();
                        return [3 /*break*/, 3];
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        e_1_1 = _c.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 13:
                        try {
                            if (allKeys_1_1 && !allKeys_1_1.done && (_b = allKeys_1.return)) _b.call(allKeys_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 14:
                        if (!(keysForCollectionEntries.length > 0)) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.storage.multiRemove(keysForCollectionEntries)];
                    case 15:
                        _c.sent();
                        _c.label = 16;
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    AsyncStorageDatabase.prototype.save = function (item, storeName, keys, keyValuesPath) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var idxName, ulid, itemKey;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        idxName = indexNameFromKeys(keys);
                        ulid = ((_a = this.getCollectionIndex(storeName)) === null || _a === void 0 ? void 0 : _a.get(idxName)) ||
                            this.getMonotonicFactory(storeName)();
                        itemKey = this.getKeyForItem(storeName, keyValuesPath, ulid);
                        // Set key in collection index
                        (_b = this.getCollectionIndex(storeName)) === null || _b === void 0 ? void 0 : _b.set(keyValuesPath, ulid);
                        // Save item in db
                        return [4 /*yield*/, this.storage.setItem(itemKey, JSON.stringify(item))];
                    case 1:
                        // Save item in db
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AsyncStorageDatabase.prototype.batchSave = function (storeName, items, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var result, collection, keysToDelete, keysToSave, allItemsKeys, itemsMap, _loop_1, this_1, items_1, items_1_1, item, existingRecordsMap, existingRecordsKeys, allItemsKeys_1, allItemsKeys_1_1, key;
            var e_2, _a, e_3, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (items.length === 0) {
                            return [2 /*return*/, []];
                        }
                        result = [];
                        collection = this.getCollectionIndex(storeName);
                        keysToDelete = new Set();
                        keysToSave = new Set();
                        allItemsKeys = [];
                        itemsMap = {};
                        _loop_1 = function (item) {
                            // Extract keys from concatenated key path, map to item values
                            var keyValues = keys.map(function (field) { return item[field]; });
                            var _deleted = item._deleted;
                            // If id is in the store, retrieve, otherwise generate new ULID
                            var ulid = collection.get(keyValues.join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR)) ||
                                this_1.getMonotonicFactory(storeName)();
                            // Generate the "longer key" for the item
                            var key = this_1.getKeyForItem(storeName, keyValues.join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR), ulid);
                            allItemsKeys.push(key);
                            itemsMap[key] = { ulid: ulid, model: item };
                            if (_deleted) {
                                keysToDelete.add(key);
                            }
                            else {
                                keysToSave.add(key);
                            }
                        };
                        this_1 = this;
                        try {
                            /* Populate allItemKeys, keysToDelete, and keysToSave */
                            for (items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                                item = items_1_1.value;
                                _loop_1(item);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [4 /*yield*/, this.storage.multiGet(allItemsKeys)];
                    case 1:
                        existingRecordsMap = _c.sent();
                        existingRecordsKeys = existingRecordsMap
                            .filter(function (_a) {
                            var _b = __read(_a, 2), v = _b[1];
                            return !!v;
                        })
                            .reduce(function (set, _a) {
                            var _b = __read(_a, 1), k = _b[0];
                            return set.add(k);
                        }, new Set());
                        // Delete
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                if (keysToDelete.size === 0) {
                                    resolve();
                                    return;
                                }
                                var keysToDeleteArray = Array.from(keysToDelete);
                                keysToDeleteArray.forEach(function (key) {
                                    // key: full db key
                                    // keys: PK and/or SK keys
                                    var primaryKeyValues = keys
                                        .map(function (field) { return itemsMap[key].model[field]; })
                                        .join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR);
                                    collection.delete(primaryKeyValues);
                                });
                                _this.storage.multiRemove(keysToDeleteArray, function (errors) {
                                    if (errors && errors.length > 0) {
                                        reject(errors);
                                    }
                                    else {
                                        resolve();
                                    }
                                });
                            })];
                    case 2:
                        // Delete
                        _c.sent();
                        // Save
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                if (keysToSave.size === 0) {
                                    resolve();
                                    return;
                                }
                                var entriesToSet = Array.from(keysToSave).map(function (key) { return [
                                    key,
                                    JSON.stringify(itemsMap[key].model),
                                ]; });
                                keysToSave.forEach(function (key) {
                                    var _a = itemsMap[key], model = _a.model, ulid = _a.ulid;
                                    // Retrieve values from model, use as key for collection index
                                    var keyValues = keys
                                        .map(function (field) { return model[field]; })
                                        .join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR);
                                    collection.set(keyValues, ulid);
                                });
                                _this.storage.multiSet(entriesToSet, function (errors) {
                                    if (errors && errors.length > 0) {
                                        reject(errors);
                                    }
                                    else {
                                        resolve();
                                    }
                                });
                            })];
                    case 3:
                        // Save
                        _c.sent();
                        try {
                            for (allItemsKeys_1 = __values(allItemsKeys), allItemsKeys_1_1 = allItemsKeys_1.next(); !allItemsKeys_1_1.done; allItemsKeys_1_1 = allItemsKeys_1.next()) {
                                key = allItemsKeys_1_1.value;
                                if (keysToDelete.has(key) && existingRecordsKeys.has(key)) {
                                    result.push([itemsMap[key].model, OpType.DELETE]);
                                }
                                else if (keysToSave.has(key)) {
                                    result.push([
                                        itemsMap[key].model,
                                        existingRecordsKeys.has(key) ? OpType.UPDATE : OpType.INSERT,
                                    ]);
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (allItemsKeys_1_1 && !allItemsKeys_1_1.done && (_b = allItemsKeys_1.return)) _b.call(allItemsKeys_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AsyncStorageDatabase.prototype.get = function (keyValuePath, storeName) {
        return __awaiter(this, void 0, void 0, function () {
            var ulid, itemKey, recordAsString, record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ulid = this.getCollectionIndex(storeName).get(keyValuePath);
                        itemKey = this.getKeyForItem(storeName, keyValuePath, ulid);
                        return [4 /*yield*/, this.storage.getItem(itemKey)];
                    case 1:
                        recordAsString = _a.sent();
                        record = recordAsString && JSON.parse(recordAsString);
                        return [2 /*return*/, record];
                }
            });
        });
    };
    AsyncStorageDatabase.prototype.getOne = function (firstOrLast, storeName) {
        return __awaiter(this, void 0, void 0, function () {
            var collection, _a, itemId, ulid, itemKey, itemString, _b, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        collection = this.getCollectionIndex(storeName);
                        _a = __read(firstOrLast === QueryOne.FIRST
                            ? (function () {
                                var e_4, _a, _b;
                                var id, ulid;
                                try {
                                    for (var collection_1 = __values(collection), collection_1_1 = collection_1.next(); !collection_1_1.done; collection_1_1 = collection_1.next()) {
                                        _b = __read(collection_1_1.value, 2), id = _b[0], ulid = _b[1];
                                        break;
                                    } // Get first element of the set
                                }
                                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                finally {
                                    try {
                                        if (collection_1_1 && !collection_1_1.done && (_a = collection_1.return)) _a.call(collection_1);
                                    }
                                    finally { if (e_4) throw e_4.error; }
                                }
                                return [id, ulid];
                            })()
                            : (function () {
                                var e_5, _a, _b;
                                var id, ulid;
                                try {
                                    for (var collection_2 = __values(collection), collection_2_1 = collection_2.next(); !collection_2_1.done; collection_2_1 = collection_2.next()) {
                                        _b = __read(collection_2_1.value, 2), id = _b[0], ulid = _b[1];
                                        ;
                                    } // Get last element of the set
                                }
                                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                                finally {
                                    try {
                                        if (collection_2_1 && !collection_2_1.done && (_a = collection_2.return)) _a.call(collection_2);
                                    }
                                    finally { if (e_5) throw e_5.error; }
                                }
                                return [id, ulid];
                            })(), 2), itemId = _a[0], ulid = _a[1];
                        itemKey = this.getKeyForItem(storeName, itemId, ulid);
                        _b = itemKey;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.getItem(itemKey)];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        itemString = _b;
                        result = itemString ? JSON.parse(itemString) || undefined : undefined;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * This function gets all the records stored in async storage for a particular storeName
     * It then loads all the records for that filtered set of keys using multiGet()
     */
    AsyncStorageDatabase.prototype.getAll = function (storeName, pagination) {
        return __awaiter(this, void 0, void 0, function () {
            var collection, _a, _b, page, _c, limit, start, end, keysForStore, count, collection_3, collection_3_1, _d, id, ulid, storeRecordStrings, records;
            var e_6, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        collection = this.getCollectionIndex(storeName);
                        _a = pagination || {}, _b = _a.page, page = _b === void 0 ? 0 : _b, _c = _a.limit, limit = _c === void 0 ? 0 : _c;
                        start = Math.max(0, page * limit) || 0;
                        end = limit > 0 ? start + limit : undefined;
                        keysForStore = [];
                        count = 0;
                        try {
                            for (collection_3 = __values(collection), collection_3_1 = collection_3.next(); !collection_3_1.done; collection_3_1 = collection_3.next()) {
                                _d = __read(collection_3_1.value, 2), id = _d[0], ulid = _d[1];
                                count++;
                                if (count <= start) {
                                    continue;
                                }
                                keysForStore.push(this.getKeyForItem(storeName, id, ulid));
                                if (count === end) {
                                    break;
                                }
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (collection_3_1 && !collection_3_1.done && (_e = collection_3.return)) _e.call(collection_3);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                        return [4 /*yield*/, this.storage.multiGet(keysForStore)];
                    case 1:
                        storeRecordStrings = _f.sent();
                        records = storeRecordStrings
                            .filter(function (_a) {
                            var _b = __read(_a, 2), value = _b[1];
                            return value;
                        })
                            .map(function (_a) {
                            var _b = __read(_a, 2), value = _b[1];
                            return JSON.parse(value);
                        });
                        return [2 /*return*/, records];
                }
            });
        });
    };
    AsyncStorageDatabase.prototype.delete = function (key, storeName) {
        return __awaiter(this, void 0, void 0, function () {
            var ulid, itemKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ulid = this.getCollectionIndex(storeName).get(key);
                        itemKey = this.getKeyForItem(storeName, key, ulid);
                        this.getCollectionIndex(storeName).delete(key);
                        return [4 /*yield*/, this.storage.removeItem(itemKey)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Clear the AsyncStorage of all DataStore entries
     */
    AsyncStorageDatabase.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allKeys, allDataStoreKeys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getAllKeys()];
                    case 1:
                        allKeys = _a.sent();
                        allDataStoreKeys = allKeys.filter(function (key) { return key.startsWith(DB_NAME); });
                        return [4 /*yield*/, this.storage.multiRemove(allDataStoreKeys)];
                    case 2:
                        _a.sent();
                        this._collectionInMemoryIndex.clear();
                        return [2 /*return*/];
                }
            });
        });
    };
    AsyncStorageDatabase.prototype.getKeyForItem = function (storeName, id, ulid) {
        return this.getKeyPrefixForStoreItems(storeName) + "::" + ulid + "::" + id;
    };
    AsyncStorageDatabase.prototype.getLegacyKeyForItem = function (storeName, id) {
        return this.getKeyPrefixForStoreItems(storeName) + "::" + id;
    };
    AsyncStorageDatabase.prototype.getKeyPrefixForStoreItems = function (storeName) {
        return DB_NAME + "::" + storeName + "::" + DATA;
    };
    return AsyncStorageDatabase;
}());
export default AsyncStorageDatabase;
//# sourceMappingURL=AsyncStorageDatabase.js.map