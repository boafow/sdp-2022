"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const AssociateTrackerConsumerCommand_1 = require("./commands/AssociateTrackerConsumerCommand");
const BatchDeleteDevicePositionHistoryCommand_1 = require("./commands/BatchDeleteDevicePositionHistoryCommand");
const BatchDeleteGeofenceCommand_1 = require("./commands/BatchDeleteGeofenceCommand");
const BatchEvaluateGeofencesCommand_1 = require("./commands/BatchEvaluateGeofencesCommand");
const BatchGetDevicePositionCommand_1 = require("./commands/BatchGetDevicePositionCommand");
const BatchPutGeofenceCommand_1 = require("./commands/BatchPutGeofenceCommand");
const BatchUpdateDevicePositionCommand_1 = require("./commands/BatchUpdateDevicePositionCommand");
const CalculateRouteCommand_1 = require("./commands/CalculateRouteCommand");
const CalculateRouteMatrixCommand_1 = require("./commands/CalculateRouteMatrixCommand");
const CreateGeofenceCollectionCommand_1 = require("./commands/CreateGeofenceCollectionCommand");
const CreateMapCommand_1 = require("./commands/CreateMapCommand");
const CreatePlaceIndexCommand_1 = require("./commands/CreatePlaceIndexCommand");
const CreateRouteCalculatorCommand_1 = require("./commands/CreateRouteCalculatorCommand");
const CreateTrackerCommand_1 = require("./commands/CreateTrackerCommand");
const DeleteGeofenceCollectionCommand_1 = require("./commands/DeleteGeofenceCollectionCommand");
const DeleteMapCommand_1 = require("./commands/DeleteMapCommand");
const DeletePlaceIndexCommand_1 = require("./commands/DeletePlaceIndexCommand");
const DeleteRouteCalculatorCommand_1 = require("./commands/DeleteRouteCalculatorCommand");
const DeleteTrackerCommand_1 = require("./commands/DeleteTrackerCommand");
const DescribeGeofenceCollectionCommand_1 = require("./commands/DescribeGeofenceCollectionCommand");
const DescribeMapCommand_1 = require("./commands/DescribeMapCommand");
const DescribePlaceIndexCommand_1 = require("./commands/DescribePlaceIndexCommand");
const DescribeRouteCalculatorCommand_1 = require("./commands/DescribeRouteCalculatorCommand");
const DescribeTrackerCommand_1 = require("./commands/DescribeTrackerCommand");
const DisassociateTrackerConsumerCommand_1 = require("./commands/DisassociateTrackerConsumerCommand");
const GetDevicePositionCommand_1 = require("./commands/GetDevicePositionCommand");
const GetDevicePositionHistoryCommand_1 = require("./commands/GetDevicePositionHistoryCommand");
const GetGeofenceCommand_1 = require("./commands/GetGeofenceCommand");
const GetMapGlyphsCommand_1 = require("./commands/GetMapGlyphsCommand");
const GetMapSpritesCommand_1 = require("./commands/GetMapSpritesCommand");
const GetMapStyleDescriptorCommand_1 = require("./commands/GetMapStyleDescriptorCommand");
const GetMapTileCommand_1 = require("./commands/GetMapTileCommand");
const GetPlaceCommand_1 = require("./commands/GetPlaceCommand");
const ListDevicePositionsCommand_1 = require("./commands/ListDevicePositionsCommand");
const ListGeofenceCollectionsCommand_1 = require("./commands/ListGeofenceCollectionsCommand");
const ListGeofencesCommand_1 = require("./commands/ListGeofencesCommand");
const ListMapsCommand_1 = require("./commands/ListMapsCommand");
const ListPlaceIndexesCommand_1 = require("./commands/ListPlaceIndexesCommand");
const ListRouteCalculatorsCommand_1 = require("./commands/ListRouteCalculatorsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTrackerConsumersCommand_1 = require("./commands/ListTrackerConsumersCommand");
const ListTrackersCommand_1 = require("./commands/ListTrackersCommand");
const PutGeofenceCommand_1 = require("./commands/PutGeofenceCommand");
const SearchPlaceIndexForPositionCommand_1 = require("./commands/SearchPlaceIndexForPositionCommand");
const SearchPlaceIndexForSuggestionsCommand_1 = require("./commands/SearchPlaceIndexForSuggestionsCommand");
const SearchPlaceIndexForTextCommand_1 = require("./commands/SearchPlaceIndexForTextCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateGeofenceCollectionCommand_1 = require("./commands/UpdateGeofenceCollectionCommand");
const UpdateMapCommand_1 = require("./commands/UpdateMapCommand");
const UpdatePlaceIndexCommand_1 = require("./commands/UpdatePlaceIndexCommand");
const UpdateRouteCalculatorCommand_1 = require("./commands/UpdateRouteCalculatorCommand");
const UpdateTrackerCommand_1 = require("./commands/UpdateTrackerCommand");
const LocationClient_1 = require("./LocationClient");
class Location extends LocationClient_1.LocationClient {
    associateTrackerConsumer(args, optionsOrCb, cb) {
        const command = new AssociateTrackerConsumerCommand_1.AssociateTrackerConsumerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchDeleteDevicePositionHistory(args, optionsOrCb, cb) {
        const command = new BatchDeleteDevicePositionHistoryCommand_1.BatchDeleteDevicePositionHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchDeleteGeofence(args, optionsOrCb, cb) {
        const command = new BatchDeleteGeofenceCommand_1.BatchDeleteGeofenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchEvaluateGeofences(args, optionsOrCb, cb) {
        const command = new BatchEvaluateGeofencesCommand_1.BatchEvaluateGeofencesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchGetDevicePosition(args, optionsOrCb, cb) {
        const command = new BatchGetDevicePositionCommand_1.BatchGetDevicePositionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchPutGeofence(args, optionsOrCb, cb) {
        const command = new BatchPutGeofenceCommand_1.BatchPutGeofenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchUpdateDevicePosition(args, optionsOrCb, cb) {
        const command = new BatchUpdateDevicePositionCommand_1.BatchUpdateDevicePositionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    calculateRoute(args, optionsOrCb, cb) {
        const command = new CalculateRouteCommand_1.CalculateRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    calculateRouteMatrix(args, optionsOrCb, cb) {
        const command = new CalculateRouteMatrixCommand_1.CalculateRouteMatrixCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createGeofenceCollection(args, optionsOrCb, cb) {
        const command = new CreateGeofenceCollectionCommand_1.CreateGeofenceCollectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createMap(args, optionsOrCb, cb) {
        const command = new CreateMapCommand_1.CreateMapCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPlaceIndex(args, optionsOrCb, cb) {
        const command = new CreatePlaceIndexCommand_1.CreatePlaceIndexCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createRouteCalculator(args, optionsOrCb, cb) {
        const command = new CreateRouteCalculatorCommand_1.CreateRouteCalculatorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTracker(args, optionsOrCb, cb) {
        const command = new CreateTrackerCommand_1.CreateTrackerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteGeofenceCollection(args, optionsOrCb, cb) {
        const command = new DeleteGeofenceCollectionCommand_1.DeleteGeofenceCollectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteMap(args, optionsOrCb, cb) {
        const command = new DeleteMapCommand_1.DeleteMapCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deletePlaceIndex(args, optionsOrCb, cb) {
        const command = new DeletePlaceIndexCommand_1.DeletePlaceIndexCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteRouteCalculator(args, optionsOrCb, cb) {
        const command = new DeleteRouteCalculatorCommand_1.DeleteRouteCalculatorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTracker(args, optionsOrCb, cb) {
        const command = new DeleteTrackerCommand_1.DeleteTrackerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGeofenceCollection(args, optionsOrCb, cb) {
        const command = new DescribeGeofenceCollectionCommand_1.DescribeGeofenceCollectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMap(args, optionsOrCb, cb) {
        const command = new DescribeMapCommand_1.DescribeMapCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePlaceIndex(args, optionsOrCb, cb) {
        const command = new DescribePlaceIndexCommand_1.DescribePlaceIndexCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRouteCalculator(args, optionsOrCb, cb) {
        const command = new DescribeRouteCalculatorCommand_1.DescribeRouteCalculatorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTracker(args, optionsOrCb, cb) {
        const command = new DescribeTrackerCommand_1.DescribeTrackerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateTrackerConsumer(args, optionsOrCb, cb) {
        const command = new DisassociateTrackerConsumerCommand_1.DisassociateTrackerConsumerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDevicePosition(args, optionsOrCb, cb) {
        const command = new GetDevicePositionCommand_1.GetDevicePositionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDevicePositionHistory(args, optionsOrCb, cb) {
        const command = new GetDevicePositionHistoryCommand_1.GetDevicePositionHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getGeofence(args, optionsOrCb, cb) {
        const command = new GetGeofenceCommand_1.GetGeofenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMapGlyphs(args, optionsOrCb, cb) {
        const command = new GetMapGlyphsCommand_1.GetMapGlyphsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMapSprites(args, optionsOrCb, cb) {
        const command = new GetMapSpritesCommand_1.GetMapSpritesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMapStyleDescriptor(args, optionsOrCb, cb) {
        const command = new GetMapStyleDescriptorCommand_1.GetMapStyleDescriptorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMapTile(args, optionsOrCb, cb) {
        const command = new GetMapTileCommand_1.GetMapTileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getPlace(args, optionsOrCb, cb) {
        const command = new GetPlaceCommand_1.GetPlaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDevicePositions(args, optionsOrCb, cb) {
        const command = new ListDevicePositionsCommand_1.ListDevicePositionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listGeofenceCollections(args, optionsOrCb, cb) {
        const command = new ListGeofenceCollectionsCommand_1.ListGeofenceCollectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listGeofences(args, optionsOrCb, cb) {
        const command = new ListGeofencesCommand_1.ListGeofencesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listMaps(args, optionsOrCb, cb) {
        const command = new ListMapsCommand_1.ListMapsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPlaceIndexes(args, optionsOrCb, cb) {
        const command = new ListPlaceIndexesCommand_1.ListPlaceIndexesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRouteCalculators(args, optionsOrCb, cb) {
        const command = new ListRouteCalculatorsCommand_1.ListRouteCalculatorsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTrackerConsumers(args, optionsOrCb, cb) {
        const command = new ListTrackerConsumersCommand_1.ListTrackerConsumersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTrackers(args, optionsOrCb, cb) {
        const command = new ListTrackersCommand_1.ListTrackersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putGeofence(args, optionsOrCb, cb) {
        const command = new PutGeofenceCommand_1.PutGeofenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchPlaceIndexForPosition(args, optionsOrCb, cb) {
        const command = new SearchPlaceIndexForPositionCommand_1.SearchPlaceIndexForPositionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchPlaceIndexForSuggestions(args, optionsOrCb, cb) {
        const command = new SearchPlaceIndexForSuggestionsCommand_1.SearchPlaceIndexForSuggestionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchPlaceIndexForText(args, optionsOrCb, cb) {
        const command = new SearchPlaceIndexForTextCommand_1.SearchPlaceIndexForTextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGeofenceCollection(args, optionsOrCb, cb) {
        const command = new UpdateGeofenceCollectionCommand_1.UpdateGeofenceCollectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMap(args, optionsOrCb, cb) {
        const command = new UpdateMapCommand_1.UpdateMapCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updatePlaceIndex(args, optionsOrCb, cb) {
        const command = new UpdatePlaceIndexCommand_1.UpdatePlaceIndexCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateRouteCalculator(args, optionsOrCb, cb) {
        const command = new UpdateRouteCalculatorCommand_1.UpdateRouteCalculatorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTracker(args, optionsOrCb, cb) {
        const command = new UpdateTrackerCommand_1.UpdateTrackerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Location = Location;
