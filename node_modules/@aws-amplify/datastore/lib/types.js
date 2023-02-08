"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_1 = require("./util");
function isSchemaModel(obj) {
    return obj && obj.pluralName !== undefined;
}
exports.isSchemaModel = isSchemaModel;
function isSchemaModelWithAttributes(m) {
    return isSchemaModel(m) && m.attributes !== undefined;
}
exports.isSchemaModelWithAttributes = isSchemaModelWithAttributes;
function isAssociatedWith(obj) {
    return obj && obj.associatedWith;
}
exports.isAssociatedWith = isAssociatedWith;
function isTargetNameAssociation(obj) {
    return (obj === null || obj === void 0 ? void 0 : obj.targetName) || (obj === null || obj === void 0 ? void 0 : obj.targetNames);
}
exports.isTargetNameAssociation = isTargetNameAssociation;
function isFieldAssociation(obj, fieldName) {
    var _a, _b;
    return (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.fields[fieldName]) === null || _a === void 0 ? void 0 : _a.association) === null || _b === void 0 ? void 0 : _b.connectionType;
}
exports.isFieldAssociation = isFieldAssociation;
function isModelAttributeAuth(attr) {
    return (attr.type === 'auth' &&
        attr.properties &&
        attr.properties.rules &&
        attr.properties.rules.length > 0);
}
exports.isModelAttributeAuth = isModelAttributeAuth;
function isModelAttributeKey(attr) {
    return (attr.type === 'key' &&
        attr.properties &&
        attr.properties.fields &&
        attr.properties.fields.length > 0);
}
exports.isModelAttributeKey = isModelAttributeKey;
function isModelAttributePrimaryKey(attr) {
    return isModelAttributeKey(attr) && attr.properties.name === undefined;
}
exports.isModelAttributePrimaryKey = isModelAttributePrimaryKey;
function isModelAttributeCompositeKey(attr) {
    return (isModelAttributeKey(attr) &&
        attr.properties.name !== undefined &&
        attr.properties.fields.length > 2);
}
exports.isModelAttributeCompositeKey = isModelAttributeCompositeKey;
var ModelAttributeAuthAllow;
(function (ModelAttributeAuthAllow) {
    ModelAttributeAuthAllow["CUSTOM"] = "custom";
    ModelAttributeAuthAllow["OWNER"] = "owner";
    ModelAttributeAuthAllow["GROUPS"] = "groups";
    ModelAttributeAuthAllow["PRIVATE"] = "private";
    ModelAttributeAuthAllow["PUBLIC"] = "public";
})(ModelAttributeAuthAllow = exports.ModelAttributeAuthAllow || (exports.ModelAttributeAuthAllow = {}));
var ModelAttributeAuthProvider;
(function (ModelAttributeAuthProvider) {
    ModelAttributeAuthProvider["FUNCTION"] = "function";
    ModelAttributeAuthProvider["USER_POOLS"] = "userPools";
    ModelAttributeAuthProvider["OIDC"] = "oidc";
    ModelAttributeAuthProvider["IAM"] = "iam";
    ModelAttributeAuthProvider["API_KEY"] = "apiKey";
})(ModelAttributeAuthProvider = exports.ModelAttributeAuthProvider || (exports.ModelAttributeAuthProvider = {}));
var GraphQLScalarType;
(function (GraphQLScalarType) {
    GraphQLScalarType[GraphQLScalarType["ID"] = 0] = "ID";
    GraphQLScalarType[GraphQLScalarType["String"] = 1] = "String";
    GraphQLScalarType[GraphQLScalarType["Int"] = 2] = "Int";
    GraphQLScalarType[GraphQLScalarType["Float"] = 3] = "Float";
    GraphQLScalarType[GraphQLScalarType["Boolean"] = 4] = "Boolean";
    GraphQLScalarType[GraphQLScalarType["AWSDate"] = 5] = "AWSDate";
    GraphQLScalarType[GraphQLScalarType["AWSTime"] = 6] = "AWSTime";
    GraphQLScalarType[GraphQLScalarType["AWSDateTime"] = 7] = "AWSDateTime";
    GraphQLScalarType[GraphQLScalarType["AWSTimestamp"] = 8] = "AWSTimestamp";
    GraphQLScalarType[GraphQLScalarType["AWSEmail"] = 9] = "AWSEmail";
    GraphQLScalarType[GraphQLScalarType["AWSJSON"] = 10] = "AWSJSON";
    GraphQLScalarType[GraphQLScalarType["AWSURL"] = 11] = "AWSURL";
    GraphQLScalarType[GraphQLScalarType["AWSPhone"] = 12] = "AWSPhone";
    GraphQLScalarType[GraphQLScalarType["AWSIPAddress"] = 13] = "AWSIPAddress";
})(GraphQLScalarType = exports.GraphQLScalarType || (exports.GraphQLScalarType = {}));
(function (GraphQLScalarType) {
    function getJSType(scalar) {
        switch (scalar) {
            case 'Boolean':
                return 'boolean';
            case 'ID':
            case 'String':
            case 'AWSDate':
            case 'AWSTime':
            case 'AWSDateTime':
            case 'AWSEmail':
            case 'AWSURL':
            case 'AWSPhone':
            case 'AWSIPAddress':
                return 'string';
            case 'Int':
            case 'Float':
            case 'AWSTimestamp':
                return 'number';
            case 'AWSJSON':
                return 'object';
            default:
                throw new Error('Invalid scalar type');
        }
    }
    GraphQLScalarType.getJSType = getJSType;
    function getValidationFunction(scalar) {
        switch (scalar) {
            case 'AWSDate':
                return util_1.isAWSDate;
            case 'AWSTime':
                return util_1.isAWSTime;
            case 'AWSDateTime':
                return util_1.isAWSDateTime;
            case 'AWSTimestamp':
                return util_1.isAWSTimestamp;
            case 'AWSEmail':
                return util_1.isAWSEmail;
            case 'AWSJSON':
                return util_1.isAWSJSON;
            case 'AWSURL':
                return util_1.isAWSURL;
            case 'AWSPhone':
                return util_1.isAWSPhone;
            case 'AWSIPAddress':
                return util_1.isAWSIPAddress;
            default:
                return undefined;
        }
    }
    GraphQLScalarType.getValidationFunction = getValidationFunction;
})(GraphQLScalarType = exports.GraphQLScalarType || (exports.GraphQLScalarType = {}));
function isGraphQLScalarType(obj) {
    return obj && GraphQLScalarType[obj] !== undefined;
}
exports.isGraphQLScalarType = isGraphQLScalarType;
function isModelFieldType(obj) {
    var modelField = 'model';
    if (obj && obj[modelField])
        return true;
    return false;
}
exports.isModelFieldType = isModelFieldType;
function isNonModelFieldType(obj) {
    var typeField = 'nonModel';
    if (obj && obj[typeField])
        return true;
    return false;
}
exports.isNonModelFieldType = isNonModelFieldType;
function isEnumFieldType(obj) {
    var modelField = 'enum';
    if (obj && obj[modelField])
        return true;
    return false;
}
exports.isEnumFieldType = isEnumFieldType;
function isIdentifierObject(obj, modelDefinition) {
    var keys = util_1.extractPrimaryKeyFieldNames(modelDefinition);
    return (typeof obj === 'object' && obj && keys.every(function (k) { return obj[k] !== undefined; }));
}
exports.isIdentifierObject = isIdentifierObject;
//#endregion
//#region Subscription messages
var OpType;
(function (OpType) {
    OpType["INSERT"] = "INSERT";
    OpType["UPDATE"] = "UPDATE";
    OpType["DELETE"] = "DELETE";
})(OpType = exports.OpType || (exports.OpType = {}));
function isPredicateObj(obj) {
    return obj && obj.field !== undefined;
}
exports.isPredicateObj = isPredicateObj;
function isPredicateGroup(obj) {
    return obj && obj.type !== undefined;
}
exports.isPredicateGroup = isPredicateGroup;
var QueryOne;
(function (QueryOne) {
    QueryOne[QueryOne["FIRST"] = 0] = "FIRST";
    QueryOne[QueryOne["LAST"] = 1] = "LAST";
})(QueryOne = exports.QueryOne || (exports.QueryOne = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["ASCENDING"] = "ASCENDING";
    SortDirection["DESCENDING"] = "DESCENDING";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
var AuthModeStrategyType;
(function (AuthModeStrategyType) {
    AuthModeStrategyType["DEFAULT"] = "DEFAULT";
    AuthModeStrategyType["MULTI_AUTH"] = "MULTI_AUTH";
})(AuthModeStrategyType = exports.AuthModeStrategyType || (exports.AuthModeStrategyType = {}));
var ModelOperation;
(function (ModelOperation) {
    ModelOperation["CREATE"] = "CREATE";
    ModelOperation["READ"] = "READ";
    ModelOperation["UPDATE"] = "UPDATE";
    ModelOperation["DELETE"] = "DELETE";
})(ModelOperation = exports.ModelOperation || (exports.ModelOperation = {}));
function syncExpression(modelConstructor, conditionProducer) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, {
                    modelConstructor: modelConstructor,
                    conditionProducer: conditionProducer,
                }];
        });
    });
}
exports.syncExpression = syncExpression;
var ProcessName;
(function (ProcessName) {
    ProcessName["sync"] = "sync";
    ProcessName["mutate"] = "mutate";
    ProcessName["subscribe"] = "subscribe";
})(ProcessName = exports.ProcessName || (exports.ProcessName = {}));
exports.DISCARD = Symbol('DISCARD');
var LimitTimerRaceResolvedValues;
(function (LimitTimerRaceResolvedValues) {
    LimitTimerRaceResolvedValues["LIMIT"] = "LIMIT";
    LimitTimerRaceResolvedValues["TIMER"] = "TIMER";
})(LimitTimerRaceResolvedValues = exports.LimitTimerRaceResolvedValues || (exports.LimitTimerRaceResolvedValues = {}));
/**
 * A pointer used by DataStore internally to lookup predicate details
 * that should not be exposed on public customer interfaces.
 */
var PredicateInternalsKey = /** @class */ (function () {
    function PredicateInternalsKey() {
        this.__isPredicateInternalsKeySentinel = true;
    }
    return PredicateInternalsKey;
}());
exports.PredicateInternalsKey = PredicateInternalsKey;
// #endregion
//# sourceMappingURL=types.js.map