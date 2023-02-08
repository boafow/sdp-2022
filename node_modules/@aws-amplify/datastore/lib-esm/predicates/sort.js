var ModelSortPredicateCreator = /** @class */ (function () {
    function ModelSortPredicateCreator() {
    }
    ModelSortPredicateCreator.createPredicateBuilder = function (modelDefinition) {
        var modelName = modelDefinition.name;
        var fieldNames = new Set(Object.keys(modelDefinition.fields));
        var handler;
        var predicate = new Proxy({}, (handler = {
            get: function (_target, propertyKey, receiver) {
                var field = propertyKey;
                if (!fieldNames.has(field)) {
                    throw new Error("Invalid field for model. field: " + field + ", model: " + modelName);
                }
                var result = function (sortDirection) {
                    var _a;
                    (_a = ModelSortPredicateCreator.sortPredicateGroupsMap
                        .get(receiver)) === null || _a === void 0 ? void 0 : _a.push({ field: field, sortDirection: sortDirection });
                    return receiver;
                };
                return result;
            },
        }));
        ModelSortPredicateCreator.sortPredicateGroupsMap.set(predicate, []);
        return predicate;
    };
    ModelSortPredicateCreator.isValidPredicate = function (predicate) {
        return ModelSortPredicateCreator.sortPredicateGroupsMap.has(predicate);
    };
    ModelSortPredicateCreator.getPredicates = function (predicate, throwOnInvalid) {
        if (throwOnInvalid === void 0) { throwOnInvalid = true; }
        if (throwOnInvalid &&
            !ModelSortPredicateCreator.isValidPredicate(predicate)) {
            throw new Error('The predicate is not valid');
        }
        var predicateGroup = ModelSortPredicateCreator.sortPredicateGroupsMap.get(predicate);
        if (predicateGroup) {
            return predicateGroup;
        }
        else {
            throw new Error('Predicate group not found');
        }
    };
    // transforms cb-style predicate into Proxy
    ModelSortPredicateCreator.createFromExisting = function (modelDefinition, existing) {
        if (!existing || !modelDefinition) {
            return undefined;
        }
        return existing(ModelSortPredicateCreator.createPredicateBuilder(modelDefinition));
    };
    ModelSortPredicateCreator.sortPredicateGroupsMap = new WeakMap();
    return ModelSortPredicateCreator;
}());
export { ModelSortPredicateCreator };
//# sourceMappingURL=sort.js.map