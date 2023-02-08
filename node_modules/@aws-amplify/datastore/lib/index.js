"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var datastore_1 = require("./datastore/datastore");
exports.DataStore = datastore_1.DataStore;
exports.DataStoreClass = datastore_1.DataStoreClass;
exports.initSchema = datastore_1.initSchema;
exports.AsyncCollection = datastore_1.AsyncCollection;
exports.AsyncItem = datastore_1.AsyncItem;
var predicates_1 = require("./predicates");
exports.Predicates = predicates_1.Predicates;
exports.ModelPredicateCreator = predicates_1.ModelPredicateCreator;
exports.ModelSortPredicateCreator = predicates_1.ModelSortPredicateCreator;
var util_1 = require("./util");
var util_2 = require("./util");
exports.NAMESPACES = util_2.NAMESPACES;
exports.utils = {
    USER: util_1.USER,
    traverseModel: util_1.traverseModel,
    validatePredicate: util_1.validatePredicate,
    isNonModelConstructor: util_1.isNonModelConstructor,
    isModelConstructor: util_1.isModelConstructor,
};
tslib_1.__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map