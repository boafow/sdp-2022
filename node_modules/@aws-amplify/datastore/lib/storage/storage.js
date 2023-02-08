"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@aws-amplify/core");
var zen_push_1 = tslib_1.__importDefault(require("zen-push"));
var predicates_1 = require("../predicates");
var types_1 = require("../types");
var util_1 = require("../util");
var utils_1 = require("../sync/utils");
var getDefaultAdapter_1 = tslib_1.__importDefault(require("./adapter/getDefaultAdapter"));
var logger = new core_1.Logger('DataStore');
var StorageClass = /** @class */ (function () {
    function StorageClass(schema, namespaceResolver, getModelConstructorByModelName, modelInstanceCreator, adapter, sessionId) {
        this.schema = schema;
        this.namespaceResolver = namespaceResolver;
        this.getModelConstructorByModelName = getModelConstructorByModelName;
        this.modelInstanceCreator = modelInstanceCreator;
        this.adapter = adapter;
        this.sessionId = sessionId;
        this.adapter = this.adapter || getDefaultAdapter_1.default();
        this.pushStream = new zen_push_1.default();
    }
    StorageClass.getNamespace = function () {
        var namespace = {
            name: util_1.STORAGE,
            relationships: {},
            enums: {},
            models: {},
            nonModels: {},
        };
        return namespace;
    };
    StorageClass.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resolve, reject;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.initialized !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialized];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        logger.debug('Starting Storage');
                        this.initialized = new Promise(function (res, rej) {
                            resolve = res;
                            reject = rej;
                        });
                        this.adapter.setUp(this.schema, this.namespaceResolver, this.modelInstanceCreator, this.getModelConstructorByModelName, this.sessionId).then(resolve, reject);
                        return [4 /*yield*/, this.initialized];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageClass.prototype.save = function (model, condition, mutator, patchesTuple) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        if (!this.adapter) {
                            throw new Error('Storage adapter is missing');
                        }
                        return [4 /*yield*/, this.adapter.save(model, condition)];
                    case 2:
                        result = _a.sent();
                        result.forEach(function (r) {
                            var _a = tslib_1.__read(r, 2), savedElement = _a[0], opType = _a[1];
                            // truthy when save is called by the Merger
                            var syncResponse = !!mutator;
                            var updateMutationInput;
                            // don't attempt to calc mutation input when storage.save
                            // is called by Merger, i.e., when processing an AppSync response
                            if (opType === types_1.OpType.UPDATE && !syncResponse) {
                                //
                                // TODO: LOOK!!!
                                // the `model` used here is in effect regardless of what model
                                // comes back from adapter.save().
                                // Prior to fix, SQLite adapter had been returning two models
                                // of different types, resulting in invalid outbox entries.
                                //
                                // the bug is essentially fixed in SQLite adapter.
                                // leaving as-is, because it's currently unclear whether anything
                                // depends on this remaining as-is.
                                //
                                updateMutationInput = _this.getUpdateMutationInput(model, savedElement, patchesTuple);
                                // // an update without changed user fields
                                // => don't create mutationEvent
                                if (updateMutationInput === null) {
                                    return result;
                                }
                            }
                            var element = updateMutationInput || savedElement;
                            var modelConstructor = Object.getPrototypeOf(savedElement)
                                .constructor;
                            _this.pushStream.next({
                                model: modelConstructor,
                                opType: opType,
                                element: element,
                                mutator: mutator,
                                condition: (condition &&
                                    predicates_1.ModelPredicateCreator.getPredicates(condition, false)) ||
                                    null,
                                savedElement: savedElement,
                            });
                        });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    StorageClass.prototype.delete = function (modelOrModelConstructor, condition, mutator) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var models, deleted, modelConstructor, namespaceName, modelDefinition, modelIds;
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _b.sent();
                        if (!this.adapter) {
                            throw new Error('Storage adapter is missing');
                        }
                        return [4 /*yield*/, this.adapter.delete(modelOrModelConstructor, condition)];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), models = _a[0], deleted = _a[1];
                        modelConstructor = util_1.isModelConstructor(modelOrModelConstructor)
                            ? modelOrModelConstructor
                            : Object.getPrototypeOf(modelOrModelConstructor || {})
                                .constructor;
                        namespaceName = this.namespaceResolver(modelConstructor);
                        modelDefinition = this.schema.namespaces[namespaceName].models[modelConstructor.name];
                        modelIds = new Set(models.map(function (model) {
                            var modelId = utils_1.getIdentifierValue(modelDefinition, model);
                            return modelId;
                        }));
                        if (!util_1.isModelConstructor(modelOrModelConstructor) &&
                            !Array.isArray(deleted)) {
                            deleted = [deleted];
                        }
                        deleted.forEach(function (model) {
                            var modelConstructor = Object.getPrototypeOf(model)
                                .constructor;
                            var theCondition;
                            if (!util_1.isModelConstructor(modelOrModelConstructor)) {
                                var modelId = utils_1.getIdentifierValue(modelDefinition, model);
                                theCondition = modelIds.has(modelId)
                                    ? predicates_1.ModelPredicateCreator.getPredicates(condition, false)
                                    : undefined;
                            }
                            _this.pushStream.next({
                                model: modelConstructor,
                                opType: types_1.OpType.DELETE,
                                element: model,
                                mutator: mutator,
                                condition: theCondition || null,
                            });
                        });
                        return [2 /*return*/, [models, deleted]];
                }
            });
        });
    };
    StorageClass.prototype.query = function (modelConstructor, predicate, pagination) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        if (!this.adapter) {
                            throw new Error('Storage adapter is missing');
                        }
                        return [4 /*yield*/, this.adapter.query(modelConstructor, predicate, pagination)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageClass.prototype.queryOne = function (modelConstructor, firstOrLast) {
        if (firstOrLast === void 0) { firstOrLast = types_1.QueryOne.FIRST; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        if (!this.adapter) {
                            throw new Error('Storage adapter is missing');
                        }
                        return [4 /*yield*/, this.adapter.queryOne(modelConstructor, firstOrLast)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageClass.prototype.observe = function (modelConstructor, predicate, skipOwn) {
        var listenToAll = !modelConstructor;
        var _a = (predicate && predicates_1.ModelPredicateCreator.getPredicates(predicate, false)) ||
            {}, predicates = _a.predicates, type = _a.type;
        var result = this.pushStream.observable
            .filter(function (_a) {
            var mutator = _a.mutator;
            return !skipOwn || mutator !== skipOwn;
        })
            .map(function (_a) {
            var _mutator = _a.mutator, message = tslib_1.__rest(_a, ["mutator"]);
            return message;
        });
        if (!listenToAll) {
            result = result.filter(function (_a) {
                var model = _a.model, element = _a.element;
                if (modelConstructor !== model) {
                    return false;
                }
                if (!!predicates && !!type) {
                    return util_1.validatePredicate(element, type, predicates);
                }
                return true;
            });
        }
        return result;
    };
    StorageClass.prototype.clear = function (completeObservable) {
        if (completeObservable === void 0) { completeObservable = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initialized = undefined;
                        if (!this.adapter) {
                            throw new Error('Storage adapter is missing');
                        }
                        return [4 /*yield*/, this.adapter.clear()];
                    case 1:
                        _a.sent();
                        if (completeObservable) {
                            this.pushStream.complete();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageClass.prototype.batchSave = function (modelConstructor, items, mutator) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        if (!this.adapter) {
                            throw new Error('Storage adapter is missing');
                        }
                        return [4 /*yield*/, this.adapter.batchSave(modelConstructor, items)];
                    case 2:
                        result = _a.sent();
                        result.forEach(function (_a) {
                            var _b = tslib_1.__read(_a, 2), element = _b[0], opType = _b[1];
                            _this.pushStream.next({
                                model: modelConstructor,
                                opType: opType,
                                element: element,
                                mutator: mutator,
                                condition: null,
                            });
                        });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // returns null if no user fields were changed (determined by value comparison)
    StorageClass.prototype.getUpdateMutationInput = function (model, originalElement, patchesTuple) {
        var e_1, _a;
        var _b;
        var containsPatches = patchesTuple && patchesTuple.length;
        if (!containsPatches) {
            return null;
        }
        var _c = tslib_1.__read(patchesTuple, 2), patches = _c[0], source = _c[1];
        var updatedElement = {};
        // extract array of updated fields from patches
        var updatedFields = (patches.map(function (patch) { return patch.path && patch.path[0]; }));
        // check model def for association and replace with targetName if exists
        var modelConstructor = Object.getPrototypeOf(model)
            .constructor;
        var namespace = this.namespaceResolver(modelConstructor);
        var fields = this.schema.namespaces[namespace].models[modelConstructor.name].fields;
        var _d = ((_b = this.schema.namespaces[namespace].keys) === null || _b === void 0 ? void 0 : _b[modelConstructor.name]) || {}, primaryKey = _d.primaryKey, _e = _d.compositeKeys, compositeKeys = _e === void 0 ? [] : _e;
        // set original values for these fields
        updatedFields.forEach(function (field) {
            var e_2, _a, e_3, _b, e_4, _c, e_5, _d, e_6, _e;
            var _f;
            var targetNames = types_1.isTargetNameAssociation((_f = fields[field]) === null || _f === void 0 ? void 0 : _f.association);
            if (Array.isArray(targetNames)) {
                try {
                    // if field refers to a belongsTo relation, use the target field instead
                    for (var targetNames_1 = tslib_1.__values(targetNames), targetNames_1_1 = targetNames_1.next(); !targetNames_1_1.done; targetNames_1_1 = targetNames_1.next()) {
                        var targetName = targetNames_1_1.value;
                        // check field values by value. Ignore unchanged fields
                        if (!util_1.valuesEqual(source[targetName], originalElement[targetName])) {
                            // if the field was updated to 'undefined', replace with 'null' for compatibility with JSON and GraphQL
                            updatedElement[targetName] =
                                originalElement[targetName] === undefined
                                    ? null
                                    : originalElement[targetName];
                            try {
                                for (var compositeKeys_1 = (e_3 = void 0, tslib_1.__values(compositeKeys)), compositeKeys_1_1 = compositeKeys_1.next(); !compositeKeys_1_1.done; compositeKeys_1_1 = compositeKeys_1.next()) {
                                    var fieldSet = compositeKeys_1_1.value;
                                    // include all of the fields that comprise the composite key
                                    if (fieldSet.has(targetName)) {
                                        try {
                                            for (var fieldSet_1 = (e_4 = void 0, tslib_1.__values(fieldSet)), fieldSet_1_1 = fieldSet_1.next(); !fieldSet_1_1.done; fieldSet_1_1 = fieldSet_1.next()) {
                                                var compositeField = fieldSet_1_1.value;
                                                updatedElement[compositeField] =
                                                    originalElement[compositeField];
                                            }
                                        }
                                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                        finally {
                                            try {
                                                if (fieldSet_1_1 && !fieldSet_1_1.done && (_c = fieldSet_1.return)) _c.call(fieldSet_1);
                                            }
                                            finally { if (e_4) throw e_4.error; }
                                        }
                                    }
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (compositeKeys_1_1 && !compositeKeys_1_1.done && (_b = compositeKeys_1.return)) _b.call(compositeKeys_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (targetNames_1_1 && !targetNames_1_1.done && (_a = targetNames_1.return)) _a.call(targetNames_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else {
                // Backwards compatibility pre-CPK
                // if field refers to a belongsTo relation, use the target field instead
                var key = targetNames || field;
                // check field values by value. Ignore unchanged fields
                if (!util_1.valuesEqual(source[key], originalElement[key])) {
                    // if the field was updated to 'undefined', replace with 'null' for compatibility with JSON and GraphQL
                    updatedElement[key] =
                        originalElement[key] === undefined ? null : originalElement[key];
                    try {
                        for (var compositeKeys_2 = tslib_1.__values(compositeKeys), compositeKeys_2_1 = compositeKeys_2.next(); !compositeKeys_2_1.done; compositeKeys_2_1 = compositeKeys_2.next()) {
                            var fieldSet = compositeKeys_2_1.value;
                            // include all of the fields that comprise the composite key
                            if (fieldSet.has(key)) {
                                try {
                                    for (var fieldSet_2 = (e_6 = void 0, tslib_1.__values(fieldSet)), fieldSet_2_1 = fieldSet_2.next(); !fieldSet_2_1.done; fieldSet_2_1 = fieldSet_2.next()) {
                                        var compositeField = fieldSet_2_1.value;
                                        updatedElement[compositeField] =
                                            originalElement[compositeField];
                                    }
                                }
                                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                                finally {
                                    try {
                                        if (fieldSet_2_1 && !fieldSet_2_1.done && (_e = fieldSet_2.return)) _e.call(fieldSet_2);
                                    }
                                    finally { if (e_6) throw e_6.error; }
                                }
                            }
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (compositeKeys_2_1 && !compositeKeys_2_1.done && (_d = compositeKeys_2.return)) _d.call(compositeKeys_2);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
            }
        });
        // Exit early when there are no changes introduced in the update mutation
        if (Object.keys(updatedElement).length === 0) {
            return null;
        }
        // include field(s) from custom PK if one is specified for the model
        if (primaryKey && primaryKey.length) {
            try {
                for (var primaryKey_1 = tslib_1.__values(primaryKey), primaryKey_1_1 = primaryKey_1.next(); !primaryKey_1_1.done; primaryKey_1_1 = primaryKey_1.next()) {
                    var pkField = primaryKey_1_1.value;
                    updatedElement[pkField] = originalElement[pkField];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (primaryKey_1_1 && !primaryKey_1_1.done && (_a = primaryKey_1.return)) _a.call(primaryKey_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        var id = originalElement.id, _version = originalElement._version, _lastChangedAt = originalElement._lastChangedAt, _deleted = originalElement._deleted;
        // For update mutations we only want to send fields with changes
        // and the required internal fields
        return tslib_1.__assign(tslib_1.__assign({}, updatedElement), { id: id,
            _version: _version,
            _lastChangedAt: _lastChangedAt,
            _deleted: _deleted });
    };
    return StorageClass;
}());
var ExclusiveStorage = /** @class */ (function () {
    function ExclusiveStorage(schema, namespaceResolver, getModelConstructorByModelName, modelInstanceCreator, adapter, sessionId) {
        this.mutex = new core_1.Mutex();
        this.storage = new StorageClass(schema, namespaceResolver, getModelConstructorByModelName, modelInstanceCreator, adapter, sessionId);
    }
    ExclusiveStorage.prototype.runExclusive = function (fn) {
        return this.mutex.runExclusive(fn.bind(this, this.storage));
    };
    ExclusiveStorage.prototype.save = function (model, condition, mutator, patchesTuple) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.runExclusive(function (storage) {
                        return storage.save(model, condition, mutator, patchesTuple);
                    })];
            });
        });
    };
    ExclusiveStorage.prototype.delete = function (modelOrModelConstructor, condition, mutator) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.runExclusive(function (storage) {
                        if (util_1.isModelConstructor(modelOrModelConstructor)) {
                            var modelConstructor = modelOrModelConstructor;
                            return storage.delete(modelConstructor, condition, mutator);
                        }
                        else {
                            var model = modelOrModelConstructor;
                            return storage.delete(model, condition, mutator);
                        }
                    })];
            });
        });
    };
    ExclusiveStorage.prototype.query = function (modelConstructor, predicate, pagination) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.runExclusive(function (storage) {
                        return storage.query(modelConstructor, predicate, pagination);
                    })];
            });
        });
    };
    ExclusiveStorage.prototype.queryOne = function (modelConstructor, firstOrLast) {
        if (firstOrLast === void 0) { firstOrLast = types_1.QueryOne.FIRST; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.runExclusive(function (storage) {
                        return storage.queryOne(modelConstructor, firstOrLast);
                    })];
            });
        });
    };
    ExclusiveStorage.getNamespace = function () {
        return StorageClass.getNamespace();
    };
    ExclusiveStorage.prototype.observe = function (modelConstructor, predicate, skipOwn) {
        return this.storage.observe(modelConstructor, predicate, skipOwn);
    };
    ExclusiveStorage.prototype.clear = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.runExclusive(function (storage) { return storage.clear(); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExclusiveStorage.prototype.batchSave = function (modelConstructor, items) {
        return this.storage.batchSave(modelConstructor, items);
    };
    ExclusiveStorage.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.storage.init()];
            });
        });
    };
    return ExclusiveStorage;
}());
exports.ExclusiveStorage = ExclusiveStorage;
//# sourceMappingURL=storage.js.map