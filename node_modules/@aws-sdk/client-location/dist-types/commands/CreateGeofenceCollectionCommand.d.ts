import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { CreateGeofenceCollectionRequest, CreateGeofenceCollectionResponse } from "../models/models_0";
export interface CreateGeofenceCollectionCommandInput extends CreateGeofenceCollectionRequest {
}
export interface CreateGeofenceCollectionCommandOutput extends CreateGeofenceCollectionResponse, __MetadataBearer {
}
/**
 * <p>Creates a geofence collection, which manages and stores geofences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateGeofenceCollectionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateGeofenceCollectionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreateGeofenceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGeofenceCollectionCommandInput} for command's `input` shape.
 * @see {@link CreateGeofenceCollectionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class CreateGeofenceCollectionCommand extends $Command<CreateGeofenceCollectionCommandInput, CreateGeofenceCollectionCommandOutput, LocationClientResolvedConfig> {
    readonly input: CreateGeofenceCollectionCommandInput;
    constructor(input: CreateGeofenceCollectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGeofenceCollectionCommandInput, CreateGeofenceCollectionCommandOutput>;
    private serialize;
    private deserialize;
}
