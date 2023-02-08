import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { UpdateGeofenceCollectionRequest, UpdateGeofenceCollectionResponse } from "../models/models_0";
export interface UpdateGeofenceCollectionCommandInput extends UpdateGeofenceCollectionRequest {
}
export interface UpdateGeofenceCollectionCommandOutput extends UpdateGeofenceCollectionResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified properties of a given geofence collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateGeofenceCollectionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateGeofenceCollectionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new UpdateGeofenceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGeofenceCollectionCommandInput} for command's `input` shape.
 * @see {@link UpdateGeofenceCollectionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class UpdateGeofenceCollectionCommand extends $Command<UpdateGeofenceCollectionCommandInput, UpdateGeofenceCollectionCommandOutput, LocationClientResolvedConfig> {
    readonly input: UpdateGeofenceCollectionCommandInput;
    constructor(input: UpdateGeofenceCollectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGeofenceCollectionCommandInput, UpdateGeofenceCollectionCommandOutput>;
    private serialize;
    private deserialize;
}
