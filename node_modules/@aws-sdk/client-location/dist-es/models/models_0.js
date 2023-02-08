import { __assign, __extends } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { LocationServiceException as __BaseException } from "./LocationServiceException";
var AccessDeniedException = (function (_super) {
    __extends(AccessDeniedException, _super);
    function AccessDeniedException(opts) {
        var _this = _super.call(this, __assign({ name: "AccessDeniedException", $fault: "client" }, opts)) || this;
        _this.name = "AccessDeniedException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, AccessDeniedException.prototype);
        _this.Message = opts.Message;
        return _this;
    }
    return AccessDeniedException;
}(__BaseException));
export { AccessDeniedException };
var ConflictException = (function (_super) {
    __extends(ConflictException, _super);
    function ConflictException(opts) {
        var _this = _super.call(this, __assign({ name: "ConflictException", $fault: "client" }, opts)) || this;
        _this.name = "ConflictException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, ConflictException.prototype);
        _this.Message = opts.Message;
        return _this;
    }
    return ConflictException;
}(__BaseException));
export { ConflictException };
var InternalServerException = (function (_super) {
    __extends(InternalServerException, _super);
    function InternalServerException(opts) {
        var _this = _super.call(this, __assign({ name: "InternalServerException", $fault: "server" }, opts)) || this;
        _this.name = "InternalServerException";
        _this.$fault = "server";
        _this.$retryable = {};
        Object.setPrototypeOf(_this, InternalServerException.prototype);
        _this.Message = opts.Message;
        return _this;
    }
    return InternalServerException;
}(__BaseException));
export { InternalServerException };
var ResourceNotFoundException = (function (_super) {
    __extends(ResourceNotFoundException, _super);
    function ResourceNotFoundException(opts) {
        var _this = _super.call(this, __assign({ name: "ResourceNotFoundException", $fault: "client" }, opts)) || this;
        _this.name = "ResourceNotFoundException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, ResourceNotFoundException.prototype);
        _this.Message = opts.Message;
        return _this;
    }
    return ResourceNotFoundException;
}(__BaseException));
export { ResourceNotFoundException };
var ServiceQuotaExceededException = (function (_super) {
    __extends(ServiceQuotaExceededException, _super);
    function ServiceQuotaExceededException(opts) {
        var _this = _super.call(this, __assign({ name: "ServiceQuotaExceededException", $fault: "client" }, opts)) || this;
        _this.name = "ServiceQuotaExceededException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, ServiceQuotaExceededException.prototype);
        _this.Message = opts.Message;
        return _this;
    }
    return ServiceQuotaExceededException;
}(__BaseException));
export { ServiceQuotaExceededException };
var ThrottlingException = (function (_super) {
    __extends(ThrottlingException, _super);
    function ThrottlingException(opts) {
        var _this = _super.call(this, __assign({ name: "ThrottlingException", $fault: "client" }, opts)) || this;
        _this.name = "ThrottlingException";
        _this.$fault = "client";
        _this.$retryable = {};
        Object.setPrototypeOf(_this, ThrottlingException.prototype);
        _this.Message = opts.Message;
        return _this;
    }
    return ThrottlingException;
}(__BaseException));
export { ThrottlingException };
var ValidationException = (function (_super) {
    __extends(ValidationException, _super);
    function ValidationException(opts) {
        var _this = _super.call(this, __assign({ name: "ValidationException", $fault: "client" }, opts)) || this;
        _this.name = "ValidationException";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, ValidationException.prototype);
        _this.Message = opts.Message;
        _this.Reason = opts.Reason;
        _this.FieldList = opts.FieldList;
        return _this;
    }
    return ValidationException;
}(__BaseException));
export { ValidationException };
export var AssociateTrackerConsumerRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var AssociateTrackerConsumerResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ValidationExceptionFieldFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchDeleteDevicePositionHistoryRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchItemErrorFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchDeleteDevicePositionHistoryErrorFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchDeleteDevicePositionHistoryResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchDeleteGeofenceRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchDeleteGeofenceErrorFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchDeleteGeofenceResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var PositionalAccuracyFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DevicePositionUpdateFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Position && { Position: SENSITIVE_STRING })), (obj.PositionProperties && { PositionProperties: SENSITIVE_STRING }))); };
export var BatchEvaluateGeofencesRequestFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DevicePositionUpdates && {
    DevicePositionUpdates: obj.DevicePositionUpdates.map(function (item) { return DevicePositionUpdateFilterSensitiveLog(item); }),
}))); };
export var BatchEvaluateGeofencesErrorFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchEvaluateGeofencesResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchGetDevicePositionRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DevicePositionFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Position && { Position: SENSITIVE_STRING })), (obj.PositionProperties && { PositionProperties: SENSITIVE_STRING }))); };
export var BatchGetDevicePositionErrorFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchGetDevicePositionResponseFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DevicePositions && {
    DevicePositions: obj.DevicePositions.map(function (item) { return DevicePositionFilterSensitiveLog(item); }),
}))); };
export var CircleFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Center && { Center: SENSITIVE_STRING }))); };
export var GeofenceGeometryFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Polygon && { Polygon: obj.Polygon.map(function (item) { return SENSITIVE_STRING; }) })), (obj.Circle && { Circle: SENSITIVE_STRING }))); };
export var BatchPutGeofenceRequestEntryFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Geometry && { Geometry: GeofenceGeometryFilterSensitiveLog(obj.Geometry) }))); };
export var BatchPutGeofenceRequestFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Entries && { Entries: obj.Entries.map(function (item) { return BatchPutGeofenceRequestEntryFilterSensitiveLog(item); }) }))); };
export var BatchPutGeofenceErrorFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchPutGeofenceSuccessFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchPutGeofenceResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchUpdateDevicePositionRequestFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Updates && { Updates: obj.Updates.map(function (item) { return DevicePositionUpdateFilterSensitiveLog(item); }) }))); };
export var BatchUpdateDevicePositionErrorFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var BatchUpdateDevicePositionResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CalculateRouteCarModeOptionsFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var TruckDimensionsFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var TruckWeightFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CalculateRouteTruckModeOptionsFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CalculateRouteRequestFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.DeparturePosition && { DeparturePosition: SENSITIVE_STRING })), (obj.DestinationPosition && { DestinationPosition: SENSITIVE_STRING })), (obj.WaypointPositions && { WaypointPositions: SENSITIVE_STRING }))); };
export var LegGeometryFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.LineString && { LineString: SENSITIVE_STRING }))); };
export var StepFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.StartPosition && { StartPosition: SENSITIVE_STRING })), (obj.EndPosition && { EndPosition: SENSITIVE_STRING }))); };
export var LegFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.StartPosition && { StartPosition: SENSITIVE_STRING })), (obj.EndPosition && { EndPosition: SENSITIVE_STRING })), (obj.Geometry && { Geometry: LegGeometryFilterSensitiveLog(obj.Geometry) })), (obj.Steps && { Steps: obj.Steps.map(function (item) { return StepFilterSensitiveLog(item); }) }))); };
export var CalculateRouteSummaryFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.RouteBBox && { RouteBBox: SENSITIVE_STRING }))); };
export var CalculateRouteResponseFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Legs && { Legs: obj.Legs.map(function (item) { return LegFilterSensitiveLog(item); }) })), (obj.Summary && { Summary: CalculateRouteSummaryFilterSensitiveLog(obj.Summary) }))); };
export var CalculateRouteMatrixRequestFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.DeparturePositions && { DeparturePositions: SENSITIVE_STRING })), (obj.DestinationPositions && { DestinationPositions: SENSITIVE_STRING }))); };
export var RouteMatrixEntryErrorFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var RouteMatrixEntryFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CalculateRouteMatrixSummaryFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CalculateRouteMatrixResponseFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.SnappedDeparturePositions && { SnappedDeparturePositions: SENSITIVE_STRING })), (obj.SnappedDestinationPositions && { SnappedDestinationPositions: SENSITIVE_STRING }))); };
export var CreateGeofenceCollectionRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CreateGeofenceCollectionResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var MapConfigurationFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CreateMapRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CreateMapResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DataSourceConfigurationFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CreatePlaceIndexRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CreatePlaceIndexResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CreateRouteCalculatorRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CreateRouteCalculatorResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CreateTrackerRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var CreateTrackerResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeleteGeofenceCollectionRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeleteGeofenceCollectionResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeleteMapRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeleteMapResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeletePlaceIndexRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeletePlaceIndexResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeleteRouteCalculatorRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeleteRouteCalculatorResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeleteTrackerRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DeleteTrackerResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DescribeGeofenceCollectionRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DescribeGeofenceCollectionResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DescribeMapRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DescribeMapResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DescribePlaceIndexRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DescribePlaceIndexResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DescribeRouteCalculatorRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DescribeRouteCalculatorResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DescribeTrackerRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DescribeTrackerResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DisassociateTrackerConsumerRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var DisassociateTrackerConsumerResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListTagsForResourceRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListTagsForResourceResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var TagResourceRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var TagResourceResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var UntagResourceRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var UntagResourceResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetGeofenceRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetGeofenceResponseFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Geometry && { Geometry: GeofenceGeometryFilterSensitiveLog(obj.Geometry) }))); };
export var ListGeofenceCollectionsRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListGeofenceCollectionsResponseEntryFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListGeofenceCollectionsResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListGeofencesRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListGeofenceResponseEntryFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Geometry && { Geometry: GeofenceGeometryFilterSensitiveLog(obj.Geometry) }))); };
export var ListGeofencesResponseFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Entries && { Entries: obj.Entries.map(function (item) { return ListGeofenceResponseEntryFilterSensitiveLog(item); }) }))); };
export var PutGeofenceRequestFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Geometry && { Geometry: GeofenceGeometryFilterSensitiveLog(obj.Geometry) }))); };
export var PutGeofenceResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var UpdateGeofenceCollectionRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var UpdateGeofenceCollectionResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetDevicePositionRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetDevicePositionResponseFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Position && { Position: SENSITIVE_STRING })), (obj.PositionProperties && { PositionProperties: SENSITIVE_STRING }))); };
export var GetDevicePositionHistoryRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetDevicePositionHistoryResponseFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DevicePositions && {
    DevicePositions: obj.DevicePositions.map(function (item) { return DevicePositionFilterSensitiveLog(item); }),
}))); };
export var GetMapGlyphsRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetMapGlyphsResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetMapSpritesRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetMapSpritesResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetMapStyleDescriptorRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetMapStyleDescriptorResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetMapTileRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetMapTileResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var GetPlaceRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var PlaceGeometryFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Point && { Point: SENSITIVE_STRING }))); };
export var TimeZoneFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var PlaceFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Geometry && { Geometry: PlaceGeometryFilterSensitiveLog(obj.Geometry) }))); };
export var GetPlaceResponseFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Place && { Place: PlaceFilterSensitiveLog(obj.Place) }))); };
export var ListDevicePositionsRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListDevicePositionsResponseEntryFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Position && { Position: SENSITIVE_STRING })), (obj.PositionProperties && { PositionProperties: SENSITIVE_STRING }))); };
export var ListDevicePositionsResponseFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Entries && { Entries: obj.Entries.map(function (item) { return ListDevicePositionsResponseEntryFilterSensitiveLog(item); }) }))); };
export var ListMapsRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListMapsResponseEntryFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListMapsResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListPlaceIndexesRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListPlaceIndexesResponseEntryFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListPlaceIndexesResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListRouteCalculatorsRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListRouteCalculatorsResponseEntryFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListRouteCalculatorsResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListTrackerConsumersRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListTrackerConsumersResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListTrackersRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListTrackersResponseEntryFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var ListTrackersResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var UpdateMapRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var UpdateMapResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var SearchPlaceIndexForPositionRequestFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Position && { Position: SENSITIVE_STRING }))); };
export var SearchForPositionResultFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Place && { Place: PlaceFilterSensitiveLog(obj.Place) }))); };
export var SearchPlaceIndexForPositionSummaryFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Position && { Position: SENSITIVE_STRING }))); };
export var SearchPlaceIndexForPositionResponseFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Summary && { Summary: SearchPlaceIndexForPositionSummaryFilterSensitiveLog(obj.Summary) })), (obj.Results && { Results: obj.Results.map(function (item) { return SearchForPositionResultFilterSensitiveLog(item); }) }))); };
export var SearchPlaceIndexForSuggestionsRequestFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.Text && { Text: SENSITIVE_STRING })), (obj.BiasPosition && { BiasPosition: SENSITIVE_STRING })), (obj.FilterBBox && { FilterBBox: SENSITIVE_STRING }))); };
export var SearchForSuggestionsResultFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var SearchPlaceIndexForSuggestionsSummaryFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.Text && { Text: SENSITIVE_STRING })), (obj.BiasPosition && { BiasPosition: SENSITIVE_STRING })), (obj.FilterBBox && { FilterBBox: SENSITIVE_STRING }))); };
export var SearchPlaceIndexForSuggestionsResponseFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Summary && { Summary: SearchPlaceIndexForSuggestionsSummaryFilterSensitiveLog(obj.Summary) }))); };
export var SearchPlaceIndexForTextRequestFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.Text && { Text: SENSITIVE_STRING })), (obj.BiasPosition && { BiasPosition: SENSITIVE_STRING })), (obj.FilterBBox && { FilterBBox: SENSITIVE_STRING }))); };
export var SearchForTextResultFilterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Place && { Place: PlaceFilterSensitiveLog(obj.Place) }))); };
export var SearchPlaceIndexForTextSummaryFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.Text && { Text: SENSITIVE_STRING })), (obj.BiasPosition && { BiasPosition: SENSITIVE_STRING })), (obj.FilterBBox && { FilterBBox: SENSITIVE_STRING })), (obj.ResultBBox && { ResultBBox: SENSITIVE_STRING }))); };
export var SearchPlaceIndexForTextResponseFilterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Summary && { Summary: SearchPlaceIndexForTextSummaryFilterSensitiveLog(obj.Summary) })), (obj.Results && { Results: obj.Results.map(function (item) { return SearchForTextResultFilterSensitiveLog(item); }) }))); };
export var UpdatePlaceIndexRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var UpdatePlaceIndexResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var UpdateRouteCalculatorRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var UpdateRouteCalculatorResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var UpdateTrackerRequestFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
export var UpdateTrackerResponseFilterSensitiveLog = function (obj) { return (__assign({}, obj)); };
