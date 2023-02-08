import { __awaiter, __generator, __read, __spread, __values } from "tslib";
import { Buffer } from 'buffer';
import { monotonicFactory } from 'ulid';
import { v4 as uuid } from 'uuid';
import { produce, applyPatches } from 'immer';
import { isPredicateGroup, isPredicateObj, SortDirection, isModelAttributeKey, isModelAttributePrimaryKey, isModelAttributeCompositeKey, LimitTimerRaceResolvedValues, } from './types';
import { WordArray } from 'amazon-cognito-identity-js';
import { ModelSortPredicateCreator } from './predicates';
export var ID = 'id';
/**
 * Used by the Async Storage Adapter to concatenate key values
 * for a record. For instance, if a model has the following keys:
 * `customId: ID! @primaryKey(sortKeyFields: ["createdAt"])`,
 * we concatenate the `customId` and `createdAt` as:
 * `12-234-5#2022-09-28T00:00:00.000Z`
 */
export var DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR = '#';
/**
 * Used for generating spinal-cased index name from an array of
 * key field names.
 * E.g. for keys `[id, title]` => 'id-title'
 */
export var IDENTIFIER_KEY_SEPARATOR = '-';
export var errorMessages = {
    idEmptyString: 'An index field cannot contain an empty string value',
    queryByPkWithCompositeKeyPresent: 'Models with composite primary keys cannot be queried by a single key value. Use object literal syntax for composite keys instead: https://docs.amplify.aws/lib/datastore/advanced-workflows/q/platform/js/#querying-records-with-custom-primary-keys',
    deleteByPkWithCompositeKeyPresent: 'Models with composite primary keys cannot be deleted by a single key value, unless using a predicate. Use object literal syntax for composite keys instead: https://docs.amplify.aws/lib/datastore/advanced-workflows/q/platform/js/#querying-records-with-custom-primary-keys',
    observeWithObjectLiteral: 'Object literal syntax cannot be used with observe. Use a predicate instead: https://docs.amplify.aws/lib/datastore/data-access/q/platform/js/#predicates',
};
export var NAMESPACES;
(function (NAMESPACES) {
    NAMESPACES["DATASTORE"] = "datastore";
    NAMESPACES["USER"] = "user";
    NAMESPACES["SYNC"] = "sync";
    NAMESPACES["STORAGE"] = "storage";
})(NAMESPACES || (NAMESPACES = {}));
var DATASTORE = NAMESPACES.DATASTORE;
var USER = NAMESPACES.USER;
var SYNC = NAMESPACES.SYNC;
var STORAGE = NAMESPACES.STORAGE;
export { USER, SYNC, STORAGE, DATASTORE };
export var USER_AGENT_SUFFIX_DATASTORE = '/DataStore';
export var exhaustiveCheck = function (obj, throwOnError) {
    if (throwOnError === void 0) { throwOnError = true; }
    if (throwOnError) {
        throw new Error("Invalid " + obj);
    }
};
export var isNullOrUndefined = function (val) {
    return typeof val === 'undefined' || val === undefined || val === null;
};
export var validatePredicate = function (model, groupType, predicatesOrGroups) {
    var filterType;
    var isNegation = false;
    if (predicatesOrGroups.length === 0) {
        return true;
    }
    switch (groupType) {
        case 'not':
            filterType = 'every';
            isNegation = true;
            break;
        case 'and':
            filterType = 'every';
            break;
        case 'or':
            filterType = 'some';
            break;
        default:
            throw new Error("Invalid " + groupType);
    }
    var result = predicatesOrGroups[filterType](function (predicateOrGroup) {
        if (isPredicateObj(predicateOrGroup)) {
            var field = predicateOrGroup.field, operator = predicateOrGroup.operator, operand = predicateOrGroup.operand;
            var value = model[field];
            return validatePredicateField(value, operator, operand);
        }
        if (isPredicateGroup(predicateOrGroup)) {
            var type = predicateOrGroup.type, predicates = predicateOrGroup.predicates;
            return validatePredicate(model, type, predicates);
        }
        throw new Error('Not a predicate or group');
    });
    return isNegation ? !result : result;
};
export var validatePredicateField = function (value, operator, operand) {
    switch (operator) {
        case 'ne':
            return value !== operand;
        case 'eq':
            return value === operand;
        case 'le':
            return value <= operand;
        case 'lt':
            return value < operand;
        case 'ge':
            return value >= operand;
        case 'gt':
            return value > operand;
        case 'between':
            var _c = __read(operand, 2), min = _c[0], max = _c[1];
            return value >= min && value <= max;
        case 'beginsWith':
            return (!isNullOrUndefined(value) &&
                value.startsWith(operand));
        case 'contains':
            return (!isNullOrUndefined(value) &&
                value.indexOf(operand) > -1);
        case 'notContains':
            return (isNullOrUndefined(value) ||
                value.indexOf(operand) === -1);
        default:
            return false;
    }
};
export var isModelConstructor = function (obj) {
    return (obj && typeof obj.copyOf === 'function');
};
var nonModelClasses = new WeakSet();
export function registerNonModelClass(clazz) {
    nonModelClasses.add(clazz);
}
export var isNonModelConstructor = function (obj) {
    return nonModelClasses.has(obj);
};
var topologicallySortedModels = new WeakMap();
export var traverseModel = function (srcModelName, instance, namespace, modelInstanceCreator, getModelConstructorByModelName) {
    var modelConstructor = getModelConstructorByModelName(namespace.name, srcModelName);
    var result = [];
    var newInstance = modelConstructor.copyOf(instance, function () { });
    result.unshift({
        modelName: srcModelName,
        item: newInstance,
        instance: newInstance,
    });
    if (!topologicallySortedModels.has(namespace)) {
        topologicallySortedModels.set(namespace, Array.from(namespace.modelTopologicalOrdering.keys()));
    }
    var sortedModels = topologicallySortedModels.get(namespace);
    result.sort(function (a, b) {
        return (sortedModels.indexOf(a.modelName) - sortedModels.indexOf(b.modelName));
    });
    return result;
};
var privateModeCheckResult;
export var isPrivateMode = function () {
    return new Promise(function (resolve) {
        var dbname = uuid();
        var db;
        var isPrivate = function () {
            privateModeCheckResult = false;
            resolve(true);
        };
        var isNotPrivate = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(db && db.result && typeof db.result.close === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, db.result.close()];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2: return [4 /*yield*/, indexedDB.deleteDatabase(dbname)];
                    case 3:
                        _c.sent();
                        privateModeCheckResult = true;
                        return [2 /*return*/, resolve(false)];
                }
            });
        }); };
        if (privateModeCheckResult === true) {
            return isNotPrivate();
        }
        if (privateModeCheckResult === false) {
            return isPrivate();
        }
        if (indexedDB === null)
            return isPrivate();
        db = indexedDB.open(dbname);
        db.onerror = isPrivate;
        db.onsuccess = isNotPrivate;
    });
};
var safariCompatabilityModeResult;
/**
 * Whether the browser's implementation of IndexedDB breaks on array lookups
 * against composite indexes whose keypath contains a single column.
 *
 * E.g., Whether `store.createIndex(indexName, ['id'])` followed by
 * `store.index(indexName).get([1])` will *ever* return records.
 *
 * In all known, modern Safari browsers as of Q4 2022, the query against an index like
 * this will *always* return `undefined`. So, the index needs to be created as a scalar.
 */
