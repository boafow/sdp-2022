import { __assign, __read, __spread, __values } from "tslib";
import { extractPrimaryKeyFieldNames, extractPrimaryKeyValues } from '../util';
export { ModelSortPredicateCreator } from './sort';
var predicatesAllSet = new WeakSet();
export function isPredicatesAll(predicate) {
    return predicatesAllSet.has(predicate);
}
var groupKeys = new Set(['and', 'or', 'not']);
var isGroup = function (o) {
    var keys = __spread(Object.keys(o));
    return keys.length === 1 && groupKeys.has(keys[0]);
};
export var comparisonKeys = new Set([
    'eq',
    'ne',
    'gt',
    'lt',
    'ge',
    'le',
    'contains',
    'notContains',
    'beginsWith',
    'between',
]);
var isComparison = function (o) {
    var keys = __spread(Object.keys(o));
    return !Array.isArray(o) && keys.length === 1 && comparisonKeys.has(keys[0]);
};
var isValid = function (o) {
    if (Array.isArray(o)) {
        return o.every(function (v) { return isValid(v); });
    }
    else {
        return Object.keys(o).length === 1;
    }
};
// This symbol is not used at runtime, only its type (unique symbol)
export var PredicateAll = Symbol('A predicate that matches all records');
var Predicates = /** @class */ (function () {
    function Predicates() {
    }
    Object.defineProperty(Predicates, "ALL", {
        get: function () {
            var predicate = (function (c) { return c; });
            predicatesAllSet.add(predicate);
            return predicate;
        },
        enumerable: true,
        configurable: true
    });
    return Predicates;
}());
export { Predicates };
var ModelPredicateCreator = /** @class */ (function () {
    function ModelPredicateCreator() {
    }
    ModelPredicateCreator.createPredicateBuilder = function (modelDefinition) {
        var modelName = modelDefinition.name;
        var fieldNames = new Set(Object.keys(modelDefinition.fields));
        var handler;
        var predicate = new Proxy({}, (handler = {
            get: function (_, propertyKey, self) {
                var groupType = propertyKey;
                switch (groupType) {
                    case 'and':
                    case 'or':
                    case 'not':
                        var result_1 = function (newPredicate) {
                            var group = {
                                type: groupType,
                                predicates: [],
                            };
                            // Create a new recorder
                            var tmpPredicateRecorder = new Proxy({}, handler);
                            // Set the recorder group
                            ModelPredicateCreator.predicateGroupsMap.set(tmpPredicateRecorder, group);
                            // Apply the predicates to the recorder (this is the step that records the changes)
                            newPredicate(tmpPredicateRecorder);
                            // Push the group to the top-level recorder
                            ModelPredicateCreator.predicateGroupsMap
                                .get(self)
                                .predicates.push(group);
                            return self;
                        };
                        return result_1;
                    default:
                    // intentionally blank.
                }
                var field = propertyKey;
                if (!fieldNames.has(field)) {
                    throw new Error("Invalid field for model. field: " + field + ", model: " + modelName);
                }
                var result = function (operator, operand) {
                    ModelPredicateCreator.predicateGroupsMap
                        .get(self)
                        .predicates.push({ field: field, operator: operator, operand: operand });
                    return self;
                };
                return result;
            },
        }));
        var group = {
            type: 'and',
            predicates: [],
        };
        ModelPredicateCreator.predicateGroupsMap.set(predicate, group);
        return predicate;
    };
    ModelPredicateCreator.isValidPredicate = function (predicate) {
        return ModelPredicateCreator.predicateGroupsMap.has(predicate);
    };
    ModelPredicateCreator.getPredicates = function (predicate, throwOnInvalid) {
        if (throwOnInvalid === void 0) { throwOnInvalid = true; }
        if (throwOnInvalid && !ModelPredicateCreator.isValidPredicate(predicate)) {
            throw new Error('The predicate is not valid');
        }
        return ModelPredicateCreator.predicateGroupsMap.get(predicate);
    };
    // transforms cb-style predicate into Proxy
    ModelPredicateCreator.createFromExisting = function (modelDefinition, existing) {
        if (!existing || !modelDefinition) {
            return undefined;
        }
        return existing(ModelPredicateCreator.createPredicateBuilder(modelDefinition));
    };
    ModelPredicateCreator.createForSingleField = function (modelDefinition, fieldName, value) {
        return ModelPredicateCreator.createPredicateBuilder(modelDefinition)[fieldName]('eq', value);
    };
    ModelPredicateCreator.createForPk = function (modelDefinition, model) {
        var keyFields = extractPrimaryKeyFieldNames(modelDefinition);
        var keyValues = extractPrimaryKeyValues(model, keyFields);
        var modelPredicate = ModelPredicateCreator.createPredicateBuilder(modelDefinition);
        keyFields.forEach(function (field, idx) {
            var operand = keyValues[idx];
            modelPredicate = modelPredicate[field]('eq', operand);
        });
        return modelPredicate;
    };
    /**
     * Searches a `Model` table for records matching the given equalities object.
     *
     * This only matches against fields given in the equalities object. No other
     * fields are tested by the predicate.
     *
     * @param modelDefinition The model we need a predicate for.
     * @param flatEqualities An object holding field equalities to search for.
     */
    ModelPredicateCreator.createFromFlatEqualities = function (modelDefinition, flatEqualities) {
        var e_1, _a;
        var predicate = ModelPredicateCreator.createPredicateBuilder(modelDefinition);
        try {
            for (var _b = __values(Object.entries(flatEqualities)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), field = _d[0], value = _d[1];
                predicate = predicate[field]('eq', value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return predicate;
    };
    ModelPredicateCreator.createGroupFromExisting = function (modelDefinition, group, existingPredicates) {
        var outer = ModelPredicateCreator.createPredicateBuilder(modelDefinition);
        outer = outer[group](function (seed) {
            var e_2, _a;
            var _b;
            var inner = seed;
            try {
                for (var existingPredicates_1 = __values(existingPredicates), existingPredicates_1_1 = existingPredicates_1.next(); !existingPredicates_1_1.done; existingPredicates_1_1 = existingPredicates_1.next()) {
                    var existing = existingPredicates_1_1.value;
                    if (typeof existing === 'function') {
                        inner = existing(inner);
                    }
                    else {
                        (_b = ModelPredicateCreator.predicateGroupsMap
                            .get(inner)) === null || _b === void 0 ? void 0 : _b.predicates.push(ModelPredicateCreator.predicateGroupsMap.get(existing));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (existingPredicates_1_1 && !existingPredicates_1_1.done && (_a = existingPredicates_1.return)) _a.call(existingPredicates_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return inner;
        });
        return outer;
    };
    ModelPredicateCreator.transformGraphQLtoPredicateAST = function (gql) {
        var _this = this;
        if (!isValid(gql)) {
            throw new Error('Invalid QGL AST: ' + gql);
        }
        if (isGroup(gql)) {
            var groupkey = Object.keys(gql)[0];
            var children = this.transformGraphQLtoPredicateAST(gql[groupkey]);
            return {
                type: groupkey,
                predicates: Array.isArray(children) ? children : [children],
            };
        }
        else if (isComparison(gql)) {
            var operatorKey = Object.keys(gql)[0];
            return {
                operator: operatorKey,
                operand: gql[operatorKey],
            };
        }
        else {
            if (Array.isArray(gql)) {
                return gql.map(function (o) { return _this.transformGraphQLtoPredicateAST(o); });
            }
            else {
                var fieldKey = Object.keys(gql)[0];
                return __assign({ field: fieldKey }, this.transformGraphQLtoPredicateAST(gql[fieldKey]));
            }
        }
    };
    ModelPredicateCreator.createFromAST = function (modelDefinition, ast) {
        var predicate = ModelPredicateCreator.createPredicateBuilder(modelDefinition);
        ModelPredicateCreator.predicateGroupsMap.set(predicate, this.transformGraphQLtoPredicateAST(ast));
        return predicate;
    };
    ModelPredicateCreator.predicateGroupsMap = new WeakMap();
    return ModelPredicateCreator;
}());
export { ModelPredicateCreator };
//# sourceMappingURL=index.js.map