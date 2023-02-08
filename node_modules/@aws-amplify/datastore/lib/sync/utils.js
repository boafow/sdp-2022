"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var api_graphql_1 = require("@aws-amplify/api-graphql");
var api_1 = require("@aws-amplify/api");
var core_1 = require("@aws-amplify/core");
var types_1 = require("../types");
var util_1 = require("../util");
var logger = new core_1.Logger('DataStore');
var GraphQLOperationType;
(function (GraphQLOperationType) {
    GraphQLOperationType["LIST"] = "query";
    GraphQLOperationType["CREATE"] = "mutation";
    GraphQLOperationType["UPDATE"] = "mutation";
    GraphQLOperationType["DELETE"] = "mutation";
    GraphQLOperationType["GET"] = "query";
})(GraphQLOperationType || (GraphQLOperationType = {}));
var TransformerMutationType;
(function (TransformerMutationType) {
    TransformerMutationType["CREATE"] = "Create";
    TransformerMutationType["UPDATE"] = "Update";
    TransformerMutationType["DELETE"] = "Delete";
    TransformerMutationType["GET"] = "Get";
})(TransformerMutationType = exports.TransformerMutationType || (exports.TransformerMutationType = {}));
var dummyMetadata = {
    _version: undefined,
    _lastChangedAt: undefined,
    _deleted: undefined,
};
var metadataFields = (Object.keys(dummyMetadata));
function getMetadataFields() {
    return metadataFields;
}
exports.getMetadataFields = getMetadataFields;
function generateSelectionSet(namespace, modelDefinition) {
    var scalarFields = getScalarFields(modelDefinition);
    var nonModelFields = getNonModelFields(namespace, modelDefinition);
    var implicitOwnerField = getImplicitOwnerField(modelDefinition, scalarFields);
    var scalarAndMetadataFields = Object.values(scalarFields)
        .map(function (_a) {
        var name = _a.name;
        return name;
    })
        .concat(implicitOwnerField)
        .concat(nonModelFields);
    if (types_1.isSchemaModel(modelDefinition)) {
        scalarAndMetadataFields = scalarAndMetadataFields
            .concat(getMetadataFields())
            .concat(getConnectionFields(modelDefinition, namespace));
    }
    var result = scalarAndMetadataFields.join('\n');
    return result;
}
exports.generateSelectionSet = generateSelectionSet;
function getImplicitOwnerField(modelDefinition, scalarFields) {
    var ownerFields = getOwnerFields(modelDefinition);
    if (!scalarFields.owner && ownerFields.includes('owner')) {
        return ['owner'];
    }
    return [];
}
function getOwnerFields(modelDefinition) {
    var ownerFields = [];
    if (types_1.isSchemaModelWithAttributes(modelDefinition)) {
        modelDefinition.attributes.forEach(function (attr) {
            if (attr.properties && attr.properties.rules) {
                var rule = attr.properties.rules.find(function (rule) { return rule.allow === 'owner'; });
                if (rule && rule.ownerField) {
                    ownerFields.push(rule.ownerField);
                }
            }
        });
    }
    return ownerFields;
}
function getScalarFields(modelDefinition) {
    var fields = modelDefinition.fields;
    var result = Object.values(fields)
        .filter(function (field) {
        if (types_1.isGraphQLScalarType(field.type) || types_1.isEnumFieldType(field.type)) {
            return true;
        }
        return false;
    })
        .reduce(function (acc, field) {
        acc[field.name] = field;
        return acc;
    }, {});
    return result;
}
// Used for generating the selection set for queries and mutations
function getConnectionFields(modelDefinition, namespace) {
    var result = [];
    Object.values(modelDefinition.fields)
        .filter(function (_a) {
        var association = _a.association;
        return association && Object.keys(association).length;
    })
        .forEach(function (_a) {
        var name = _a.name, association = _a.association;
        var connectionType = (association || {}).connectionType;
        switch (connectionType) {
            case 'HAS_ONE':
            case 'HAS_MANY':
                // Intentionally blank
                break;
            case 'BELONGS_TO':
                if (types_1.isTargetNameAssociation(association)) {
                    // New codegen (CPK)
                    if (association.targetNames && association.targetNames.length > 0) {
                        // Need to retrieve relations in order to get connected model keys
                        var _b = tslib_1.__read(util_1.establishRelationAndKeys(namespace), 1), relations = _b[0];
                        var connectedModelName = modelDefinition.fields[name].type['model'];
                        var byPkIndex = relations[connectedModelName].indexes.find(function (_a) {
                            var _b = tslib_1.__read(_a, 1), name = _b[0];
                            return name === 'byPk';
                        });
                        var keyFields = byPkIndex && byPkIndex[1];
                        var keyFieldSelectionSet = keyFields === null || keyFields === void 0 ? void 0 : keyFields.join(' ');
                        // We rely on `_deleted` when we process the sync query (e.g. in batchSave in the adapters)
                        result.push(name + " { " + keyFieldSelectionSet + " _deleted }");
                    }
                    else {
                        // backwards-compatability for schema generated prior to custom primary key support
                        result.push(name + " { id _deleted }");
                    }
                }
                break;
            default:
                throw new Error("Invalid connection type " + connectionType);
        }
    });
    return result;
}
function getNonModelFields(namespace, modelDefinition) {
    var result = [];
    Object.values(modelDefinition.fields).forEach(function (_a) {
        var name = _a.name, type = _a.type;
        if (types_1.isNonModelFieldType(type)) {
            var typeDefinition = namespace.nonModels[type.nonModel];
            var scalarFields = Object.values(getScalarFields(typeDefinition)).map(function (_a) {
                var name = _a.name;
                return name;
            });
            var nested_1 = [];
            Object.values(typeDefinition.fields).forEach(function (field) {
                var type = field.type, name = field.name;
                if (types_1.isNonModelFieldType(type)) {
                    var typeDefinition_1 = namespace.nonModels[type.nonModel];
                    nested_1.push(name + " { " + generateSelectionSet(namespace, typeDefinition_1) + " }");
                }
            });
            result.push(name + " { " + scalarFields.join(' ') + " " + nested_1.join(' ') + " }");
        }
    });
    return result;
}
function getAuthorizationRules(modelDefinition) {
    // Searching for owner authorization on attributes
    var authConfig = []
        .concat(modelDefinition.attributes || [])
        .find(function (attr) { return attr && attr.type === 'auth'; });
    var _a = (authConfig || {}).properties, _b = (_a === void 0 ? {} : _a).rules, rules = _b === void 0 ? [] : _b;
    var resultRules = [];
    // Multiple rules can be declared for allow: owner
    rules.forEach(function (rule) {
        // setting defaults for backwards compatibility with old cli
        var _a = rule.identityClaim, identityClaim = _a === void 0 ? 'cognito:username' : _a, _b = rule.ownerField, ownerField = _b === void 0 ? 'owner' : _b, _c = rule.operations, operations = _c === void 0 ? ['create', 'update', 'delete', 'read'] : _c, _d = rule.provider, provider = _d === void 0 ? 'userPools' : _d, _e = rule.groupClaim, groupClaim = _e === void 0 ? 'cognito:groups' : _e, _f = rule.allow, authStrategy = _f === void 0 ? 'iam' : _f, _g = rule.groups, groups = _g === void 0 ? [] : _g;
        var isReadAuthorized = operations.includes('read');
        var isOwnerAuth = authStrategy === 'owner';
        if (!isReadAuthorized && !isOwnerAuth) {
            return;
        }
        var authRule = {
            identityClaim: identityClaim,
            ownerField: ownerField,
            provider: provider,
            groupClaim: groupClaim,
            authStrategy: authStrategy,
            groups: groups,
            areSubscriptionsPublic: false,
        };
        if (isOwnerAuth) {
            // look for the subscription level override
            // only pay attention to the public level
            var modelConfig = []
                .concat(modelDefinition.attributes || [])
                .find(function (attr) { return attr && attr.type === 'model'; });
            // find the subscriptions level. ON is default
            var _h = (modelConfig || {}).properties, _j = (_h === void 0 ? {} : _h).subscriptions, _k = (_j === void 0 ? {} : _j).level, level = _k === void 0 ? 'on' : _k;
            // treat subscriptions as public for owner auth with unprotected reads
            // when `read` is omitted from `operations`
            authRule.areSubscriptionsPublic =
                !operations.includes('read') || level === 'public';
        }
        if (isOwnerAuth) {
            // owner rules has least priority
            resultRules.push(authRule);
            return;
        }
        resultRules.unshift(authRule);
    });
    return resultRules;
}
exports.getAuthorizationRules = getAuthorizationRules;
function buildSubscriptionGraphQLOperation(namespace, modelDefinition, transformerMutationType, isOwnerAuthorization, ownerField) {
    var selectionSet = generateSelectionSet(namespace, modelDefinition);
    var typeName = modelDefinition.name, pluralTypeName = modelDefinition.pluralName;
    var opName = "on" + transformerMutationType + typeName;
    var docArgs = '';
    var opArgs = '';
    if (isOwnerAuthorization) {
        docArgs = "($" + ownerField + ": String!)";
        opArgs = "(" + ownerField + ": $" + ownerField + ")";
    }
    return [
        transformerMutationType,
        opName,
        "subscription operation" + docArgs + "{\n\t\t\t" + opName + opArgs + "{\n\t\t\t\t" + selectionSet + "\n\t\t\t}\n\t\t}",
    ];
}
exports.buildSubscriptionGraphQLOperation = buildSubscriptionGraphQLOperation;
function buildGraphQLOperation(namespace, modelDefinition, graphQLOpType) {
    var selectionSet = generateSelectionSet(namespace, modelDefinition);
    var typeName = modelDefinition.name, pluralTypeName = modelDefinition.pluralName;
    var operation;
    var documentArgs;
    var operationArgs;
    var transformerMutationType;
    switch (graphQLOpType) {
        case 'LIST':
            operation = "sync" + pluralTypeName;
            documentArgs = "($limit: Int, $nextToken: String, $lastSync: AWSTimestamp, $filter: Model" + typeName + "FilterInput)";
            operationArgs =
                '(limit: $limit, nextToken: $nextToken, lastSync: $lastSync, filter: $filter)';
            selectionSet = "items {\n\t\t\t\t\t\t\t" + selectionSet + "\n\t\t\t\t\t\t}\n\t\t\t\t\t\tnextToken\n\t\t\t\t\t\tstartedAt";
            break;
        case 'CREATE':
            operation = "create" + typeName;
            documentArgs = "($input: Create" + typeName + "Input!)";
            operationArgs = '(input: $input)';
            transformerMutationType = TransformerMutationType.CREATE;
            break;
        case 'UPDATE':
            operation = "update" + typeName;
            documentArgs = "($input: Update" + typeName + "Input!, $condition: Model" + typeName + "ConditionInput)";
            operationArgs = '(input: $input, condition: $condition)';
            transformerMutationType = TransformerMutationType.UPDATE;
            break;
        case 'DELETE':
            operation = "delete" + typeName;
            documentArgs = "($input: Delete" + typeName + "Input!, $condition: Model" + typeName + "ConditionInput)";
            operationArgs = '(input: $input, condition: $condition)';
            transformerMutationType = TransformerMutationType.DELETE;
            break;
        case 'GET':
            operation = "get" + typeName;
            documentArgs = "($id: ID!)";
            operationArgs = '(id: $id)';
            transformerMutationType = TransformerMutationType.GET;
            break;
        default:
            throw new Error("Invalid graphQlOpType " + graphQLOpType);
    }
    return [
        [
            transformerMutationType,
            operation,
            GraphQLOperationType[graphQLOpType] + " operation" + documentArgs + "{\n\t\t" + operation + operationArgs + "{\n\t\t\t" + selectionSet + "\n\t\t}\n\t}",
        ],
    ];
}
exports.buildGraphQLOperation = buildGraphQLOperation;
function createMutationInstanceFromModelOperation(relationships, modelDefinition, opType, model, element, condition, MutationEventConstructor, modelInstanceCreator, id) {
    var operation;
    switch (opType) {
        case types_1.OpType.INSERT:
            operation = TransformerMutationType.CREATE;
            break;
        case types_1.OpType.UPDATE:
            operation = TransformerMutationType.UPDATE;
            break;
        case types_1.OpType.DELETE:
            operation = TransformerMutationType.DELETE;
            break;
        default:
            throw new Error("Invalid opType " + opType);
    }
    // stringify nested objects of type AWSJSON
    // this allows us to return parsed JSON to users (see `castInstanceType()` in datastore.ts),
    // but still send the object correctly over the wire
    var replacer = function (k, v) {
        var isAWSJSON = k &&
            v !== null &&
            typeof v === 'object' &&
            modelDefinition.fields[k] &&
            modelDefinition.fields[k].type === 'AWSJSON';
        if (isAWSJSON) {
            return JSON.stringify(v);
        }
        return v;
    };
    var modelId = getIdentifierValue(modelDefinition, element);
    var optionalId = types_1.OpType.INSERT && id ? { id: id } : {};
    var mutationEvent = modelInstanceCreator(MutationEventConstructor, tslib_1.__assign(tslib_1.__assign({}, optionalId), { data: JSON.stringify(element, replacer), modelId: modelId, model: model.name, operation: operation, condition: JSON.stringify(condition) }));
    return mutationEvent;
}
exports.createMutationInstanceFromModelOperation = createMutationInstanceFromModelOperation;
function predicateToGraphQLCondition(predicate, modelDefinition) {
    var result = {};
    if (!predicate || !Array.isArray(predicate.predicates)) {
        return result;
    }
    // This is compatible with how the GQL Transform currently generates the Condition Input,
    // i.e. any PK and SK fields are omitted and can't be used as conditions.
    // However, I think this limits usability.
    // What if we want to delete all records where SK > some value
    // Or all records where PK = some value but SKs are different values
    // TODO: if the Transform gets updated we'll need to modify this logic to only omit
    // key fields from the predicate/condition when ALL of the keyFields are present and using `eq` operators
    var keyFields = util_1.extractPrimaryKeyFieldNames(modelDefinition);
    return predicateToGraphQLFilter(predicate, keyFields);
}
exports.predicateToGraphQLCondition = predicateToGraphQLCondition;
function predicateToGraphQLFilter(predicatesGroup, fieldsToOmit) {
    if (fieldsToOmit === void 0) { fieldsToOmit = []; }
    var result = {};
    if (!predicatesGroup || !Array.isArray(predicatesGroup.predicates)) {
        return result;
    }
    var type = predicatesGroup.type, predicates = predicatesGroup.predicates;
    var isList = type === 'and' || type === 'or';
    result[type] = isList ? [] : {};
    var appendToFilter = function (value) {
        return isList ? result[type].push(value) : (result[type] = value);
    };
    predicates.forEach(function (predicate) {
        var _a, _b;
        if (types_1.isPredicateObj(predicate)) {
            var field = predicate.field, operator = predicate.operator, operand = predicate.operand;
            if (fieldsToOmit.includes(field))
                return;
            var gqlField = (_a = {},
                _a[field] = (_b = {}, _b[operator] = operand, _b),
                _a);
            appendToFilter(gqlField);
            return;
        }
        var child = predicateToGraphQLFilter(predicate, fieldsToOmit);
        Object.keys(child).length > 0 && appendToFilter(child);
    });
    if (isList) {
        if (result[type].length === 0)
            return {};
    }
    else {
        if (Object.keys(result[type]).length === 0)
            return {};
    }
    return result;
}
exports.predicateToGraphQLFilter = predicateToGraphQLFilter;
function getUserGroupsFromToken(token, rule) {
    // validate token against groupClaim
    var userGroups = token[rule.groupClaim] || [];
    if (typeof userGroups === 'string') {
        var parsedGroups = void 0;
        try {
            parsedGroups = JSON.parse(userGroups);
        }
        catch (e) {
            parsedGroups = userGroups;
        }
        userGroups = [].concat(parsedGroups);
    }
    return userGroups;
}
exports.getUserGroupsFromToken = getUserGroupsFromToken;
function getModelAuthModes(_a) {
    var authModeStrategy = _a.authModeStrategy, defaultAuthMode = _a.defaultAuthMode, modelName = _a.modelName, schema = _a.schema;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var operations, modelAuthModes, error_1;
        var _this = this;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    operations = Object.values(types_1.ModelOperation);
                    modelAuthModes = {
                        CREATE: [],
                        READ: [],
                        UPDATE: [],
                        DELETE: [],
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Promise.all(operations.map(function (operation) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var authModes;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, authModeStrategy({
                                            schema: schema,
                                            modelName: modelName,
                                            operation: operation,
                                        })];
                                    case 1:
                                        authModes = _a.sent();
                                        if (typeof authModes === 'string') {
                                            modelAuthModes[operation] = [authModes];
                                        }
                                        else if (Array.isArray(authModes) && authModes.length) {
                                            modelAuthModes[operation] = authModes;
                                        }
                                        else {
                                            // Use default auth mode if nothing is returned from authModeStrategy
                                            modelAuthModes[operation] = [defaultAuthMode];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    logger.debug("Error getting auth modes for model: " + modelName, error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, modelAuthModes];
            }
        });
    });
}
exports.getModelAuthModes = getModelAuthModes;
function getForbiddenError(error) {
    var forbiddenErrorMessages = [
        'Request failed with status code 401',
        'Request failed with status code 403',
    ];
    var forbiddenError;
    if (error && error.errors) {
        forbiddenError = error.errors.find(function (err) {
            return forbiddenErrorMessages.includes(err.message);
        });
    }
    else if (error && error.message) {
        forbiddenError = error;
    }
    if (forbiddenError) {
        return forbiddenError.message;
    }
    return null;
}
exports.getForbiddenError = getForbiddenError;
function getClientSideAuthError(error) {
    var clientSideAuthErrors = Object.values(api_1.GraphQLAuthError);
    var clientSideError = error &&
        error.message &&
        clientSideAuthErrors.find(function (clientError) {
            return error.message.includes(clientError);
        });
    return clientSideError || null;
}
exports.getClientSideAuthError = getClientSideAuthError;
function getTokenForCustomAuth(authMode, amplifyConfig) {
    if (amplifyConfig === void 0) { amplifyConfig = {}; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, functionAuthProvider, token, error_2;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(authMode === api_graphql_1.GRAPHQL_AUTH_MODE.AWS_LAMBDA)) return [3 /*break*/, 6];
                    _a = amplifyConfig.authProviders, functionAuthProvider = (_a === void 0 ? { functionAuthProvider: null } : _a).functionAuthProvider;
                    if (!(functionAuthProvider && typeof functionAuthProvider === 'function')) return [3 /*break*/, 5];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, functionAuthProvider()];
                case 2:
                    token = (_b.sent()).token;
                    return [2 /*return*/, token];
                case 3:
                    error_2 = _b.sent();
                    throw new Error("Error retrieving token from `functionAuthProvider`: " + error_2);
                case 4: return [3 /*break*/, 6];
                case 5: 
                // TODO: add docs link once available
                throw new Error("You must provide a `functionAuthProvider` function to `DataStore.configure` when using " + api_graphql_1.GRAPHQL_AUTH_MODE.AWS_LAMBDA);
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.getTokenForCustomAuth = getTokenForCustomAuth;
// Util that takes a modelDefinition and model and returns either the id value(s) or the custom primary key value(s)
function getIdentifierValue(modelDefinition, model) {
    var pkFieldNames = util_1.extractPrimaryKeyFieldNames(modelDefinition);
    var idOrPk = pkFieldNames.map(function (f) { return model[f]; }).join(util_1.IDENTIFIER_KEY_SEPARATOR);
    return idOrPk;
}
exports.getIdentifierValue = getIdentifierValue;
//# sourceMappingURL=utils.js.map