export var isSafariCompatabilityMode = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dbName_1, storeName_1, indexName_1, db_1, rwTx, rwStore, result, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 6, , 7]);
                dbName_1 = uuid();
                storeName_1 = 'indexedDBFeatureProbeStore';
                indexName_1 = 'idx';
                if (indexedDB === null)
                    return [2 /*return*/, false];
                if (safariCompatabilityModeResult !== undefined) {
                    return [2 /*return*/, safariCompatabilityModeResult];
                }
                return [4 /*yield*/, new Promise(function (resolve) {
                        var dbOpenRequest = indexedDB.open(dbName_1);
                        dbOpenRequest.onerror = function () { return resolve(false); };
                        dbOpenRequest.onsuccess = function () {
                            var db = dbOpenRequest.result;
                            resolve(db);
                        };
                        dbOpenRequest.onupgradeneeded = function (event) {
                            var _c;
                            var db = (_c = event === null || event === void 0 ? void 0 : event.target) === null || _c === void 0 ? void 0 : _c.result;
                            db.onerror = function () { return resolve(false); };
                            var store = db.createObjectStore(storeName_1, {
                                autoIncrement: true,
                            });
                            store.createIndex(indexName_1, ['id']);
                        };
                    })];
            case 1:
                db_1 = _c.sent();
                if (!db_1) {
                    throw new Error('Could not open probe DB');
                }
                rwTx = db_1.transaction(storeName_1, 'readwrite');
                rwStore = rwTx.objectStore(storeName_1);
                rwStore.add({
                    id: 1,
                });
                rwTx.commit();
                return [4 /*yield*/, new Promise(function (resolve) {
                        var tx = db_1.transaction(storeName_1, 'readonly');
                        var store = tx.objectStore(storeName_1);
                        var index = store.index(indexName_1);
                        var getRequest = index.get([1]);
                        getRequest.onerror = function () { return resolve(false); };
                        getRequest.onsuccess = function (event) {
                            var _c;
                            resolve((_c = event === null || event === void 0 ? void 0 : event.target) === null || _c === void 0 ? void 0 : _c.result);
                        };
                    })];
            case 2:
                result = _c.sent();
                if (!(db_1 && typeof db_1.close === 'function')) return [3 /*break*/, 4];
                return [4 /*yield*/, db_1.close()];
            case 3:
                _c.sent();
                _c.label = 4;
            case 4: return [4 /*yield*/, indexedDB.deleteDatabase(dbName_1)];
            case 5:
                _c.sent();
                if (result === undefined) {
                    safariCompatabilityModeResult = true;
                }
                else {
                    safariCompatabilityModeResult = false;
                }
                return [3 /*break*/, 7];
            case 6:
                error_1 = _c.sent();
                safariCompatabilityModeResult = false;
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/, safariCompatabilityModeResult];
        }
    });
}); };
var randomBytes = function (nBytes) {
    return Buffer.from(new WordArray().random(nBytes).toString(), 'hex');
};
var prng = function () { return randomBytes(1).readUInt8(0) / 0xff; };
export function monotonicUlidFactory(seed) {
    var ulid = monotonicFactory(prng);
    return function () {
        return ulid(seed);
    };
}
/**
 * Uses performance.now() if available, otherwise, uses Date.now() (e.g. react native without a polyfill)
 *
 * The values returned by performance.now() always increase at a constant rate,
 * independent of the system clock (which might be adjusted manually or skewed
 * by software like NTP).
 *
 * Otherwise, performance.timing.navigationStart + performance.now() will be
 * approximately equal to Date.now()
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Performance/now#Example
 */
