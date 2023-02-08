import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListGeofencesRequest, ListGeofencesResponse } from "../models/models_0";
export interface ListGeofencesCommandInput extends ListGeofencesRequest {
}
export interface ListGeofencesCommandOutput extends ListGeofencesResponse, __MetadataBearer {
}
/**
 * <p>Lists geofences stored in a given geofence collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListGeofencesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListGeofencesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListGeofencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGeofencesCommandInput} for command's `input` shape.
 * @see {@link ListGeofencesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class ListGeofencesCommand extends $Command<ListGeofencesCommandInput, ListGeofencesCommandOutput, LocationClientResolvedConfig> {
    readonly input: ListGeofencesCommandInput;
    constructor(input: ListGeofencesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGeofencesCommandInput, ListGeofencesCommandOutput>;
    private serialize;
    private deserialize;
}
