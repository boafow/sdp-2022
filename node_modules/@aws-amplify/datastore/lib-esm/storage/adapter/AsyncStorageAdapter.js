import { __asyncValues, __awaiter, __generator, __values } from "tslib";
import { ConsoleLogger as Logger } from '@aws-amplify/core';
import AsyncStorageDatabase from './AsyncStorageDatabase';
import { ModelPredicateCreator } from '../../predicates';
import { isPredicateObj, OpType, QueryOne, } from '../../types';
import { DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR, getIndex, getIndexFromAssociation, isModelConstructor, traverseModel, validatePredicate, inMemoryPagination, keysEqual, getStorename, getIndexKeys, extractPrimaryKeyValues, IDENTIFIER_KEY_SEPARATOR, } from '../../util';
var logger = new Logger('DataStore');
var AsyncStorageAdapter = /** @class */ (function () {
    function AsyncStorageAdapter() {
    }
    AsyncStorageAdapter.prototype.getStorenameForModel = function (modelConstructor) {
        var namespace = this.namespaceResolver(modelConstructor);
        var modelName = modelConstructor.name;
        return getStorename(namespace, modelName);
    };
    // Retrieves primary key values from a model
    AsyncStorageAdapter.prototype.getIndexKeyValuesFromModel = function (model) {
        var modelConstructor = Object.getPrototypeOf(model)
            .constructor;
        var namespaceName = this.namespaceResolver(modelConstructor);
        var keys = getIndexKeys(this.schema.namespaces[namespaceName], modelConstructor.name);
        return extractPrimaryKeyValues(model, keys);
    };
    // Retrieves concatenated primary key values from a model
    AsyncStorageAdapter.prototype.getIndexKeyValuesPath = function (model) {
        return this.getIndexKeyValuesFromModel(model).join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR);
    };
    AsyncStorageAdapter.prototype.setUp = function (theSchema, namespaceResolver, modelInstanceCreator, getModelConstructorByModelName) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.initPromise) return [3 /*break*/, 1];
                        this.initPromise = new Promise(function (res, rej) {
                            _this.resolve = res;
                            _this.reject = rej;
                        });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.initPromise];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        this.schema = theSchema;
                        this.namespaceResolver = namespaceResolver;
                        this.modelInstanceCreator = modelInstanceCreator;
                        this.getModelConstructorByModelName = getModelConstructorByModelName;
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 7, , 8]);
                        if (!!this.db) return [3 /*break*/, 6];
                        this.db = new AsyncStorageDatabase();
                        return [4 /*yield*/, this.db.init()];
                    case 5:
                        _a.sent();
                        this.resolve();
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        this.reject(error_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    AsyncStorageAdapter.prototype.save = function (model, condition) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var modelConstructor, storeName, namespaceName, connectedModels, set, connectionStoreNames, keyValuesPath, fromDB, predicates, _b, predicateObjs, type, isValid, msg, result, connectionStoreNames_1, connectionStoreNames_1_1, resItem, storeName_1, item, instance, keys, itemKeyValues, itemKeyValuesPath, fromDB_1, opType, modelKeyValues, e_1_1;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        modelConstructor = Object.getPrototypeOf(model)
                            .constructor;
                        storeName = this.getStorenameForModel(modelConstructor);
                        namespaceName = this.namespaceResolver(modelConstructor);
                        connectedModels = traverseModel(modelConstructor.name, model, this.schema.namespaces[namespaceName], this.modelInstanceCreator, this.getModelConstructorByModelName);
                        set = new Set();
                        connectionStoreNames = Object.values(connectedModels).map(function (_a) {
                            var modelName = _a.modelName, item = _a.item, instance = _a.instance;
                            var storeName = getStorename(namespaceName, modelName);
                            set.add(storeName);
                            var keys = getIndexKeys(_this.schema.namespaces[namespaceName], modelName);
                            return { storeName: storeName, item: item, instance: instance, keys: keys };
                        });
                        keyValuesPath = this.getIndexKeyValuesPath(model);
                        return [4 /*yield*/, this.db.get(keyValuesPath, storeName)];
                    case 1:
                        fromDB = _c.sent();
                        if (condition && fromDB) {
                            predicates = ModelPredicateCreator.getPredicates(condition);
                            _b = predicates, predicateObjs = _b.predicates, type = _b.type;
                            isValid = validatePredicate(fromDB, type, predicateObjs);
                            if (!isValid) {
                                msg = 'Conditional update failed';
                                logger.error(msg, { model: fromDB, condition: predicateObjs });
                                throw new Error(msg);
                            }
                        }
                        result = [];
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 9, 10, 15]);
                        connectionStoreNames_1 = __asyncValues(connectionStoreNames);
                        _c.label = 3;
                    case 3: return [4 /*yield*/, connectionStoreNames_1.next()];
                    case 4:
                        if (!(connectionStoreNames_1_1 = _c.sent(), !connectionStoreNames_1_1.done)) return [3 /*break*/, 8];
                        resItem = connectionStoreNames_1_1.value;
                        storeName_1 = resItem.storeName, item = resItem.item, instance = resItem.instance, keys = resItem.keys;
                        itemKeyValues = keys.map(function (key) { return item[key]; });
                        itemKeyValuesPath = itemKeyValues.join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR);
                        return [4 /*yield*/, this.db.get(itemKeyValuesPath, storeName_1)];
                    case 5:
                        fromDB_1 = _c.sent();
                        opType = fromDB_1 ? OpType.UPDATE : OpType.INSERT;
                        modelKeyValues = this.getIndexKeyValuesFromModel(model);
                        if (!(keysEqual(itemKeyValues, modelKeyValues) ||
                            opType === OpType.INSERT)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.db.save(item, storeName_1, keys, itemKeyValuesPath)];
                    case 6:
                        _c.sent();
                        result.push([instance, opType]);
                        _c.label = 7;
                    case 7: return [3 /*break*/, 3];
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        e_1_1 = _c.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 15];
                    case 10:
                        _c.trys.push([10, , 13, 14]);
                        if (!(connectionStoreNames_1_1 && !connectionStoreNames_1_1.done && (_a = connectionStoreNames_1.return))) return [3 /*break*/, 12];
                        return [4 /*yield*/, _a.call(connectionStoreNames_1)];
                    case 11:
                        _c.sent();
                        _c.label = 12;
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 14: return [7 /*endfinally*/];
                    case 15: return [2 /*return*/, result];
                }
            });
        });
    };
    AsyncStorageAdapter.prototype.load = function (namespaceName, srcModelName, records) {
        return __awaiter(this, void 0, void 0, function () {
            var namespace, relations, connectionStoreNames, modelConstructor;
            var _this = this;
            return __generator(this, function (_a) {
                namespace = this.schema.namespaces[namespaceName];
                relations = namespace.relationships[srcModelName].relationTypes;
                connectionStoreNames = relations.map(function (_a) {
                    var modelName = _a.modelName;
                    return getStorename(namespaceName, modelName);
                });
                modelConstructor = this.getModelConstructorByModelName(namespaceName, srcModelName);
                if (connectionStoreNames.length === 0) {
                    return [2 /*return*/, records.map(function (record) {
                            return _this.modelInstanceCreator(modelConstructor, record);
                        })];
                }
                return [2 /*return*/, records.map(function (record) {
                        return _this.modelInstanceCreator(modelConstructor, record);
                    })];
            });
        });
    };
    AsyncStorageAdapter.prototype.query = function (modelConstructor, predicate, pagination) {
        return __awaiter(this, void 0, void 0, function () {
            var storeName, namespaceName, predicates, keys, queryByKey, hasSort, hasPagination, records;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storeName = this.getStorenameForModel(modelConstructor);
                        namespaceName = this.namespaceResolver(modelConstructor);
                        predicates = predicate && ModelPredicateCreator.getPredicates(predicate);
                        keys = getIndexKeys(this.schema.namespaces[namespaceName], modelConstructor.name);
                        queryByKey = predicates && this.keyValueFromPredicate(predicates, keys);
                        hasSort = pagination && pagination.sort;
                        hasPagination = pagination && pagination.limit;
                        return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                                var record, filtered, all;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!queryByKey) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.getByKey(storeName, queryByKey)];
                                        case 1:
                                            record = _a.sent();
                                            return [2 /*return*/, record ? [record] : []];
                                        case 2:
                                            if (!predicates) return [3 /*break*/, 4];
                                            return [4 /*yield*/, this.filterOnPredicate(storeName, predicates)];
                                        case 3:
                                            filtered = _a.sent();
                                            return [2 /*return*/, this.inMemoryPagination(filtered, pagination)];
                                        case 4:
                                            if (!(hasSort || hasPagination)) return [3 /*break*/, 6];
                                            return [4 /*yield*/, this.getAll(storeName)];
                                        case 5:
                                            all = _a.sent();
                                            return [2 /*return*/, this.inMemoryPagination(all, pagination)];
                                        case 6: return [2 /*return*/, this.getAll(storeName)];
                                    }
                                });
                            }); })()];
                    case 1:
                        records = (_a.sent());
                        return [4 /*yield*/, this.load(namespaceName, modelConstructor.name, records)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AsyncStorageAdapter.prototype.getByKey = function (storeName, keyValuePath) {
        return __awaiter(this, void 0, void 0, function () {
            var record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.get(keyValuePath, storeName)];
                    case 1:
                        record = _a.sent();
                        return [2 /*return*/, record];
                }
            });
        });
    };
    AsyncStorageAdapter.prototype.getAll = function (storeName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.getAll(storeName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AsyncStorageAdapter.prototype.keyValueFromPredicate = function (predicates, keys) {
        var e_2, _a;
        var predicateObjs = predicates.predicates;
        if (predicateObjs.length !== keys.length) {
            return;
        }
        var keyValues = [];
        var _loop_1 = function (key) {
            var predicateObj = predicateObjs.find(function (p) { return isPredicateObj(p) && p.field === key && p.operator === 'eq'; });
            predicateObj && keyValues.push(predicateObj.operand);
        };
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                _loop_1(key);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return keyValues.length === keys.length
            ? keyValues.join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR)
            : undefined;
    };
    AsyncStorageAdapter.prototype.filterOnPredicate = function (storeName, predicates) {
        return __awaiter(this, void 0, void 0, function () {
            var predicateObjs, type, all, filtered;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        predicateObjs = predicates.predicates, type = predicates.type;
                        return [4 /*yield*/, this.getAll(storeName)];
                    case 1:
                        all = _a.sent();
                        filtered = predicateObjs
                            ? all.filter(function (m) { return validatePredicate(m, type, predicateObjs); })
                            : all;
                        return [2 /*return*/, filtered];
                }
            });
        });
    };
    AsyncStorageAdapter.prototype.inMemoryPagination = function (records, pagination) {
        return inMemoryPagination(records, pagination);
    };
    AsyncStorageAdapter.prototype.queryOne = function (modelConstructor, firstOrLast) {
        if (firstOrLast === void 0) { firstOrLast = QueryOne.FIRST; }
        return __awaiter(this, void 0, void 0, function () {
            var storeName, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storeName = this.getStorenameForModel(modelConstructor);
                        return [4 /*yield*/, this.db.getOne(firstOrLast, storeName)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result && this.modelInstanceCreator(modelConstructor, result)];
                }
            });
        });
    };
    AsyncStorageAdapter.prototype.delete = function (modelOrModelConstructor, condition) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteQueue, modelConstructor, nameSpace, models, relations, deletedModels, deletedModels, model, modelConstructor, nameSpace, storeName, keyValuePath, fromDB, msg, predicates, _a, predicateObjs, type, isValid, msg, relations, relations, deletedModels;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        deleteQueue = [];
                        if (!isModelConstructor(modelOrModelConstructor)) return [3 /*break*/, 8];
                        modelConstructor = modelOrModelConstructor;
                        nameSpace = this.namespaceResolver(modelConstructor);
                        return [4 /*yield*/, this.query(modelConstructor, condition)];
                    case 1:
                        models = _b.sent();
                        relations = this.schema.namespaces[nameSpace].relationships[modelConstructor.name]
                            .relationTypes;
                        if (!(condition !== undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.deleteTraverse(relations, models, modelConstructor.name, nameSpace, deleteQueue)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.deleteItem(deleteQueue)];
                    case 3:
                        _b.sent();
                        deletedModels = deleteQueue.reduce(function (acc, _a) {
                            var items = _a.items;
                            return acc.concat(items);
                        }, []);
                        return [2 /*return*/, [models, deletedModels]];
                    case 4: return [4 /*yield*/, this.deleteTraverse(relations, models, modelConstructor.name, nameSpace, deleteQueue)];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.deleteItem(deleteQueue)];
                    case 6:
                        _b.sent();
                        deletedModels = deleteQueue.reduce(function (acc, _a) {
                            var items = _a.items;
                            return acc.concat(items);
                        }, []);
                        return [2 /*return*/, [models, deletedModels]];
                    case 7: return [3 /*break*/, 15];
                    case 8:
                        model = modelOrModelConstructor;
                        modelConstructor = Object.getPrototypeOf(model)
                            .constructor;
                        nameSpace = this.namespaceResolver(modelConstructor);
                        storeName = this.getStorenameForModel(modelConstructor);
                        if (!condition) return [3 /*break*/, 11];
                        keyValuePath = this.getIndexKeyValuesPath(model);
                        return [4 /*yield*/, this.db.get(keyValuePath, storeName)];
                    case 9:
                        fromDB = _b.sent();
                        if (fromDB === undefined) {
                            msg = 'Model instance not found in storage';
                            logger.warn(msg, { model: model });
                            return [2 /*return*/, [[model], []]];
                        }
                        predicates = ModelPredicateCreator.getPredicates(condition);
                        _a = predicates, predicateObjs = _a.predicates, type = _a.type;
                        isValid = validatePredicate(fromDB, type, predicateObjs);
                        if (!isValid) {
                            msg = 'Conditional update failed';
                            logger.error(msg, { model: fromDB, condition: predicateObjs });
                            throw new Error(msg);
                        }
                        relations = this.schema.namespaces[nameSpace].relationships[modelConstructor.name].relationTypes;
                        return [4 /*yield*/, this.deleteTraverse(relations, [model], modelConstructor.name, nameSpace, deleteQueue)];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 13];
                    case 11:
                        relations = this.schema.namespaces[nameSpace].relationships[modelConstructor.name].relationTypes;
                        return [4 /*yield*/, this.deleteTraverse(relations, [model], modelConstructor.name, nameSpace, deleteQueue)];
                    case 12:
                        _b.sent();
                        _b.label = 13;
                    case 13: return [4 /*yield*/, this.deleteItem(deleteQueue)];
                    case 14:
                        _b.sent();
                        deletedModels = deleteQueue.reduce(function (acc, _a) {
                            var items = _a.items;
                            return acc.concat(items);
                        }, []);
                        return [2 /*return*/, [[model], deletedModels]];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    AsyncStorageAdapter.prototype.deleteItem = function (deleteQueue) {
        var e_3, _a, e_4, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, _d, deleteItem, storeName, items, items_1, items_1_1, item, keyValuesPath, e_4_1, e_3_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 17, 18, 23]);
                        _c = __asyncValues(deleteQueue);
                        _e.label = 1;
                    case 1: return [4 /*yield*/, _c.next()];
                    case 2:
                        if (!(_d = _e.sent(), !_d.done)) return [3 /*break*/, 16];
                        deleteItem = _d.value;
                        storeName = deleteItem.storeName, items = deleteItem.items;
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 9, 10, 15]);
                        items_1 = __asyncValues(items);
                        _e.label = 4;
                    case 4: return [4 /*yield*/, items_1.next()];
                    case 5:
                        if (!(items_1_1 = _e.sent(), !items_1_1.done)) return [3 /*break*/, 8];
                        item = items_1_1.value;
                        if (!item) return [3 /*break*/, 7];
                        if (!(typeof item === 'object')) return [3 /*break*/, 7];
                        keyValuesPath = this.getIndexKeyValuesPath(item);
                        return [4 /*yield*/, this.db.delete(keyValuesPath, storeName)];
                    case 6:
                        _e.sent();
                        _e.label = 7;
                    case 7: return [3 /*break*/, 4];
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        e_4_1 = _e.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 15];
                    case 10:
                        _e.trys.push([10, , 13, 14]);
                        if (!(items_1_1 && !items_1_1.done && (_b = items_1.return))) return [3 /*break*/, 12];
                        return [4 /*yield*/, _b.call(items_1)];
                    case 11:
                        _e.sent();
                        _e.label = 12;
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        if (e_4) throw e_4.error;
                        return [7 /*endfinally*/];
                    case 14: return [7 /*endfinally*/];
                    case 15: return [3 /*break*/, 1];
                    case 16: return [3 /*break*/, 23];
                    case 17:
                        e_3_1 = _e.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 23];
                    case 18:
                        _e.trys.push([18, , 21, 22]);
                        if (!(_d && !_d.done && (_a = _c.return))) return [3 /*break*/, 20];
                        return [4 /*yield*/, _a.call(_c)];
                    case 19:
                        _e.sent();
                        _e.label = 20;
                    case 20: return [3 /*break*/, 22];
                    case 21:
                        if (e_3) throw e_3.error;
                        return [7 /*endfinally*/];
                    case 22: return [7 /*endfinally*/];
                    case 23: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Populates the delete Queue with all the items to delete
     * @param relations
     * @param models
     * @param srcModel
     * @param nameSpace
     * @param deleteQueue
     */
    AsyncStorageAdapter.prototype.deleteTraverse = function (relations, models, srcModel, nameSpace, deleteQueue) {
        var relations_1, relations_1_1, models_1, models_1_1, models_2, models_2_1;
        var e_5, _a, e_6, _b, e_7, _c;
        return __awaiter(this, void 0, void 0, function () {
            var rel, relationType, modelName, targetName, targetNames, associatedWith, storeName, index, _d, model, hasOneIndex_1, hasConnectedModelFields, keyValuesPath, values_1, isUnidirectionalConnection, allRecords, recordToDelete, hasOneIndex_2, hasOneCustomField, keyValuesPath, value_1, allRecords, recordsToDelete, modelsToDelete, _e, e_6_1, model, keyValues, allRecords, indices, childRecords, childModels, e_7_1, e_5_1;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 42, 43, 48]);
                        relations_1 = __asyncValues(relations);
                        _f.label = 1;
                    case 1: return [4 /*yield*/, relations_1.next()];
                    case 2:
                        if (!(relations_1_1 = _f.sent(), !relations_1_1.done)) return [3 /*break*/, 41];
                        rel = relations_1_1.value;
                        relationType = rel.relationType, modelName = rel.modelName, targetName = rel.targetName, targetNames = rel.targetNames, associatedWith = rel.associatedWith;
                        storeName = getStorename(nameSpace, modelName);
                        index = getIndex(this.schema.namespaces[nameSpace].relationships[modelName]
                            .relationTypes, srcModel) ||
                            // if we were unable to find an index via relationTypes
                            // i.e. for keyName connections, attempt to find one by the
                            // associatedWith property
                            getIndexFromAssociation(this.schema.namespaces[nameSpace].relationships[modelName].indexes, rel.associatedWith);
                        _d = relationType;
                        switch (_d) {
                            case 'HAS_ONE': return [3 /*break*/, 3];
                            case 'HAS_MANY': return [3 /*break*/, 23];
                            case 'BELONGS_TO': return [3 /*break*/, 38];
                        }
                        return [3 /*break*/, 39];
                    case 3:
                        _f.trys.push([3, 16, 17, 22]);
                        models_1 = __asyncValues(models);
                        _f.label = 4;
                    case 4: return [4 /*yield*/, models_1.next()];
                    case 5:
                        if (!(models_1_1 = _f.sent(), !models_1_1.done)) return [3 /*break*/, 15];
                        model = models_1_1.value;
                        if (!(targetNames && (targetNames === null || targetNames === void 0 ? void 0 : targetNames.length))) return [3 /*break*/, 8];
                        if (index) {
                            hasOneIndex_1 = index.split(IDENTIFIER_KEY_SEPARATOR);
                        }
                        else if (associatedWith) {
                            if (Array.isArray(associatedWith)) {
                                hasOneIndex_1 = associatedWith;
                            }
                            else {
                                hasOneIndex_1 = [associatedWith];
                            }
                        }
                        hasConnectedModelFields = targetNames.every(function (targetName) {
                            return model.hasOwnProperty(targetName);
                        });
                        keyValuesPath = this.getIndexKeyValuesPath(model);
                        isUnidirectionalConnection = hasOneIndex_1 === associatedWith;
                        if (hasConnectedModelFields && isUnidirectionalConnection) {
                            // Values will be that of the child model
                            values_1 = targetNames
                                .filter(function (targetName) { var _a; return (_a = model[targetName]) !== null && _a !== void 0 ? _a : false; })
                                .map(function (targetName) { return model[targetName]; });
                        }
                        else {
                            // values will be that of the parent model
                            values_1 = keyValuesPath.split(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR);
                        }
                        if (values_1.length === 0)
                            return [3 /*break*/, 15];
                        return [4 /*yield*/, this.db.getAll(storeName)];
                    case 6:
                        allRecords = _f.sent();
                        recordToDelete = void 0;
                        // values === targetNames
                        if (hasConnectedModelFields) {
                            /**
                             * Retrieve record by finding the record where all
                             * targetNames are present on the connected model.
                             *
                             */
                            // recordToDelete = allRecords.filter(childItem =>
                            // 	values.every(value => childItem[value] != null)
                            // ) as T[];
                            recordToDelete = allRecords.filter(function (childItem) {
                                return hasOneIndex_1.every(function (index) { return values_1.includes(childItem[index]); });
                            });
                        }
                        else {
                            // values === keyValuePath
                            recordToDelete = allRecords.filter(function (childItem) { return childItem[hasOneIndex_1] === values_1; });
                        }
                        return [4 /*yield*/, this.deleteTraverse(this.schema.namespaces[nameSpace].relationships[modelName]
                                .relationTypes, recordToDelete, modelName, nameSpace, deleteQueue)];
                    case 7:
                        _f.sent();
                        return [3 /*break*/, 14];
                    case 8:
                        hasOneIndex_2 = index || associatedWith;
                        hasOneCustomField = targetName in model;
                        keyValuesPath = this.getIndexKeyValuesPath(model);
                        value_1 = hasOneCustomField
                            ? model[targetName]
                            : keyValuesPath;
                        if (!value_1)
                            return [3 /*break*/, 15];
                        return [4 /*yield*/, this.db.getAll(storeName)];
                    case 9:
                        allRecords = _f.sent();
                        recordsToDelete = allRecords.filter(function (childItem) { return childItem[hasOneIndex_2] === value_1; });
                        if (!recordsToDelete.length) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.load(nameSpace, modelName, recordsToDelete)];
                    case 10:
                        _e = _f.sent();
                        return [3 /*break*/, 12];
                    case 11:
                        _e = [];
                        _f.label = 12;
                    case 12:
                        modelsToDelete = _e;
                        return [4 /*yield*/, this.deleteTraverse(this.schema.namespaces[nameSpace].relationships[modelName]
                                .relationTypes, modelsToDelete, modelName, nameSpace, deleteQueue)];
                    case 13:
                        _f.sent();
                        _f.label = 14;
                    case 14: return [3 /*break*/, 4];
                    case 15: return [3 /*break*/, 22];
                    case 16:
                        e_6_1 = _f.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 22];
                    case 17:
                        _f.trys.push([17, , 20, 21]);
                        if (!(models_1_1 && !models_1_1.done && (_b = models_1.return))) return [3 /*break*/, 19];
                        return [4 /*yield*/, _b.call(models_1)];
                    case 18:
                        _f.sent();
                        _f.label = 19;
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        if (e_6) throw e_6.error;
                        return [7 /*endfinally*/];
                    case 21: return [7 /*endfinally*/];
                    case 22: return [3 /*break*/, 40];
                    case 23:
                        _f.trys.push([23, 31, 32, 37]);
                        models_2 = __asyncValues(models);
                        _f.label = 24;
                    case 24: return [4 /*yield*/, models_2.next()];
                    case 25:
                        if (!(models_2_1 = _f.sent(), !models_2_1.done)) return [3 /*break*/, 30];
                        model = models_2_1.value;
                        keyValues = this.getIndexKeyValuesFromModel(model);
                        return [4 /*yield*/, this.db.getAll(storeName)];
                    case 26:
                        allRecords = _f.sent();
                        indices = index.split(IDENTIFIER_KEY_SEPARATOR);
                        childRecords = allRecords.filter(function (childItem) {
                            return indices.every(function (index) { return keyValues.includes(childItem[index]); });
                        });
                        return [4 /*yield*/, this.load(nameSpace, modelName, childRecords)];
                    case 27:
                        childModels = _f.sent();
                        return [4 /*yield*/, this.deleteTraverse(this.schema.namespaces[nameSpace].relationships[modelName]
                                .relationTypes, childModels, modelName, nameSpace, deleteQueue)];
                    case 28:
                        _f.sent();
                        _f.label = 29;
                    case 29: return [3 /*break*/, 24];
                    case 30: return [3 /*break*/, 37];
                    case 31:
                        e_7_1 = _f.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 37];
                    case 32:
                        _f.trys.push([32, , 35, 36]);
                        if (!(models_2_1 && !models_2_1.done && (_c = models_2.return))) return [3 /*break*/, 34];
                        return [4 /*yield*/, _c.call(models_2)];
                    case 33:
                        _f.sent();
                        _f.label = 34;
                    case 34: return [3 /*break*/, 36];
                    case 35:
                        if (e_7) throw e_7.error;
                        return [7 /*endfinally*/];
                    case 36: return [7 /*endfinally*/];
                    case 37: return [3 /*break*/, 40];
                    case 38: 
                    // Intentionally blank
                    return [3 /*break*/, 40];
                    case 39: throw new Error("Invalid relationType " + relationType);
                    case 40: return [3 /*break*/, 1];
                    case 41: return [3 /*break*/, 48];
                    case 42:
                        e_5_1 = _f.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 48];
                    case 43:
                        _f.trys.push([43, , 46, 47]);
                        if (!(relations_1_1 && !relations_1_1.done && (_a = relations_1.return))) return [3 /*break*/, 45];
                        return [4 /*yield*/, _a.call(relations_1)];
                    case 44:
                        _f.sent();
                        _f.label = 45;
                    case 45: return [3 /*break*/, 47];
                    case 46:
                        if (e_5) throw e_5.error;
                        return [7 /*endfinally*/];
                    case 47: return [7 /*endfinally*/];
                    case 48:
                        deleteQueue.push({
                            storeName: getStorename(nameSpace, srcModel),
                            items: models.map(function (record) {
                                return _this.modelInstanceCreator(_this.getModelConstructorByModelName(nameSpace, srcModel), record);
                            }),
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AsyncStorageAdapter.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.clear()];
                    case 1:
                        _a.sent();
                        this.db = undefined;
                        this.initPromise = undefined;
                        return [2 /*return*/];
                }
            });
        });
    };
    AsyncStorageAdapter.prototype.batchSave = function (modelConstructor, items) {
        return __awaiter(this, void 0, void 0, function () {
            var modelName, namespaceName, storeName, keys, batch, _loop_2, this_1, items_2, items_2_1, item;
            var e_8, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        modelName = modelConstructor.name;
                        namespaceName = this.namespaceResolver(modelConstructor);
                        storeName = getStorename(namespaceName, modelName);
                        keys = getIndexKeys(this.schema.namespaces[namespaceName], modelName);
                        batch = [];
                        _loop_2 = function (item) {
                            var model = this_1.modelInstanceCreator(modelConstructor, item);
                            var connectedModels = traverseModel(modelName, model, this_1.schema.namespaces[namespaceName], this_1.modelInstanceCreator, this_1.getModelConstructorByModelName);
                            var keyValuesPath = this_1.getIndexKeyValuesPath(model);
                            var instance = connectedModels.find(function (_a) {
                                var instance = _a.instance;
                                var instanceKeyValuesPath = _this.getIndexKeyValuesPath(instance);
                                return keysEqual([instanceKeyValuesPath], [keyValuesPath]);
                            }).instance;
                            batch.push(instance);
                        };
                        this_1 = this;
                        try {
                            for (items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                                item = items_2_1.value;
                                _loop_2(item);
                            }
                        }
                        catch (e_8_1) { e_8 = { error: e_8_1 }; }
                        finally {
                            try {
                                if (items_2_1 && !items_2_1.done && (_a = items_2.return)) _a.call(items_2);
                            }
                            finally { if (e_8) throw e_8.error; }
                        }
                        return [4 /*yield*/, this.db.batchSave(storeName, batch, keys)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    return AsyncStorageAdapter;
}());
export { AsyncStorageAdapter };
export default new AsyncStorageAdapter();
//# sourceMappingURL=AsyncStorageAdapter.js.map