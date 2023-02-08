import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { BatchPutGeofenceRequest, BatchPutGeofenceResponse } from "../models/models_0";
export interface BatchPutGeofenceCommandInput extends BatchPutGeofenceRequest {
}
export interface BatchPutGeofenceCommandOutput extends BatchPutGeofenceResponse, __MetadataBearer {
}
/**
 * <p>A batch request for storing geofence geometries into a given geofence collection, or
 *             updates the geometry of an existing geofence if a geofence ID is included in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchPutGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchPutGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchPutGeofenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutGeofenceCommandInput} for command's `input` shape.
 * @see {@link BatchPutGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class BatchPutGeofenceCommand extends $Command<BatchPutGeofenceCommandInput, BatchPutGeofenceCommandOutput, LocationClientResolvedConfig> {
    readonly input: BatchPutGeofenceCommandInput;
    constructor(input: BatchPutGeofenceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchPutGeofenceCommandInput, BatchPutGeofenceCommandOutput>;
    private serialize;
    private deserialize;
}
