import { __awaiter, __generator, __read } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Amplify, ConsoleLogger as Logger, parseAWSExports, } from '@aws-amplify/core';
import { AmazonLocationServiceProvider } from './Providers/AmazonLocationServiceProvider';
import { validateCoordinates } from './util';
var logger = new Logger('Geo');
var DEFAULT_PROVIDER = 'AmazonLocationService';
var GeoClass = /** @class */ (function () {
    function GeoClass() {
        this._config = {};
        this._pluggables = [];
        logger.debug('Geo Options', this._config);
    }
    /**
     * get the name of the module category
     * @returns {string} name of the module category
     */
    GeoClass.prototype.getModuleName = function () {
        return GeoClass.MODULE;
    };
    /**
     * add plugin into Geo category
     * @param {Object} pluggable - an instance of the plugin
     */
    GeoClass.prototype.addPluggable = function (pluggable) {
        if (pluggable && pluggable.getCategory() === 'Geo') {
            this._pluggables.push(pluggable);
            var config = pluggable.configure(this._config[pluggable.getProviderName()]);
            return config;
        }
    };
    /**
     * Get the plugin object
     * @param providerName - the name of the plugin
     */
    GeoClass.prototype.getPluggable = function (providerName) {
        var pluggable = this._pluggables.find(function (pluggable) { return pluggable.getProviderName() === providerName; });
        if (pluggable === undefined) {
            logger.debug('No plugin found with providerName', providerName);
            throw new Error('No plugin found in Geo for the provider');
        }
        else
            return pluggable;
    };
    /**
     * Remove the plugin object
     * @param providerName - the name of the plugin
     */
    GeoClass.prototype.removePluggable = function (providerName) {
        this._pluggables = this._pluggables.filter(function (pluggable) { return pluggable.getProviderName() !== providerName; });
        return;
    };
    /**
     * Configure Geo
     * @param {Object} config - Configuration object for Geo
     * @return {Object} - Current configuration
     */
    GeoClass.prototype.configure = function (config) {
        var _this = this;
        logger.debug('configure Geo');
        if (!config)
            return this._config;
        var amplifyConfig = parseAWSExports(config);
        this._config = Object.assign({}, this._config, amplifyConfig.Geo, config);
        this._pluggables.forEach(function (pluggable) {
            pluggable.configure(_this._config[pluggable.getProviderName()]);
        });
        if (this._pluggables.length === 0) {
            this.addPluggable(new AmazonLocationServiceProvider());
        }
        return this._config;
    };
    /**
     * Get the map resources that are currently available through the provider
     * @param {string} provider
     * @returns - Array of available map resources
     */
    GeoClass.prototype.getAvailableMaps = function (provider) {
        if (provider === void 0) { provider = DEFAULT_PROVIDER; }
        var prov = this.getPluggable(provider);
        return prov.getAvailableMaps();
    };
    /**
     * Get the map resource set as default in amplify config
     * @param {string} provider
     * @returns - Map resource set as the default in amplify config
     */
    GeoClass.prototype.getDefaultMap = function (provider) {
        if (provider === void 0) { provider = DEFAULT_PROVIDER; }
        var prov = this.getPluggable(provider);
        return prov.getDefaultMap();
    };
    /**
     * Search by text input with optional parameters
     * @param  {string} text - The text string that is to be searched for
     * @param  {SearchByTextOptions} options? - Optional parameters to the search
     * @returns {Promise<Place[]>} - Promise resolves to a list of Places that match search parameters
     */
    GeoClass.prototype.searchByText = function (text, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prov.searchByText(text, options)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        error_1 = _b.sent();
                        logger.debug(error_1);
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Search for search term suggestions based on input text
     * @param  {string} text - The text string that is to be search for
     * @param  {SearchByTextOptions} options? - Optional parameters to the search
     * @returns {Promise<SearchForSuggestionsResults>} - Resolves to an array of search suggestion strings
     */
    GeoClass.prototype.searchForSuggestions = function (text, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prov.searchForSuggestions(text, options)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        error_2 = _b.sent();
                        logger.debug(error_2);
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Search for location by unique ID
     * @param  {string} placeId - Unique ID of the location that is to be searched for
     * @param  {searchByPlaceIdOptions} options? - Optional parameters to the search
     * @returns {Promise<Place>} - Resolves to a place with the given placeId
     */
    GeoClass.prototype.searchByPlaceId = function (placeId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var providerName, prov, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        providerName = DEFAULT_PROVIDER;
                        prov = this.getPluggable(providerName);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prov.searchByPlaceId(placeId, options)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        logger.debug(error_3);
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reverse geocoding search via a coordinate point on the map
     * @param coordinates - Coordinates array for the search input
     * @param options - Options parameters for the search
     * @returns {Promise<Place>} - Promise that resolves to a place matching search coordinates
     */
    GeoClass.prototype.searchByCoordinates = function (coordinates, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, _b, lng, lat, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        _b = __read(coordinates, 2), lng = _b[0], lat = _b[1];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        validateCoordinates(lng, lat);
                        return [4 /*yield*/, prov.searchByCoordinates(coordinates, options)];
                    case 2: return [2 /*return*/, _c.sent()];
                    case 3:
                        error_4 = _c.sent();
                        logger.debug(error_4);
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create geofences
     * @param geofences - Single or array of geofence objects to create
     * @param options? - Optional parameters for creating geofences
     * @returns {Promise<SaveGeofencesResults>} - Promise that resolves to an object with:
     *   successes: list of geofences successfully created
     *   errors: list of geofences that failed to create
     */
    GeoClass.prototype.saveGeofences = function (geofences, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, geofenceInputArray, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        if (!Array.isArray(geofences)) {
                            geofenceInputArray = [geofences];
                        }
                        else {
                            geofenceInputArray = geofences;
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prov.saveGeofences(geofenceInputArray, options)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        error_5 = _b.sent();
                        logger.debug(error_5);
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get a single geofence by geofenceId
     * @param geofenceId: GeofenceId - The string id of the geofence to get
     * @param options?: GeofenceOptions - Optional parameters for getting a geofence
     * @returns Promise<Geofence> - Promise that resolves to a geofence object
     */
    GeoClass.prototype.getGeofence = function (geofenceId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prov.getGeofence(geofenceId, options)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        error_6 = _b.sent();
                        logger.debug(error_6);
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * List geofences
     * @param  options?: ListGeofenceOptions
     * @returns {Promise<ListGeofencesResults>} - Promise that resolves to an object with:
     *   entries: list of geofences - 100 geofences are listed per page
     *   nextToken: token for next page of geofences
     */
    GeoClass.prototype.listGeofences = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, error_7;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prov.listGeofences(options)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        error_7 = _b.sent();
                        logger.debug(error_7);
                        throw error_7;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete geofences
     * @param geofenceIds: string|string[]
     * @param options?: GeofenceOptions
     * @returns {Promise<DeleteGeofencesResults>} - Promise that resolves to an object with:
     *  successes: list of geofences successfully deleted
     *  errors: list of geofences that failed to delete
     */
    GeoClass.prototype.deleteGeofences = function (geofenceIds, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, geofenceIdsInputArray, error_8;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        if (!Array.isArray(geofenceIds)) {
                            geofenceIdsInputArray = [geofenceIds];
                        }
                        else {
                            geofenceIdsInputArray = geofenceIds;
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prov.deleteGeofences(geofenceIdsInputArray, options)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        error_8 = _b.sent();
                        logger.debug(error_8);
                        throw error_8;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GeoClass.MODULE = 'Geo';
    return GeoClass;
}());
export { GeoClass };
export var Geo = new GeoClass();
Amplify.register(Geo);
//# sourceMappingURL=Geo.js.map