export function getNow() {
    if (typeof performance !== 'undefined' &&
        performance &&
        typeof performance.now === 'function') {
        return performance.now() | 0; // convert to integer
    }
    else {
        return Date.now();
    }
}
export function sortCompareFunction(sortPredicates) {
    return function compareFunction(a, b) {
        var e_1, _c;
        try {
            // enable multi-field sort by iterating over predicates until
            // a comparison returns -1 or 1
            for (var sortPredicates_1 = __values(sortPredicates), sortPredicates_1_1 = sortPredicates_1.next(); !sortPredicates_1_1.done; sortPredicates_1_1 = sortPredicates_1.next()) {
                var predicate = sortPredicates_1_1.value;
                var field = predicate.field, sortDirection = predicate.sortDirection;
                // reverse result when direction is descending
                var sortMultiplier = sortDirection === SortDirection.ASCENDING ? 1 : -1;
                if (a[field] < b[field]) {
                    return -1 * sortMultiplier;
                }
                if (a[field] > b[field]) {
                    return 1 * sortMultiplier;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sortPredicates_1_1 && !sortPredicates_1_1.done && (_c = sortPredicates_1.return)) _c.call(sortPredicates_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return 0;
    };
}
// deep compare any 2 values
// primitives or object types (including arrays, Sets, and Maps)
// returns true if equal by value
// if nullish is true, treat undefined and null values as equal
// to normalize for GQL response values for undefined fields
export function valuesEqual(valA, valB, nullish) {
    var e_2, _c;
    if (nullish === void 0) { nullish = false; }
    var a = valA;
    var b = valB;
    var nullishCompare = function (_a, _b) {
        return ((_a === undefined || _a === null) && (_b === undefined || _b === null));
    };
    // if one of the values is a primitive and the other is an object
    if ((a instanceof Object && !(b instanceof Object)) ||
        (!(a instanceof Object) && b instanceof Object)) {
        return false;
    }
    // compare primitive types
    if (!(a instanceof Object)) {
        if (nullish && nullishCompare(a, b)) {
            return true;
        }
        return a === b;
    }
    // make sure object types match
    if ((Array.isArray(a) && !Array.isArray(b)) ||
        (Array.isArray(b) && !Array.isArray(a))) {
        return false;
    }
    if (a instanceof Set && b instanceof Set) {
        a = __spread(a);
        b = __spread(b);
    }
    if (a instanceof Map && b instanceof Map) {
        a = Object.fromEntries(a);
        b = Object.fromEntries(b);
    }
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    // last condition is to ensure that [] !== [null] even if nullish. However [undefined] === [null] when nullish
    if (aKeys.length !== bKeys.length && (!nullish || Array.isArray(a))) {
        return false;
    }
    // iterate through the longer set of keys
    // e.g., for a nullish comparison of a={ a: 1 } and b={ a: 1, b: null }
    // we want to iterate through bKeys
    var keys = aKeys.length >= bKeys.length ? aKeys : bKeys;
    try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            var aVal = a[key];
            var bVal = b[key];
            if (!valuesEqual(aVal, bVal, nullish)) {
                return false;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_c = keys_1.return)) _c.call(keys_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return true;
}
/**
 * Statelessly extracts the specified page from an array.
 *
 * @param records - The source array to extract a page from.
 * @param pagination - A definition of the page to extract.
 * @returns This items from `records` matching the `pagination` definition.
 */
export function inMemoryPagination(records, pagination) {
    if (pagination && records.length > 1) {
        if (pagination.sort) {
            var sortPredicates = ModelSortPredicateCreator.getPredicates(pagination.sort);
            if (sortPredicates.length) {
                var compareFn = sortCompareFunction(sortPredicates);
                records.sort(compareFn);
            }
        }
        var _c = pagination.page, page = _c === void 0 ? 0 : _c, _d = pagination.limit, limit = _d === void 0 ? 0 : _d;
        var start = Math.max(0, page * limit) || 0;
        var end = limit > 0 ? start + limit : records.length;
        return records.slice(start, end);
    }
    return records;
}
/**
 * An `aysnc` implementation of `Array.some()`. Returns as soon as a match is found.
 * @param items The items to check.
 * @param matches The async matcher function, expected to
 * return Promise<boolean>: `true` for a matching item, `false` otherwise.
 * @returns A `Promise<boolean>`, `true` if "some" items match; `false` otherwise.
 */
export function asyncSome(items, matches) {
    return __awaiter(this, void 0, void 0, function () {
        var items_1, items_1_1, item, e_3_1;
        var e_3, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    items_1 = __values(items), items_1_1 = items_1.next();
                    _d.label = 1;
                case 1:
                    if (!!items_1_1.done) return [3 /*break*/, 4];
                    item = items_1_1.value;
                    return [4 /*yield*/, matches(item)];
                case 2:
                    if (_d.sent()) {
                        return [2 /*return*/, true];
                    }
                    _d.label = 3;
                case 3:
                    items_1_1 = items_1.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_3_1 = _d.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (items_1_1 && !items_1_1.done && (_c = items_1.return)) _c.call(items_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/, false];
            }
        });
    });
}
/**
 * An `aysnc` implementation of `Array.every()`. Returns as soon as a non-match is found.
 * @param items The items to check.
 * @param matches The async matcher function, expected to
 * return Promise<boolean>: `true` for a matching item, `false` otherwise.
 * @returns A `Promise<boolean>`, `true` if every item matches; `false` otherwise.
 */
