import { __awaiter, __generator, __read, __spread } from "tslib";
import { Auth } from '@aws-amplify/auth';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import { ModelAttributeAuthProvider, ModelAttributeAuthAllow, } from '../types';
function getProviderFromRule(rule) {
    // private with no provider means userPools
    if (rule.allow === 'private' && !rule.provider) {
        return ModelAttributeAuthProvider.USER_POOLS;
    }
    // public with no provider means apiKey
    if (rule.allow === 'public' && !rule.provider) {
        return ModelAttributeAuthProvider.API_KEY;
    }
    return rule.provider;
}
function sortAuthRulesWithPriority(rules) {
    var allowSortPriority = [
        ModelAttributeAuthAllow.CUSTOM,
        ModelAttributeAuthAllow.OWNER,
        ModelAttributeAuthAllow.GROUPS,
        ModelAttributeAuthAllow.PRIVATE,
        ModelAttributeAuthAllow.PUBLIC,
    ];
    var providerSortPriority = [
        ModelAttributeAuthProvider.FUNCTION,
        ModelAttributeAuthProvider.USER_POOLS,
        ModelAttributeAuthProvider.OIDC,
        ModelAttributeAuthProvider.IAM,
        ModelAttributeAuthProvider.API_KEY,
    ];
    return __spread(rules).sort(function (a, b) {
        if (a.allow === b.allow) {
            return (providerSortPriority.indexOf(getProviderFromRule(a)) -
                providerSortPriority.indexOf(getProviderFromRule(b)));
        }
        return (allowSortPriority.indexOf(a.allow) - allowSortPriority.indexOf(b.allow));
    });
}
function getAuthRules(_a) {
    var rules = _a.rules, currentUser = _a.currentUser;
    // Using Set to ensure uniqueness
    var authModes = new Set();
    rules.forEach(function (rule) {
        switch (rule.allow) {
            case ModelAttributeAuthAllow.CUSTOM:
                // custom with no provider -> function
                if (!rule.provider ||
                    rule.provider === ModelAttributeAuthProvider.FUNCTION) {
                    authModes.add(GRAPHQL_AUTH_MODE.AWS_LAMBDA);
                }
                break;
            case ModelAttributeAuthAllow.GROUPS:
            case ModelAttributeAuthAllow.OWNER: {
                // We shouldn't attempt User Pool or OIDC if there isn't an authenticated user
                if (currentUser) {
                    if (rule.provider === ModelAttributeAuthProvider.USER_POOLS) {
                        authModes.add(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS);
                    }
                    else if (rule.provider === ModelAttributeAuthProvider.OIDC) {
                        authModes.add(GRAPHQL_AUTH_MODE.OPENID_CONNECT);
                    }
                }
                break;
            }
            case ModelAttributeAuthAllow.PRIVATE: {
                // We shouldn't attempt private if there isn't an authenticated user
                if (currentUser) {
                    // private with no provider means userPools
                    if (!rule.provider ||
                        rule.provider === ModelAttributeAuthProvider.USER_POOLS) {
                        authModes.add(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS);
                    }
                    else if (rule.provider === ModelAttributeAuthProvider.IAM) {
                        authModes.add(GRAPHQL_AUTH_MODE.AWS_IAM);
                    }
                }
                break;
            }
            case ModelAttributeAuthAllow.PUBLIC: {
                if (rule.provider === ModelAttributeAuthProvider.IAM) {
                    authModes.add(GRAPHQL_AUTH_MODE.AWS_IAM);
                }
                else if (!rule.provider ||
                    rule.provider === ModelAttributeAuthProvider.API_KEY) {
                    // public with no provider means apiKey
                    authModes.add(GRAPHQL_AUTH_MODE.API_KEY);
                }
                break;
            }
            default:
                break;
        }
    });
    return Array.from(authModes);
}
/**
 * Returns an array of auth modes to try based on the schema, model, and
 * authenticated user (or lack thereof). Rules are sourced from `getAuthRules`
 * and returned in the order they ought to be attempted.
 *
 * @see sortAuthRulesWithPriority
 * @see getAuthRules
 *
 * @param param0 The `{schema, modelName}` to inspect.
 * @returns A sorted array of auth modes to attempt.
 */
export var multiAuthStrategy = function (amplifyContext) {
    return function (_a) {
        var schema = _a.schema, modelName = _a.modelName;
        return __awaiter(void 0, void 0, void 0, function () {
            var currentUser, e_1, attributes, authAttribute, sortedRules;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        amplifyContext.Auth = amplifyContext.Auth || Auth;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, amplifyContext.Auth.currentAuthenticatedUser()];
                    case 2:
                        currentUser = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        attributes = schema.namespaces.user.models[modelName].attributes;
                        if (attributes) {
                            authAttribute = attributes.find(function (attr) { return attr.type === 'auth'; });
                            if ((_b = authAttribute === null || authAttribute === void 0 ? void 0 : authAttribute.properties) === null || _b === void 0 ? void 0 : _b.rules) {
                                sortedRules = sortAuthRulesWithPriority(authAttribute.properties.rules);
                                return [2 /*return*/, getAuthRules({ currentUser: currentUser, rules: sortedRules })];
                            }
                        }
                        return [2 /*return*/, []];
                }
            });
        });
    };
};
//# sourceMappingURL=multiAuthStrategy.js.map