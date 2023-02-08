"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateRouteMatrixSummaryFilterSensitiveLog = exports.RouteMatrixEntryFilterSensitiveLog = exports.RouteMatrixEntryErrorFilterSensitiveLog = exports.CalculateRouteMatrixRequestFilterSensitiveLog = exports.CalculateRouteResponseFilterSensitiveLog = exports.CalculateRouteSummaryFilterSensitiveLog = exports.LegFilterSensitiveLog = exports.StepFilterSensitiveLog = exports.LegGeometryFilterSensitiveLog = exports.CalculateRouteRequestFilterSensitiveLog = exports.CalculateRouteTruckModeOptionsFilterSensitiveLog = exports.TruckWeightFilterSensitiveLog = exports.TruckDimensionsFilterSensitiveLog = exports.CalculateRouteCarModeOptionsFilterSensitiveLog = exports.BatchUpdateDevicePositionResponseFilterSensitiveLog = exports.BatchUpdateDevicePositionErrorFilterSensitiveLog = exports.BatchUpdateDevicePositionRequestFilterSensitiveLog = exports.BatchPutGeofenceResponseFilterSensitiveLog = exports.BatchPutGeofenceSuccessFilterSensitiveLog = exports.BatchPutGeofenceErrorFilterSensitiveLog = exports.BatchPutGeofenceRequestFilterSensitiveLog = exports.BatchPutGeofenceRequestEntryFilterSensitiveLog = exports.GeofenceGeometryFilterSensitiveLog = exports.CircleFilterSensitiveLog = exports.BatchGetDevicePositionResponseFilterSensitiveLog = exports.BatchGetDevicePositionErrorFilterSensitiveLog = exports.DevicePositionFilterSensitiveLog = exports.BatchGetDevicePositionRequestFilterSensitiveLog = exports.BatchEvaluateGeofencesResponseFilterSensitiveLog = exports.BatchEvaluateGeofencesErrorFilterSensitiveLog = exports.BatchEvaluateGeofencesRequestFilterSensitiveLog = exports.DevicePositionUpdateFilterSensitiveLog = exports.PositionalAccuracyFilterSensitiveLog = exports.BatchDeleteGeofenceResponseFilterSensitiveLog = exports.BatchDeleteGeofenceErrorFilterSensitiveLog = exports.BatchDeleteGeofenceRequestFilterSensitiveLog = exports.BatchDeleteDevicePositionHistoryResponseFilterSensitiveLog = exports.BatchDeleteDevicePositionHistoryErrorFilterSensitiveLog = exports.BatchItemErrorFilterSensitiveLog = exports.BatchDeleteDevicePositionHistoryRequestFilterSensitiveLog = exports.ValidationExceptionFieldFilterSensitiveLog = exports.AssociateTrackerConsumerResponseFilterSensitiveLog = exports.AssociateTrackerConsumerRequestFilterSensitiveLog = exports.ValidationException = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.AccessDeniedException = void 0;
exports.PutGeofenceRequestFilterSensitiveLog = exports.ListGeofencesResponseFilterSensitiveLog = exports.ListGeofenceResponseEntryFilterSensitiveLog = exports.ListGeofencesRequestFilterSensitiveLog = exports.ListGeofenceCollectionsResponseFilterSensitiveLog = exports.ListGeofenceCollectionsResponseEntryFilterSensitiveLog = exports.ListGeofenceCollectionsRequestFilterSensitiveLog = exports.GetGeofenceResponseFilterSensitiveLog = exports.GetGeofenceRequestFilterSensitiveLog = exports.UntagResourceResponseFilterSensitiveLog = exports.UntagResourceRequestFilterSensitiveLog = exports.TagResourceResponseFilterSensitiveLog = exports.TagResourceRequestFilterSensitiveLog = exports.ListTagsForResourceResponseFilterSensitiveLog = exports.ListTagsForResourceRequestFilterSensitiveLog = exports.DisassociateTrackerConsumerResponseFilterSensitiveLog = exports.DisassociateTrackerConsumerRequestFilterSensitiveLog = exports.DescribeTrackerResponseFilterSensitiveLog = exports.DescribeTrackerRequestFilterSensitiveLog = exports.DescribeRouteCalculatorResponseFilterSensitiveLog = exports.DescribeRouteCalculatorRequestFilterSensitiveLog = exports.DescribePlaceIndexResponseFilterSensitiveLog = exports.DescribePlaceIndexRequestFilterSensitiveLog = exports.DescribeMapResponseFilterSensitiveLog = exports.DescribeMapRequestFilterSensitiveLog = exports.DescribeGeofenceCollectionResponseFilterSensitiveLog = exports.DescribeGeofenceCollectionRequestFilterSensitiveLog = exports.DeleteTrackerResponseFilterSensitiveLog = exports.DeleteTrackerRequestFilterSensitiveLog = exports.DeleteRouteCalculatorResponseFilterSensitiveLog = exports.DeleteRouteCalculatorRequestFilterSensitiveLog = exports.DeletePlaceIndexResponseFilterSensitiveLog = exports.DeletePlaceIndexRequestFilterSensitiveLog = exports.DeleteMapResponseFilterSensitiveLog = exports.DeleteMapRequestFilterSensitiveLog = exports.DeleteGeofenceCollectionResponseFilterSensitiveLog = exports.DeleteGeofenceCollectionRequestFilterSensitiveLog = exports.CreateTrackerResponseFilterSensitiveLog = exports.CreateTrackerRequestFilterSensitiveLog = exports.CreateRouteCalculatorResponseFilterSensitiveLog = exports.CreateRouteCalculatorRequestFilterSensitiveLog = exports.CreatePlaceIndexResponseFilterSensitiveLog = exports.CreatePlaceIndexRequestFilterSensitiveLog = exports.DataSourceConfigurationFilterSensitiveLog = exports.CreateMapResponseFilterSensitiveLog = exports.CreateMapRequestFilterSensitiveLog = exports.MapConfigurationFilterSensitiveLog = exports.CreateGeofenceCollectionResponseFilterSensitiveLog = exports.CreateGeofenceCollectionRequestFilterSensitiveLog = exports.CalculateRouteMatrixResponseFilterSensitiveLog = void 0;
exports.SearchPlaceIndexForTextSummaryFilterSensitiveLog = exports.SearchForTextResultFilterSensitiveLog = exports.SearchPlaceIndexForTextRequestFilterSensitiveLog = exports.SearchPlaceIndexForSuggestionsResponseFilterSensitiveLog = exports.SearchPlaceIndexForSuggestionsSummaryFilterSensitiveLog = exports.SearchForSuggestionsResultFilterSensitiveLog = exports.SearchPlaceIndexForSuggestionsRequestFilterSensitiveLog = exports.SearchPlaceIndexForPositionResponseFilterSensitiveLog = exports.SearchPlaceIndexForPositionSummaryFilterSensitiveLog = exports.SearchForPositionResultFilterSensitiveLog = exports.SearchPlaceIndexForPositionRequestFilterSensitiveLog = exports.UpdateMapResponseFilterSensitiveLog = exports.UpdateMapRequestFilterSensitiveLog = exports.ListTrackersResponseFilterSensitiveLog = exports.ListTrackersResponseEntryFilterSensitiveLog = exports.ListTrackersRequestFilterSensitiveLog = exports.ListTrackerConsumersResponseFilterSensitiveLog = exports.ListTrackerConsumersRequestFilterSensitiveLog = exports.ListRouteCalculatorsResponseFilterSensitiveLog = exports.ListRouteCalculatorsResponseEntryFilterSensitiveLog = exports.ListRouteCalculatorsRequestFilterSensitiveLog = exports.ListPlaceIndexesResponseFilterSensitiveLog = exports.ListPlaceIndexesResponseEntryFilterSensitiveLog = exports.ListPlaceIndexesRequestFilterSensitiveLog = exports.ListMapsResponseFilterSensitiveLog = exports.ListMapsResponseEntryFilterSensitiveLog = exports.ListMapsRequestFilterSensitiveLog = exports.ListDevicePositionsResponseFilterSensitiveLog = exports.ListDevicePositionsResponseEntryFilterSensitiveLog = exports.ListDevicePositionsRequestFilterSensitiveLog = exports.GetPlaceResponseFilterSensitiveLog = exports.PlaceFilterSensitiveLog = exports.TimeZoneFilterSensitiveLog = exports.PlaceGeometryFilterSensitiveLog = exports.GetPlaceRequestFilterSensitiveLog = exports.GetMapTileResponseFilterSensitiveLog = exports.GetMapTileRequestFilterSensitiveLog = exports.GetMapStyleDescriptorResponseFilterSensitiveLog = exports.GetMapStyleDescriptorRequestFilterSensitiveLog = exports.GetMapSpritesResponseFilterSensitiveLog = exports.GetMapSpritesRequestFilterSensitiveLog = exports.GetMapGlyphsResponseFilterSensitiveLog = exports.GetMapGlyphsRequestFilterSensitiveLog = exports.GetDevicePositionHistoryResponseFilterSensitiveLog = exports.GetDevicePositionHistoryRequestFilterSensitiveLog = exports.GetDevicePositionResponseFilterSensitiveLog = exports.GetDevicePositionRequestFilterSensitiveLog = exports.UpdateGeofenceCollectionResponseFilterSensitiveLog = exports.UpdateGeofenceCollectionRequestFilterSensitiveLog = exports.PutGeofenceResponseFilterSensitiveLog = void 0;
exports.UpdateTrackerResponseFilterSensitiveLog = exports.UpdateTrackerRequestFilterSensitiveLog = exports.UpdateRouteCalculatorResponseFilterSensitiveLog = exports.UpdateRouteCalculatorRequestFilterSensitiveLog = exports.UpdatePlaceIndexResponseFilterSensitiveLog = exports.UpdatePlaceIndexRequestFilterSensitiveLog = exports.SearchPlaceIndexForTextResponseFilterSensitiveLog = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
const LocationServiceException_1 = require("./LocationServiceException");
class AccessDeniedException extends LocationServiceException_1.LocationServiceException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
        this.Message = opts.Message;
    }
}
exports.AccessDeniedException = AccessDeniedException;
class ConflictException extends LocationServiceException_1.LocationServiceException {
    constructor(opts) {
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConflictException.prototype);
        this.Message = opts.Message;
    }
}
exports.ConflictException = ConflictException;
class InternalServerException extends LocationServiceException_1.LocationServiceException {
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        this.$retryable = {};
        Object.setPrototypeOf(this, InternalServerException.prototype);
        this.Message = opts.Message;
    }
}
exports.InternalServerException = InternalServerException;
class ResourceNotFoundException extends LocationServiceException_1.LocationServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class ServiceQuotaExceededException extends LocationServiceException_1.LocationServiceException {
    constructor(opts) {
        super({
            name: "ServiceQuotaExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "ServiceQuotaExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
        this.Message = opts.Message;
    }
}
exports.ServiceQuotaExceededException = ServiceQuotaExceededException;
class ThrottlingException extends LocationServiceException_1.LocationServiceException {
    constructor(opts) {
        super({
            name: "ThrottlingException",
            $fault: "client",
            ...opts,
        });
        this.name = "ThrottlingException";
        this.$fault = "client";
        this.$retryable = {};
        Object.setPrototypeOf(this, ThrottlingException.prototype);
        this.Message = opts.Message;
    }
}
exports.ThrottlingException = ThrottlingException;
class ValidationException extends LocationServiceException_1.LocationServiceException {
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ValidationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ValidationException.prototype);
        this.Message = opts.Message;
        this.Reason = opts.Reason;
        this.FieldList = opts.FieldList;
    }
}
exports.ValidationException = ValidationException;
const AssociateTrackerConsumerRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssociateTrackerConsumerRequestFilterSensitiveLog = AssociateTrackerConsumerRequestFilterSensitiveLog;
const AssociateTrackerConsumerResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AssociateTrackerConsumerResponseFilterSensitiveLog = AssociateTrackerConsumerResponseFilterSensitiveLog;
const ValidationExceptionFieldFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ValidationExceptionFieldFilterSensitiveLog = ValidationExceptionFieldFilterSensitiveLog;
const BatchDeleteDevicePositionHistoryRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchDeleteDevicePositionHistoryRequestFilterSensitiveLog = BatchDeleteDevicePositionHistoryRequestFilterSensitiveLog;
const BatchItemErrorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchItemErrorFilterSensitiveLog = BatchItemErrorFilterSensitiveLog;
const BatchDeleteDevicePositionHistoryErrorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchDeleteDevicePositionHistoryErrorFilterSensitiveLog = BatchDeleteDevicePositionHistoryErrorFilterSensitiveLog;
const BatchDeleteDevicePositionHistoryResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchDeleteDevicePositionHistoryResponseFilterSensitiveLog = BatchDeleteDevicePositionHistoryResponseFilterSensitiveLog;
const BatchDeleteGeofenceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchDeleteGeofenceRequestFilterSensitiveLog = BatchDeleteGeofenceRequestFilterSensitiveLog;
const BatchDeleteGeofenceErrorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchDeleteGeofenceErrorFilterSensitiveLog = BatchDeleteGeofenceErrorFilterSensitiveLog;
const BatchDeleteGeofenceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchDeleteGeofenceResponseFilterSensitiveLog = BatchDeleteGeofenceResponseFilterSensitiveLog;
const PositionalAccuracyFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PositionalAccuracyFilterSensitiveLog = PositionalAccuracyFilterSensitiveLog;
const DevicePositionUpdateFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Position && { Position: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.PositionProperties && { PositionProperties: smithy_client_1.SENSITIVE_STRING }),
});
exports.DevicePositionUpdateFilterSensitiveLog = DevicePositionUpdateFilterSensitiveLog;
const BatchEvaluateGeofencesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DevicePositionUpdates && {
        DevicePositionUpdates: obj.DevicePositionUpdates.map((item) => (0, exports.DevicePositionUpdateFilterSensitiveLog)(item)),
    }),
});
exports.BatchEvaluateGeofencesRequestFilterSensitiveLog = BatchEvaluateGeofencesRequestFilterSensitiveLog;
const BatchEvaluateGeofencesErrorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchEvaluateGeofencesErrorFilterSensitiveLog = BatchEvaluateGeofencesErrorFilterSensitiveLog;
const BatchEvaluateGeofencesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchEvaluateGeofencesResponseFilterSensitiveLog = BatchEvaluateGeofencesResponseFilterSensitiveLog;
const BatchGetDevicePositionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchGetDevicePositionRequestFilterSensitiveLog = BatchGetDevicePositionRequestFilterSensitiveLog;
const DevicePositionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Position && { Position: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.PositionProperties && { PositionProperties: smithy_client_1.SENSITIVE_STRING }),
});
exports.DevicePositionFilterSensitiveLog = DevicePositionFilterSensitiveLog;
const BatchGetDevicePositionErrorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchGetDevicePositionErrorFilterSensitiveLog = BatchGetDevicePositionErrorFilterSensitiveLog;
const BatchGetDevicePositionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DevicePositions && {
        DevicePositions: obj.DevicePositions.map((item) => (0, exports.DevicePositionFilterSensitiveLog)(item)),
    }),
});
exports.BatchGetDevicePositionResponseFilterSensitiveLog = BatchGetDevicePositionResponseFilterSensitiveLog;
const CircleFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Center && { Center: smithy_client_1.SENSITIVE_STRING }),
});
exports.CircleFilterSensitiveLog = CircleFilterSensitiveLog;
const GeofenceGeometryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Polygon && { Polygon: obj.Polygon.map((item) => smithy_client_1.SENSITIVE_STRING) }),
    ...(obj.Circle && { Circle: smithy_client_1.SENSITIVE_STRING }),
});
exports.GeofenceGeometryFilterSensitiveLog = GeofenceGeometryFilterSensitiveLog;
const BatchPutGeofenceRequestEntryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Geometry && { Geometry: (0, exports.GeofenceGeometryFilterSensitiveLog)(obj.Geometry) }),
});
exports.BatchPutGeofenceRequestEntryFilterSensitiveLog = BatchPutGeofenceRequestEntryFilterSensitiveLog;
const BatchPutGeofenceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Entries && { Entries: obj.Entries.map((item) => (0, exports.BatchPutGeofenceRequestEntryFilterSensitiveLog)(item)) }),
});
exports.BatchPutGeofenceRequestFilterSensitiveLog = BatchPutGeofenceRequestFilterSensitiveLog;
const BatchPutGeofenceErrorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchPutGeofenceErrorFilterSensitiveLog = BatchPutGeofenceErrorFilterSensitiveLog;
const BatchPutGeofenceSuccessFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchPutGeofenceSuccessFilterSensitiveLog = BatchPutGeofenceSuccessFilterSensitiveLog;
const BatchPutGeofenceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchPutGeofenceResponseFilterSensitiveLog = BatchPutGeofenceResponseFilterSensitiveLog;
const BatchUpdateDevicePositionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Updates && { Updates: obj.Updates.map((item) => (0, exports.DevicePositionUpdateFilterSensitiveLog)(item)) }),
});
exports.BatchUpdateDevicePositionRequestFilterSensitiveLog = BatchUpdateDevicePositionRequestFilterSensitiveLog;
const BatchUpdateDevicePositionErrorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchUpdateDevicePositionErrorFilterSensitiveLog = BatchUpdateDevicePositionErrorFilterSensitiveLog;
const BatchUpdateDevicePositionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BatchUpdateDevicePositionResponseFilterSensitiveLog = BatchUpdateDevicePositionResponseFilterSensitiveLog;
const CalculateRouteCarModeOptionsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CalculateRouteCarModeOptionsFilterSensitiveLog = CalculateRouteCarModeOptionsFilterSensitiveLog;
const TruckDimensionsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TruckDimensionsFilterSensitiveLog = TruckDimensionsFilterSensitiveLog;
const TruckWeightFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TruckWeightFilterSensitiveLog = TruckWeightFilterSensitiveLog;
const CalculateRouteTruckModeOptionsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CalculateRouteTruckModeOptionsFilterSensitiveLog = CalculateRouteTruckModeOptionsFilterSensitiveLog;
const CalculateRouteRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DeparturePosition && { DeparturePosition: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.DestinationPosition && { DestinationPosition: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.WaypointPositions && { WaypointPositions: smithy_client_1.SENSITIVE_STRING }),
});
exports.CalculateRouteRequestFilterSensitiveLog = CalculateRouteRequestFilterSensitiveLog;
const LegGeometryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.LineString && { LineString: smithy_client_1.SENSITIVE_STRING }),
});
exports.LegGeometryFilterSensitiveLog = LegGeometryFilterSensitiveLog;
const StepFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.StartPosition && { StartPosition: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.EndPosition && { EndPosition: smithy_client_1.SENSITIVE_STRING }),
});
exports.StepFilterSensitiveLog = StepFilterSensitiveLog;
const LegFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.StartPosition && { StartPosition: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.EndPosition && { EndPosition: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Geometry && { Geometry: (0, exports.LegGeometryFilterSensitiveLog)(obj.Geometry) }),
    ...(obj.Steps && { Steps: obj.Steps.map((item) => (0, exports.StepFilterSensitiveLog)(item)) }),
});
exports.LegFilterSensitiveLog = LegFilterSensitiveLog;
const CalculateRouteSummaryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RouteBBox && { RouteBBox: smithy_client_1.SENSITIVE_STRING }),
});
exports.CalculateRouteSummaryFilterSensitiveLog = CalculateRouteSummaryFilterSensitiveLog;
const CalculateRouteResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Legs && { Legs: obj.Legs.map((item) => (0, exports.LegFilterSensitiveLog)(item)) }),
    ...(obj.Summary && { Summary: (0, exports.CalculateRouteSummaryFilterSensitiveLog)(obj.Summary) }),
});
exports.CalculateRouteResponseFilterSensitiveLog = CalculateRouteResponseFilterSensitiveLog;
const CalculateRouteMatrixRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DeparturePositions && { DeparturePositions: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.DestinationPositions && { DestinationPositions: smithy_client_1.SENSITIVE_STRING }),
});
exports.CalculateRouteMatrixRequestFilterSensitiveLog = CalculateRouteMatrixRequestFilterSensitiveLog;
const RouteMatrixEntryErrorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RouteMatrixEntryErrorFilterSensitiveLog = RouteMatrixEntryErrorFilterSensitiveLog;
const RouteMatrixEntryFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RouteMatrixEntryFilterSensitiveLog = RouteMatrixEntryFilterSensitiveLog;
const CalculateRouteMatrixSummaryFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CalculateRouteMatrixSummaryFilterSensitiveLog = CalculateRouteMatrixSummaryFilterSensitiveLog;
const CalculateRouteMatrixResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SnappedDeparturePositions && { SnappedDeparturePositions: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.SnappedDestinationPositions && { SnappedDestinationPositions: smithy_client_1.SENSITIVE_STRING }),
});
exports.CalculateRouteMatrixResponseFilterSensitiveLog = CalculateRouteMatrixResponseFilterSensitiveLog;
const CreateGeofenceCollectionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateGeofenceCollectionRequestFilterSensitiveLog = CreateGeofenceCollectionRequestFilterSensitiveLog;
const CreateGeofenceCollectionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateGeofenceCollectionResponseFilterSensitiveLog = CreateGeofenceCollectionResponseFilterSensitiveLog;
const MapConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.MapConfigurationFilterSensitiveLog = MapConfigurationFilterSensitiveLog;
const CreateMapRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateMapRequestFilterSensitiveLog = CreateMapRequestFilterSensitiveLog;
const CreateMapResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateMapResponseFilterSensitiveLog = CreateMapResponseFilterSensitiveLog;
const DataSourceConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DataSourceConfigurationFilterSensitiveLog = DataSourceConfigurationFilterSensitiveLog;
const CreatePlaceIndexRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreatePlaceIndexRequestFilterSensitiveLog = CreatePlaceIndexRequestFilterSensitiveLog;
const CreatePlaceIndexResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreatePlaceIndexResponseFilterSensitiveLog = CreatePlaceIndexResponseFilterSensitiveLog;
const CreateRouteCalculatorRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateRouteCalculatorRequestFilterSensitiveLog = CreateRouteCalculatorRequestFilterSensitiveLog;
const CreateRouteCalculatorResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateRouteCalculatorResponseFilterSensitiveLog = CreateRouteCalculatorResponseFilterSensitiveLog;
const CreateTrackerRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateTrackerRequestFilterSensitiveLog = CreateTrackerRequestFilterSensitiveLog;
const CreateTrackerResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateTrackerResponseFilterSensitiveLog = CreateTrackerResponseFilterSensitiveLog;
const DeleteGeofenceCollectionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteGeofenceCollectionRequestFilterSensitiveLog = DeleteGeofenceCollectionRequestFilterSensitiveLog;
const DeleteGeofenceCollectionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteGeofenceCollectionResponseFilterSensitiveLog = DeleteGeofenceCollectionResponseFilterSensitiveLog;
const DeleteMapRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteMapRequestFilterSensitiveLog = DeleteMapRequestFilterSensitiveLog;
const DeleteMapResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteMapResponseFilterSensitiveLog = DeleteMapResponseFilterSensitiveLog;
const DeletePlaceIndexRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeletePlaceIndexRequestFilterSensitiveLog = DeletePlaceIndexRequestFilterSensitiveLog;
const DeletePlaceIndexResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeletePlaceIndexResponseFilterSensitiveLog = DeletePlaceIndexResponseFilterSensitiveLog;
const DeleteRouteCalculatorRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteRouteCalculatorRequestFilterSensitiveLog = DeleteRouteCalculatorRequestFilterSensitiveLog;
const DeleteRouteCalculatorResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteRouteCalculatorResponseFilterSensitiveLog = DeleteRouteCalculatorResponseFilterSensitiveLog;
const DeleteTrackerRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteTrackerRequestFilterSensitiveLog = DeleteTrackerRequestFilterSensitiveLog;
const DeleteTrackerResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteTrackerResponseFilterSensitiveLog = DeleteTrackerResponseFilterSensitiveLog;
const DescribeGeofenceCollectionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeGeofenceCollectionRequestFilterSensitiveLog = DescribeGeofenceCollectionRequestFilterSensitiveLog;
const DescribeGeofenceCollectionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeGeofenceCollectionResponseFilterSensitiveLog = DescribeGeofenceCollectionResponseFilterSensitiveLog;
const DescribeMapRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeMapRequestFilterSensitiveLog = DescribeMapRequestFilterSensitiveLog;
const DescribeMapResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeMapResponseFilterSensitiveLog = DescribeMapResponseFilterSensitiveLog;
const DescribePlaceIndexRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribePlaceIndexRequestFilterSensitiveLog = DescribePlaceIndexRequestFilterSensitiveLog;
const DescribePlaceIndexResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribePlaceIndexResponseFilterSensitiveLog = DescribePlaceIndexResponseFilterSensitiveLog;
const DescribeRouteCalculatorRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeRouteCalculatorRequestFilterSensitiveLog = DescribeRouteCalculatorRequestFilterSensitiveLog;
const DescribeRouteCalculatorResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeRouteCalculatorResponseFilterSensitiveLog = DescribeRouteCalculatorResponseFilterSensitiveLog;
const DescribeTrackerRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeTrackerRequestFilterSensitiveLog = DescribeTrackerRequestFilterSensitiveLog;
const DescribeTrackerResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DescribeTrackerResponseFilterSensitiveLog = DescribeTrackerResponseFilterSensitiveLog;
const DisassociateTrackerConsumerRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DisassociateTrackerConsumerRequestFilterSensitiveLog = DisassociateTrackerConsumerRequestFilterSensitiveLog;
const DisassociateTrackerConsumerResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DisassociateTrackerConsumerResponseFilterSensitiveLog = DisassociateTrackerConsumerResponseFilterSensitiveLog;
const ListTagsForResourceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListTagsForResourceRequestFilterSensitiveLog = ListTagsForResourceRequestFilterSensitiveLog;
const ListTagsForResourceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListTagsForResourceResponseFilterSensitiveLog = ListTagsForResourceResponseFilterSensitiveLog;
const TagResourceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TagResourceRequestFilterSensitiveLog = TagResourceRequestFilterSensitiveLog;
const TagResourceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TagResourceResponseFilterSensitiveLog = TagResourceResponseFilterSensitiveLog;
const UntagResourceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UntagResourceRequestFilterSensitiveLog = UntagResourceRequestFilterSensitiveLog;
const UntagResourceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UntagResourceResponseFilterSensitiveLog = UntagResourceResponseFilterSensitiveLog;
const GetGeofenceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetGeofenceRequestFilterSensitiveLog = GetGeofenceRequestFilterSensitiveLog;
const GetGeofenceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Geometry && { Geometry: (0, exports.GeofenceGeometryFilterSensitiveLog)(obj.Geometry) }),
});
exports.GetGeofenceResponseFilterSensitiveLog = GetGeofenceResponseFilterSensitiveLog;
const ListGeofenceCollectionsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListGeofenceCollectionsRequestFilterSensitiveLog = ListGeofenceCollectionsRequestFilterSensitiveLog;
const ListGeofenceCollectionsResponseEntryFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListGeofenceCollectionsResponseEntryFilterSensitiveLog = ListGeofenceCollectionsResponseEntryFilterSensitiveLog;
const ListGeofenceCollectionsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListGeofenceCollectionsResponseFilterSensitiveLog = ListGeofenceCollectionsResponseFilterSensitiveLog;
const ListGeofencesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListGeofencesRequestFilterSensitiveLog = ListGeofencesRequestFilterSensitiveLog;
const ListGeofenceResponseEntryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Geometry && { Geometry: (0, exports.GeofenceGeometryFilterSensitiveLog)(obj.Geometry) }),
});
exports.ListGeofenceResponseEntryFilterSensitiveLog = ListGeofenceResponseEntryFilterSensitiveLog;
const ListGeofencesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Entries && { Entries: obj.Entries.map((item) => (0, exports.ListGeofenceResponseEntryFilterSensitiveLog)(item)) }),
});
exports.ListGeofencesResponseFilterSensitiveLog = ListGeofencesResponseFilterSensitiveLog;
const PutGeofenceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Geometry && { Geometry: (0, exports.GeofenceGeometryFilterSensitiveLog)(obj.Geometry) }),
});
exports.PutGeofenceRequestFilterSensitiveLog = PutGeofenceRequestFilterSensitiveLog;
const PutGeofenceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutGeofenceResponseFilterSensitiveLog = PutGeofenceResponseFilterSensitiveLog;
const UpdateGeofenceCollectionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdateGeofenceCollectionRequestFilterSensitiveLog = UpdateGeofenceCollectionRequestFilterSensitiveLog;
const UpdateGeofenceCollectionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdateGeofenceCollectionResponseFilterSensitiveLog = UpdateGeofenceCollectionResponseFilterSensitiveLog;
const GetDevicePositionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetDevicePositionRequestFilterSensitiveLog = GetDevicePositionRequestFilterSensitiveLog;
const GetDevicePositionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Position && { Position: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.PositionProperties && { PositionProperties: smithy_client_1.SENSITIVE_STRING }),
});
exports.GetDevicePositionResponseFilterSensitiveLog = GetDevicePositionResponseFilterSensitiveLog;
const GetDevicePositionHistoryRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetDevicePositionHistoryRequestFilterSensitiveLog = GetDevicePositionHistoryRequestFilterSensitiveLog;
const GetDevicePositionHistoryResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DevicePositions && {
        DevicePositions: obj.DevicePositions.map((item) => (0, exports.DevicePositionFilterSensitiveLog)(item)),
    }),
});
exports.GetDevicePositionHistoryResponseFilterSensitiveLog = GetDevicePositionHistoryResponseFilterSensitiveLog;
const GetMapGlyphsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetMapGlyphsRequestFilterSensitiveLog = GetMapGlyphsRequestFilterSensitiveLog;
const GetMapGlyphsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetMapGlyphsResponseFilterSensitiveLog = GetMapGlyphsResponseFilterSensitiveLog;
const GetMapSpritesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetMapSpritesRequestFilterSensitiveLog = GetMapSpritesRequestFilterSensitiveLog;
const GetMapSpritesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetMapSpritesResponseFilterSensitiveLog = GetMapSpritesResponseFilterSensitiveLog;
const GetMapStyleDescriptorRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetMapStyleDescriptorRequestFilterSensitiveLog = GetMapStyleDescriptorRequestFilterSensitiveLog;
const GetMapStyleDescriptorResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetMapStyleDescriptorResponseFilterSensitiveLog = GetMapStyleDescriptorResponseFilterSensitiveLog;
const GetMapTileRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetMapTileRequestFilterSensitiveLog = GetMapTileRequestFilterSensitiveLog;
const GetMapTileResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetMapTileResponseFilterSensitiveLog = GetMapTileResponseFilterSensitiveLog;
const GetPlaceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetPlaceRequestFilterSensitiveLog = GetPlaceRequestFilterSensitiveLog;
const PlaceGeometryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Point && { Point: smithy_client_1.SENSITIVE_STRING }),
});
exports.PlaceGeometryFilterSensitiveLog = PlaceGeometryFilterSensitiveLog;
const TimeZoneFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TimeZoneFilterSensitiveLog = TimeZoneFilterSensitiveLog;
const PlaceFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Geometry && { Geometry: (0, exports.PlaceGeometryFilterSensitiveLog)(obj.Geometry) }),
});
exports.PlaceFilterSensitiveLog = PlaceFilterSensitiveLog;
const GetPlaceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Place && { Place: (0, exports.PlaceFilterSensitiveLog)(obj.Place) }),
});
exports.GetPlaceResponseFilterSensitiveLog = GetPlaceResponseFilterSensitiveLog;
const ListDevicePositionsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListDevicePositionsRequestFilterSensitiveLog = ListDevicePositionsRequestFilterSensitiveLog;
const ListDevicePositionsResponseEntryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Position && { Position: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.PositionProperties && { PositionProperties: smithy_client_1.SENSITIVE_STRING }),
});
exports.ListDevicePositionsResponseEntryFilterSensitiveLog = ListDevicePositionsResponseEntryFilterSensitiveLog;
const ListDevicePositionsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Entries && { Entries: obj.Entries.map((item) => (0, exports.ListDevicePositionsResponseEntryFilterSensitiveLog)(item)) }),
});
exports.ListDevicePositionsResponseFilterSensitiveLog = ListDevicePositionsResponseFilterSensitiveLog;
const ListMapsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListMapsRequestFilterSensitiveLog = ListMapsRequestFilterSensitiveLog;
const ListMapsResponseEntryFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListMapsResponseEntryFilterSensitiveLog = ListMapsResponseEntryFilterSensitiveLog;
const ListMapsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListMapsResponseFilterSensitiveLog = ListMapsResponseFilterSensitiveLog;
const ListPlaceIndexesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListPlaceIndexesRequestFilterSensitiveLog = ListPlaceIndexesRequestFilterSensitiveLog;
const ListPlaceIndexesResponseEntryFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListPlaceIndexesResponseEntryFilterSensitiveLog = ListPlaceIndexesResponseEntryFilterSensitiveLog;
const ListPlaceIndexesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListPlaceIndexesResponseFilterSensitiveLog = ListPlaceIndexesResponseFilterSensitiveLog;
const ListRouteCalculatorsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListRouteCalculatorsRequestFilterSensitiveLog = ListRouteCalculatorsRequestFilterSensitiveLog;
const ListRouteCalculatorsResponseEntryFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListRouteCalculatorsResponseEntryFilterSensitiveLog = ListRouteCalculatorsResponseEntryFilterSensitiveLog;
const ListRouteCalculatorsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListRouteCalculatorsResponseFilterSensitiveLog = ListRouteCalculatorsResponseFilterSensitiveLog;
const ListTrackerConsumersRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListTrackerConsumersRequestFilterSensitiveLog = ListTrackerConsumersRequestFilterSensitiveLog;
const ListTrackerConsumersResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListTrackerConsumersResponseFilterSensitiveLog = ListTrackerConsumersResponseFilterSensitiveLog;
const ListTrackersRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListTrackersRequestFilterSensitiveLog = ListTrackersRequestFilterSensitiveLog;
const ListTrackersResponseEntryFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListTrackersResponseEntryFilterSensitiveLog = ListTrackersResponseEntryFilterSensitiveLog;
const ListTrackersResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListTrackersResponseFilterSensitiveLog = ListTrackersResponseFilterSensitiveLog;
const UpdateMapRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdateMapRequestFilterSensitiveLog = UpdateMapRequestFilterSensitiveLog;
const UpdateMapResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdateMapResponseFilterSensitiveLog = UpdateMapResponseFilterSensitiveLog;
const SearchPlaceIndexForPositionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Position && { Position: smithy_client_1.SENSITIVE_STRING }),
});
exports.SearchPlaceIndexForPositionRequestFilterSensitiveLog = SearchPlaceIndexForPositionRequestFilterSensitiveLog;
const SearchForPositionResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Place && { Place: (0, exports.PlaceFilterSensitiveLog)(obj.Place) }),
});
exports.SearchForPositionResultFilterSensitiveLog = SearchForPositionResultFilterSensitiveLog;
const SearchPlaceIndexForPositionSummaryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Position && { Position: smithy_client_1.SENSITIVE_STRING }),
});
exports.SearchPlaceIndexForPositionSummaryFilterSensitiveLog = SearchPlaceIndexForPositionSummaryFilterSensitiveLog;
const SearchPlaceIndexForPositionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Summary && { Summary: (0, exports.SearchPlaceIndexForPositionSummaryFilterSensitiveLog)(obj.Summary) }),
    ...(obj.Results && { Results: obj.Results.map((item) => (0, exports.SearchForPositionResultFilterSensitiveLog)(item)) }),
});
exports.SearchPlaceIndexForPositionResponseFilterSensitiveLog = SearchPlaceIndexForPositionResponseFilterSensitiveLog;
const SearchPlaceIndexForSuggestionsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.BiasPosition && { BiasPosition: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.FilterBBox && { FilterBBox: smithy_client_1.SENSITIVE_STRING }),
});
exports.SearchPlaceIndexForSuggestionsRequestFilterSensitiveLog = SearchPlaceIndexForSuggestionsRequestFilterSensitiveLog;
const SearchForSuggestionsResultFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SearchForSuggestionsResultFilterSensitiveLog = SearchForSuggestionsResultFilterSensitiveLog;
const SearchPlaceIndexForSuggestionsSummaryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.BiasPosition && { BiasPosition: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.FilterBBox && { FilterBBox: smithy_client_1.SENSITIVE_STRING }),
});
exports.SearchPlaceIndexForSuggestionsSummaryFilterSensitiveLog = SearchPlaceIndexForSuggestionsSummaryFilterSensitiveLog;
const SearchPlaceIndexForSuggestionsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Summary && { Summary: (0, exports.SearchPlaceIndexForSuggestionsSummaryFilterSensitiveLog)(obj.Summary) }),
});
exports.SearchPlaceIndexForSuggestionsResponseFilterSensitiveLog = SearchPlaceIndexForSuggestionsResponseFilterSensitiveLog;
const SearchPlaceIndexForTextRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.BiasPosition && { BiasPosition: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.FilterBBox && { FilterBBox: smithy_client_1.SENSITIVE_STRING }),
});
exports.SearchPlaceIndexForTextRequestFilterSensitiveLog = SearchPlaceIndexForTextRequestFilterSensitiveLog;
const SearchForTextResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Place && { Place: (0, exports.PlaceFilterSensitiveLog)(obj.Place) }),
});
exports.SearchForTextResultFilterSensitiveLog = SearchForTextResultFilterSensitiveLog;
const SearchPlaceIndexForTextSummaryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.BiasPosition && { BiasPosition: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.FilterBBox && { FilterBBox: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ResultBBox && { ResultBBox: smithy_client_1.SENSITIVE_STRING }),
});
exports.SearchPlaceIndexForTextSummaryFilterSensitiveLog = SearchPlaceIndexForTextSummaryFilterSensitiveLog;
const SearchPlaceIndexForTextResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Summary && { Summary: (0, exports.SearchPlaceIndexForTextSummaryFilterSensitiveLog)(obj.Summary) }),
    ...(obj.Results && { Results: obj.Results.map((item) => (0, exports.SearchForTextResultFilterSensitiveLog)(item)) }),
});
exports.SearchPlaceIndexForTextResponseFilterSensitiveLog = SearchPlaceIndexForTextResponseFilterSensitiveLog;
const UpdatePlaceIndexRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdatePlaceIndexRequestFilterSensitiveLog = UpdatePlaceIndexRequestFilterSensitiveLog;
const UpdatePlaceIndexResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdatePlaceIndexResponseFilterSensitiveLog = UpdatePlaceIndexResponseFilterSensitiveLog;
const UpdateRouteCalculatorRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdateRouteCalculatorRequestFilterSensitiveLog = UpdateRouteCalculatorRequestFilterSensitiveLog;
const UpdateRouteCalculatorResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdateRouteCalculatorResponseFilterSensitiveLog = UpdateRouteCalculatorResponseFilterSensitiveLog;
const UpdateTrackerRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdateTrackerRequestFilterSensitiveLog = UpdateTrackerRequestFilterSensitiveLog;
const UpdateTrackerResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.UpdateTrackerResponseFilterSensitiveLog = UpdateTrackerResponseFilterSensitiveLog;
