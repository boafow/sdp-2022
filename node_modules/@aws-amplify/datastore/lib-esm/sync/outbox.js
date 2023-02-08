import { __assign, __awaiter, __generator, __read, __rest } from "tslib";
import { ModelPredicateCreator } from '../predicates';
import { QueryOne, } from '../types';
import { USER, SYNC, valuesEqual } from '../util';
import { getIdentifierValue, TransformerMutationType } from './utils';
// TODO: Persist deleted ids
// https://github.com/aws-amplify/amplify-js/blob/datastore-docs/packages/datastore/docs/sync-engine.md#outbox
var MutationEventOutbox = /** @class */ (function () {
    function MutationEventOutbox(schema, MutationEvent, modelInstanceCreator, ownSymbol) {
        this.schema = schema;
        this.MutationEvent = MutationEvent;
        this.modelInstanceCreator = modelInstanceCreator;
        this.ownSymbol = ownSymbol;
    }
    MutationEventOutbox.prototype.enqueue = function (storage, mutationEvent) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, storage.runExclusive(function (s) { return __awaiter(_this, void 0, void 0, function () {
                            var mutationEventModelDefinition, predicate, _a, first, incomingMutationType, merged_1, incomingConditionJSON, incomingCondition, merged;
                            var _this = this;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        mutationEventModelDefinition = this.schema.namespaces[SYNC].models['MutationEvent'];
                                        predicate = ModelPredicateCreator.createFromExisting(mutationEventModelDefinition, function (c) {
                                            return c
                                                .modelId('eq', mutationEvent.modelId)
                                                .id('ne', _this.inProgressMutationEventId);
                                        });
                                        return [4 /*yield*/, s.query(this.MutationEvent, predicate)];
                                    case 1:
                                        _a = __read.apply(void 0, [_b.sent(), 1]), first = _a[0];
                                        if (!(first === undefined)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, s.save(mutationEvent, undefined, this.ownSymbol)];
                                    case 2:
                                        _b.sent();
                                        return [2 /*return*/];
                                    case 3:
                                        incomingMutationType = mutationEvent.operation;
                                        if (!(first.operation === TransformerMutationType.CREATE)) return [3 /*break*/, 8];
                                        if (!(incomingMutationType === TransformerMutationType.DELETE)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, s.delete(this.MutationEvent, predicate)];
                                    case 4:
                                        _b.sent();
                                        return [3 /*break*/, 7];
                                    case 5:
                                        merged_1 = this.mergeUserFields(first, mutationEvent);
                                        return [4 /*yield*/, s.save(this.MutationEvent.copyOf(first, function (draft) {
                                                draft.data = merged_1.data;
                                            }), undefined, this.ownSymbol)];
                                    case 6:
                                        _b.sent();
                                        _b.label = 7;
                                    case 7: return [3 /*break*/, 12];
                                    case 8:
                                        incomingConditionJSON = mutationEvent.condition;
                                        incomingCondition = JSON.parse(incomingConditionJSON);
                                        merged = void 0;
                                        if (!(Object.keys(incomingCondition).length === 0)) return [3 /*break*/, 10];
                                        merged = this.mergeUserFields(first, mutationEvent);
                                        // delete all for model
                                        return [4 /*yield*/, s.delete(this.MutationEvent, predicate)];
                                    case 9:
                                        // delete all for model
                                        _b.sent();
                                        _b.label = 10;
                                    case 10:
                                        merged = merged || mutationEvent;
                                        // Enqueue new one
                                        return [4 /*yield*/, s.save(merged, undefined, this.ownSymbol)];
                                    case 11:
                                        // Enqueue new one
                                        _b.sent();
                                        _b.label = 12;
                                    case 12: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MutationEventOutbox.prototype.dequeue = function (storage, record, recordOp) {
        return __awaiter(this, void 0, void 0, function () {
            var head;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.peek(storage)];
                    case 1:
                        head = _a.sent();
                        if (!record) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.syncOutboxVersionsOnDequeue(storage, record, head, recordOp)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, storage.delete(head)];
                    case 4:
                        _a.sent();
                        this.inProgressMutationEventId = undefined;
                        return [2 /*return*/, head];
                }
            });
        });
    };
    /**
     * Doing a peek() implies that the mutation goes "inProgress"
     *
     * @param storage
     */
    MutationEventOutbox.prototype.peek = function (storage) {
        return __awaiter(this, void 0, void 0, function () {
            var head;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, storage.queryOne(this.MutationEvent, QueryOne.FIRST)];
                    case 1:
                        head = _a.sent();
                        this.inProgressMutationEventId = head ? head.id : undefined;
                        return [2 /*return*/, head];
                }
            });
        });
    };
    MutationEventOutbox.prototype.getForModel = function (storage, model, userModelDefinition) {
        return __awaiter(this, void 0, void 0, function () {
            var mutationEventModelDefinition, modelId, mutationEvents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mutationEventModelDefinition = this.schema.namespaces[SYNC].models.MutationEvent;
                        modelId = getIdentifierValue(userModelDefinition, model);
                        return [4 /*yield*/, storage.query(this.MutationEvent, ModelPredicateCreator.createFromExisting(mutationEventModelDefinition, function (c) { return c.modelId('eq', modelId); }))];
                    case 1:
                        mutationEvents = _a.sent();
                        return [2 /*return*/, mutationEvents];
                }
            });
        });
    };
    MutationEventOutbox.prototype.getModelIds = function (storage) {
        return __awaiter(this, void 0, void 0, function () {
            var mutationEvents, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, storage.query(this.MutationEvent)];
                    case 1:
                        mutationEvents = _a.sent();
                        result = new Set();
                        mutationEvents.forEach(function (_a) {
                            var modelId = _a.modelId;
                            return result.add(modelId);
                        });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // applies _version from the AppSync mutation response to other items
    // in the mutation queue with the same id
    // see https://github.com/aws-amplify/amplify-js/pull/7354 for more details
    MutationEventOutbox.prototype.syncOutboxVersionsOnDequeue = function (storage, record, head, recordOp) {
        return __awaiter(this, void 0, void 0, function () {
            var _version, _lastChangedAt, _deleted, _incomingData, incomingData, data, __version, __lastChangedAt, __deleted, _outgoingData, outgoingData, mutationEventModelDefinition, userModelDefinition, recordId, predicate, outdatedMutations, reconciledMutations;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (head.operation !== recordOp) {
                            return [2 /*return*/];
                        }
                        _version = record._version, _lastChangedAt = record._lastChangedAt, _deleted = record._deleted, _incomingData = __rest(record, ["_version", "_lastChangedAt", "_deleted"]);
                        incomingData = this.removeTimestampFields(head.model, _incomingData);
                        data = JSON.parse(head.data);
                        if (!data) {
                            return [2 /*return*/];
                        }
                        __version = data._version, __lastChangedAt = data._lastChangedAt, __deleted = data._deleted, _outgoingData = __rest(data, ["_version", "_lastChangedAt", "_deleted"]);
                        outgoingData = this.removeTimestampFields(head.model, _outgoingData);
                        // Don't sync the version when the data in the response does not match the data
                        // in the request, i.e., when there's a handled conflict
                        if (!valuesEqual(incomingData, outgoingData, true)) {
                            return [2 /*return*/];
                        }
                        mutationEventModelDefinition = this.schema.namespaces[SYNC].models['MutationEvent'];
                        userModelDefinition = this.schema.namespaces['user'].models[head.model];
                        recordId = getIdentifierValue(userModelDefinition, record);
                        predicate = ModelPredicateCreator.createFromExisting(mutationEventModelDefinition, function (c) { return c.modelId('eq', recordId).id('ne', _this.inProgressMutationEventId); });
                        return [4 /*yield*/, storage.query(this.MutationEvent, predicate)];
                    case 1:
                        outdatedMutations = _a.sent();
                        if (!outdatedMutations.length) {
                            return [2 /*return*/];
                        }
                        reconciledMutations = outdatedMutations.map(function (m) {
                            var oldData = JSON.parse(m.data);
                            var newData = __assign(__assign({}, oldData), { _version: _version, _lastChangedAt: _lastChangedAt });
                            return _this.MutationEvent.copyOf(m, function (draft) {
                                draft.data = JSON.stringify(newData);
                            });
                        });
                        return [4 /*yield*/, storage.delete(this.MutationEvent, predicate)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Promise.all(reconciledMutations.map(function (m) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, storage.save(m, undefined, this.ownSymbol)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); }))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MutationEventOutbox.prototype.mergeUserFields = function (previous, current) {
        var _a = JSON.parse(previous.data), _version = _a._version, _lastChangedAt = _a._lastChangedAt, _deleted = _a._deleted, previousData = __rest(_a, ["_version", "_lastChangedAt", "_deleted"]);
        var _b = JSON.parse(current.data), __version = _b._version, __lastChangedAt = _b._lastChangedAt, __deleted = _b._deleted, currentData = __rest(_b, ["_version", "_lastChangedAt", "_deleted"]);
        var data = JSON.stringify(__assign(__assign({ _version: _version,
            _lastChangedAt: _lastChangedAt,
            _deleted: _deleted }, previousData), currentData));
        return this.modelInstanceCreator(this.MutationEvent, __assign(__assign({}, current), { data: data }));
    };
    /*
    if a model is using custom timestamp fields
    the custom field names will be stored in the model attributes

    e.g.
    "attributes": [
    {
            "type": "model",
            "properties": {
                "timestamps": {
                    "createdAt": "createdOn",
                    "updatedAt": "updatedOn"
                }
            }
    }
    ]
    */
    MutationEventOutbox.prototype.removeTimestampFields = function (model, record) {
        var _a, _b;
        var CREATED_AT_DEFAULT_KEY = 'createdAt';
        var UPDATED_AT_DEFAULT_KEY = 'updatedAt';
        var createdTimestampKey = CREATED_AT_DEFAULT_KEY;
        var updatedTimestampKey = UPDATED_AT_DEFAULT_KEY;
        var modelAttributes = (_a = this.schema.namespaces[USER].models[model].attributes) === null || _a === void 0 ? void 0 : _a.find(function (attr) { return attr.type === 'model'; });
        var timestampFieldsMap = (_b = modelAttributes === null || modelAttributes === void 0 ? void 0 : modelAttributes.properties) === null || _b === void 0 ? void 0 : _b.timestamps;
        if (timestampFieldsMap) {
            createdTimestampKey = timestampFieldsMap[CREATED_AT_DEFAULT_KEY];
            updatedTimestampKey = timestampFieldsMap[UPDATED_AT_DEFAULT_KEY];
        }
        delete record[createdTimestampKey];
        delete record[updatedTimestampKey];
        return record;
    };
    return MutationEventOutbox;
}());
export { MutationEventOutbox };
//# sourceMappingURL=outbox.js.map