export function asyncEvery(items, matches) {
    return __awaiter(this, void 0, void 0, function () {
        var items_2, items_2_1, item, e_4_1;
        var e_4, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    items_2 = __values(items), items_2_1 = items_2.next();
                    _d.label = 1;
                case 1:
                    if (!!items_2_1.done) return [3 /*break*/, 4];
                    item = items_2_1.value;
                    return [4 /*yield*/, matches(item)];
                case 2:
                    if (!(_d.sent())) {
                        return [2 /*return*/, false];
                    }
                    _d.label = 3;
                case 3:
                    items_2_1 = items_2.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_4_1 = _d.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (items_2_1 && !items_2_1.done && (_c = items_2.return)) _c.call(items_2);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/, true];
            }
        });
    });
}
/**
 * An `async` implementation of `Array.filter()`. Returns after all items have been filtered.
 * TODO: Return AsyncIterable.
 * @param items The items to filter.
 * @param matches The `async` matcher function, expected to
 * return Promise<boolean>: `true` for a matching item, `false` otherwise.
 * @returns A `Promise<T>` of matching items.
 */
export function asyncFilter(items, matches) {
    return __awaiter(this, void 0, void 0, function () {
        var results, items_3, items_3_1, item, e_5_1;
        var e_5, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    results = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 8]);
                    items_3 = __values(items), items_3_1 = items_3.next();
                    _d.label = 2;
                case 2:
                    if (!!items_3_1.done) return [3 /*break*/, 5];
                    item = items_3_1.value;
                    return [4 /*yield*/, matches(item)];
                case 3:
                    if (_d.sent()) {
                        results.push(item);
                    }
                    _d.label = 4;
                case 4:
                    items_3_1 = items_3.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_5_1 = _d.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (items_3_1 && !items_3_1.done && (_c = items_3.return)) _c.call(items_3);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/, results];
            }
        });
    });
}
export var isAWSDate = function (val) {
    return !!/^\d{4}-\d{2}-\d{2}(Z|[+-]\d{2}:\d{2}($|:\d{2}))?$/.exec(val);
};
export var isAWSTime = function (val) {
    return !!/^\d{2}:\d{2}(:\d{2}(.\d+)?)?(Z|[+-]\d{2}:\d{2}($|:\d{2}))?$/.exec(val);
};
export var isAWSDateTime = function (val) {
    return !!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(.\d+)?)?(Z|[+-]\d{2}:\d{2}($|:\d{2}))?$/.exec(val);
};
export var isAWSTimestamp = function (val) {
    return !!/^\d+$/.exec(String(val));
};
export var isAWSEmail = function (val) {
    return !!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.exec(val);
};
export var isAWSJSON = function (val) {
    try {
        JSON.parse(val);
        return true;
    }
    catch (_c) {
        return false;
    }
};
export var isAWSURL = function (val) {
    try {
        return !!new URL(val);
    }
    catch (_c) {
        return false;
    }
};
export var isAWSPhone = function (val) {
    return !!/^\+?\d[\d\s-]+$/.exec(val);
};
export var isAWSIPAddress = function (val) {
    return !!/((^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$)|(^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?$))$/.exec(val);
};
var DeferredPromise = /** @class */ (function () {
    function DeferredPromise() {
        var self = this;
        this.promise = new Promise(function (resolve, reject) {
            self.resolve = resolve;
            self.reject = reject;
        });
    }
    return DeferredPromise;
}());
export { DeferredPromise };
var DeferredCallbackResolver = /** @class */ (function () {
    function DeferredCallbackResolver(options) {
        this.limitPromise = new DeferredPromise();
        this.raceInFlight = false;
        this.callback = function () { };
        this.defaultErrorHandler = function (msg) {
            if (msg === void 0) { msg = 'DeferredCallbackResolver error'; }
            throw new Error(msg);
        };
        this.callback = options.callback;
        this.errorHandler = options.errorHandler || this.defaultErrorHandler;
        this.maxInterval = options.maxInterval || 2000;
    }
    DeferredCallbackResolver.prototype.startTimer = function () {
        var _this = this;
        this.timerPromise = new Promise(function (resolve, reject) {
            _this.timer = setTimeout(function () {
                resolve(LimitTimerRaceResolvedValues.TIMER);
            }, _this.maxInterval);
        });
    };
    DeferredCallbackResolver.prototype.racePromises = function () {
        return __awaiter(this, void 0, void 0, function () {
            var winner, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, 3, 4]);
                        this.raceInFlight = true;
                        this.startTimer();
                        return [4 /*yield*/, Promise.race([
                                this.timerPromise,
                                this.limitPromise.promise,
                            ])];
                    case 1:
                        winner = _c.sent();
                        this.callback();
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _c.sent();
                        this.errorHandler(err_1);
                        return [3 /*break*/, 4];
                    case 3:
                        // reset for the next race
                        this.clear();
                        this.raceInFlight = false;
                        this.limitPromise = new DeferredPromise();
                        return [2 /*return*/, winner];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DeferredCallbackResolver.prototype.start = function () {
        if (!this.raceInFlight)
            this.racePromises();
    };
    DeferredCallbackResolver.prototype.clear = function () {
        clearTimeout(this.timer);
    };
    DeferredCallbackResolver.prototype.resolve = function () {
        this.limitPromise.resolve(LimitTimerRaceResolvedValues.LIMIT);
    };
    return DeferredCallbackResolver;
}());
export { DeferredCallbackResolver };
/**
 * merge two sets of patches created by immer produce.
 * newPatches take precedent over oldPatches for patches modifying the same path.
 * In the case many consecutive pathces are merged the original model should
 * always be the root model.
 *
 * Example:
 * A -> B, patches1
 * B -> C, patches2
 *
 * mergePatches(A, patches1, patches2) to get patches for A -> C
 *
 * @param originalSource the original Model the patches should be applied to
 * @param oldPatches immer produce patch list
 * @param newPatches immer produce patch list (will take precedence)
 * @return merged patches
 */
export function mergePatches(originalSource, oldPatches, newPatches) {
    var patchesToMerge = oldPatches.concat(newPatches);
    var patches;
    produce(originalSource, function (draft) {
        applyPatches(draft, patchesToMerge);
    }, function (p) {
        patches = p;
    });
    return patches;
}
export var getStorename = function (namespace, modelName) {
    var storeName = namespace + "_" + modelName;
    return storeName;
};
//#region Key Utils
/*
  When we have GSI(s) with composite sort keys defined on a model
    There are some very particular rules regarding which fields must be included in the update mutation input
    The field selection becomes more complex as the number of GSIs with composite sort keys grows

    To summarize: any time we update a field that is part of the composite sort key of a GSI, we must include:
     1. all of the other fields in that composite sort key
     2. all of the fields from any other composite sort key that intersect with the fields from 1.

     E.g.,
     Model @model
        @key(name: 'key1' fields: ['hk', 'a', 'b', 'c'])
        @key(name: 'key2' fields: ['hk', 'a', 'b', 'd'])
        @key(name: 'key3' fields: ['hk', 'x', 'y', 'z'])

    Model.a is updated => include ['a', 'b', 'c', 'd']
    Model.c is updated => include ['a', 'b', 'c', 'd']
    Model.d is updated => include ['a', 'b', 'c', 'd']
    Model.x is updated => include ['x', 'y', 'z']

    This function accepts a model's attributes and returns grouped sets of composite key fields
    Using our example Model above, the function will return:
    [
        Set('a', 'b', 'c', 'd'),
        Set('x', 'y', 'z'),
    ]

    This gives us the opportunity to correctly include the required fields for composite keys
    When crafting the mutation input in Storage.getUpdateMutationInput

    See 'processCompositeKeys' test in util.test.ts for more examples
*/
export var processCompositeKeys = function (attributes) {
    var extractCompositeSortKey = function (_c) {
        var 
        // ignore the HK (fields[0]) we only need to include the composite sort key fields[1...n]
        _d = __read(_c.properties.fields), sortKeyFields = _d.slice(1);
        return sortKeyFields;
    };
    var compositeKeyFields = attributes
        .filter(isModelAttributeCompositeKey)
        .map(extractCompositeSortKey);
    /*
        if 2 sets of fields have any intersecting fields => combine them into 1 union set
        e.g., ['a', 'b', 'c'] and ['a', 'b', 'd'] => ['a', 'b', 'c', 'd']
    */
    var combineIntersecting = function (fields) {
        return fields.reduce(function (combined, sortKeyFields) {
            var sortKeyFieldsSet = new Set(sortKeyFields);
            if (combined.length === 0) {
                combined.push(sortKeyFieldsSet);
                return combined;
            }
            // does the current set share values with another set we've already added to `combined`?
            var intersectingSetIdx = combined.findIndex(function (existingSet) {
                return __spread(existingSet).some(function (f) { return sortKeyFieldsSet.has(f); });
            });
            if (intersectingSetIdx > -1) {
                var union = new Set(__spread(combined[intersectingSetIdx], sortKeyFieldsSet));
                // combine the current set with the intersecting set we found above
                combined[intersectingSetIdx] = union;
            }
            else {
                // none of the sets in `combined` have intersecting values with the current set
                combined.push(sortKeyFieldsSet);
            }
            return combined;
        }, []);
    };
    var initial = combineIntersecting(compositeKeyFields);
    // a single pass pay not be enough to correctly combine all the fields
    // call the function once more to get a final merged list of sets
    var combined = combineIntersecting(initial);
    return combined;
};
export var extractKeyIfExists = function (modelDefinition) {
    var _c;
    var keyAttribute = (_c = modelDefinition === null || modelDefinition === void 0 ? void 0 : modelDefinition.attributes) === null || _c === void 0 ? void 0 : _c.find(isModelAttributeKey);
    return keyAttribute;
};
export var extractPrimaryKeyFieldNames = function (modelDefinition) {
    var keyAttribute = extractKeyIfExists(modelDefinition);
    if (keyAttribute && isModelAttributePrimaryKey(keyAttribute)) {
        return keyAttribute.properties.fields;
    }
    return [ID];
};
export var extractPrimaryKeyValues = function (model, keyFields) {
    return keyFields.map(function (key) { return model[key]; });
};
export var extractPrimaryKeysAndValues = function (model, keyFields) {
    var primaryKeysAndValues = {};
    keyFields.forEach(function (key) { return (primaryKeysAndValues[key] = model[key]); });
    return primaryKeysAndValues;
};
// IdentifierFields<ManagedIdentifier>
// Default behavior without explicit @primaryKey defined
export var isIdManaged = function (modelDefinition) {
    var keyAttribute = extractKeyIfExists(modelDefinition);
    if (keyAttribute && isModelAttributePrimaryKey(keyAttribute)) {
        return false;
    }
    return true;
};
// IdentifierFields<OptionallyManagedIdentifier>
// @primaryKey with explicit `id` in the PK. Single key or composite
export var isIdOptionallyManaged = function (modelDefinition) {
    var keyAttribute = extractKeyIfExists(modelDefinition);
    if (keyAttribute && isModelAttributePrimaryKey(keyAttribute)) {
        return keyAttribute.properties.fields[0] === ID;
    }
    return false;
};
export var establishRelationAndKeys = function (namespace) {
    var relationship = {};
    var keys = {};
    Object.keys(namespace.models).forEach(function (mKey) {
        var e_6, _c;
        relationship[mKey] = { indexes: [], relationTypes: [] };
        keys[mKey] = {};
        var model = namespace.models[mKey];
        Object.keys(model.fields).forEach(function (attr) {
            var fieldAttribute = model.fields[attr];
            if (typeof fieldAttribute.type === 'object' &&
                'model' in fieldAttribute.type) {
                var connectionType = fieldAttribute.association.connectionType;
                relationship[mKey].relationTypes.push({
                    fieldName: fieldAttribute.name,
                    modelName: fieldAttribute.type.model,
                    relationType: connectionType,
                    targetName: fieldAttribute.association['targetName'],
                    targetNames: fieldAttribute.association['targetNames'],
                    associatedWith: fieldAttribute.association['associatedWith'],
                });
                if (connectionType === 'BELONGS_TO') {
                    var targetNames = extractTargetNamesFromSrc(fieldAttribute.association);
                    if (targetNames) {
                        var idxName = indexNameFromKeys(targetNames);
                        relationship[mKey].indexes.push([idxName, targetNames]);
                    }
                }
            }
        });
        if (model.attributes) {
            keys[mKey].compositeKeys = processCompositeKeys(model.attributes);
            var _loop_1 = function (attribute) {
                if (!isModelAttributeKey(attribute)) {
                    return "continue";
                }
                var fields = attribute.properties.fields;
                if (isModelAttributePrimaryKey(attribute)) {
                    keys[mKey].primaryKey = fields;
                    return "continue";
                }
                // create indexes for all other keys
                var idxName = indexNameFromKeys(fields);
                var idxExists = relationship[mKey].indexes.find(function (_c) {
                    var _d = __read(_c, 1), index = _d[0];
                    return index === idxName;
                });
                if (!idxExists) {
                    relationship[mKey].indexes.push([idxName, fields]);
                }
            };
            try {
                for (var _d = __values(model.attributes), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var attribute = _e.value;
                    _loop_1(attribute);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        // set 'id' as the PK for models without a custom PK explicitly defined
        if (!keys[mKey].primaryKey) {
            keys[mKey].primaryKey = [ID];
        }
        // create primary index
        relationship[mKey].indexes.push([
            'byPk',
            keys[mKey].primaryKey,
            { unique: true },
        ]);
    });
    return [relationship, keys];
};
export var getIndex = function (rel, src) {
    var indexName;
    rel.some(function (relItem) {
        if (relItem.modelName === src) {
            var targetNames = extractTargetNamesFromSrc(relItem);
            indexName = targetNames && indexNameFromKeys(targetNames);
            return true;
        }
    });
    return indexName;
};
export var getIndexFromAssociation = function (indexes, src) {
    var indexName;
    if (Array.isArray(src)) {
        indexName = indexNameFromKeys(src);
    }
    else {
        indexName = src;
    }
    var associationIndex = indexes.find(function (_c) {
        var _d = __read(_c, 1), idxName = _d[0];
        return idxName === indexName;
    });
    return associationIndex && associationIndex[0];
};
/**
 * Backwards-compatability for schema generated prior to custom primary key support:
the single field `targetName` has been replaced with an array of `targetNames`.
`targetName` and `targetNames` are exclusive (will never exist on the same schema)
 * @param src {RelationType | ModelAssociation | undefined}
 * @returns array of targetNames, or `undefined`
 */
export var extractTargetNamesFromSrc = function (src) {
    var targetName = src === null || src === void 0 ? void 0 : src.targetName;
    var targetNames = src === null || src === void 0 ? void 0 : src.targetNames;
    if (Array.isArray(targetNames)) {
        return targetNames;
    }
    else if (typeof targetName === 'string') {
        return [targetName];
    }
    else {
        return undefined;
    }
};
// Generates spinal-cased index name from an array of key field names
// E.g. for keys `[id, title]` => 'id-title'
export var indexNameFromKeys = function (keys) {
    return keys.reduce(function (prev, cur, idx) {
        if (idx === 0) {
            return cur;
        }
        return "" + prev + IDENTIFIER_KEY_SEPARATOR + cur;
    }, '');
};
export var keysEqual = function (keysA, keysB) {
    if (keysA.length !== keysB.length) {
        return false;
    }
    return keysA.every(function (key, idx) { return key === keysB[idx]; });
};
// Returns primary keys for a model
export var getIndexKeys = function (namespace, modelName) {
    var _c, _d;
    var keyPath = (_d = (_c = namespace === null || namespace === void 0 ? void 0 : namespace.keys) === null || _c === void 0 ? void 0 : _c[modelName]) === null || _d === void 0 ? void 0 : _d.primaryKey;
    if (keyPath) {
        return keyPath;
    }
    return [ID];
};
//#endregion
//# sourceMappingURL=util.js.map