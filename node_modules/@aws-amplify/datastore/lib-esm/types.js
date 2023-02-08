import { __awaiter, __generator } from "tslib";
import { isAWSDate, isAWSTime, isAWSDateTime, isAWSTimestamp, isAWSEmail, isAWSJSON, isAWSURL, isAWSPhone, isAWSIPAddress, extractPrimaryKeyFieldNames, } from './util';
export function isSchemaModel(obj) {
    return obj && obj.pluralName !== undefined;
}
export function isSchemaModelWithAttributes(m) {
    return isSchemaModel(m) && m.attributes !== undefined;
}
export function isAssociatedWith(obj) {
    return obj && obj.associatedWith;
}
export function isTargetNameAssociation(obj) {
    return (obj === null || obj === void 0 ? void 0 : obj.targetName) || (obj === null || obj === void 0 ? void 0 : obj.targetNames);
}
export function isFieldAssociation(obj, fieldName) {
    var _a, _b;
    return (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.fields[fieldName]) === null || _a === void 0 ? void 0 : _a.association) === null || _b === void 0 ? void 0 : _b.connectionType;
}
export function isModelAttributeAuth(attr) {
    return (attr.type === 'auth' &&
        attr.properties &&
        attr.properties.rules &&
        attr.properties.rules.length > 0);
}
export function isModelAttributeKey(attr) {
    return (attr.type === 'key' &&
        attr.properties &&
        attr.properties.fields &&
        attr.properties.fields.length > 0);
}
export function isModelAttributePrimaryKey(attr) {
    return isModelAttributeKey(attr) && attr.properties.name === undefined;
}
export function isModelAttributeCompositeKey(attr) {
    return (isModelAttributeKey(attr) &&
        attr.properties.name !== undefined &&
        attr.properties.fields.length > 2);
}
export var ModelAttributeAuthAllow;
(function (ModelAttributeAuthAllow) {
    ModelAttributeAuthAllow["CUSTOM"] = "custom";
    ModelAttributeAuthAllow["OWNER"] = "owner";
    ModelAttributeAuthAllow["GROUPS"] = "groups";
    ModelAttributeAuthAllow["PRIVATE"] = "private";
    ModelAttributeAuthAllow["PUBLIC"] = "public";
})(ModelAttributeAuthAllow || (ModelAttributeAuthAllow = {}));
export var ModelAttributeAuthProvider;
(function (ModelAttributeAuthProvider) {
    ModelAttributeAuthProvider["FUNCTION"] = "function";
    ModelAttributeAuthProvider["USER_POOLS"] = "userPools";
    ModelAttributeAuthProvider["OIDC"] = "oidc";
    ModelAttributeAuthProvider["IAM"] = "iam";
    ModelAttributeAuthProvider["API_KEY"] = "apiKey";
})(ModelAttributeAuthProvider || (ModelAttributeAuthProvider = {}));
export var GraphQLScalarType;
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
})(GraphQLScalarType || (GraphQLScalarType = {}));
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
                return isAWSDate;
            case 'AWSTime':
                return isAWSTime;
            case 'AWSDateTime':
                return isAWSDateTime;
            case 'AWSTimestamp':
                return isAWSTimestamp;
            case 'AWSEmail':
                return isAWSEmail;
            case 'AWSJSON':
                return isAWSJSON;
            case 'AWSURL':
                return isAWSURL;
            case 'AWSPhone':
                return isAWSPhone;
            case 'AWSIPAddress':
                return isAWSIPAddress;
            default:
                return undefined;
        }
    }
    GraphQLScalarType.getValidationFunction = getValidationFunction;
})(GraphQLScalarType || (GraphQLScalarType = {}));
export function isGraphQLScalarType(obj) {
    return obj && GraphQLScalarType[obj] !== undefined;
}
export function isModelFieldType(obj) {
    var modelField = 'model';
    if (obj && obj[modelField])
        return true;
    return false;
}
export function isNonModelFieldType(obj) {
    var typeField = 'nonModel';
    if (obj && obj[typeField])
        return true;
    return false;
}
export function isEnumFieldType(obj) {
    var modelField = 'enum';
    if (obj && obj[modelField])
        return true;
    return false;
}
export function isIdentifierObject(obj, modelDefinition) {
    var keys = extractPrimaryKeyFieldNames(modelDefinition);
    return (typeof obj === 'object' && obj && keys.every(function (k) { return obj[k] !== undefined; }));
}
//#endregion
//#region Subscription messages
export var OpType;
(function (OpType) {
    OpType["INSERT"] = "INSERT";
    OpType["UPDATE"] = "UPDATE";
    OpType["DELETE"] = "DELETE";
})(OpType || (OpType = {}));
export function isPredicateObj(obj) {
    return obj && obj.field !== undefined;
}
export function isPredicateGroup(obj) {
    return obj && obj.type !== undefined;
}
export var QueryOne;
(function (QueryOne) {
    QueryOne[QueryOne["FIRST"] = 0] = "FIRST";
    QueryOne[QueryOne["LAST"] = 1] = "LAST";
})(QueryOne || (QueryOne = {}));
export var SortDirection;
(function (SortDirection) {
    SortDirection["ASCENDING"] = "ASCENDING";
    SortDirection["DESCENDING"] = "DESCENDING";
})(SortDirection || (SortDirection = {}));
export var AuthModeStrategyType;
(function (AuthModeStrategyType) {
    AuthModeStrategyType["DEFAULT"] = "DEFAULT";
    AuthModeStrategyType["MULTI_AUTH"] = "MULTI_AUTH";
})(AuthModeStrategyType || (AuthModeStrategyType = {}));
export var ModelOperation;
(function (ModelOperation) {
    ModelOperation["CREATE"] = "CREATE";
    ModelOperation["READ"] = "READ";
    ModelOperation["UPDATE"] = "UPDATE";
    ModelOperation["DELETE"] = "DELETE";
})(ModelOperation || (ModelOperation = {}));
export function syncExpression(modelConstructor, conditionProducer) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    modelConstructor: modelConstructor,
                    conditionProducer: conditionProducer,
                }];
        });
    });
}
export var ProcessName;
(function (ProcessName) {
    ProcessName["sync"] = "sync";
    ProcessName["mutate"] = "mutate";
    ProcessName["subscribe"] = "subscribe";
})(ProcessName || (ProcessName = {}));
export var DISCARD = Symbol('DISCARD');
export var LimitTimerRaceResolvedValues;
(function (LimitTimerRaceResolvedValues) {
    LimitTimerRaceResolvedValues["LIMIT"] = "LIMIT";
    LimitTimerRaceResolvedValues["TIMER"] = "TIMER";
})(LimitTimerRaceResolvedValues || (LimitTimerRaceResolvedValues = {}));
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
export { PredicateInternalsKey };
// #endregion
//# sourceMappingURL=types.js.map