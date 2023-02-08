import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DeleteGeofenceCollectionRequest, DeleteGeofenceCollectionResponse } from "../models/models_0";
export interface DeleteGeofenceCollectionCommandInput extends DeleteGeofenceCollectionRequest {
}
export interface DeleteGeofenceCollectionCommandOutput extends DeleteGeofenceCollectionResponse, __MetadataBearer {
}
/**
 * <p>Deletes a geofence collection from your AWS account.</p>
 *         <note>
 *             <p>This operation deletes the resource permanently. If the geofence collection is the
 *                 target of a tracker resource, the devices will no longer be monitored.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteGeofenceCollectionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteGeofenceCollectionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeleteGeofenceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGeofenceCollectionCommandInput} for command's `input` shape.
 * @see {@link DeleteGeofenceCollectionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class DeleteGeofenceCollectionCommand extends $Command<DeleteGeofenceCollectionCommandInput, DeleteGeofenceCollectionCommandOutput, LocationClientResolvedConfig> {
    readonly input: DeleteGeofenceCollectionCommandInput;
    constructor(input: DeleteGeofenceCollectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGeofenceCollectionCommandInput, DeleteGeofenceCollectionCommandOutput>;
    private serialize;
    private deserialize;
}
