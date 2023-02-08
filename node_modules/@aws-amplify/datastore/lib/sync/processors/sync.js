"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var api_1 = require("@aws-amplify/api");
var zen_observable_ts_1 = tslib_1.__importDefault(require("zen-observable-ts"));
var types_1 = require("../../types");
var utils_1 = require("../utils");
var util_1 = require("../../util");
var core_1 = require("@aws-amplify/core");
var predicates_1 = require("../../predicates");
var errorMaps_1 = require("./errorMaps");
var opResultDefaults = {
    items: [],
    nextToken: null,
    startedAt: null,
};
var logger = new core_1.ConsoleLogger('DataStore');
var SyncProcessor = /** @class */ (function () {
    function SyncProcessor(schema, syncPredicates, amplifyConfig, authModeStrategy, errorHandler, amplifyContext) {
        if (amplifyConfig === void 0) { amplifyConfig = {}; }
        this.schema = schema;
        this.syncPredicates = syncPredicates;
        this.amplifyConfig = amplifyConfig;
        this.authModeStrategy = authModeStrategy;
        this.errorHandler = errorHandler;
        this.amplifyContext = amplifyContext;
        this.typeQuery = new WeakMap();
        this.runningProcesses = new core_1.BackgroundProcessManager();
        amplifyContext.API = amplifyContext.API || api_1.API;
        this.generateQueries();
    }
    SyncProcessor.prototype.generateQueries = function () {
        var _this = this;
        Object.values(this.schema.namespaces).forEach(function (namespace) {
            Object.values(namespace.models)
                .filter(function (_a) {
                var syncable = _a.syncable;
                return syncable;
            })
                .forEach(function (model) {
                var _a = tslib_1.__read(utils_1.buildGraphQLOperation(namespace, model, 'LIST'), 1), _b = tslib_1.__read(_a[0]), opNameQuery = _b.slice(1);
                _this.typeQuery.set(model, opNameQuery);
            });
        });
    };
    SyncProcessor.prototype.graphqlFilterFromPredicate = function (model) {
        if (!this.syncPredicates) {
            return null;
        }
        var predicatesGroup = predicates_1.ModelPredicateCreator.getPredicates(this.syncPredicates.get(model), false);
        if (!predicatesGroup) {
            return null;
        }
        return utils_1.predicateToGraphQLFilter(predicatesGroup);
    };
    SyncProcessor.prototype.retrievePage = function (modelDefinition, lastSync, nextToken, limit, filter, onTerminate) {
        if (limit === void 0) { limit = null; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, opName, query, variables, modelAuthModes, readAuthModes, authModeAttempts, authModeRetry, data, _b, _c, opResult, items, newNextToken, startedAt;
            var _this = this;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = tslib_1.__read(this.typeQuery.get(modelDefinition), 2), opName = _a[0], query = _a[1];
                        variables = {
                            limit: limit,
                            nextToken: nextToken,
                            lastSync: lastSync,
                            filter: filter,
                        };
                        return [4 /*yield*/, utils_1.getModelAuthModes({
                                authModeStrategy: this.authModeStrategy,
                                defaultAuthMode: this.amplifyConfig.aws_appsync_authenticationType,
                                modelName: modelDefinition.name,
                                schema: this.schema,
                            })];
                    case 1:
                        modelAuthModes = _d.sent();
                        readAuthModes = modelAuthModes.READ;
                        authModeAttempts = 0;
                        authModeRetry = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var response, error_1, authMode;
                            var _a;
                            return tslib_1.__generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!this.runningProcesses.isOpen) {
                                            throw new Error('sync.retreievePage termination was requested. Exiting.');
                                        }
                                        _b.label = 1;
                                    case 1:
                                        _b.trys.push([1, 3, , 5]);
                                        logger.debug("Attempting sync with authMode: " + readAuthModes[authModeAttempts]);
                                        return [4 /*yield*/, this.jitteredRetry({
                                                query: query,
                                                variables: variables,
                                                opName: opName,
                                                modelDefinition: modelDefinition,
                                                authMode: readAuthModes[authModeAttempts],
                                                onTerminate: onTerminate,
                                            })];
                                    case 2:
                                        response = _b.sent();
                                        logger.debug("Sync successful with authMode: " + readAuthModes[authModeAttempts]);
                                        return [2 /*return*/, response];
                                    case 3:
                                        error_1 = _b.sent();
                                        authModeAttempts++;
                                        if (authModeAttempts >= readAuthModes.length) {
                                            authMode = readAuthModes[authModeAttempts - 1];
                                            logger.debug("Sync failed with authMode: " + authMode, error_1);
                                            if (utils_1.getClientSideAuthError(error_1) || utils_1.getForbiddenError(error_1)) {
                                                // return empty list of data so DataStore will continue to sync other models
                                                logger.warn("User is unauthorized to query " + opName + " with auth mode " + authMode + ". No data could be returned.");
                                                return [2 /*return*/, {
                                                        data: (_a = {},
                                                            _a[opName] = opResultDefaults,
                                                            _a),
                                                    }];
                                            }
                                            throw error_1;
                                        }
                                        logger.debug("Sync failed with authMode: " + readAuthModes[authModeAttempts - 1] + ". Retrying with authMode: " + readAuthModes[authModeAttempts]);
                                        return [4 /*yield*/, authModeRetry()];
                                    case 4: return [2 /*return*/, _b.sent()];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, authModeRetry()];
                    case 2:
                        data = (_d.sent()).data;
                        _b = data, _c = opName, opResult = _b[_c];
                        items = opResult.items, newNextToken = opResult.nextToken, startedAt = opResult.startedAt;
                        return [2 /*return*/, {
                                nextToken: newNextToken,
                                startedAt: startedAt,
                                items: items,
                            }];
                }
            });
        });
    };
    SyncProcessor.prototype.jitteredRetry = function (_a) {
        var query = _a.query, variables = _a.variables, opName = _a.opName, modelDefinition = _a.modelDefinition, authMode = _a.authMode, onTerminate = _a.onTerminate;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, core_1.jitteredExponentialRetry(function (query, variables) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var authToken, error_2, clientOrForbiddenErrorMessage, hasItems, unauthorized, otherErrors, result;
                            var _this = this;
                            var _a, _b, _c, _d;
                            return tslib_1.__generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        _e.trys.push([0, 3, , 6]);
                                        return [4 /*yield*/, utils_1.getTokenForCustomAuth(authMode, this.amplifyConfig)];
                                    case 1:
                                        authToken = _e.sent();
                                        return [4 /*yield*/, this.amplifyContext.API.graphql({
                                                query: query,
                                                variables: variables,
                                                authMode: authMode,
                                                authToken: authToken,
                                                userAgentSuffix: util_1.USER_AGENT_SUFFIX_DATASTORE,
                                            })];
                                    case 2: return [2 /*return*/, _e.sent()];
                                    case 3:
                                        error_2 = _e.sent();
                                        clientOrForbiddenErrorMessage = utils_1.getClientSideAuthError(error_2) || utils_1.getForbiddenError(error_2);
                                        if (clientOrForbiddenErrorMessage) {
                                            throw new core_1.NonRetryableError(clientOrForbiddenErrorMessage);
                                        }
                                        hasItems = Boolean((_b = (_a = error_2 === null || error_2 === void 0 ? void 0 : error_2.data) === null || _a === void 0 ? void 0 : _a[opName]) === null || _b === void 0 ? void 0 : _b.items);
                                        unauthorized = (error_2 === null || error_2 === void 0 ? void 0 : error_2.errors) &&
                                            error_2.errors.some(function (err) { return err.errorType === 'Unauthorized'; });
                                        otherErrors = (error_2 === null || error_2 === void 0 ? void 0 : error_2.errors) &&
                                            error_2.errors.filter(function (err) { return err.errorType !== 'Unauthorized'; });
                                        result = error_2;
                                        if (hasItems) {
                                            result.data[opName].items = result.data[opName].items.filter(function (item) { return item !== null; });
                                        }
                                        if (!(hasItems && (otherErrors === null || otherErrors === void 0 ? void 0 : otherErrors.length))) return [3 /*break*/, 5];
                                        return [4 /*yield*/, Promise.all(otherErrors.map(function (err) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                                var e_1;
                                                return tslib_1.__generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            _a.trys.push([0, 2, , 3]);
                                                            return [4 /*yield*/, this.errorHandler({
                                                                    recoverySuggestion: 'Ensure app code is up to date, auth directives exist and are correct on each model, and that server-side data has not been invalidated by a schema change. If the problem persists, search for or create an issue: https://github.com/aws-amplify/amplify-js/issues',
                                                                    localModel: null,
                                                                    message: err.message,
                                                                    model: modelDefinition.name,
                                                                    operation: opName,
                                                                    errorType: errorMaps_1.getSyncErrorType(err),
                                                                    process: types_1.ProcessName.sync,
                                                                    remoteModel: null,
                                                                    cause: err,
                                                                })];
                                                        case 1:
                                                            _a.sent();
                                                            return [3 /*break*/, 3];
                                                        case 2:
                                                            e_1 = _a.sent();
                                                            logger.error('Sync error handler failed with:', e_1);
                                                            return [3 /*break*/, 3];
                                                        case 3: return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                    case 4:
                                        _e.sent();
                                        core_1.Hub.dispatch('datastore', {
                                            event: 'nonApplicableDataReceived',
                                            data: {
                                                errors: otherErrors,
                                                modelName: modelDefinition.name,
                                            },
                                        });
                                        _e.label = 5;
                                    case 5:
                                        if (unauthorized) {
                                            logger.warn('queryError', "User is unauthorized to query " + opName + ", some items could not be returned.");
                                            result.data = result.data || {};
                                            result.data[opName] = tslib_1.__assign(tslib_1.__assign({}, opResultDefaults), result.data[opName]);
                                            return [2 /*return*/, result];
                                        }
                                        if ((_d = (_c = result.data) === null || _c === void 0 ? void 0 : _c[opName].items) === null || _d === void 0 ? void 0 : _d.length) {
                                            return [2 /*return*/, result];
                                        }
                                        throw error_2;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); }, [query, variables], undefined, onTerminate)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    SyncProcessor.prototype.start = function (typesLastSync) {
        var _this = this;
        var _a = this.amplifyConfig, maxRecordsToSync = _a.maxRecordsToSync, syncPageSize = _a.syncPageSize;
        var parentPromises = new Map();
        var observable = new zen_observable_ts_1.default(function (observer) {
            var sortedTypesLastSyncs = Object.values(_this.schema.namespaces).reduce(function (map, namespace) {
                var e_2, _a;
                try {
                    for (var _b = tslib_1.__values(Array.from(namespace.modelTopologicalOrdering.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var modelName = _c.value;
                        var typeLastSync = typesLastSync.get(namespace.models[modelName]);
                        map.set(namespace.models[modelName], typeLastSync);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return map;
            }, new Map());
            var allModelsReady = Array.from(sortedTypesLastSyncs.entries())
                .filter(function (_a) {
                var _b = tslib_1.__read(_a, 1), syncable = _b[0].syncable;
                return syncable;
            })
                .map(function (_a) {
                var _b = tslib_1.__read(_a, 2), modelDefinition = _b[0], _c = tslib_1.__read(_b[1], 2), namespace = _c[0], lastSync = _c[1];
                return _this.runningProcesses.isOpen &&
                    _this.runningProcesses.add(function (onTerminate) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var done, nextToken, startedAt, items, recordsReceived, filter, parents, promises, promise;
                        var _this = this;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    done = false;
                                    nextToken = null;
                                    startedAt = null;
                                    items = null;
                                    recordsReceived = 0;
                                    filter = this.graphqlFilterFromPredicate(modelDefinition);
                                    parents = this.schema.namespaces[namespace].modelTopologicalOrdering.get(modelDefinition.name);
                                    promises = parents.map(function (parent) {
                                        return parentPromises.get(namespace + "_" + parent);
                                    });
                                    promise = new Promise(function (res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                        var limit;
                                        var _a;
                                        return tslib_1.__generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0: return [4 /*yield*/, Promise.all(promises)];
                                                case 1:
                                                    _b.sent();
                                                    _b.label = 2;
                                                case 2:
                                                    if (!this.runningProcesses.isOpen) {
                                                        return [2 /*return*/];
                                                    }
                                                    limit = Math.min(maxRecordsToSync - recordsReceived, syncPageSize);
                                                    return [4 /*yield*/, this.retrievePage(modelDefinition, lastSync, nextToken, limit, filter, onTerminate)];
                                                case 3:
                                                    (_a = _b.sent(), items = _a.items, nextToken = _a.nextToken, startedAt = _a.startedAt);
                                                    recordsReceived += items.length;
                                                    done =
                                                        nextToken === null || recordsReceived >= maxRecordsToSync;
                                                    observer.next({
                                                        namespace: namespace,
                                                        modelDefinition: modelDefinition,
                                                        items: items,
                                                        done: done,
                                                        startedAt: startedAt,
                                                        isFullSync: !lastSync,
                                                    });
                                                    _b.label = 4;
                                                case 4:
                                                    if (!done) return [3 /*break*/, 2];
                                                    _b.label = 5;
                                                case 5:
                                                    res();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    parentPromises.set(namespace + "_" + modelDefinition.name, promise);
                                    return [4 /*yield*/, promise];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, "adding model " + modelDefinition.name);
            });
            Promise.all(allModelsReady).then(function () {
                observer.complete();
            });
        });
        return observable;
    };
    SyncProcessor.prototype.stop = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger.debug('stopping sync processor');
                        return [4 /*yield*/, this.runningProcesses.close()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.runningProcesses.open()];
                    case 2:
                        _a.sent();
                        logger.debug('sync processor stopped');
                        return [2 /*return*/];
                }
            });
        });
    };
    return SyncProcessor;
}());
exports.SyncProcessor = SyncProcessor;
//# sourceMappingURL=sync.js.map