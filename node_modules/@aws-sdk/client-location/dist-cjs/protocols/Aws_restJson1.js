"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1UpdateMapCommand = exports.serializeAws_restJson1UpdateGeofenceCollectionCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SearchPlaceIndexForTextCommand = exports.serializeAws_restJson1SearchPlaceIndexForSuggestionsCommand = exports.serializeAws_restJson1SearchPlaceIndexForPositionCommand = exports.serializeAws_restJson1PutGeofenceCommand = exports.serializeAws_restJson1ListTrackersCommand = exports.serializeAws_restJson1ListTrackerConsumersCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListRouteCalculatorsCommand = exports.serializeAws_restJson1ListPlaceIndexesCommand = exports.serializeAws_restJson1ListMapsCommand = exports.serializeAws_restJson1ListGeofencesCommand = exports.serializeAws_restJson1ListGeofenceCollectionsCommand = exports.serializeAws_restJson1ListDevicePositionsCommand = exports.serializeAws_restJson1GetPlaceCommand = exports.serializeAws_restJson1GetMapTileCommand = exports.serializeAws_restJson1GetMapStyleDescriptorCommand = exports.serializeAws_restJson1GetMapSpritesCommand = exports.serializeAws_restJson1GetMapGlyphsCommand = exports.serializeAws_restJson1GetGeofenceCommand = exports.serializeAws_restJson1GetDevicePositionHistoryCommand = exports.serializeAws_restJson1GetDevicePositionCommand = exports.serializeAws_restJson1DisassociateTrackerConsumerCommand = exports.serializeAws_restJson1DescribeTrackerCommand = exports.serializeAws_restJson1DescribeRouteCalculatorCommand = exports.serializeAws_restJson1DescribePlaceIndexCommand = exports.serializeAws_restJson1DescribeMapCommand = exports.serializeAws_restJson1DescribeGeofenceCollectionCommand = exports.serializeAws_restJson1DeleteTrackerCommand = exports.serializeAws_restJson1DeleteRouteCalculatorCommand = exports.serializeAws_restJson1DeletePlaceIndexCommand = exports.serializeAws_restJson1DeleteMapCommand = exports.serializeAws_restJson1DeleteGeofenceCollectionCommand = exports.serializeAws_restJson1CreateTrackerCommand = exports.serializeAws_restJson1CreateRouteCalculatorCommand = exports.serializeAws_restJson1CreatePlaceIndexCommand = exports.serializeAws_restJson1CreateMapCommand = exports.serializeAws_restJson1CreateGeofenceCollectionCommand = exports.serializeAws_restJson1CalculateRouteMatrixCommand = exports.serializeAws_restJson1CalculateRouteCommand = exports.serializeAws_restJson1BatchUpdateDevicePositionCommand = exports.serializeAws_restJson1BatchPutGeofenceCommand = exports.serializeAws_restJson1BatchGetDevicePositionCommand = exports.serializeAws_restJson1BatchEvaluateGeofencesCommand = exports.serializeAws_restJson1BatchDeleteGeofenceCommand = exports.serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = exports.serializeAws_restJson1AssociateTrackerConsumerCommand = void 0;
exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SearchPlaceIndexForTextCommand = exports.deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommand = exports.deserializeAws_restJson1SearchPlaceIndexForPositionCommand = exports.deserializeAws_restJson1PutGeofenceCommand = exports.deserializeAws_restJson1ListTrackersCommand = exports.deserializeAws_restJson1ListTrackerConsumersCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListRouteCalculatorsCommand = exports.deserializeAws_restJson1ListPlaceIndexesCommand = exports.deserializeAws_restJson1ListMapsCommand = exports.deserializeAws_restJson1ListGeofencesCommand = exports.deserializeAws_restJson1ListGeofenceCollectionsCommand = exports.deserializeAws_restJson1ListDevicePositionsCommand = exports.deserializeAws_restJson1GetPlaceCommand = exports.deserializeAws_restJson1GetMapTileCommand = exports.deserializeAws_restJson1GetMapStyleDescriptorCommand = exports.deserializeAws_restJson1GetMapSpritesCommand = exports.deserializeAws_restJson1GetMapGlyphsCommand = exports.deserializeAws_restJson1GetGeofenceCommand = exports.deserializeAws_restJson1GetDevicePositionHistoryCommand = exports.deserializeAws_restJson1GetDevicePositionCommand = exports.deserializeAws_restJson1DisassociateTrackerConsumerCommand = exports.deserializeAws_restJson1DescribeTrackerCommand = exports.deserializeAws_restJson1DescribeRouteCalculatorCommand = exports.deserializeAws_restJson1DescribePlaceIndexCommand = exports.deserializeAws_restJson1DescribeMapCommand = exports.deserializeAws_restJson1DescribeGeofenceCollectionCommand = exports.deserializeAws_restJson1DeleteTrackerCommand = exports.deserializeAws_restJson1DeleteRouteCalculatorCommand = exports.deserializeAws_restJson1DeletePlaceIndexCommand = exports.deserializeAws_restJson1DeleteMapCommand = exports.deserializeAws_restJson1DeleteGeofenceCollectionCommand = exports.deserializeAws_restJson1CreateTrackerCommand = exports.deserializeAws_restJson1CreateRouteCalculatorCommand = exports.deserializeAws_restJson1CreatePlaceIndexCommand = exports.deserializeAws_restJson1CreateMapCommand = exports.deserializeAws_restJson1CreateGeofenceCollectionCommand = exports.deserializeAws_restJson1CalculateRouteMatrixCommand = exports.deserializeAws_restJson1CalculateRouteCommand = exports.deserializeAws_restJson1BatchUpdateDevicePositionCommand = exports.deserializeAws_restJson1BatchPutGeofenceCommand = exports.deserializeAws_restJson1BatchGetDevicePositionCommand = exports.deserializeAws_restJson1BatchEvaluateGeofencesCommand = exports.deserializeAws_restJson1BatchDeleteGeofenceCommand = exports.deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = exports.deserializeAws_restJson1AssociateTrackerConsumerCommand = exports.serializeAws_restJson1UpdateTrackerCommand = exports.serializeAws_restJson1UpdateRouteCalculatorCommand = exports.serializeAws_restJson1UpdatePlaceIndexCommand = void 0;
exports.deserializeAws_restJson1UpdateTrackerCommand = exports.deserializeAws_restJson1UpdateRouteCalculatorCommand = exports.deserializeAws_restJson1UpdatePlaceIndexCommand = exports.deserializeAws_restJson1UpdateMapCommand = exports.deserializeAws_restJson1UpdateGeofenceCollectionCommand = exports.deserializeAws_restJson1UntagResourceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const LocationServiceException_1 = require("../models/LocationServiceException");
const models_0_1 = require("../models/models_0");
const serializeAws_restJson1AssociateTrackerConsumerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/tracking/v0/trackers/{TrackerName}/consumers";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TrackerName", () => input.TrackerName, "{TrackerName}", false);
    let body;
    body = JSON.stringify({
        ...(input.ConsumerArn != null && { ConsumerArn: input.ConsumerArn }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1AssociateTrackerConsumerCommand = serializeAws_restJson1AssociateTrackerConsumerCommand;
const serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/tracking/v0/trackers/{TrackerName}/delete-positions";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TrackerName", () => input.TrackerName, "{TrackerName}", false);
    let body;
    body = JSON.stringify({
        ...(input.DeviceIds != null && { DeviceIds: serializeAws_restJson1DeviceIdsList(input.DeviceIds, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand;
const serializeAws_restJson1BatchDeleteGeofenceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/geofencing/v0/collections/{CollectionName}/delete-geofences";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CollectionName", () => input.CollectionName, "{CollectionName}", false);
    let body;
    body = JSON.stringify({
        ...(input.GeofenceIds != null && { GeofenceIds: serializeAws_restJson1IdList(input.GeofenceIds, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchDeleteGeofenceCommand = serializeAws_restJson1BatchDeleteGeofenceCommand;
const serializeAws_restJson1BatchEvaluateGeofencesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/geofencing/v0/collections/{CollectionName}/positions";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CollectionName", () => input.CollectionName, "{CollectionName}", false);
    let body;
    body = JSON.stringify({
        ...(input.DevicePositionUpdates != null && {
            DevicePositionUpdates: serializeAws_restJson1DevicePositionUpdateList(input.DevicePositionUpdates, context),
        }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchEvaluateGeofencesCommand = serializeAws_restJson1BatchEvaluateGeofencesCommand;
const serializeAws_restJson1BatchGetDevicePositionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/tracking/v0/trackers/{TrackerName}/get-positions";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TrackerName", () => input.TrackerName, "{TrackerName}", false);
    let body;
    body = JSON.stringify({
        ...(input.DeviceIds != null && { DeviceIds: serializeAws_restJson1IdList(input.DeviceIds, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchGetDevicePositionCommand = serializeAws_restJson1BatchGetDevicePositionCommand;
const serializeAws_restJson1BatchPutGeofenceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/geofencing/v0/collections/{CollectionName}/put-geofences";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CollectionName", () => input.CollectionName, "{CollectionName}", false);
    let body;
    body = JSON.stringify({
        ...(input.Entries != null && {
            Entries: serializeAws_restJson1BatchPutGeofenceRequestEntryList(input.Entries, context),
        }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchPutGeofenceCommand = serializeAws_restJson1BatchPutGeofenceCommand;
const serializeAws_restJson1BatchUpdateDevicePositionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/tracking/v0/trackers/{TrackerName}/positions";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TrackerName", () => input.TrackerName, "{TrackerName}", false);
    let body;
    body = JSON.stringify({
        ...(input.Updates != null && { Updates: serializeAws_restJson1DevicePositionUpdateList(input.Updates, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1BatchUpdateDevicePositionCommand = serializeAws_restJson1BatchUpdateDevicePositionCommand;
const serializeAws_restJson1CalculateRouteCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/routes/v0/calculators/{CalculatorName}/calculate/route";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CalculatorName", () => input.CalculatorName, "{CalculatorName}", false);
    let body;
    body = JSON.stringify({
        ...(input.CarModeOptions != null && {
            CarModeOptions: serializeAws_restJson1CalculateRouteCarModeOptions(input.CarModeOptions, context),
        }),
        ...(input.DepartNow != null && { DepartNow: input.DepartNow }),
        ...(input.DeparturePosition != null && {
            DeparturePosition: serializeAws_restJson1Position(input.DeparturePosition, context),
        }),
        ...(input.DepartureTime != null && { DepartureTime: input.DepartureTime.toISOString().split(".")[0] + "Z" }),
        ...(input.DestinationPosition != null && {
            DestinationPosition: serializeAws_restJson1Position(input.DestinationPosition, context),
        }),
        ...(input.DistanceUnit != null && { DistanceUnit: input.DistanceUnit }),
        ...(input.IncludeLegGeometry != null && { IncludeLegGeometry: input.IncludeLegGeometry }),
        ...(input.TravelMode != null && { TravelMode: input.TravelMode }),
        ...(input.TruckModeOptions != null && {
            TruckModeOptions: serializeAws_restJson1CalculateRouteTruckModeOptions(input.TruckModeOptions, context),
        }),
        ...(input.WaypointPositions != null && {
            WaypointPositions: serializeAws_restJson1WaypointPositionList(input.WaypointPositions, context),
        }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "routes." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CalculateRouteCommand = serializeAws_restJson1CalculateRouteCommand;
const serializeAws_restJson1CalculateRouteMatrixCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/routes/v0/calculators/{CalculatorName}/calculate/route-matrix";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CalculatorName", () => input.CalculatorName, "{CalculatorName}", false);
    let body;
    body = JSON.stringify({
        ...(input.CarModeOptions != null && {
            CarModeOptions: serializeAws_restJson1CalculateRouteCarModeOptions(input.CarModeOptions, context),
        }),
        ...(input.DepartNow != null && { DepartNow: input.DepartNow }),
        ...(input.DeparturePositions != null && {
            DeparturePositions: serializeAws_restJson1PositionList(input.DeparturePositions, context),
        }),
        ...(input.DepartureTime != null && { DepartureTime: input.DepartureTime.toISOString().split(".")[0] + "Z" }),
        ...(input.DestinationPositions != null && {
            DestinationPositions: serializeAws_restJson1PositionList(input.DestinationPositions, context),
        }),
        ...(input.DistanceUnit != null && { DistanceUnit: input.DistanceUnit }),
        ...(input.TravelMode != null && { TravelMode: input.TravelMode }),
        ...(input.TruckModeOptions != null && {
            TruckModeOptions: serializeAws_restJson1CalculateRouteTruckModeOptions(input.TruckModeOptions, context),
        }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "routes." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CalculateRouteMatrixCommand = serializeAws_restJson1CalculateRouteMatrixCommand;
const serializeAws_restJson1CreateGeofenceCollectionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/geofencing/v0/collections";
    let body;
    body = JSON.stringify({
        ...(input.CollectionName != null && { CollectionName: input.CollectionName }),
        ...(input.Description != null && { Description: input.Description }),
        ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
        ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
        ...(input.PricingPlanDataSource != null && { PricingPlanDataSource: input.PricingPlanDataSource }),
        ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateGeofenceCollectionCommand = serializeAws_restJson1CreateGeofenceCollectionCommand;
const serializeAws_restJson1CreateMapCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps";
    let body;
    body = JSON.stringify({
        ...(input.Configuration != null && {
            Configuration: serializeAws_restJson1MapConfiguration(input.Configuration, context),
        }),
        ...(input.Description != null && { Description: input.Description }),
        ...(input.MapName != null && { MapName: input.MapName }),
        ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
        ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateMapCommand = serializeAws_restJson1CreateMapCommand;
const serializeAws_restJson1CreatePlaceIndexCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/places/v0/indexes";
    let body;
    body = JSON.stringify({
        ...(input.DataSource != null && { DataSource: input.DataSource }),
        ...(input.DataSourceConfiguration != null && {
            DataSourceConfiguration: serializeAws_restJson1DataSourceConfiguration(input.DataSourceConfiguration, context),
        }),
        ...(input.Description != null && { Description: input.Description }),
        ...(input.IndexName != null && { IndexName: input.IndexName }),
        ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
        ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreatePlaceIndexCommand = serializeAws_restJson1CreatePlaceIndexCommand;
const serializeAws_restJson1CreateRouteCalculatorCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/routes/v0/calculators";
    let body;
    body = JSON.stringify({
        ...(input.CalculatorName != null && { CalculatorName: input.CalculatorName }),
        ...(input.DataSource != null && { DataSource: input.DataSource }),
        ...(input.Description != null && { Description: input.Description }),
        ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
        ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "routes." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateRouteCalculatorCommand = serializeAws_restJson1CreateRouteCalculatorCommand;
const serializeAws_restJson1CreateTrackerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/tracking/v0/trackers";
    let body;
    body = JSON.stringify({
        ...(input.Description != null && { Description: input.Description }),
        ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
        ...(input.PositionFiltering != null && { PositionFiltering: input.PositionFiltering }),
        ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
        ...(input.PricingPlanDataSource != null && { PricingPlanDataSource: input.PricingPlanDataSource }),
        ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
        ...(input.TrackerName != null && { TrackerName: input.TrackerName }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateTrackerCommand = serializeAws_restJson1CreateTrackerCommand;
const serializeAws_restJson1DeleteGeofenceCollectionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/geofencing/v0/collections/{CollectionName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CollectionName", () => input.CollectionName, "{CollectionName}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteGeofenceCollectionCommand = serializeAws_restJson1DeleteGeofenceCollectionCommand;
const serializeAws_restJson1DeleteMapCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps/{MapName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "MapName", () => input.MapName, "{MapName}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteMapCommand = serializeAws_restJson1DeleteMapCommand;
const serializeAws_restJson1DeletePlaceIndexCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/places/v0/indexes/{IndexName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "IndexName", () => input.IndexName, "{IndexName}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeletePlaceIndexCommand = serializeAws_restJson1DeletePlaceIndexCommand;
const serializeAws_restJson1DeleteRouteCalculatorCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/routes/v0/calculators/{CalculatorName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CalculatorName", () => input.CalculatorName, "{CalculatorName}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "routes." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteRouteCalculatorCommand = serializeAws_restJson1DeleteRouteCalculatorCommand;
const serializeAws_restJson1DeleteTrackerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/tracking/v0/trackers/{TrackerName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TrackerName", () => input.TrackerName, "{TrackerName}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteTrackerCommand = serializeAws_restJson1DeleteTrackerCommand;
const serializeAws_restJson1DescribeGeofenceCollectionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/geofencing/v0/collections/{CollectionName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CollectionName", () => input.CollectionName, "{CollectionName}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeGeofenceCollectionCommand = serializeAws_restJson1DescribeGeofenceCollectionCommand;
const serializeAws_restJson1DescribeMapCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps/{MapName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "MapName", () => input.MapName, "{MapName}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeMapCommand = serializeAws_restJson1DescribeMapCommand;
const serializeAws_restJson1DescribePlaceIndexCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/places/v0/indexes/{IndexName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "IndexName", () => input.IndexName, "{IndexName}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribePlaceIndexCommand = serializeAws_restJson1DescribePlaceIndexCommand;
const serializeAws_restJson1DescribeRouteCalculatorCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/routes/v0/calculators/{CalculatorName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CalculatorName", () => input.CalculatorName, "{CalculatorName}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "routes." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeRouteCalculatorCommand = serializeAws_restJson1DescribeRouteCalculatorCommand;
const serializeAws_restJson1DescribeTrackerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/tracking/v0/trackers/{TrackerName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TrackerName", () => input.TrackerName, "{TrackerName}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeTrackerCommand = serializeAws_restJson1DescribeTrackerCommand;
const serializeAws_restJson1DisassociateTrackerConsumerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TrackerName", () => input.TrackerName, "{TrackerName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "ConsumerArn", () => input.ConsumerArn, "{ConsumerArn}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DisassociateTrackerConsumerCommand = serializeAws_restJson1DisassociateTrackerConsumerCommand;
const serializeAws_restJson1GetDevicePositionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TrackerName", () => input.TrackerName, "{TrackerName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "DeviceId", () => input.DeviceId, "{DeviceId}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetDevicePositionCommand = serializeAws_restJson1GetDevicePositionCommand;
const serializeAws_restJson1GetDevicePositionHistoryCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TrackerName", () => input.TrackerName, "{TrackerName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "DeviceId", () => input.DeviceId, "{DeviceId}", false);
    let body;
    body = JSON.stringify({
        ...(input.EndTimeExclusive != null && {
            EndTimeExclusive: input.EndTimeExclusive.toISOString().split(".")[0] + "Z",
        }),
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
        ...(input.StartTimeInclusive != null && {
            StartTimeInclusive: input.StartTimeInclusive.toISOString().split(".")[0] + "Z",
        }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetDevicePositionHistoryCommand = serializeAws_restJson1GetDevicePositionHistoryCommand;
const serializeAws_restJson1GetGeofenceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CollectionName", () => input.CollectionName, "{CollectionName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "GeofenceId", () => input.GeofenceId, "{GeofenceId}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetGeofenceCommand = serializeAws_restJson1GetGeofenceCommand;
const serializeAws_restJson1GetMapGlyphsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "MapName", () => input.MapName, "{MapName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FontStack", () => input.FontStack, "{FontStack}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FontUnicodeRange", () => input.FontUnicodeRange, "{FontUnicodeRange}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetMapGlyphsCommand = serializeAws_restJson1GetMapGlyphsCommand;
const serializeAws_restJson1GetMapSpritesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/maps/v0/maps/{MapName}/sprites/{FileName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "MapName", () => input.MapName, "{MapName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FileName", () => input.FileName, "{FileName}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetMapSpritesCommand = serializeAws_restJson1GetMapSpritesCommand;
const serializeAws_restJson1GetMapStyleDescriptorCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps/{MapName}/style-descriptor";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "MapName", () => input.MapName, "{MapName}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetMapStyleDescriptorCommand = serializeAws_restJson1GetMapStyleDescriptorCommand;
const serializeAws_restJson1GetMapTileCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "MapName", () => input.MapName, "{MapName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Z", () => input.Z, "{Z}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "X", () => input.X, "{X}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Y", () => input.Y, "{Y}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetMapTileCommand = serializeAws_restJson1GetMapTileCommand;
const serializeAws_restJson1GetPlaceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/places/v0/indexes/{IndexName}/places/{PlaceId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "IndexName", () => input.IndexName, "{IndexName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "PlaceId", () => input.PlaceId, "{PlaceId}", false);
    const query = map({
        language: [, input.Language],
    });
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetPlaceCommand = serializeAws_restJson1GetPlaceCommand;
const serializeAws_restJson1ListDevicePositionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/tracking/v0/trackers/{TrackerName}/list-positions";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TrackerName", () => input.TrackerName, "{TrackerName}", false);
    let body;
    body = JSON.stringify({
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListDevicePositionsCommand = serializeAws_restJson1ListDevicePositionsCommand;
const serializeAws_restJson1ListGeofenceCollectionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/geofencing/v0/list-collections";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListGeofenceCollectionsCommand = serializeAws_restJson1ListGeofenceCollectionsCommand;
const serializeAws_restJson1ListGeofencesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/geofencing/v0/collections/{CollectionName}/list-geofences";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CollectionName", () => input.CollectionName, "{CollectionName}", false);
    let body;
    body = JSON.stringify({
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListGeofencesCommand = serializeAws_restJson1ListGeofencesCommand;
const serializeAws_restJson1ListMapsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/list-maps";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListMapsCommand = serializeAws_restJson1ListMapsCommand;
const serializeAws_restJson1ListPlaceIndexesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/places/v0/list-indexes";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListPlaceIndexesCommand = serializeAws_restJson1ListPlaceIndexesCommand;
const serializeAws_restJson1ListRouteCalculatorsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/routes/v0/list-calculators";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "routes." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListRouteCalculatorsCommand = serializeAws_restJson1ListRouteCalculatorsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "ResourceArn", () => input.ResourceArn, "{ResourceArn}", false);
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "metadata." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1ListTrackerConsumersCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/tracking/v0/trackers/{TrackerName}/list-consumers";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TrackerName", () => input.TrackerName, "{TrackerName}", false);
    let body;
    body = JSON.stringify({
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTrackerConsumersCommand = serializeAws_restJson1ListTrackerConsumersCommand;
const serializeAws_restJson1ListTrackersCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/tracking/v0/list-trackers";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.NextToken != null && { NextToken: input.NextToken }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTrackersCommand = serializeAws_restJson1ListTrackersCommand;
const serializeAws_restJson1PutGeofenceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CollectionName", () => input.CollectionName, "{CollectionName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "GeofenceId", () => input.GeofenceId, "{GeofenceId}", false);
    let body;
    body = JSON.stringify({
        ...(input.Geometry != null && { Geometry: serializeAws_restJson1GeofenceGeometry(input.Geometry, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutGeofenceCommand = serializeAws_restJson1PutGeofenceCommand;
const serializeAws_restJson1SearchPlaceIndexForPositionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/places/v0/indexes/{IndexName}/search/position";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "IndexName", () => input.IndexName, "{IndexName}", false);
    let body;
    body = JSON.stringify({
        ...(input.Language != null && { Language: input.Language }),
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.Position != null && { Position: serializeAws_restJson1Position(input.Position, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SearchPlaceIndexForPositionCommand = serializeAws_restJson1SearchPlaceIndexForPositionCommand;
const serializeAws_restJson1SearchPlaceIndexForSuggestionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/places/v0/indexes/{IndexName}/search/suggestions";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "IndexName", () => input.IndexName, "{IndexName}", false);
    let body;
    body = JSON.stringify({
        ...(input.BiasPosition != null && { BiasPosition: serializeAws_restJson1Position(input.BiasPosition, context) }),
        ...(input.FilterBBox != null && { FilterBBox: serializeAws_restJson1BoundingBox(input.FilterBBox, context) }),
        ...(input.FilterCountries != null && {
            FilterCountries: serializeAws_restJson1CountryCodeList(input.FilterCountries, context),
        }),
        ...(input.Language != null && { Language: input.Language }),
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.Text != null && { Text: input.Text }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SearchPlaceIndexForSuggestionsCommand = serializeAws_restJson1SearchPlaceIndexForSuggestionsCommand;
const serializeAws_restJson1SearchPlaceIndexForTextCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/places/v0/indexes/{IndexName}/search/text";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "IndexName", () => input.IndexName, "{IndexName}", false);
    let body;
    body = JSON.stringify({
        ...(input.BiasPosition != null && { BiasPosition: serializeAws_restJson1Position(input.BiasPosition, context) }),
        ...(input.FilterBBox != null && { FilterBBox: serializeAws_restJson1BoundingBox(input.FilterBBox, context) }),
        ...(input.FilterCountries != null && {
            FilterCountries: serializeAws_restJson1CountryCodeList(input.FilterCountries, context),
        }),
        ...(input.Language != null && { Language: input.Language }),
        ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
        ...(input.Text != null && { Text: input.Text }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SearchPlaceIndexForTextCommand = serializeAws_restJson1SearchPlaceIndexForTextCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "ResourceArn", () => input.ResourceArn, "{ResourceArn}", false);
    let body;
    body = JSON.stringify({
        ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "metadata." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "ResourceArn", () => input.ResourceArn, "{ResourceArn}", false);
    const query = map({
        tagKeys: [() => input.TagKeys !== void 0, () => (input.TagKeys || []).map((_entry) => _entry)],
    });
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "metadata." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateGeofenceCollectionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` +
        "/geofencing/v0/collections/{CollectionName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CollectionName", () => input.CollectionName, "{CollectionName}", false);
    let body;
    body = JSON.stringify({
        ...(input.Description != null && { Description: input.Description }),
        ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
        ...(input.PricingPlanDataSource != null && { PricingPlanDataSource: input.PricingPlanDataSource }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "geofencing." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateGeofenceCollectionCommand = serializeAws_restJson1UpdateGeofenceCollectionCommand;
const serializeAws_restJson1UpdateMapCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps/{MapName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "MapName", () => input.MapName, "{MapName}", false);
    let body;
    body = JSON.stringify({
        ...(input.Description != null && { Description: input.Description }),
        ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "maps." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateMapCommand = serializeAws_restJson1UpdateMapCommand;
const serializeAws_restJson1UpdatePlaceIndexCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/places/v0/indexes/{IndexName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "IndexName", () => input.IndexName, "{IndexName}", false);
    let body;
    body = JSON.stringify({
        ...(input.DataSourceConfiguration != null && {
            DataSourceConfiguration: serializeAws_restJson1DataSourceConfiguration(input.DataSourceConfiguration, context),
        }),
        ...(input.Description != null && { Description: input.Description }),
        ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "places." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdatePlaceIndexCommand = serializeAws_restJson1UpdatePlaceIndexCommand;
const serializeAws_restJson1UpdateRouteCalculatorCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/routes/v0/calculators/{CalculatorName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CalculatorName", () => input.CalculatorName, "{CalculatorName}", false);
    let body;
    body = JSON.stringify({
        ...(input.Description != null && { Description: input.Description }),
        ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "routes." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateRouteCalculatorCommand = serializeAws_restJson1UpdateRouteCalculatorCommand;
const serializeAws_restJson1UpdateTrackerCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/tracking/v0/trackers/{TrackerName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TrackerName", () => input.TrackerName, "{TrackerName}", false);
    let body;
    body = JSON.stringify({
        ...(input.Description != null && { Description: input.Description }),
        ...(input.PositionFiltering != null && { PositionFiltering: input.PositionFiltering }),
        ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
        ...(input.PricingPlanDataSource != null && { PricingPlanDataSource: input.PricingPlanDataSource }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "tracking." + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateTrackerCommand = serializeAws_restJson1UpdateTrackerCommand;
const deserializeAws_restJson1AssociateTrackerConsumerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateTrackerConsumerCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restJson1AssociateTrackerConsumerCommand = deserializeAws_restJson1AssociateTrackerConsumerCommand;
const deserializeAws_restJson1AssociateTrackerConsumerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.location#ServiceQuotaExceededException":
            throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Errors != null) {
        contents.Errors = deserializeAws_restJson1BatchDeleteDevicePositionHistoryErrorList(data.Errors, context);
    }
    return contents;
};
exports.deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand;
const deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1BatchDeleteGeofenceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchDeleteGeofenceCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Errors != null) {
        contents.Errors = deserializeAws_restJson1BatchDeleteGeofenceErrorList(data.Errors, context);
    }
    return contents;
};
exports.deserializeAws_restJson1BatchDeleteGeofenceCommand = deserializeAws_restJson1BatchDeleteGeofenceCommand;
const deserializeAws_restJson1BatchDeleteGeofenceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1BatchEvaluateGeofencesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchEvaluateGeofencesCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Errors != null) {
        contents.Errors = deserializeAws_restJson1BatchEvaluateGeofencesErrorList(data.Errors, context);
    }
    return contents;
};
exports.deserializeAws_restJson1BatchEvaluateGeofencesCommand = deserializeAws_restJson1BatchEvaluateGeofencesCommand;
const deserializeAws_restJson1BatchEvaluateGeofencesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1BatchGetDevicePositionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchGetDevicePositionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.DevicePositions != null) {
        contents.DevicePositions = deserializeAws_restJson1DevicePositionList(data.DevicePositions, context);
    }
    if (data.Errors != null) {
        contents.Errors = deserializeAws_restJson1BatchGetDevicePositionErrorList(data.Errors, context);
    }
    return contents;
};
exports.deserializeAws_restJson1BatchGetDevicePositionCommand = deserializeAws_restJson1BatchGetDevicePositionCommand;
const deserializeAws_restJson1BatchGetDevicePositionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1BatchPutGeofenceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchPutGeofenceCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Errors != null) {
        contents.Errors = deserializeAws_restJson1BatchPutGeofenceErrorList(data.Errors, context);
    }
    if (data.Successes != null) {
        contents.Successes = deserializeAws_restJson1BatchPutGeofenceSuccessList(data.Successes, context);
    }
    return contents;
};
exports.deserializeAws_restJson1BatchPutGeofenceCommand = deserializeAws_restJson1BatchPutGeofenceCommand;
const deserializeAws_restJson1BatchPutGeofenceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1BatchUpdateDevicePositionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchUpdateDevicePositionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Errors != null) {
        contents.Errors = deserializeAws_restJson1BatchUpdateDevicePositionErrorList(data.Errors, context);
    }
    return contents;
};
exports.deserializeAws_restJson1BatchUpdateDevicePositionCommand = deserializeAws_restJson1BatchUpdateDevicePositionCommand;
const deserializeAws_restJson1BatchUpdateDevicePositionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1CalculateRouteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CalculateRouteCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Legs != null) {
        contents.Legs = deserializeAws_restJson1LegList(data.Legs, context);
    }
    if (data.Summary != null) {
        contents.Summary = deserializeAws_restJson1CalculateRouteSummary(data.Summary, context);
    }
    return contents;
};
exports.deserializeAws_restJson1CalculateRouteCommand = deserializeAws_restJson1CalculateRouteCommand;
const deserializeAws_restJson1CalculateRouteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1CalculateRouteMatrixCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CalculateRouteMatrixCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
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
    return contents;
};
exports.deserializeAws_restJson1CalculateRouteMatrixCommand = deserializeAws_restJson1CalculateRouteMatrixCommand;
const deserializeAws_restJson1CalculateRouteMatrixCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1CreateGeofenceCollectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateGeofenceCollectionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CollectionArn != null) {
        contents.CollectionArn = (0, smithy_client_1.expectString)(data.CollectionArn);
    }
    if (data.CollectionName != null) {
        contents.CollectionName = (0, smithy_client_1.expectString)(data.CollectionName);
    }
    if (data.CreateTime != null) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.CreateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1CreateGeofenceCollectionCommand = deserializeAws_restJson1CreateGeofenceCollectionCommand;
const deserializeAws_restJson1CreateGeofenceCollectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1CreateMapCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateMapCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CreateTime != null) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.CreateTime));
    }
    if (data.MapArn != null) {
        contents.MapArn = (0, smithy_client_1.expectString)(data.MapArn);
    }
    if (data.MapName != null) {
        contents.MapName = (0, smithy_client_1.expectString)(data.MapName);
    }
    return contents;
};
exports.deserializeAws_restJson1CreateMapCommand = deserializeAws_restJson1CreateMapCommand;
const deserializeAws_restJson1CreateMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1CreatePlaceIndexCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreatePlaceIndexCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CreateTime != null) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.CreateTime));
    }
    if (data.IndexArn != null) {
        contents.IndexArn = (0, smithy_client_1.expectString)(data.IndexArn);
    }
    if (data.IndexName != null) {
        contents.IndexName = (0, smithy_client_1.expectString)(data.IndexName);
    }
    return contents;
};
exports.deserializeAws_restJson1CreatePlaceIndexCommand = deserializeAws_restJson1CreatePlaceIndexCommand;
const deserializeAws_restJson1CreatePlaceIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1CreateRouteCalculatorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRouteCalculatorCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CalculatorArn != null) {
        contents.CalculatorArn = (0, smithy_client_1.expectString)(data.CalculatorArn);
    }
    if (data.CalculatorName != null) {
        contents.CalculatorName = (0, smithy_client_1.expectString)(data.CalculatorName);
    }
    if (data.CreateTime != null) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.CreateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1CreateRouteCalculatorCommand = deserializeAws_restJson1CreateRouteCalculatorCommand;
const deserializeAws_restJson1CreateRouteCalculatorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1CreateTrackerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateTrackerCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CreateTime != null) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.CreateTime));
    }
    if (data.TrackerArn != null) {
        contents.TrackerArn = (0, smithy_client_1.expectString)(data.TrackerArn);
    }
    if (data.TrackerName != null) {
        contents.TrackerName = (0, smithy_client_1.expectString)(data.TrackerName);
    }
    return contents;
};
exports.deserializeAws_restJson1CreateTrackerCommand = deserializeAws_restJson1CreateTrackerCommand;
const deserializeAws_restJson1CreateTrackerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1DeleteGeofenceCollectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteGeofenceCollectionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restJson1DeleteGeofenceCollectionCommand = deserializeAws_restJson1DeleteGeofenceCollectionCommand;
const deserializeAws_restJson1DeleteGeofenceCollectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1DeleteMapCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteMapCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restJson1DeleteMapCommand = deserializeAws_restJson1DeleteMapCommand;
const deserializeAws_restJson1DeleteMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1DeletePlaceIndexCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePlaceIndexCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restJson1DeletePlaceIndexCommand = deserializeAws_restJson1DeletePlaceIndexCommand;
const deserializeAws_restJson1DeletePlaceIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1DeleteRouteCalculatorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRouteCalculatorCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restJson1DeleteRouteCalculatorCommand = deserializeAws_restJson1DeleteRouteCalculatorCommand;
const deserializeAws_restJson1DeleteRouteCalculatorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1DeleteTrackerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteTrackerCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restJson1DeleteTrackerCommand = deserializeAws_restJson1DeleteTrackerCommand;
const deserializeAws_restJson1DeleteTrackerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1DescribeGeofenceCollectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeGeofenceCollectionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CollectionArn != null) {
        contents.CollectionArn = (0, smithy_client_1.expectString)(data.CollectionArn);
    }
    if (data.CollectionName != null) {
        contents.CollectionName = (0, smithy_client_1.expectString)(data.CollectionName);
    }
    if (data.CreateTime != null) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.CreateTime));
    }
    if (data.Description != null) {
        contents.Description = (0, smithy_client_1.expectString)(data.Description);
    }
    if (data.KmsKeyId != null) {
        contents.KmsKeyId = (0, smithy_client_1.expectString)(data.KmsKeyId);
    }
    if (data.PricingPlan != null) {
        contents.PricingPlan = (0, smithy_client_1.expectString)(data.PricingPlan);
    }
    if (data.PricingPlanDataSource != null) {
        contents.PricingPlanDataSource = (0, smithy_client_1.expectString)(data.PricingPlanDataSource);
    }
    if (data.Tags != null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.UpdateTime != null) {
        contents.UpdateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.UpdateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1DescribeGeofenceCollectionCommand = deserializeAws_restJson1DescribeGeofenceCollectionCommand;
const deserializeAws_restJson1DescribeGeofenceCollectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1DescribeMapCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeMapCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Configuration != null) {
        contents.Configuration = deserializeAws_restJson1MapConfiguration(data.Configuration, context);
    }
    if (data.CreateTime != null) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.CreateTime));
    }
    if (data.DataSource != null) {
        contents.DataSource = (0, smithy_client_1.expectString)(data.DataSource);
    }
    if (data.Description != null) {
        contents.Description = (0, smithy_client_1.expectString)(data.Description);
    }
    if (data.MapArn != null) {
        contents.MapArn = (0, smithy_client_1.expectString)(data.MapArn);
    }
    if (data.MapName != null) {
        contents.MapName = (0, smithy_client_1.expectString)(data.MapName);
    }
    if (data.PricingPlan != null) {
        contents.PricingPlan = (0, smithy_client_1.expectString)(data.PricingPlan);
    }
    if (data.Tags != null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.UpdateTime != null) {
        contents.UpdateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.UpdateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1DescribeMapCommand = deserializeAws_restJson1DescribeMapCommand;
const deserializeAws_restJson1DescribeMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1DescribePlaceIndexCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribePlaceIndexCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CreateTime != null) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.CreateTime));
    }
    if (data.DataSource != null) {
        contents.DataSource = (0, smithy_client_1.expectString)(data.DataSource);
    }
    if (data.DataSourceConfiguration != null) {
        contents.DataSourceConfiguration = deserializeAws_restJson1DataSourceConfiguration(data.DataSourceConfiguration, context);
    }
    if (data.Description != null) {
        contents.Description = (0, smithy_client_1.expectString)(data.Description);
    }
    if (data.IndexArn != null) {
        contents.IndexArn = (0, smithy_client_1.expectString)(data.IndexArn);
    }
    if (data.IndexName != null) {
        contents.IndexName = (0, smithy_client_1.expectString)(data.IndexName);
    }
    if (data.PricingPlan != null) {
        contents.PricingPlan = (0, smithy_client_1.expectString)(data.PricingPlan);
    }
    if (data.Tags != null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.UpdateTime != null) {
        contents.UpdateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.UpdateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1DescribePlaceIndexCommand = deserializeAws_restJson1DescribePlaceIndexCommand;
const deserializeAws_restJson1DescribePlaceIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1DescribeRouteCalculatorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeRouteCalculatorCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CalculatorArn != null) {
        contents.CalculatorArn = (0, smithy_client_1.expectString)(data.CalculatorArn);
    }
    if (data.CalculatorName != null) {
        contents.CalculatorName = (0, smithy_client_1.expectString)(data.CalculatorName);
    }
    if (data.CreateTime != null) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.CreateTime));
    }
    if (data.DataSource != null) {
        contents.DataSource = (0, smithy_client_1.expectString)(data.DataSource);
    }
    if (data.Description != null) {
        contents.Description = (0, smithy_client_1.expectString)(data.Description);
    }
    if (data.PricingPlan != null) {
        contents.PricingPlan = (0, smithy_client_1.expectString)(data.PricingPlan);
    }
    if (data.Tags != null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.UpdateTime != null) {
        contents.UpdateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.UpdateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1DescribeRouteCalculatorCommand = deserializeAws_restJson1DescribeRouteCalculatorCommand;
const deserializeAws_restJson1DescribeRouteCalculatorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1DescribeTrackerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeTrackerCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CreateTime != null) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.CreateTime));
    }
    if (data.Description != null) {
        contents.Description = (0, smithy_client_1.expectString)(data.Description);
    }
    if (data.KmsKeyId != null) {
        contents.KmsKeyId = (0, smithy_client_1.expectString)(data.KmsKeyId);
    }
    if (data.PositionFiltering != null) {
        contents.PositionFiltering = (0, smithy_client_1.expectString)(data.PositionFiltering);
    }
    if (data.PricingPlan != null) {
        contents.PricingPlan = (0, smithy_client_1.expectString)(data.PricingPlan);
    }
    if (data.PricingPlanDataSource != null) {
        contents.PricingPlanDataSource = (0, smithy_client_1.expectString)(data.PricingPlanDataSource);
    }
    if (data.Tags != null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.TrackerArn != null) {
        contents.TrackerArn = (0, smithy_client_1.expectString)(data.TrackerArn);
    }
    if (data.TrackerName != null) {
        contents.TrackerName = (0, smithy_client_1.expectString)(data.TrackerName);
    }
    if (data.UpdateTime != null) {
        contents.UpdateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.UpdateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1DescribeTrackerCommand = deserializeAws_restJson1DescribeTrackerCommand;
const deserializeAws_restJson1DescribeTrackerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1DisassociateTrackerConsumerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateTrackerConsumerCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restJson1DisassociateTrackerConsumerCommand = deserializeAws_restJson1DisassociateTrackerConsumerCommand;
const deserializeAws_restJson1DisassociateTrackerConsumerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1GetDevicePositionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDevicePositionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Accuracy != null) {
        contents.Accuracy = deserializeAws_restJson1PositionalAccuracy(data.Accuracy, context);
    }
    if (data.DeviceId != null) {
        contents.DeviceId = (0, smithy_client_1.expectString)(data.DeviceId);
    }
    if (data.Position != null) {
        contents.Position = deserializeAws_restJson1Position(data.Position, context);
    }
    if (data.PositionProperties != null) {
        contents.PositionProperties = deserializeAws_restJson1PropertyMap(data.PositionProperties, context);
    }
    if (data.ReceivedTime != null) {
        contents.ReceivedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.ReceivedTime));
    }
    if (data.SampleTime != null) {
        contents.SampleTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.SampleTime));
    }
    return contents;
};
exports.deserializeAws_restJson1GetDevicePositionCommand = deserializeAws_restJson1GetDevicePositionCommand;
const deserializeAws_restJson1GetDevicePositionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1GetDevicePositionHistoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDevicePositionHistoryCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.DevicePositions != null) {
        contents.DevicePositions = deserializeAws_restJson1DevicePositionList(data.DevicePositions, context);
    }
    if (data.NextToken != null) {
        contents.NextToken = (0, smithy_client_1.expectString)(data.NextToken);
    }
    return contents;
};
exports.deserializeAws_restJson1GetDevicePositionHistoryCommand = deserializeAws_restJson1GetDevicePositionHistoryCommand;
const deserializeAws_restJson1GetDevicePositionHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1GetGeofenceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGeofenceCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CreateTime != null) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.CreateTime));
    }
    if (data.GeofenceId != null) {
        contents.GeofenceId = (0, smithy_client_1.expectString)(data.GeofenceId);
    }
    if (data.Geometry != null) {
        contents.Geometry = deserializeAws_restJson1GeofenceGeometry(data.Geometry, context);
    }
    if (data.Status != null) {
        contents.Status = (0, smithy_client_1.expectString)(data.Status);
    }
    if (data.UpdateTime != null) {
        contents.UpdateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.UpdateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1GetGeofenceCommand = deserializeAws_restJson1GetGeofenceCommand;
const deserializeAws_restJson1GetGeofenceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1GetMapGlyphsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMapGlyphsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        ContentType: [, output.headers["content-type"]],
    });
    const data = await collectBody(output.body, context);
    contents.Blob = data;
    return contents;
};
exports.deserializeAws_restJson1GetMapGlyphsCommand = deserializeAws_restJson1GetMapGlyphsCommand;
const deserializeAws_restJson1GetMapGlyphsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1GetMapSpritesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMapSpritesCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        ContentType: [, output.headers["content-type"]],
    });
    const data = await collectBody(output.body, context);
    contents.Blob = data;
    return contents;
};
exports.deserializeAws_restJson1GetMapSpritesCommand = deserializeAws_restJson1GetMapSpritesCommand;
const deserializeAws_restJson1GetMapSpritesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1GetMapStyleDescriptorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMapStyleDescriptorCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        ContentType: [, output.headers["content-type"]],
    });
    const data = await collectBody(output.body, context);
    contents.Blob = data;
    return contents;
};
exports.deserializeAws_restJson1GetMapStyleDescriptorCommand = deserializeAws_restJson1GetMapStyleDescriptorCommand;
const deserializeAws_restJson1GetMapStyleDescriptorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1GetMapTileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMapTileCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        ContentType: [, output.headers["content-type"]],
    });
    const data = await collectBody(output.body, context);
    contents.Blob = data;
    return contents;
};
exports.deserializeAws_restJson1GetMapTileCommand = deserializeAws_restJson1GetMapTileCommand;
const deserializeAws_restJson1GetMapTileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1GetPlaceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPlaceCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Place != null) {
        contents.Place = deserializeAws_restJson1Place(data.Place, context);
    }
    return contents;
};
exports.deserializeAws_restJson1GetPlaceCommand = deserializeAws_restJson1GetPlaceCommand;
const deserializeAws_restJson1GetPlaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListDevicePositionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDevicePositionsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Entries != null) {
        contents.Entries = deserializeAws_restJson1ListDevicePositionsResponseEntryList(data.Entries, context);
    }
    if (data.NextToken != null) {
        contents.NextToken = (0, smithy_client_1.expectString)(data.NextToken);
    }
    return contents;
};
exports.deserializeAws_restJson1ListDevicePositionsCommand = deserializeAws_restJson1ListDevicePositionsCommand;
const deserializeAws_restJson1ListDevicePositionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListGeofenceCollectionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGeofenceCollectionsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Entries != null) {
        contents.Entries = deserializeAws_restJson1ListGeofenceCollectionsResponseEntryList(data.Entries, context);
    }
    if (data.NextToken != null) {
        contents.NextToken = (0, smithy_client_1.expectString)(data.NextToken);
    }
    return contents;
};
exports.deserializeAws_restJson1ListGeofenceCollectionsCommand = deserializeAws_restJson1ListGeofenceCollectionsCommand;
const deserializeAws_restJson1ListGeofenceCollectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListGeofencesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGeofencesCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Entries != null) {
        contents.Entries = deserializeAws_restJson1ListGeofenceResponseEntryList(data.Entries, context);
    }
    if (data.NextToken != null) {
        contents.NextToken = (0, smithy_client_1.expectString)(data.NextToken);
    }
    return contents;
};
exports.deserializeAws_restJson1ListGeofencesCommand = deserializeAws_restJson1ListGeofencesCommand;
const deserializeAws_restJson1ListGeofencesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListMapsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListMapsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Entries != null) {
        contents.Entries = deserializeAws_restJson1ListMapsResponseEntryList(data.Entries, context);
    }
    if (data.NextToken != null) {
        contents.NextToken = (0, smithy_client_1.expectString)(data.NextToken);
    }
    return contents;
};
exports.deserializeAws_restJson1ListMapsCommand = deserializeAws_restJson1ListMapsCommand;
const deserializeAws_restJson1ListMapsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListPlaceIndexesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPlaceIndexesCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Entries != null) {
        contents.Entries = deserializeAws_restJson1ListPlaceIndexesResponseEntryList(data.Entries, context);
    }
    if (data.NextToken != null) {
        contents.NextToken = (0, smithy_client_1.expectString)(data.NextToken);
    }
    return contents;
};
exports.deserializeAws_restJson1ListPlaceIndexesCommand = deserializeAws_restJson1ListPlaceIndexesCommand;
const deserializeAws_restJson1ListPlaceIndexesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListRouteCalculatorsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRouteCalculatorsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Entries != null) {
        contents.Entries = deserializeAws_restJson1ListRouteCalculatorsResponseEntryList(data.Entries, context);
    }
    if (data.NextToken != null) {
        contents.NextToken = (0, smithy_client_1.expectString)(data.NextToken);
    }
    return contents;
};
exports.deserializeAws_restJson1ListRouteCalculatorsCommand = deserializeAws_restJson1ListRouteCalculatorsCommand;
const deserializeAws_restJson1ListRouteCalculatorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Tags != null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return contents;
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListTrackerConsumersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTrackerConsumersCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.ConsumerArns != null) {
        contents.ConsumerArns = deserializeAws_restJson1ArnList(data.ConsumerArns, context);
    }
    if (data.NextToken != null) {
        contents.NextToken = (0, smithy_client_1.expectString)(data.NextToken);
    }
    return contents;
};
exports.deserializeAws_restJson1ListTrackerConsumersCommand = deserializeAws_restJson1ListTrackerConsumersCommand;
const deserializeAws_restJson1ListTrackerConsumersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListTrackersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTrackersCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Entries != null) {
        contents.Entries = deserializeAws_restJson1ListTrackersResponseEntryList(data.Entries, context);
    }
    if (data.NextToken != null) {
        contents.NextToken = (0, smithy_client_1.expectString)(data.NextToken);
    }
    return contents;
};
exports.deserializeAws_restJson1ListTrackersCommand = deserializeAws_restJson1ListTrackersCommand;
const deserializeAws_restJson1ListTrackersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1PutGeofenceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutGeofenceCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CreateTime != null) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.CreateTime));
    }
    if (data.GeofenceId != null) {
        contents.GeofenceId = (0, smithy_client_1.expectString)(data.GeofenceId);
    }
    if (data.UpdateTime != null) {
        contents.UpdateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.UpdateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1PutGeofenceCommand = deserializeAws_restJson1PutGeofenceCommand;
const deserializeAws_restJson1PutGeofenceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.location#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1SearchPlaceIndexForPositionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchPlaceIndexForPositionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Results != null) {
        contents.Results = deserializeAws_restJson1SearchForPositionResultList(data.Results, context);
    }
    if (data.Summary != null) {
        contents.Summary = deserializeAws_restJson1SearchPlaceIndexForPositionSummary(data.Summary, context);
    }
    return contents;
};
exports.deserializeAws_restJson1SearchPlaceIndexForPositionCommand = deserializeAws_restJson1SearchPlaceIndexForPositionCommand;
const deserializeAws_restJson1SearchPlaceIndexForPositionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Results != null) {
        contents.Results = deserializeAws_restJson1SearchForSuggestionsResultList(data.Results, context);
    }
    if (data.Summary != null) {
        contents.Summary = deserializeAws_restJson1SearchPlaceIndexForSuggestionsSummary(data.Summary, context);
    }
    return contents;
};
exports.deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommand = deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommand;
const deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1SearchPlaceIndexForTextCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchPlaceIndexForTextCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Results != null) {
        contents.Results = deserializeAws_restJson1SearchForTextResultList(data.Results, context);
    }
    if (data.Summary != null) {
        contents.Summary = deserializeAws_restJson1SearchPlaceIndexForTextSummary(data.Summary, context);
    }
    return contents;
};
exports.deserializeAws_restJson1SearchPlaceIndexForTextCommand = deserializeAws_restJson1SearchPlaceIndexForTextCommand;
const deserializeAws_restJson1SearchPlaceIndexForTextCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagResourceCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagResourceCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1UpdateGeofenceCollectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateGeofenceCollectionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CollectionArn != null) {
        contents.CollectionArn = (0, smithy_client_1.expectString)(data.CollectionArn);
    }
    if (data.CollectionName != null) {
        contents.CollectionName = (0, smithy_client_1.expectString)(data.CollectionName);
    }
    if (data.UpdateTime != null) {
        contents.UpdateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.UpdateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1UpdateGeofenceCollectionCommand = deserializeAws_restJson1UpdateGeofenceCollectionCommand;
const deserializeAws_restJson1UpdateGeofenceCollectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1UpdateMapCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateMapCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.MapArn != null) {
        contents.MapArn = (0, smithy_client_1.expectString)(data.MapArn);
    }
    if (data.MapName != null) {
        contents.MapName = (0, smithy_client_1.expectString)(data.MapName);
    }
    if (data.UpdateTime != null) {
        contents.UpdateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.UpdateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1UpdateMapCommand = deserializeAws_restJson1UpdateMapCommand;
const deserializeAws_restJson1UpdateMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1UpdatePlaceIndexCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePlaceIndexCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.IndexArn != null) {
        contents.IndexArn = (0, smithy_client_1.expectString)(data.IndexArn);
    }
    if (data.IndexName != null) {
        contents.IndexName = (0, smithy_client_1.expectString)(data.IndexName);
    }
    if (data.UpdateTime != null) {
        contents.UpdateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.UpdateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1UpdatePlaceIndexCommand = deserializeAws_restJson1UpdatePlaceIndexCommand;
const deserializeAws_restJson1UpdatePlaceIndexCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1UpdateRouteCalculatorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRouteCalculatorCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CalculatorArn != null) {
        contents.CalculatorArn = (0, smithy_client_1.expectString)(data.CalculatorArn);
    }
    if (data.CalculatorName != null) {
        contents.CalculatorName = (0, smithy_client_1.expectString)(data.CalculatorName);
    }
    if (data.UpdateTime != null) {
        contents.UpdateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.UpdateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1UpdateRouteCalculatorCommand = deserializeAws_restJson1UpdateRouteCalculatorCommand;
const deserializeAws_restJson1UpdateRouteCalculatorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1UpdateTrackerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateTrackerCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.TrackerArn != null) {
        contents.TrackerArn = (0, smithy_client_1.expectString)(data.TrackerArn);
    }
    if (data.TrackerName != null) {
        contents.TrackerName = (0, smithy_client_1.expectString)(data.TrackerName);
    }
    if (data.UpdateTime != null) {
        contents.UpdateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.UpdateTime));
    }
    return contents;
};
exports.deserializeAws_restJson1UpdateTrackerCommand = deserializeAws_restJson1UpdateTrackerCommand;
const deserializeAws_restJson1UpdateTrackerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.location#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.location#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.location#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.location#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.location#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: LocationServiceException_1.LocationServiceException,
                errorCode,
            });
    }
};
const map = smithy_client_1.map;
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.Message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.Message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.ConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.Message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.Message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.Message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.ServiceQuotaExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.Message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.ThrottlingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data.fieldList != null) {
        contents.FieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
    }
    if (data.message != null) {
        contents.Message = (0, smithy_client_1.expectString)(data.message);
    }
    if (data.reason != null) {
        contents.Reason = (0, smithy_client_1.expectString)(data.reason);
    }
    const exception = new models_0_1.ValidationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const serializeAws_restJson1BatchPutGeofenceRequestEntry = (input, context) => {
    return {
        ...(input.GeofenceId != null && { GeofenceId: input.GeofenceId }),
        ...(input.Geometry != null && { Geometry: serializeAws_restJson1GeofenceGeometry(input.Geometry, context) }),
    };
};
const serializeAws_restJson1BatchPutGeofenceRequestEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_restJson1BatchPutGeofenceRequestEntry(entry, context);
    });
};
const serializeAws_restJson1BoundingBox = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.serializeFloat)(entry);
    });
};
const serializeAws_restJson1CalculateRouteCarModeOptions = (input, context) => {
    return {
        ...(input.AvoidFerries != null && { AvoidFerries: input.AvoidFerries }),
        ...(input.AvoidTolls != null && { AvoidTolls: input.AvoidTolls }),
    };
};
const serializeAws_restJson1CalculateRouteTruckModeOptions = (input, context) => {
    return {
        ...(input.AvoidFerries != null && { AvoidFerries: input.AvoidFerries }),
        ...(input.AvoidTolls != null && { AvoidTolls: input.AvoidTolls }),
        ...(input.Dimensions != null && { Dimensions: serializeAws_restJson1TruckDimensions(input.Dimensions, context) }),
        ...(input.Weight != null && { Weight: serializeAws_restJson1TruckWeight(input.Weight, context) }),
    };
};
const serializeAws_restJson1Circle = (input, context) => {
    return {
        ...(input.Center != null && { Center: serializeAws_restJson1Position(input.Center, context) }),
        ...(input.Radius != null && { Radius: (0, smithy_client_1.serializeFloat)(input.Radius) }),
    };
};
const serializeAws_restJson1CountryCodeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_restJson1DataSourceConfiguration = (input, context) => {
    return {
        ...(input.IntendedUse != null && { IntendedUse: input.IntendedUse }),
    };
};
const serializeAws_restJson1DeviceIdsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_restJson1DevicePositionUpdate = (input, context) => {
    return {
        ...(input.Accuracy != null && { Accuracy: serializeAws_restJson1PositionalAccuracy(input.Accuracy, context) }),
        ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
        ...(input.Position != null && { Position: serializeAws_restJson1Position(input.Position, context) }),
        ...(input.PositionProperties != null && {
            PositionProperties: serializeAws_restJson1PropertyMap(input.PositionProperties, context),
        }),
        ...(input.SampleTime != null && { SampleTime: input.SampleTime.toISOString().split(".")[0] + "Z" }),
    };
};
const serializeAws_restJson1DevicePositionUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_restJson1DevicePositionUpdate(entry, context);
    });
};
const serializeAws_restJson1GeofenceGeometry = (input, context) => {
    return {
        ...(input.Circle != null && { Circle: serializeAws_restJson1Circle(input.Circle, context) }),
        ...(input.Polygon != null && { Polygon: serializeAws_restJson1LinearRings(input.Polygon, context) }),
    };
};
const serializeAws_restJson1IdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_restJson1LinearRing = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_restJson1Position(entry, context);
    });
};
const serializeAws_restJson1LinearRings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_restJson1LinearRing(entry, context);
    });
};
const serializeAws_restJson1MapConfiguration = (input, context) => {
    return {
        ...(input.Style != null && { Style: input.Style }),
    };
};
const serializeAws_restJson1Position = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.serializeFloat)(entry);
    });
};
const serializeAws_restJson1PositionalAccuracy = (input, context) => {
    return {
        ...(input.Horizontal != null && { Horizontal: (0, smithy_client_1.serializeFloat)(input.Horizontal) }),
    };
};
const serializeAws_restJson1PositionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_restJson1Position(entry, context);
    });
};
const serializeAws_restJson1PropertyMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1TagMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1TruckDimensions = (input, context) => {
    return {
        ...(input.Height != null && { Height: (0, smithy_client_1.serializeFloat)(input.Height) }),
        ...(input.Length != null && { Length: (0, smithy_client_1.serializeFloat)(input.Length) }),
        ...(input.Unit != null && { Unit: input.Unit }),
        ...(input.Width != null && { Width: (0, smithy_client_1.serializeFloat)(input.Width) }),
    };
};
const serializeAws_restJson1TruckWeight = (input, context) => {
    return {
        ...(input.Total != null && { Total: (0, smithy_client_1.serializeFloat)(input.Total) }),
        ...(input.Unit != null && { Unit: input.Unit }),
    };
};
const serializeAws_restJson1WaypointPositionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_restJson1Position(entry, context);
    });
};
const deserializeAws_restJson1ArnList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return (0, smithy_client_1.expectString)(entry);
    });
    return retVal;
};
const deserializeAws_restJson1BatchDeleteDevicePositionHistoryError = (output, context) => {
    return {
        DeviceId: (0, smithy_client_1.expectString)(output.DeviceId),
        Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
    };
};
const deserializeAws_restJson1BatchDeleteDevicePositionHistoryErrorList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchDeleteDevicePositionHistoryError(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1BatchDeleteGeofenceError = (output, context) => {
    return {
        Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
        GeofenceId: (0, smithy_client_1.expectString)(output.GeofenceId),
    };
};
const deserializeAws_restJson1BatchDeleteGeofenceErrorList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchDeleteGeofenceError(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1BatchEvaluateGeofencesError = (output, context) => {
    return {
        DeviceId: (0, smithy_client_1.expectString)(output.DeviceId),
        Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
        SampleTime: output.SampleTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.SampleTime)) : undefined,
    };
};
const deserializeAws_restJson1BatchEvaluateGeofencesErrorList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchEvaluateGeofencesError(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1BatchGetDevicePositionError = (output, context) => {
    return {
        DeviceId: (0, smithy_client_1.expectString)(output.DeviceId),
        Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
    };
};
const deserializeAws_restJson1BatchGetDevicePositionErrorList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchGetDevicePositionError(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1BatchItemError = (output, context) => {
    return {
        Code: (0, smithy_client_1.expectString)(output.Code),
        Message: (0, smithy_client_1.expectString)(output.Message),
    };
};
const deserializeAws_restJson1BatchPutGeofenceError = (output, context) => {
    return {
        Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
        GeofenceId: (0, smithy_client_1.expectString)(output.GeofenceId),
    };
};
const deserializeAws_restJson1BatchPutGeofenceErrorList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchPutGeofenceError(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1BatchPutGeofenceSuccess = (output, context) => {
    return {
        CreateTime: output.CreateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.CreateTime)) : undefined,
        GeofenceId: (0, smithy_client_1.expectString)(output.GeofenceId),
        UpdateTime: output.UpdateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.UpdateTime)) : undefined,
    };
};
const deserializeAws_restJson1BatchPutGeofenceSuccessList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchPutGeofenceSuccess(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1BatchUpdateDevicePositionError = (output, context) => {
    return {
        DeviceId: (0, smithy_client_1.expectString)(output.DeviceId),
        Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
        SampleTime: output.SampleTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.SampleTime)) : undefined,
    };
};
const deserializeAws_restJson1BatchUpdateDevicePositionErrorList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchUpdateDevicePositionError(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1BoundingBox = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return (0, smithy_client_1.limitedParseDouble)(entry);
    });
    return retVal;
};
const deserializeAws_restJson1CalculateRouteMatrixSummary = (output, context) => {
    return {
        DataSource: (0, smithy_client_1.expectString)(output.DataSource),
        DistanceUnit: (0, smithy_client_1.expectString)(output.DistanceUnit),
        ErrorCount: (0, smithy_client_1.expectInt32)(output.ErrorCount),
        RouteCount: (0, smithy_client_1.expectInt32)(output.RouteCount),
    };
};
const deserializeAws_restJson1CalculateRouteSummary = (output, context) => {
    return {
        DataSource: (0, smithy_client_1.expectString)(output.DataSource),
        Distance: (0, smithy_client_1.limitedParseDouble)(output.Distance),
        DistanceUnit: (0, smithy_client_1.expectString)(output.DistanceUnit),
        DurationSeconds: (0, smithy_client_1.limitedParseDouble)(output.DurationSeconds),
        RouteBBox: output.RouteBBox != null ? deserializeAws_restJson1BoundingBox(output.RouteBBox, context) : undefined,
    };
};
const deserializeAws_restJson1Circle = (output, context) => {
    return {
        Center: output.Center != null ? deserializeAws_restJson1Position(output.Center, context) : undefined,
        Radius: (0, smithy_client_1.limitedParseDouble)(output.Radius),
    };
};
const deserializeAws_restJson1CountryCodeList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return (0, smithy_client_1.expectString)(entry);
    });
    return retVal;
};
const deserializeAws_restJson1DataSourceConfiguration = (output, context) => {
    return {
        IntendedUse: (0, smithy_client_1.expectString)(output.IntendedUse),
    };
};
const deserializeAws_restJson1DevicePosition = (output, context) => {
    return {
        Accuracy: output.Accuracy != null ? deserializeAws_restJson1PositionalAccuracy(output.Accuracy, context) : undefined,
        DeviceId: (0, smithy_client_1.expectString)(output.DeviceId),
        Position: output.Position != null ? deserializeAws_restJson1Position(output.Position, context) : undefined,
        PositionProperties: output.PositionProperties != null
            ? deserializeAws_restJson1PropertyMap(output.PositionProperties, context)
            : undefined,
        ReceivedTime: output.ReceivedTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.ReceivedTime)) : undefined,
        SampleTime: output.SampleTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.SampleTime)) : undefined,
    };
};
const deserializeAws_restJson1DevicePositionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DevicePosition(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1GeofenceGeometry = (output, context) => {
    return {
        Circle: output.Circle != null ? deserializeAws_restJson1Circle(output.Circle, context) : undefined,
        Polygon: output.Polygon != null ? deserializeAws_restJson1LinearRings(output.Polygon, context) : undefined,
    };
};
const deserializeAws_restJson1Leg = (output, context) => {
    return {
        Distance: (0, smithy_client_1.limitedParseDouble)(output.Distance),
        DurationSeconds: (0, smithy_client_1.limitedParseDouble)(output.DurationSeconds),
        EndPosition: output.EndPosition != null ? deserializeAws_restJson1Position(output.EndPosition, context) : undefined,
        Geometry: output.Geometry != null ? deserializeAws_restJson1LegGeometry(output.Geometry, context) : undefined,
        StartPosition: output.StartPosition != null ? deserializeAws_restJson1Position(output.StartPosition, context) : undefined,
        Steps: output.Steps != null ? deserializeAws_restJson1StepList(output.Steps, context) : undefined,
    };
};
const deserializeAws_restJson1LegGeometry = (output, context) => {
    return {
        LineString: output.LineString != null ? deserializeAws_restJson1LineString(output.LineString, context) : undefined,
    };
};
const deserializeAws_restJson1LegList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Leg(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1LinearRing = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Position(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1LinearRings = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LinearRing(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1LineString = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Position(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1ListDevicePositionsResponseEntry = (output, context) => {
    return {
        Accuracy: output.Accuracy != null ? deserializeAws_restJson1PositionalAccuracy(output.Accuracy, context) : undefined,
        DeviceId: (0, smithy_client_1.expectString)(output.DeviceId),
        Position: output.Position != null ? deserializeAws_restJson1Position(output.Position, context) : undefined,
        PositionProperties: output.PositionProperties != null
            ? deserializeAws_restJson1PropertyMap(output.PositionProperties, context)
            : undefined,
        SampleTime: output.SampleTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.SampleTime)) : undefined,
    };
};
const deserializeAws_restJson1ListDevicePositionsResponseEntryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListDevicePositionsResponseEntry(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1ListGeofenceCollectionsResponseEntry = (output, context) => {
    return {
        CollectionName: (0, smithy_client_1.expectString)(output.CollectionName),
        CreateTime: output.CreateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.CreateTime)) : undefined,
        Description: (0, smithy_client_1.expectString)(output.Description),
        PricingPlan: (0, smithy_client_1.expectString)(output.PricingPlan),
        PricingPlanDataSource: (0, smithy_client_1.expectString)(output.PricingPlanDataSource),
        UpdateTime: output.UpdateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.UpdateTime)) : undefined,
    };
};
const deserializeAws_restJson1ListGeofenceCollectionsResponseEntryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListGeofenceCollectionsResponseEntry(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1ListGeofenceResponseEntry = (output, context) => {
    return {
        CreateTime: output.CreateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.CreateTime)) : undefined,
        GeofenceId: (0, smithy_client_1.expectString)(output.GeofenceId),
        Geometry: output.Geometry != null ? deserializeAws_restJson1GeofenceGeometry(output.Geometry, context) : undefined,
        Status: (0, smithy_client_1.expectString)(output.Status),
        UpdateTime: output.UpdateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.UpdateTime)) : undefined,
    };
};
const deserializeAws_restJson1ListGeofenceResponseEntryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListGeofenceResponseEntry(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1ListMapsResponseEntry = (output, context) => {
    return {
        CreateTime: output.CreateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.CreateTime)) : undefined,
        DataSource: (0, smithy_client_1.expectString)(output.DataSource),
        Description: (0, smithy_client_1.expectString)(output.Description),
        MapName: (0, smithy_client_1.expectString)(output.MapName),
        PricingPlan: (0, smithy_client_1.expectString)(output.PricingPlan),
        UpdateTime: output.UpdateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.UpdateTime)) : undefined,
    };
};
const deserializeAws_restJson1ListMapsResponseEntryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListMapsResponseEntry(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1ListPlaceIndexesResponseEntry = (output, context) => {
    return {
        CreateTime: output.CreateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.CreateTime)) : undefined,
        DataSource: (0, smithy_client_1.expectString)(output.DataSource),
        Description: (0, smithy_client_1.expectString)(output.Description),
        IndexName: (0, smithy_client_1.expectString)(output.IndexName),
        PricingPlan: (0, smithy_client_1.expectString)(output.PricingPlan),
        UpdateTime: output.UpdateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.UpdateTime)) : undefined,
    };
};
const deserializeAws_restJson1ListPlaceIndexesResponseEntryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListPlaceIndexesResponseEntry(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1ListRouteCalculatorsResponseEntry = (output, context) => {
    return {
        CalculatorName: (0, smithy_client_1.expectString)(output.CalculatorName),
        CreateTime: output.CreateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.CreateTime)) : undefined,
        DataSource: (0, smithy_client_1.expectString)(output.DataSource),
        Description: (0, smithy_client_1.expectString)(output.Description),
        PricingPlan: (0, smithy_client_1.expectString)(output.PricingPlan),
        UpdateTime: output.UpdateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.UpdateTime)) : undefined,
    };
};
const deserializeAws_restJson1ListRouteCalculatorsResponseEntryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListRouteCalculatorsResponseEntry(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1ListTrackersResponseEntry = (output, context) => {
    return {
        CreateTime: output.CreateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.CreateTime)) : undefined,
        Description: (0, smithy_client_1.expectString)(output.Description),
        PricingPlan: (0, smithy_client_1.expectString)(output.PricingPlan),
        PricingPlanDataSource: (0, smithy_client_1.expectString)(output.PricingPlanDataSource),
        TrackerName: (0, smithy_client_1.expectString)(output.TrackerName),
        UpdateTime: output.UpdateTime != null ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.UpdateTime)) : undefined,
    };
};
const deserializeAws_restJson1ListTrackersResponseEntryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListTrackersResponseEntry(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1MapConfiguration = (output, context) => {
    return {
        Style: (0, smithy_client_1.expectString)(output.Style),
    };
};
const deserializeAws_restJson1Place = (output, context) => {
    return {
        AddressNumber: (0, smithy_client_1.expectString)(output.AddressNumber),
        Country: (0, smithy_client_1.expectString)(output.Country),
        Geometry: output.Geometry != null ? deserializeAws_restJson1PlaceGeometry(output.Geometry, context) : undefined,
        Interpolated: (0, smithy_client_1.expectBoolean)(output.Interpolated),
        Label: (0, smithy_client_1.expectString)(output.Label),
        Municipality: (0, smithy_client_1.expectString)(output.Municipality),
        Neighborhood: (0, smithy_client_1.expectString)(output.Neighborhood),
        PostalCode: (0, smithy_client_1.expectString)(output.PostalCode),
        Region: (0, smithy_client_1.expectString)(output.Region),
        Street: (0, smithy_client_1.expectString)(output.Street),
        SubRegion: (0, smithy_client_1.expectString)(output.SubRegion),
        TimeZone: output.TimeZone != null ? deserializeAws_restJson1TimeZone(output.TimeZone, context) : undefined,
        UnitNumber: (0, smithy_client_1.expectString)(output.UnitNumber),
        UnitType: (0, smithy_client_1.expectString)(output.UnitType),
    };
};
const deserializeAws_restJson1PlaceGeometry = (output, context) => {
    return {
        Point: output.Point != null ? deserializeAws_restJson1Position(output.Point, context) : undefined,
    };
};
const deserializeAws_restJson1Position = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return (0, smithy_client_1.limitedParseDouble)(entry);
    });
    return retVal;
};
const deserializeAws_restJson1PositionalAccuracy = (output, context) => {
    return {
        Horizontal: (0, smithy_client_1.limitedParseDouble)(output.Horizontal),
    };
};
const deserializeAws_restJson1PositionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Position(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1PropertyMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: (0, smithy_client_1.expectString)(value),
        };
    }, {});
};
const deserializeAws_restJson1RouteMatrix = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RouteMatrixRow(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1RouteMatrixEntry = (output, context) => {
    return {
        Distance: (0, smithy_client_1.limitedParseDouble)(output.Distance),
        DurationSeconds: (0, smithy_client_1.limitedParseDouble)(output.DurationSeconds),
        Error: output.Error != null ? deserializeAws_restJson1RouteMatrixEntryError(output.Error, context) : undefined,
    };
};
const deserializeAws_restJson1RouteMatrixEntryError = (output, context) => {
    return {
        Code: (0, smithy_client_1.expectString)(output.Code),
        Message: (0, smithy_client_1.expectString)(output.Message),
    };
};
const deserializeAws_restJson1RouteMatrixRow = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RouteMatrixEntry(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1SearchForPositionResult = (output, context) => {
    return {
        Distance: (0, smithy_client_1.limitedParseDouble)(output.Distance),
        Place: output.Place != null ? deserializeAws_restJson1Place(output.Place, context) : undefined,
        PlaceId: (0, smithy_client_1.expectString)(output.PlaceId),
    };
};
const deserializeAws_restJson1SearchForPositionResultList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SearchForPositionResult(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1SearchForSuggestionsResult = (output, context) => {
    return {
        PlaceId: (0, smithy_client_1.expectString)(output.PlaceId),
        Text: (0, smithy_client_1.expectString)(output.Text),
    };
};
const deserializeAws_restJson1SearchForSuggestionsResultList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SearchForSuggestionsResult(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1SearchForTextResult = (output, context) => {
    return {
        Distance: (0, smithy_client_1.limitedParseDouble)(output.Distance),
        Place: output.Place != null ? deserializeAws_restJson1Place(output.Place, context) : undefined,
        PlaceId: (0, smithy_client_1.expectString)(output.PlaceId),
        Relevance: (0, smithy_client_1.limitedParseDouble)(output.Relevance),
    };
};
const deserializeAws_restJson1SearchForTextResultList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SearchForTextResult(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1SearchPlaceIndexForPositionSummary = (output, context) => {
    return {
        DataSource: (0, smithy_client_1.expectString)(output.DataSource),
        Language: (0, smithy_client_1.expectString)(output.Language),
        MaxResults: (0, smithy_client_1.expectInt32)(output.MaxResults),
        Position: output.Position != null ? deserializeAws_restJson1Position(output.Position, context) : undefined,
    };
};
const deserializeAws_restJson1SearchPlaceIndexForSuggestionsSummary = (output, context) => {
    return {
        BiasPosition: output.BiasPosition != null ? deserializeAws_restJson1Position(output.BiasPosition, context) : undefined,
        DataSource: (0, smithy_client_1.expectString)(output.DataSource),
        FilterBBox: output.FilterBBox != null ? deserializeAws_restJson1BoundingBox(output.FilterBBox, context) : undefined,
        FilterCountries: output.FilterCountries != null
            ? deserializeAws_restJson1CountryCodeList(output.FilterCountries, context)
            : undefined,
        Language: (0, smithy_client_1.expectString)(output.Language),
        MaxResults: (0, smithy_client_1.expectInt32)(output.MaxResults),
        Text: (0, smithy_client_1.expectString)(output.Text),
    };
};
const deserializeAws_restJson1SearchPlaceIndexForTextSummary = (output, context) => {
    return {
        BiasPosition: output.BiasPosition != null ? deserializeAws_restJson1Position(output.BiasPosition, context) : undefined,
        DataSource: (0, smithy_client_1.expectString)(output.DataSource),
        FilterBBox: output.FilterBBox != null ? deserializeAws_restJson1BoundingBox(output.FilterBBox, context) : undefined,
        FilterCountries: output.FilterCountries != null
            ? deserializeAws_restJson1CountryCodeList(output.FilterCountries, context)
            : undefined,
        Language: (0, smithy_client_1.expectString)(output.Language),
        MaxResults: (0, smithy_client_1.expectInt32)(output.MaxResults),
        ResultBBox: output.ResultBBox != null ? deserializeAws_restJson1BoundingBox(output.ResultBBox, context) : undefined,
        Text: (0, smithy_client_1.expectString)(output.Text),
    };
};
const deserializeAws_restJson1Step = (output, context) => {
    return {
        Distance: (0, smithy_client_1.limitedParseDouble)(output.Distance),
        DurationSeconds: (0, smithy_client_1.limitedParseDouble)(output.DurationSeconds),
        EndPosition: output.EndPosition != null ? deserializeAws_restJson1Position(output.EndPosition, context) : undefined,
        GeometryOffset: (0, smithy_client_1.expectInt32)(output.GeometryOffset),
        StartPosition: output.StartPosition != null ? deserializeAws_restJson1Position(output.StartPosition, context) : undefined,
    };
};
const deserializeAws_restJson1StepList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Step(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1TagMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: (0, smithy_client_1.expectString)(value),
        };
    }, {});
};
const deserializeAws_restJson1TimeZone = (output, context) => {
    return {
        Name: (0, smithy_client_1.expectString)(output.Name),
        Offset: (0, smithy_client_1.expectInt32)(output.Offset),
    };
};
const deserializeAws_restJson1ValidationExceptionField = (output, context) => {
    return {
        Message: (0, smithy_client_1.expectString)(output.message),
        Name: (0, smithy_client_1.expectString)(output.name),
    };
};
const deserializeAws_restJson1ValidationExceptionFieldList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
    return retVal;
};
const deserializeMetadata = (output) => {
    var _a, _b;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_b = (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"]) !== null && _b !== void 0 ? _b : output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    var _a;
    const value = await parseBody(errorBody, context);
    value.message = (_a = value.message) !== null && _a !== void 0 ? _a : value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
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
    const headerKey = findKey(output.headers, "x-amzn-errortype");
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
