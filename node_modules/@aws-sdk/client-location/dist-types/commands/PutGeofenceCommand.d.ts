import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { PutGeofenceRequest, PutGeofenceResponse } from "../models/models_0";
export interface PutGeofenceCommandInput extends PutGeofenceRequest {
}
export interface PutGeofenceCommandOutput extends PutGeofenceResponse, __MetadataBearer {
}
/**
 * <p>Stores a geofence geometry in a given geofence collection, or updates the geometry of
 *             an existing geofence if a geofence ID is included in the request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, PutGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, PutGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new PutGeofenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutGeofenceCommandInput} for command's `input` shape.
 * @see {@link PutGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class PutGeofenceCommand extends $Command<PutGeofenceCommandInput, PutGeofenceCommandOutput, LocationClientResolvedConfig> {
    readonly input: PutGeofenceCommandInput;
    constructor(input: PutGeofenceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutGeofenceCommandInput, PutGeofenceCommandOutput>;
    private serialize;
    private deserialize;
}
