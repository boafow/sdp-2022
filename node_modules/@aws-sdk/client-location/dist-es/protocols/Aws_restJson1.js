import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest, isValidHostname as __isValidHostname, } from "@aws-sdk/protocol-http";
import { decorateServiceException as __decorateServiceException, expectBoolean as __expectBoolean, expectInt32 as __expectInt32, expectNonNull as __expectNonNull, expectObject as __expectObject, expectString as __expectString, limitedParseDouble as __limitedParseDouble, map as __map, parseRfc3339DateTime as __parseRfc3339DateTime, resolvedPath as __resolvedPath, serializeFloat as __serializeFloat, throwDefaultError, } from "@aws-sdk/smithy-client";
import { LocationServiceException as __BaseException } from "../models/LocationServiceException";
import { AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException, } from "../models/models_0";
export var serializeAws_restJson1AssociateTrackerConsumerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/tracking/v0/trackers/{TrackerName}/consumers";
                resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", function () { return input.TrackerName; }, "{TrackerName}", false);
                body = JSON.stringify(__assign({}, (input.ConsumerArn != null && { ConsumerArn: input.ConsumerArn })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/tracking/v0/trackers/{TrackerName}/delete-positions";
                resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", function () { return input.TrackerName; }, "{TrackerName}", false);
                body = JSON.stringify(__assign({}, (input.DeviceIds != null && { DeviceIds: serializeAws_restJson1DeviceIdsList(input.DeviceIds, context) })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1BatchDeleteGeofenceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/geofencing/v0/collections/{CollectionName}/delete-geofences";
                resolvedPath = __resolvedPath(resolvedPath, input, "CollectionName", function () { return input.CollectionName; }, "{CollectionName}", false);
                body = JSON.stringify(__assign({}, (input.GeofenceIds != null && { GeofenceIds: serializeAws_restJson1IdList(input.GeofenceIds, context) })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "geofencing." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1BatchEvaluateGeofencesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/geofencing/v0/collections/{CollectionName}/positions";
                resolvedPath = __resolvedPath(resolvedPath, input, "CollectionName", function () { return input.CollectionName; }, "{CollectionName}", false);
                body = JSON.stringify(__assign({}, (input.DevicePositionUpdates != null && {
                    DevicePositionUpdates: serializeAws_restJson1DevicePositionUpdateList(input.DevicePositionUpdates, context),
                })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "geofencing." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1BatchGetDevicePositionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/tracking/v0/trackers/{TrackerName}/get-positions";
                resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", function () { return input.TrackerName; }, "{TrackerName}", false);
                body = JSON.stringify(__assign({}, (input.DeviceIds != null && { DeviceIds: serializeAws_restJson1IdList(input.DeviceIds, context) })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1BatchPutGeofenceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/geofencing/v0/collections/{CollectionName}/put-geofences";
                resolvedPath = __resolvedPath(resolvedPath, input, "CollectionName", function () { return input.CollectionName; }, "{CollectionName}", false);
                body = JSON.stringify(__assign({}, (input.Entries != null && {
                    Entries: serializeAws_restJson1BatchPutGeofenceRequestEntryList(input.Entries, context),
                })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "geofencing." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1BatchUpdateDevicePositionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/tracking/v0/trackers/{TrackerName}/positions";
                resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", function () { return input.TrackerName; }, "{TrackerName}", false);
                body = JSON.stringify(__assign({}, (input.Updates != null && { Updates: serializeAws_restJson1DevicePositionUpdateList(input.Updates, context) })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CalculateRouteCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/routes/v0/calculators/{CalculatorName}/calculate/route";
                resolvedPath = __resolvedPath(resolvedPath, input, "CalculatorName", function () { return input.CalculatorName; }, "{CalculatorName}", false);
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CarModeOptions != null && {
                    CarModeOptions: serializeAws_restJson1CalculateRouteCarModeOptions(input.CarModeOptions, context),
                })), (input.DepartNow != null && { DepartNow: input.DepartNow })), (input.DeparturePosition != null && {
                    DeparturePosition: serializeAws_restJson1Position(input.DeparturePosition, context),
                })), (input.DepartureTime != null && { DepartureTime: input.DepartureTime.toISOString().split(".")[0] + "Z" })), (input.DestinationPosition != null && {
                    DestinationPosition: serializeAws_restJson1Position(input.DestinationPosition, context),
                })), (input.DistanceUnit != null && { DistanceUnit: input.DistanceUnit })), (input.IncludeLegGeometry != null && { IncludeLegGeometry: input.IncludeLegGeometry })), (input.TravelMode != null && { TravelMode: input.TravelMode })), (input.TruckModeOptions != null && {
                    TruckModeOptions: serializeAws_restJson1CalculateRouteTruckModeOptions(input.TruckModeOptions, context),
                })), (input.WaypointPositions != null && {
                    WaypointPositions: serializeAws_restJson1WaypointPositionList(input.WaypointPositions, context),
                })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "routes." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CalculateRouteMatrixCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/routes/v0/calculators/{CalculatorName}/calculate/route-matrix";
                resolvedPath = __resolvedPath(resolvedPath, input, "CalculatorName", function () { return input.CalculatorName; }, "{CalculatorName}", false);
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CarModeOptions != null && {
                    CarModeOptions: serializeAws_restJson1CalculateRouteCarModeOptions(input.CarModeOptions, context),
                })), (input.DepartNow != null && { DepartNow: input.DepartNow })), (input.DeparturePositions != null && {
                    DeparturePositions: serializeAws_restJson1PositionList(input.DeparturePositions, context),
                })), (input.DepartureTime != null && { DepartureTime: input.DepartureTime.toISOString().split(".")[0] + "Z" })), (input.DestinationPositions != null && {
                    DestinationPositions: serializeAws_restJson1PositionList(input.DestinationPositions, context),
                })), (input.DistanceUnit != null && { DistanceUnit: input.DistanceUnit })), (input.TravelMode != null && { TravelMode: input.TravelMode })), (input.TruckModeOptions != null && {
                    TruckModeOptions: serializeAws_restJson1CalculateRouteTruckModeOptions(input.TruckModeOptions, context),
                })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "routes." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateGeofenceCollectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/geofencing/v0/collections";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CollectionName != null && { CollectionName: input.CollectionName })), (input.Description != null && { Description: input.Description })), (input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId })), (input.PricingPlan != null && { PricingPlan: input.PricingPlan })), (input.PricingPlanDataSource != null && { PricingPlanDataSource: input.PricingPlanDataSource })), (input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "geofencing." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateMapCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/maps/v0/maps";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.Configuration != null && {
                    Configuration: serializeAws_restJson1MapConfiguration(input.Configuration, context),
                })), (input.Description != null && { Description: input.Description })), (input.MapName != null && { MapName: input.MapName })), (input.PricingPlan != null && { PricingPlan: input.PricingPlan })), (input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "maps." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreatePlaceIndexCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/places/v0/indexes";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DataSource != null && { DataSource: input.DataSource })), (input.DataSourceConfiguration != null && {
                    DataSourceConfiguration: serializeAws_restJson1DataSourceConfiguration(input.DataSourceConfiguration, context),
                })), (input.Description != null && { Description: input.Description })), (input.IndexName != null && { IndexName: input.IndexName })), (input.PricingPlan != null && { PricingPlan: input.PricingPlan })), (input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "places." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateRouteCalculatorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/routes/v0/calculators";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.CalculatorName != null && { CalculatorName: input.CalculatorName })), (input.DataSource != null && { DataSource: input.DataSource })), (input.Description != null && { Description: input.Description })), (input.PricingPlan != null && { PricingPlan: input.PricingPlan })), (input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "routes." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateTrackerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/tracking/v0/trackers";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Description != null && { Description: input.Description })), (input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId })), (input.PositionFiltering != null && { PositionFiltering: input.PositionFiltering })), (input.PricingPlan != null && { PricingPlan: input.PricingPlan })), (input.PricingPlanDataSource != null && { PricingPlanDataSource: input.PricingPlanDataSource })), (input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })), (input.TrackerName != null && { TrackerName: input.TrackerName })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteGeofenceCollectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/geofencing/v0/collections/{CollectionName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "CollectionName", function () { return input.CollectionName; }, "{CollectionName}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "geofencing." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteMapCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/maps/v0/maps/{MapName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "MapName", function () { return input.MapName; }, "{MapName}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "maps." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeletePlaceIndexCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/places/v0/indexes/{IndexName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", function () { return input.IndexName; }, "{IndexName}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "places." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteRouteCalculatorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/routes/v0/calculators/{CalculatorName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "CalculatorName", function () { return input.CalculatorName; }, "{CalculatorName}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "routes." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteTrackerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/tracking/v0/trackers/{TrackerName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", function () { return input.TrackerName; }, "{TrackerName}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeGeofenceCollectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/geofencing/v0/collections/{CollectionName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "CollectionName", function () { return input.CollectionName; }, "{CollectionName}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "geofencing." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeMapCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/maps/v0/maps/{MapName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "MapName", function () { return input.MapName; }, "{MapName}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "maps." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribePlaceIndexCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/places/v0/indexes/{IndexName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", function () { return input.IndexName; }, "{IndexName}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "places." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeRouteCalculatorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/routes/v0/calculators/{CalculatorName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "CalculatorName", function () { return input.CalculatorName; }, "{CalculatorName}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "routes." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeTrackerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/tracking/v0/trackers/{TrackerName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", function () { return input.TrackerName; }, "{TrackerName}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DisassociateTrackerConsumerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}";
                resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", function () { return input.TrackerName; }, "{TrackerName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "ConsumerArn", function () { return input.ConsumerArn; }, "{ConsumerArn}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetDevicePositionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest";
                resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", function () { return input.TrackerName; }, "{TrackerName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "DeviceId", function () { return input.DeviceId; }, "{DeviceId}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetDevicePositionHistoryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions";
                resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", function () { return input.TrackerName; }, "{TrackerName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "DeviceId", function () { return input.DeviceId; }, "{DeviceId}", false);
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.EndTimeExclusive != null && {
                    EndTimeExclusive: input.EndTimeExclusive.toISOString().split(".")[0] + "Z",
                })), (input.MaxResults != null && { MaxResults: input.MaxResults })), (input.NextToken != null && { NextToken: input.NextToken })), (input.StartTimeInclusive != null && {
                    StartTimeInclusive: input.StartTimeInclusive.toISOString().split(".")[0] + "Z",
                })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetGeofenceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}";
                resolvedPath = __resolvedPath(resolvedPath, input, "CollectionName", function () { return input.CollectionName; }, "{CollectionName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "GeofenceId", function () { return input.GeofenceId; }, "{GeofenceId}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "geofencing." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetMapGlyphsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}";
                resolvedPath = __resolvedPath(resolvedPath, input, "MapName", function () { return input.MapName; }, "{MapName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "FontStack", function () { return input.FontStack; }, "{FontStack}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "FontUnicodeRange", function () { return input.FontUnicodeRange; }, "{FontUnicodeRange}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "maps." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetMapSpritesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/maps/v0/maps/{MapName}/sprites/{FileName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "MapName", function () { return input.MapName; }, "{MapName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "FileName", function () { return input.FileName; }, "{FileName}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "maps." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetMapStyleDescriptorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/maps/v0/maps/{MapName}/style-descriptor";
                resolvedPath = __resolvedPath(resolvedPath, input, "MapName", function () { return input.MapName; }, "{MapName}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "maps." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetMapTileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}";
                resolvedPath = __resolvedPath(resolvedPath, input, "MapName", function () { return input.MapName; }, "{MapName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "Z", function () { return input.Z; }, "{Z}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "X", function () { return input.X; }, "{X}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "Y", function () { return input.Y; }, "{Y}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "maps." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetPlaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, query, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/places/v0/indexes/{IndexName}/places/{PlaceId}";
                resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", function () { return input.IndexName; }, "{IndexName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "PlaceId", function () { return input.PlaceId; }, "{PlaceId}", false);
                query = map({
                    language: [, input.Language],
                });
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "places." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListDevicePositionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/tracking/v0/trackers/{TrackerName}/list-positions";
                resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", function () { return input.TrackerName; }, "{TrackerName}", false);
                body = JSON.stringify(__assign(__assign({}, (input.MaxResults != null && { MaxResults: input.MaxResults })), (input.NextToken != null && { NextToken: input.NextToken })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListGeofenceCollectionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/geofencing/v0/list-collections";
                body = JSON.stringify(__assign(__assign({}, (input.MaxResults != null && { MaxResults: input.MaxResults })), (input.NextToken != null && { NextToken: input.NextToken })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "geofencing." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListGeofencesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/geofencing/v0/collections/{CollectionName}/list-geofences";
                resolvedPath = __resolvedPath(resolvedPath, input, "CollectionName", function () { return input.CollectionName; }, "{CollectionName}", false);
                body = JSON.stringify(__assign(__assign({}, (input.MaxResults != null && { MaxResults: input.MaxResults })), (input.NextToken != null && { NextToken: input.NextToken })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "geofencing." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListMapsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/maps/v0/list-maps";
                body = JSON.stringify(__assign(__assign({}, (input.MaxResults != null && { MaxResults: input.MaxResults })), (input.NextToken != null && { NextToken: input.NextToken })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "maps." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListPlaceIndexesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/places/v0/list-indexes";
                body = JSON.stringify(__assign(__assign({}, (input.MaxResults != null && { MaxResults: input.MaxResults })), (input.NextToken != null && { NextToken: input.NextToken })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "places." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListRouteCalculatorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/routes/v0/list-calculators";
                body = JSON.stringify(__assign(__assign({}, (input.MaxResults != null && { MaxResults: input.MaxResults })), (input.NextToken != null && { NextToken: input.NextToken })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "routes." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/tags/{ResourceArn}";
                resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", function () { return input.ResourceArn; }, "{ResourceArn}", false);
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "metadata." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListTrackerConsumersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/tracking/v0/trackers/{TrackerName}/list-consumers";
                resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", function () { return input.TrackerName; }, "{TrackerName}", false);
                body = JSON.stringify(__assign(__assign({}, (input.MaxResults != null && { MaxResults: input.MaxResults })), (input.NextToken != null && { NextToken: input.NextToken })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListTrackersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/tracking/v0/list-trackers";
                body = JSON.stringify(__assign(__assign({}, (input.MaxResults != null && { MaxResults: input.MaxResults })), (input.NextToken != null && { NextToken: input.NextToken })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PutGeofenceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}";
                resolvedPath = __resolvedPath(resolvedPath, input, "CollectionName", function () { return input.CollectionName; }, "{CollectionName}", false);
                resolvedPath = __resolvedPath(resolvedPath, input, "GeofenceId", function () { return input.GeofenceId; }, "{GeofenceId}", false);
                body = JSON.stringify(__assign({}, (input.Geometry != null && { Geometry: serializeAws_restJson1GeofenceGeometry(input.Geometry, context) })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "geofencing." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1SearchPlaceIndexForPositionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/places/v0/indexes/{IndexName}/search/position";
                resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", function () { return input.IndexName; }, "{IndexName}", false);
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Language != null && { Language: input.Language })), (input.MaxResults != null && { MaxResults: input.MaxResults })), (input.Position != null && { Position: serializeAws_restJson1Position(input.Position, context) })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "places." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1SearchPlaceIndexForSuggestionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/places/v0/indexes/{IndexName}/search/suggestions";
                resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", function () { return input.IndexName; }, "{IndexName}", false);
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BiasPosition != null && { BiasPosition: serializeAws_restJson1Position(input.BiasPosition, context) })), (input.FilterBBox != null && { FilterBBox: serializeAws_restJson1BoundingBox(input.FilterBBox, context) })), (input.FilterCountries != null && {
                    FilterCountries: serializeAws_restJson1CountryCodeList(input.FilterCountries, context),
                })), (input.Language != null && { Language: input.Language })), (input.MaxResults != null && { MaxResults: input.MaxResults })), (input.Text != null && { Text: input.Text })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "places." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1SearchPlaceIndexForTextCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/places/v0/indexes/{IndexName}/search/text";
                resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", function () { return input.IndexName; }, "{IndexName}", false);
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BiasPosition != null && { BiasPosition: serializeAws_restJson1Position(input.BiasPosition, context) })), (input.FilterBBox != null && { FilterBBox: serializeAws_restJson1BoundingBox(input.FilterBBox, context) })), (input.FilterCountries != null && {
                    FilterCountries: serializeAws_restJson1CountryCodeList(input.FilterCountries, context),
                })), (input.Language != null && { Language: input.Language })), (input.MaxResults != null && { MaxResults: input.MaxResults })), (input.Text != null && { Text: input.Text })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "places." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/tags/{ResourceArn}";
                resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", function () { return input.ResourceArn; }, "{ResourceArn}", false);
                body = JSON.stringify(__assign({}, (input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "metadata." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, query, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/tags/{ResourceArn}";
                resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", function () { return input.ResourceArn; }, "{ResourceArn}", false);
                query = map({
                    tagKeys: [function () { return input.TagKeys !== void 0; }, function () { return (input.TagKeys || []).map(function (_entry) { return _entry; }); }],
                });
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "metadata." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateGeofenceCollectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") +
                    "/geofencing/v0/collections/{CollectionName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "CollectionName", function () { return input.CollectionName; }, "{CollectionName}", false);
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Description != null && { Description: input.Description })), (input.PricingPlan != null && { PricingPlan: input.PricingPlan })), (input.PricingPlanDataSource != null && { PricingPlanDataSource: input.PricingPlanDataSource })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "geofencing." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateMapCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/maps/v0/maps/{MapName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "MapName", function () { return input.MapName; }, "{MapName}", false);
                body = JSON.stringify(__assign(__assign({}, (input.Description != null && { Description: input.Description })), (input.PricingPlan != null && { PricingPlan: input.PricingPlan })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "maps." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdatePlaceIndexCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/places/v0/indexes/{IndexName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", function () { return input.IndexName; }, "{IndexName}", false);
                body = JSON.stringify(__assign(__assign(__assign({}, (input.DataSourceConfiguration != null && {
                    DataSourceConfiguration: serializeAws_restJson1DataSourceConfiguration(input.DataSourceConfiguration, context),
                })), (input.Description != null && { Description: input.Description })), (input.PricingPlan != null && { PricingPlan: input.PricingPlan })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "places." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateRouteCalculatorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/routes/v0/calculators/{CalculatorName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "CalculatorName", function () { return input.CalculatorName; }, "{CalculatorName}", false);
                body = JSON.stringify(__assign(__assign({}, (input.Description != null && { Description: input.Description })), (input.PricingPlan != null && { PricingPlan: input.PricingPlan })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "routes." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateTrackerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body, resolvedHostname;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/tracking/v0/trackers/{TrackerName}";
                resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", function () { return input.TrackerName; }, "{TrackerName}", false);
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.Description != null && { Description: input.Description })), (input.PositionFiltering != null && { PositionFiltering: input.PositionFiltering })), (input.PricingPlan != null && { PricingPlan: input.PricingPlan })), (input.PricingPlanDataSource != null && { PricingPlanDataSource: input.PricingPlanDataSource })));
                return [4, context.endpoint()];
            case 2:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "tracking." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1AssociateTrackerConsumerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1AssociateTrackerConsumerCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1AssociateTrackerConsumerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "ConflictException": return [3, 4];
                    case "com.amazonaws.location#ConflictException": return [3, 4];
                    case "InternalServerException": return [3, 6];
                    case "com.amazonaws.location#InternalServerException": return [3, 6];
                    case "ResourceNotFoundException": return [3, 8];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 8];
                    case "ServiceQuotaExceededException": return [3, 10];
                    case "com.amazonaws.location#ServiceQuotaExceededException": return [3, 10];
                    case "ThrottlingException": return [3, 12];
                    case "com.amazonaws.location#ThrottlingException": return [3, 12];
                    case "ValidationException": return [3, 14];
                    case "com.amazonaws.location#ValidationException": return [3, 14];
                }
                return [3, 16];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15: throw _d.sent();
            case 16:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 17;
            case 17: return [2];
        }
    });
}); };
export var deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Errors != null) {
                    contents.Errors = deserializeAws_restJson1BatchDeleteDevicePositionHistoryErrorList(data.Errors, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1BatchDeleteGeofenceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1BatchDeleteGeofenceCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Errors != null) {
                    contents.Errors = deserializeAws_restJson1BatchDeleteGeofenceErrorList(data.Errors, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1BatchDeleteGeofenceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1BatchEvaluateGeofencesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1BatchEvaluateGeofencesCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Errors != null) {
                    contents.Errors = deserializeAws_restJson1BatchEvaluateGeofencesErrorList(data.Errors, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1BatchEvaluateGeofencesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1BatchGetDevicePositionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1BatchGetDevicePositionCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.DevicePositions != null) {
                    contents.DevicePositions = deserializeAws_restJson1DevicePositionList(data.DevicePositions, context);
                }
                if (data.Errors != null) {
                    contents.Errors = deserializeAws_restJson1BatchGetDevicePositionErrorList(data.Errors, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1BatchGetDevicePositionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1BatchPutGeofenceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1BatchPutGeofenceCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Errors != null) {
                    contents.Errors = deserializeAws_restJson1BatchPutGeofenceErrorList(data.Errors, context);
                }
                if (data.Successes != null) {
                    contents.Successes = deserializeAws_restJson1BatchPutGeofenceSuccessList(data.Successes, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1BatchPutGeofenceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1BatchUpdateDevicePositionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1BatchUpdateDevicePositionCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Errors != null) {
                    contents.Errors = deserializeAws_restJson1BatchUpdateDevicePositionErrorList(data.Errors, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1BatchUpdateDevicePositionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1CalculateRouteCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1CalculateRouteCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Legs != null) {
                    contents.Legs = deserializeAws_restJson1LegList(data.Legs, context);
                }
                if (data.Summary != null) {
                    contents.Summary = deserializeAws_restJson1CalculateRouteSummary(data.Summary, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1CalculateRouteCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1CalculateRouteMatrixCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1CalculateRouteMatrixCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.RouteMatrix != null) {
                    contents.RouteMatrix = deserializeAws_restJson1RouteMatrix(data.RouteMatrix, context);
                }
                if (data.SnappedDeparturePositions != null) {
                    contents.SnappedDeparturePositions = deserializeAws_restJson1PositionList(data.SnappedDeparturePositions, context);
                }
                if (data.SnappedDestinationPositions != null) {
                    contents.SnappedDestinationPositions = deserializeAws_restJson1PositionList(data.SnappedDestinationPositions, context);
                }
                if (data.Summary != null) {
                    contents.Summary = deserializeAws_restJson1CalculateRouteMatrixSummary(data.Summary, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1CalculateRouteMatrixCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1CreateGeofenceCollectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1CreateGeofenceCollectionCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CollectionArn != null) {
                    contents.CollectionArn = __expectString(data.CollectionArn);
                }
                if (data.CollectionName != null) {
                    contents.CollectionName = __expectString(data.CollectionName);
                }
                if (data.CreateTime != null) {
                    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1CreateGeofenceCollectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "ConflictException": return [3, 4];
                    case "com.amazonaws.location#ConflictException": return [3, 4];
                    case "InternalServerException": return [3, 6];
                    case "com.amazonaws.location#InternalServerException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1CreateMapCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1CreateMapCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CreateTime != null) {
                    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
                }
                if (data.MapArn != null) {
                    contents.MapArn = __expectString(data.MapArn);
                }
                if (data.MapName != null) {
                    contents.MapName = __expectString(data.MapName);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1CreateMapCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "ConflictException": return [3, 4];
                    case "com.amazonaws.location#ConflictException": return [3, 4];
                    case "InternalServerException": return [3, 6];
                    case "com.amazonaws.location#InternalServerException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1CreatePlaceIndexCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1CreatePlaceIndexCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CreateTime != null) {
                    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
                }
                if (data.IndexArn != null) {
                    contents.IndexArn = __expectString(data.IndexArn);
                }
                if (data.IndexName != null) {
                    contents.IndexName = __expectString(data.IndexName);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1CreatePlaceIndexCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "ConflictException": return [3, 4];
                    case "com.amazonaws.location#ConflictException": return [3, 4];
                    case "InternalServerException": return [3, 6];
                    case "com.amazonaws.location#InternalServerException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1CreateRouteCalculatorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1CreateRouteCalculatorCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CalculatorArn != null) {
                    contents.CalculatorArn = __expectString(data.CalculatorArn);
                }
                if (data.CalculatorName != null) {
                    contents.CalculatorName = __expectString(data.CalculatorName);
                }
                if (data.CreateTime != null) {
                    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1CreateRouteCalculatorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "ConflictException": return [3, 4];
                    case "com.amazonaws.location#ConflictException": return [3, 4];
                    case "InternalServerException": return [3, 6];
                    case "com.amazonaws.location#InternalServerException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1CreateTrackerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1CreateTrackerCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CreateTime != null) {
                    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
                }
                if (data.TrackerArn != null) {
                    contents.TrackerArn = __expectString(data.TrackerArn);
                }
                if (data.TrackerName != null) {
                    contents.TrackerName = __expectString(data.TrackerName);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1CreateTrackerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "ConflictException": return [3, 4];
                    case "com.amazonaws.location#ConflictException": return [3, 4];
                    case "InternalServerException": return [3, 6];
                    case "com.amazonaws.location#InternalServerException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1DeleteGeofenceCollectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1DeleteGeofenceCollectionCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1DeleteGeofenceCollectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1DeleteMapCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1DeleteMapCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1DeleteMapCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1DeletePlaceIndexCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1DeletePlaceIndexCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1DeletePlaceIndexCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1DeleteRouteCalculatorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1DeleteRouteCalculatorCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1DeleteRouteCalculatorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1DeleteTrackerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1DeleteTrackerCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1DeleteTrackerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1DescribeGeofenceCollectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1DescribeGeofenceCollectionCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CollectionArn != null) {
                    contents.CollectionArn = __expectString(data.CollectionArn);
                }
                if (data.CollectionName != null) {
                    contents.CollectionName = __expectString(data.CollectionName);
                }
                if (data.CreateTime != null) {
                    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
                }
                if (data.Description != null) {
                    contents.Description = __expectString(data.Description);
                }
                if (data.KmsKeyId != null) {
                    contents.KmsKeyId = __expectString(data.KmsKeyId);
                }
                if (data.PricingPlan != null) {
                    contents.PricingPlan = __expectString(data.PricingPlan);
                }
                if (data.PricingPlanDataSource != null) {
                    contents.PricingPlanDataSource = __expectString(data.PricingPlanDataSource);
                }
                if (data.Tags != null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
                }
                if (data.UpdateTime != null) {
                    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1DescribeGeofenceCollectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1DescribeMapCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1DescribeMapCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Configuration != null) {
                    contents.Configuration = deserializeAws_restJson1MapConfiguration(data.Configuration, context);
                }
                if (data.CreateTime != null) {
                    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
                }
                if (data.DataSource != null) {
                    contents.DataSource = __expectString(data.DataSource);
                }
                if (data.Description != null) {
                    contents.Description = __expectString(data.Description);
                }
                if (data.MapArn != null) {
                    contents.MapArn = __expectString(data.MapArn);
                }
                if (data.MapName != null) {
                    contents.MapName = __expectString(data.MapName);
                }
                if (data.PricingPlan != null) {
                    contents.PricingPlan = __expectString(data.PricingPlan);
                }
                if (data.Tags != null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
                }
                if (data.UpdateTime != null) {
                    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1DescribeMapCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1DescribePlaceIndexCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1DescribePlaceIndexCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CreateTime != null) {
                    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
                }
                if (data.DataSource != null) {
                    contents.DataSource = __expectString(data.DataSource);
                }
                if (data.DataSourceConfiguration != null) {
                    contents.DataSourceConfiguration = deserializeAws_restJson1DataSourceConfiguration(data.DataSourceConfiguration, context);
                }
                if (data.Description != null) {
                    contents.Description = __expectString(data.Description);
                }
                if (data.IndexArn != null) {
                    contents.IndexArn = __expectString(data.IndexArn);
                }
                if (data.IndexName != null) {
                    contents.IndexName = __expectString(data.IndexName);
                }
                if (data.PricingPlan != null) {
                    contents.PricingPlan = __expectString(data.PricingPlan);
                }
                if (data.Tags != null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
                }
                if (data.UpdateTime != null) {
                    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1DescribePlaceIndexCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1DescribeRouteCalculatorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1DescribeRouteCalculatorCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CalculatorArn != null) {
                    contents.CalculatorArn = __expectString(data.CalculatorArn);
                }
                if (data.CalculatorName != null) {
                    contents.CalculatorName = __expectString(data.CalculatorName);
                }
                if (data.CreateTime != null) {
                    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
                }
                if (data.DataSource != null) {
                    contents.DataSource = __expectString(data.DataSource);
                }
                if (data.Description != null) {
                    contents.Description = __expectString(data.Description);
                }
                if (data.PricingPlan != null) {
                    contents.PricingPlan = __expectString(data.PricingPlan);
                }
                if (data.Tags != null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
                }
                if (data.UpdateTime != null) {
                    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1DescribeRouteCalculatorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1DescribeTrackerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1DescribeTrackerCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CreateTime != null) {
                    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
                }
                if (data.Description != null) {
                    contents.Description = __expectString(data.Description);
                }
                if (data.KmsKeyId != null) {
                    contents.KmsKeyId = __expectString(data.KmsKeyId);
                }
                if (data.PositionFiltering != null) {
                    contents.PositionFiltering = __expectString(data.PositionFiltering);
                }
                if (data.PricingPlan != null) {
                    contents.PricingPlan = __expectString(data.PricingPlan);
                }
                if (data.PricingPlanDataSource != null) {
                    contents.PricingPlanDataSource = __expectString(data.PricingPlanDataSource);
                }
                if (data.Tags != null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
                }
                if (data.TrackerArn != null) {
                    contents.TrackerArn = __expectString(data.TrackerArn);
                }
                if (data.TrackerName != null) {
                    contents.TrackerName = __expectString(data.TrackerName);
                }
                if (data.UpdateTime != null) {
                    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1DescribeTrackerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1DisassociateTrackerConsumerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1DisassociateTrackerConsumerCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1DisassociateTrackerConsumerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1GetDevicePositionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1GetDevicePositionCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Accuracy != null) {
                    contents.Accuracy = deserializeAws_restJson1PositionalAccuracy(data.Accuracy, context);
                }
                if (data.DeviceId != null) {
                    contents.DeviceId = __expectString(data.DeviceId);
                }
                if (data.Position != null) {
                    contents.Position = deserializeAws_restJson1Position(data.Position, context);
                }
                if (data.PositionProperties != null) {
                    contents.PositionProperties = deserializeAws_restJson1PropertyMap(data.PositionProperties, context);
                }
                if (data.ReceivedTime != null) {
                    contents.ReceivedTime = __expectNonNull(__parseRfc3339DateTime(data.ReceivedTime));
                }
                if (data.SampleTime != null) {
                    contents.SampleTime = __expectNonNull(__parseRfc3339DateTime(data.SampleTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1GetDevicePositionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1GetDevicePositionHistoryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1GetDevicePositionHistoryCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.DevicePositions != null) {
                    contents.DevicePositions = deserializeAws_restJson1DevicePositionList(data.DevicePositions, context);
                }
                if (data.NextToken != null) {
                    contents.NextToken = __expectString(data.NextToken);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1GetDevicePositionHistoryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1GetGeofenceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1GetGeofenceCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CreateTime != null) {
                    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
                }
                if (data.GeofenceId != null) {
                    contents.GeofenceId = __expectString(data.GeofenceId);
                }
                if (data.Geometry != null) {
                    contents.Geometry = deserializeAws_restJson1GeofenceGeometry(data.Geometry, context);
                }
                if (data.Status != null) {
                    contents.Status = __expectString(data.Status);
                }
                if (data.UpdateTime != null) {
                    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1GetGeofenceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1GetMapGlyphsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1GetMapGlyphsCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                    ContentType: [, output.headers["content-type"]],
                });
                return [4, collectBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents.Blob = data;
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1GetMapGlyphsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1GetMapSpritesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1GetMapSpritesCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                    ContentType: [, output.headers["content-type"]],
                });
                return [4, collectBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents.Blob = data;
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1GetMapSpritesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1GetMapStyleDescriptorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1GetMapStyleDescriptorCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                    ContentType: [, output.headers["content-type"]],
                });
                return [4, collectBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents.Blob = data;
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1GetMapStyleDescriptorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1GetMapTileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1GetMapTileCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                    ContentType: [, output.headers["content-type"]],
                });
                return [4, collectBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents.Blob = data;
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1GetMapTileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1GetPlaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1GetPlaceCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Place != null) {
                    contents.Place = deserializeAws_restJson1Place(data.Place, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1GetPlaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1ListDevicePositionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListDevicePositionsCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Entries != null) {
                    contents.Entries = deserializeAws_restJson1ListDevicePositionsResponseEntryList(data.Entries, context);
                }
                if (data.NextToken != null) {
                    contents.NextToken = __expectString(data.NextToken);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1ListDevicePositionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ThrottlingException": return [3, 6];
                    case "com.amazonaws.location#ThrottlingException": return [3, 6];
                    case "ValidationException": return [3, 8];
                    case "com.amazonaws.location#ValidationException": return [3, 8];
                }
                return [3, 10];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 11;
            case 11: return [2];
        }
    });
}); };
export var deserializeAws_restJson1ListGeofenceCollectionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListGeofenceCollectionsCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Entries != null) {
                    contents.Entries = deserializeAws_restJson1ListGeofenceCollectionsResponseEntryList(data.Entries, context);
                }
                if (data.NextToken != null) {
                    contents.NextToken = __expectString(data.NextToken);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1ListGeofenceCollectionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ThrottlingException": return [3, 6];
                    case "com.amazonaws.location#ThrottlingException": return [3, 6];
                    case "ValidationException": return [3, 8];
                    case "com.amazonaws.location#ValidationException": return [3, 8];
                }
                return [3, 10];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 11;
            case 11: return [2];
        }
    });
}); };
export var deserializeAws_restJson1ListGeofencesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListGeofencesCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Entries != null) {
                    contents.Entries = deserializeAws_restJson1ListGeofenceResponseEntryList(data.Entries, context);
                }
                if (data.NextToken != null) {
                    contents.NextToken = __expectString(data.NextToken);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1ListGeofencesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1ListMapsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListMapsCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Entries != null) {
                    contents.Entries = deserializeAws_restJson1ListMapsResponseEntryList(data.Entries, context);
                }
                if (data.NextToken != null) {
                    contents.NextToken = __expectString(data.NextToken);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1ListMapsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ThrottlingException": return [3, 6];
                    case "com.amazonaws.location#ThrottlingException": return [3, 6];
                    case "ValidationException": return [3, 8];
                    case "com.amazonaws.location#ValidationException": return [3, 8];
                }
                return [3, 10];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 11;
            case 11: return [2];
        }
    });
}); };
export var deserializeAws_restJson1ListPlaceIndexesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListPlaceIndexesCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Entries != null) {
                    contents.Entries = deserializeAws_restJson1ListPlaceIndexesResponseEntryList(data.Entries, context);
                }
                if (data.NextToken != null) {
                    contents.NextToken = __expectString(data.NextToken);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1ListPlaceIndexesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ThrottlingException": return [3, 6];
                    case "com.amazonaws.location#ThrottlingException": return [3, 6];
                    case "ValidationException": return [3, 8];
                    case "com.amazonaws.location#ValidationException": return [3, 8];
                }
                return [3, 10];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 11;
            case 11: return [2];
        }
    });
}); };
export var deserializeAws_restJson1ListRouteCalculatorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListRouteCalculatorsCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Entries != null) {
                    contents.Entries = deserializeAws_restJson1ListRouteCalculatorsResponseEntryList(data.Entries, context);
                }
                if (data.NextToken != null) {
                    contents.NextToken = __expectString(data.NextToken);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1ListRouteCalculatorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ThrottlingException": return [3, 6];
                    case "com.amazonaws.location#ThrottlingException": return [3, 6];
                    case "ValidationException": return [3, 8];
                    case "com.amazonaws.location#ValidationException": return [3, 8];
                }
                return [3, 10];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 11;
            case 11: return [2];
        }
    });
}); };
export var deserializeAws_restJson1ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListTagsForResourceCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Tags != null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1ListTrackerConsumersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListTrackerConsumersCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.ConsumerArns != null) {
                    contents.ConsumerArns = deserializeAws_restJson1ArnList(data.ConsumerArns, context);
                }
                if (data.NextToken != null) {
                    contents.NextToken = __expectString(data.NextToken);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1ListTrackerConsumersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1ListTrackersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListTrackersCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Entries != null) {
                    contents.Entries = deserializeAws_restJson1ListTrackersResponseEntryList(data.Entries, context);
                }
                if (data.NextToken != null) {
                    contents.NextToken = __expectString(data.NextToken);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1ListTrackersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ThrottlingException": return [3, 6];
                    case "com.amazonaws.location#ThrottlingException": return [3, 6];
                    case "ValidationException": return [3, 8];
                    case "com.amazonaws.location#ValidationException": return [3, 8];
                }
                return [3, 10];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 11;
            case 11: return [2];
        }
    });
}); };
export var deserializeAws_restJson1PutGeofenceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1PutGeofenceCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CreateTime != null) {
                    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
                }
                if (data.GeofenceId != null) {
                    contents.GeofenceId = __expectString(data.GeofenceId);
                }
                if (data.UpdateTime != null) {
                    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1PutGeofenceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "ConflictException": return [3, 4];
                    case "com.amazonaws.location#ConflictException": return [3, 4];
                    case "InternalServerException": return [3, 6];
                    case "com.amazonaws.location#InternalServerException": return [3, 6];
                    case "ResourceNotFoundException": return [3, 8];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 8];
                    case "ThrottlingException": return [3, 10];
                    case "com.amazonaws.location#ThrottlingException": return [3, 10];
                    case "ValidationException": return [3, 12];
                    case "com.amazonaws.location#ValidationException": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 15;
            case 15: return [2];
        }
    });
}); };
export var deserializeAws_restJson1SearchPlaceIndexForPositionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1SearchPlaceIndexForPositionCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Results != null) {
                    contents.Results = deserializeAws_restJson1SearchForPositionResultList(data.Results, context);
                }
                if (data.Summary != null) {
                    contents.Summary = deserializeAws_restJson1SearchPlaceIndexForPositionSummary(data.Summary, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1SearchPlaceIndexForPositionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Results != null) {
                    contents.Results = deserializeAws_restJson1SearchForSuggestionsResultList(data.Results, context);
                }
                if (data.Summary != null) {
                    contents.Summary = deserializeAws_restJson1SearchPlaceIndexForSuggestionsSummary(data.Summary, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1SearchPlaceIndexForTextCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1SearchPlaceIndexForTextCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.Results != null) {
                    contents.Results = deserializeAws_restJson1SearchForTextResultList(data.Results, context);
                }
                if (data.Summary != null) {
                    contents.Summary = deserializeAws_restJson1SearchPlaceIndexForTextSummary(data.Summary, context);
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1SearchPlaceIndexForTextCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1TagResourceCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1UntagResourceCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1UpdateGeofenceCollectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1UpdateGeofenceCollectionCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CollectionArn != null) {
                    contents.CollectionArn = __expectString(data.CollectionArn);
                }
                if (data.CollectionName != null) {
                    contents.CollectionName = __expectString(data.CollectionName);
                }
                if (data.UpdateTime != null) {
                    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1UpdateGeofenceCollectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1UpdateMapCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1UpdateMapCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.MapArn != null) {
                    contents.MapArn = __expectString(data.MapArn);
                }
                if (data.MapName != null) {
                    contents.MapName = __expectString(data.MapName);
                }
                if (data.UpdateTime != null) {
                    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1UpdateMapCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1UpdatePlaceIndexCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1UpdatePlaceIndexCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.IndexArn != null) {
                    contents.IndexArn = __expectString(data.IndexArn);
                }
                if (data.IndexName != null) {
                    contents.IndexName = __expectString(data.IndexName);
                }
                if (data.UpdateTime != null) {
                    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1UpdatePlaceIndexCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1UpdateRouteCalculatorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1UpdateRouteCalculatorCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.CalculatorArn != null) {
                    contents.CalculatorArn = __expectString(data.CalculatorArn);
                }
                if (data.CalculatorName != null) {
                    contents.CalculatorName = __expectString(data.CalculatorName);
                }
                if (data.UpdateTime != null) {
                    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1UpdateRouteCalculatorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
export var deserializeAws_restJson1UpdateTrackerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1UpdateTrackerCommandError(output, context)];
                }
                contents = map({
                    $metadata: deserializeMetadata(output),
                });
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.TrackerArn != null) {
                    contents.TrackerArn = __expectString(data.TrackerArn);
                }
                if (data.TrackerName != null) {
                    contents.TrackerName = __expectString(data.TrackerName);
                }
                if (data.UpdateTime != null) {
                    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
                }
                return [2, contents];
        }
    });
}); };
var deserializeAws_restJson1UpdateTrackerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseErrorBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3, 2];
                    case "com.amazonaws.location#AccessDeniedException": return [3, 2];
                    case "InternalServerException": return [3, 4];
                    case "com.amazonaws.location#InternalServerException": return [3, 4];
                    case "ResourceNotFoundException": return [3, 6];
                    case "com.amazonaws.location#ResourceNotFoundException": return [3, 6];
                    case "ThrottlingException": return [3, 8];
                    case "com.amazonaws.location#ThrottlingException": return [3, 8];
                    case "ValidationException": return [3, 10];
                    case "com.amazonaws.location#ValidationException": return [3, 10];
                }
                return [3, 12];
            case 2: return [4, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12:
                parsedBody = parsedOutput.body;
                throwDefaultError({
                    output: output,
                    parsedBody: parsedBody,
                    exceptionCtor: __BaseException,
                    errorCode: errorCode,
                });
                _d.label = 13;
            case 13: return [2];
        }
    });
}); };
var map = __map;
var deserializeAws_restJson1AccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.Message = __expectString(data.message);
        }
        exception = new AccessDeniedException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1ConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.Message = __expectString(data.message);
        }
        exception = new ConflictException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1InternalServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.Message = __expectString(data.message);
        }
        exception = new InternalServerException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.Message = __expectString(data.message);
        }
        exception = new ResourceNotFoundException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.Message = __expectString(data.message);
        }
        exception = new ServiceQuotaExceededException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.message != null) {
            contents.Message = __expectString(data.message);
        }
        exception = new ThrottlingException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1ValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = map({});
        data = parsedOutput.body;
        if (data.fieldList != null) {
            contents.FieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
        }
        if (data.message != null) {
            contents.Message = __expectString(data.message);
        }
        if (data.reason != null) {
            contents.Reason = __expectString(data.reason);
        }
        exception = new ValidationException(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var serializeAws_restJson1BatchPutGeofenceRequestEntry = function (input, context) {
    return __assign(__assign({}, (input.GeofenceId != null && { GeofenceId: input.GeofenceId })), (input.Geometry != null && { Geometry: serializeAws_restJson1GeofenceGeometry(input.Geometry, context) }));
};
var serializeAws_restJson1BatchPutGeofenceRequestEntryList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return serializeAws_restJson1BatchPutGeofenceRequestEntry(entry, context);
    });
};
var serializeAws_restJson1BoundingBox = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return __serializeFloat(entry);
    });
};
var serializeAws_restJson1CalculateRouteCarModeOptions = function (input, context) {
    return __assign(__assign({}, (input.AvoidFerries != null && { AvoidFerries: input.AvoidFerries })), (input.AvoidTolls != null && { AvoidTolls: input.AvoidTolls }));
};
var serializeAws_restJson1CalculateRouteTruckModeOptions = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AvoidFerries != null && { AvoidFerries: input.AvoidFerries })), (input.AvoidTolls != null && { AvoidTolls: input.AvoidTolls })), (input.Dimensions != null && { Dimensions: serializeAws_restJson1TruckDimensions(input.Dimensions, context) })), (input.Weight != null && { Weight: serializeAws_restJson1TruckWeight(input.Weight, context) }));
};
var serializeAws_restJson1Circle = function (input, context) {
    return __assign(__assign({}, (input.Center != null && { Center: serializeAws_restJson1Position(input.Center, context) })), (input.Radius != null && { Radius: __serializeFloat(input.Radius) }));
};
var serializeAws_restJson1CountryCodeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return entry;
    });
};
var serializeAws_restJson1DataSourceConfiguration = function (input, context) {
    return __assign({}, (input.IntendedUse != null && { IntendedUse: input.IntendedUse }));
};
var serializeAws_restJson1DeviceIdsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return entry;
    });
};
var serializeAws_restJson1DevicePositionUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Accuracy != null && { Accuracy: serializeAws_restJson1PositionalAccuracy(input.Accuracy, context) })), (input.DeviceId != null && { DeviceId: input.DeviceId })), (input.Position != null && { Position: serializeAws_restJson1Position(input.Position, context) })), (input.PositionProperties != null && {
        PositionProperties: serializeAws_restJson1PropertyMap(input.PositionProperties, context),
    })), (input.SampleTime != null && { SampleTime: input.SampleTime.toISOString().split(".")[0] + "Z" }));
};
var serializeAws_restJson1DevicePositionUpdateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return serializeAws_restJson1DevicePositionUpdate(entry, context);
    });
};
var serializeAws_restJson1GeofenceGeometry = function (input, context) {
    return __assign(__assign({}, (input.Circle != null && { Circle: serializeAws_restJson1Circle(input.Circle, context) })), (input.Polygon != null && { Polygon: serializeAws_restJson1LinearRings(input.Polygon, context) }));
};
var serializeAws_restJson1IdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return entry;
    });
};
var serializeAws_restJson1LinearRing = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return serializeAws_restJson1Position(entry, context);
    });
};
var serializeAws_restJson1LinearRings = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return serializeAws_restJson1LinearRing(entry, context);
    });
};
var serializeAws_restJson1MapConfiguration = function (input, context) {
    return __assign({}, (input.Style != null && { Style: input.Style }));
};
var serializeAws_restJson1Position = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return __serializeFloat(entry);
    });
};
var serializeAws_restJson1PositionalAccuracy = function (input, context) {
    return __assign({}, (input.Horizontal != null && { Horizontal: __serializeFloat(input.Horizontal) }));
};
var serializeAws_restJson1PositionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return serializeAws_restJson1Position(entry, context);
    });
};
var serializeAws_restJson1PropertyMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1TagMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1TruckDimensions = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Height != null && { Height: __serializeFloat(input.Height) })), (input.Length != null && { Length: __serializeFloat(input.Length) })), (input.Unit != null && { Unit: input.Unit })), (input.Width != null && { Width: __serializeFloat(input.Width) }));
};
var serializeAws_restJson1TruckWeight = function (input, context) {
    return __assign(__assign({}, (input.Total != null && { Total: __serializeFloat(input.Total) })), (input.Unit != null && { Unit: input.Unit }));
};
var serializeAws_restJson1WaypointPositionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        return serializeAws_restJson1Position(entry, context);
    });
};
var deserializeAws_restJson1ArnList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return __expectString(entry);
    });
    return retVal;
};
var deserializeAws_restJson1BatchDeleteDevicePositionHistoryError = function (output, context) {
    return {
        DeviceId: __expectString(output.DeviceId),
        Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
    };
};
var deserializeAws_restJson1BatchDeleteDevicePositionHistoryErrorList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchDeleteDevicePositionHistoryError(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1BatchDeleteGeofenceError = function (output, context) {
    return {
        Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
        GeofenceId: __expectString(output.GeofenceId),
    };
};
var deserializeAws_restJson1BatchDeleteGeofenceErrorList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchDeleteGeofenceError(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1BatchEvaluateGeofencesError = function (output, context) {
    return {
        DeviceId: __expectString(output.DeviceId),
        Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
        SampleTime: output.SampleTime != null ? __expectNonNull(__parseRfc3339DateTime(output.SampleTime)) : undefined,
    };
};
var deserializeAws_restJson1BatchEvaluateGeofencesErrorList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchEvaluateGeofencesError(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1BatchGetDevicePositionError = function (output, context) {
    return {
        DeviceId: __expectString(output.DeviceId),
        Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
    };
};
var deserializeAws_restJson1BatchGetDevicePositionErrorList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchGetDevicePositionError(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1BatchItemError = function (output, context) {
    return {
        Code: __expectString(output.Code),
        Message: __expectString(output.Message),
    };
};
var deserializeAws_restJson1BatchPutGeofenceError = function (output, context) {
    return {
        Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
        GeofenceId: __expectString(output.GeofenceId),
    };
};
var deserializeAws_restJson1BatchPutGeofenceErrorList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchPutGeofenceError(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1BatchPutGeofenceSuccess = function (output, context) {
    return {
        CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
        GeofenceId: __expectString(output.GeofenceId),
        UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
    };
};
var deserializeAws_restJson1BatchPutGeofenceSuccessList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchPutGeofenceSuccess(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1BatchUpdateDevicePositionError = function (output, context) {
    return {
        DeviceId: __expectString(output.DeviceId),
        Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
        SampleTime: output.SampleTime != null ? __expectNonNull(__parseRfc3339DateTime(output.SampleTime)) : undefined,
    };
};
var deserializeAws_restJson1BatchUpdateDevicePositionErrorList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchUpdateDevicePositionError(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1BoundingBox = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return __limitedParseDouble(entry);
    });
    return retVal;
};
var deserializeAws_restJson1CalculateRouteMatrixSummary = function (output, context) {
    return {
        DataSource: __expectString(output.DataSource),
        DistanceUnit: __expectString(output.DistanceUnit),
        ErrorCount: __expectInt32(output.ErrorCount),
        RouteCount: __expectInt32(output.RouteCount),
    };
};
var deserializeAws_restJson1CalculateRouteSummary = function (output, context) {
    return {
        DataSource: __expectString(output.DataSource),
        Distance: __limitedParseDouble(output.Distance),
        DistanceUnit: __expectString(output.DistanceUnit),
        DurationSeconds: __limitedParseDouble(output.DurationSeconds),
        RouteBBox: output.RouteBBox != null ? deserializeAws_restJson1BoundingBox(output.RouteBBox, context) : undefined,
    };
};
var deserializeAws_restJson1Circle = function (output, context) {
    return {
        Center: output.Center != null ? deserializeAws_restJson1Position(output.Center, context) : undefined,
        Radius: __limitedParseDouble(output.Radius),
    };
};
var deserializeAws_restJson1CountryCodeList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return __expectString(entry);
    });
    return retVal;
};
var deserializeAws_restJson1DataSourceConfiguration = function (output, context) {
    return {
        IntendedUse: __expectString(output.IntendedUse),
    };
};
var deserializeAws_restJson1DevicePosition = function (output, context) {
    return {
        Accuracy: output.Accuracy != null ? deserializeAws_restJson1PositionalAccuracy(output.Accuracy, context) : undefined,
        DeviceId: __expectString(output.DeviceId),
        Position: output.Position != null ? deserializeAws_restJson1Position(output.Position, context) : undefined,
        PositionProperties: output.PositionProperties != null
            ? deserializeAws_restJson1PropertyMap(output.PositionProperties, context)
            : undefined,
        ReceivedTime: output.ReceivedTime != null ? __expectNonNull(__parseRfc3339DateTime(output.ReceivedTime)) : undefined,
        SampleTime: output.SampleTime != null ? __expectNonNull(__parseRfc3339DateTime(output.SampleTime)) : undefined,
    };
};
var deserializeAws_restJson1DevicePositionList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DevicePosition(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1GeofenceGeometry = function (output, context) {
    return {
        Circle: output.Circle != null ? deserializeAws_restJson1Circle(output.Circle, context) : undefined,
        Polygon: output.Polygon != null ? deserializeAws_restJson1LinearRings(output.Polygon, context) : undefined,
    };
};
var deserializeAws_restJson1Leg = function (output, context) {
    return {
        Distance: __limitedParseDouble(output.Distance),
        DurationSeconds: __limitedParseDouble(output.DurationSeconds),
        EndPosition: output.EndPosition != null ? deserializeAws_restJson1Position(output.EndPosition, context) : undefined,
        Geometry: output.Geometry != null ? deserializeAws_restJson1LegGeometry(output.Geometry, context) : undefined,
        StartPosition: output.StartPosition != null ? deserializeAws_restJson1Position(output.StartPosition, context) : undefined,
        Steps: output.Steps != null ? deserializeAws_restJson1StepList(output.Steps, context) : undefined,
    };
};
var deserializeAws_restJson1LegGeometry = function (output, context) {
    return {
        LineString: output.LineString != null ? deserializeAws_restJson1LineString(output.LineString, context) : undefined,
    };
};
var deserializeAws_restJson1LegList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Leg(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1LinearRing = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Position(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1LinearRings = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LinearRing(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1LineString = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Position(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1ListDevicePositionsResponseEntry = function (output, context) {
    return {
        Accuracy: output.Accuracy != null ? deserializeAws_restJson1PositionalAccuracy(output.Accuracy, context) : undefined,
        DeviceId: __expectString(output.DeviceId),
        Position: output.Position != null ? deserializeAws_restJson1Position(output.Position, context) : undefined,
        PositionProperties: output.PositionProperties != null
            ? deserializeAws_restJson1PropertyMap(output.PositionProperties, context)
            : undefined,
        SampleTime: output.SampleTime != null ? __expectNonNull(__parseRfc3339DateTime(output.SampleTime)) : undefined,
    };
};
var deserializeAws_restJson1ListDevicePositionsResponseEntryList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListDevicePositionsResponseEntry(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1ListGeofenceCollectionsResponseEntry = function (output, context) {
    return {
        CollectionName: __expectString(output.CollectionName),
        CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
        Description: __expectString(output.Description),
        PricingPlan: __expectString(output.PricingPlan),
        PricingPlanDataSource: __expectString(output.PricingPlanDataSource),
        UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
    };
};
var deserializeAws_restJson1ListGeofenceCollectionsResponseEntryList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListGeofenceCollectionsResponseEntry(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1ListGeofenceResponseEntry = function (output, context) {
    return {
        CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
        GeofenceId: __expectString(output.GeofenceId),
        Geometry: output.Geometry != null ? deserializeAws_restJson1GeofenceGeometry(output.Geometry, context) : undefined,
        Status: __expectString(output.Status),
        UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
    };
};
var deserializeAws_restJson1ListGeofenceResponseEntryList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListGeofenceResponseEntry(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1ListMapsResponseEntry = function (output, context) {
    return {
        CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
        DataSource: __expectString(output.DataSource),
        Description: __expectString(output.Description),
        MapName: __expectString(output.MapName),
        PricingPlan: __expectString(output.PricingPlan),
        UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
    };
};
var deserializeAws_restJson1ListMapsResponseEntryList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListMapsResponseEntry(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1ListPlaceIndexesResponseEntry = function (output, context) {
    return {
        CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
        DataSource: __expectString(output.DataSource),
        Description: __expectString(output.Description),
        IndexName: __expectString(output.IndexName),
        PricingPlan: __expectString(output.PricingPlan),
        UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
    };
};
var deserializeAws_restJson1ListPlaceIndexesResponseEntryList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListPlaceIndexesResponseEntry(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1ListRouteCalculatorsResponseEntry = function (output, context) {
    return {
        CalculatorName: __expectString(output.CalculatorName),
        CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
        DataSource: __expectString(output.DataSource),
        Description: __expectString(output.Description),
        PricingPlan: __expectString(output.PricingPlan),
        UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
    };
};
var deserializeAws_restJson1ListRouteCalculatorsResponseEntryList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListRouteCalculatorsResponseEntry(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1ListTrackersResponseEntry = function (output, context) {
    return {
        CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
        Description: __expectString(output.Description),
        PricingPlan: __expectString(output.PricingPlan),
        PricingPlanDataSource: __expectString(output.PricingPlanDataSource),
        TrackerName: __expectString(output.TrackerName),
        UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
    };
};
var deserializeAws_restJson1ListTrackersResponseEntryList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListTrackersResponseEntry(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1MapConfiguration = function (output, context) {
    return {
        Style: __expectString(output.Style),
    };
};
var deserializeAws_restJson1Place = function (output, context) {
    return {
        AddressNumber: __expectString(output.AddressNumber),
        Country: __expectString(output.Country),
        Geometry: output.Geometry != null ? deserializeAws_restJson1PlaceGeometry(output.Geometry, context) : undefined,
        Interpolated: __expectBoolean(output.Interpolated),
        Label: __expectString(output.Label),
        Municipality: __expectString(output.Municipality),
        Neighborhood: __expectString(output.Neighborhood),
        PostalCode: __expectString(output.PostalCode),
        Region: __expectString(output.Region),
        Street: __expectString(output.Street),
        SubRegion: __expectString(output.SubRegion),
        TimeZone: output.TimeZone != null ? deserializeAws_restJson1TimeZone(output.TimeZone, context) : undefined,
        UnitNumber: __expectString(output.UnitNumber),
        UnitType: __expectString(output.UnitType),
    };
};
var deserializeAws_restJson1PlaceGeometry = function (output, context) {
    return {
        Point: output.Point != null ? deserializeAws_restJson1Position(output.Point, context) : undefined,
    };
};
var deserializeAws_restJson1Position = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return __limitedParseDouble(entry);
    });
    return retVal;
};
var deserializeAws_restJson1PositionalAccuracy = function (output, context) {
    return {
        Horizontal: __limitedParseDouble(output.Horizontal),
    };
};
var deserializeAws_restJson1PositionList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Position(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1PropertyMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = __expectString(value), _b));
    }, {});
};
var deserializeAws_restJson1RouteMatrix = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RouteMatrixRow(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1RouteMatrixEntry = function (output, context) {
    return {
        Distance: __limitedParseDouble(output.Distance),
        DurationSeconds: __limitedParseDouble(output.DurationSeconds),
        Error: output.Error != null ? deserializeAws_restJson1RouteMatrixEntryError(output.Error, context) : undefined,
    };
};
var deserializeAws_restJson1RouteMatrixEntryError = function (output, context) {
    return {
        Code: __expectString(output.Code),
        Message: __expectString(output.Message),
    };
};
var deserializeAws_restJson1RouteMatrixRow = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RouteMatrixEntry(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1SearchForPositionResult = function (output, context) {
    return {
        Distance: __limitedParseDouble(output.Distance),
        Place: output.Place != null ? deserializeAws_restJson1Place(output.Place, context) : undefined,
        PlaceId: __expectString(output.PlaceId),
    };
};
var deserializeAws_restJson1SearchForPositionResultList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SearchForPositionResult(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1SearchForSuggestionsResult = function (output, context) {
    return {
        PlaceId: __expectString(output.PlaceId),
        Text: __expectString(output.Text),
    };
};
var deserializeAws_restJson1SearchForSuggestionsResultList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SearchForSuggestionsResult(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1SearchForTextResult = function (output, context) {
    return {
        Distance: __limitedParseDouble(output.Distance),
        Place: output.Place != null ? deserializeAws_restJson1Place(output.Place, context) : undefined,
        PlaceId: __expectString(output.PlaceId),
        Relevance: __limitedParseDouble(output.Relevance),
    };
};
var deserializeAws_restJson1SearchForTextResultList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SearchForTextResult(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1SearchPlaceIndexForPositionSummary = function (output, context) {
    return {
        DataSource: __expectString(output.DataSource),
        Language: __expectString(output.Language),
        MaxResults: __expectInt32(output.MaxResults),
        Position: output.Position != null ? deserializeAws_restJson1Position(output.Position, context) : undefined,
    };
};
var deserializeAws_restJson1SearchPlaceIndexForSuggestionsSummary = function (output, context) {
    return {
        BiasPosition: output.BiasPosition != null ? deserializeAws_restJson1Position(output.BiasPosition, context) : undefined,
        DataSource: __expectString(output.DataSource),
        FilterBBox: output.FilterBBox != null ? deserializeAws_restJson1BoundingBox(output.FilterBBox, context) : undefined,
        FilterCountries: output.FilterCountries != null
            ? deserializeAws_restJson1CountryCodeList(output.FilterCountries, context)
            : undefined,
        Language: __expectString(output.Language),
        MaxResults: __expectInt32(output.MaxResults),
        Text: __expectString(output.Text),
    };
};
var deserializeAws_restJson1SearchPlaceIndexForTextSummary = function (output, context) {
    return {
        BiasPosition: output.BiasPosition != null ? deserializeAws_restJson1Position(output.BiasPosition, context) : undefined,
        DataSource: __expectString(output.DataSource),
        FilterBBox: output.FilterBBox != null ? deserializeAws_restJson1BoundingBox(output.FilterBBox, context) : undefined,
        FilterCountries: output.FilterCountries != null
            ? deserializeAws_restJson1CountryCodeList(output.FilterCountries, context)
            : undefined,
        Language: __expectString(output.Language),
        MaxResults: __expectInt32(output.MaxResults),
        ResultBBox: output.ResultBBox != null ? deserializeAws_restJson1BoundingBox(output.ResultBBox, context) : undefined,
        Text: __expectString(output.Text),
    };
};
var deserializeAws_restJson1Step = function (output, context) {
    return {
        Distance: __limitedParseDouble(output.Distance),
        DurationSeconds: __limitedParseDouble(output.DurationSeconds),
        EndPosition: output.EndPosition != null ? deserializeAws_restJson1Position(output.EndPosition, context) : undefined,
        GeometryOffset: __expectInt32(output.GeometryOffset),
        StartPosition: output.StartPosition != null ? deserializeAws_restJson1Position(output.StartPosition, context) : undefined,
    };
};
var deserializeAws_restJson1StepList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Step(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1TagMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = __expectString(value), _b));
    }, {});
};
var deserializeAws_restJson1TimeZone = function (output, context) {
    return {
        Name: __expectString(output.Name),
        Offset: __expectInt32(output.Offset),
    };
};
var deserializeAws_restJson1ValidationExceptionField = function (output, context) {
    return {
        Message: __expectString(output.message),
        Name: __expectString(output.name),
    };
};
var deserializeAws_restJson1ValidationExceptionFieldList = function (output, context) {
    var retVal = (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
    return retVal;
};
var deserializeMetadata = function (output) {
    var _a, _b;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_b = (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"]) !== null && _b !== void 0 ? _b : output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var isSerializableHeaderValue = function (value) {
    return value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
var parseErrorBody = function (errorBody, context) { return __awaiter(void 0, void 0, void 0, function () {
    var value;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4, parseBody(errorBody, context)];
            case 1:
                value = _b.sent();
                value.message = (_a = value.message) !== null && _a !== void 0 ? _a : value.Message;
                return [2, value];
        }
    });
}); };
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};
