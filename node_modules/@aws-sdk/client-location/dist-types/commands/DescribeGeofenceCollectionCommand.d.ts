import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribeGeofenceCollectionRequest, DescribeGeofenceCollectionResponse } from "../models/models_0";
export interface DescribeGeofenceCollectionCommandInput extends DescribeGeofenceCollectionRequest {
}
export interface DescribeGeofenceCollectionCommandOutput extends DescribeGeofenceCollectionResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the geofence collection details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeGeofenceCollectionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeGeofenceCollectionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DescribeGeofenceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGeofenceCollectionCommandInput} for command's `input` shape.
 * @see {@link DescribeGeofenceCollectionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class DescribeGeofenceCollectionCommand extends $Command<DescribeGeofenceCollectionCommandInput, DescribeGeofenceCollectionCommandOutput, LocationClientResolvedConfig> {
    readonly input: DescribeGeofenceCollectionCommandInput;
    constructor(input: DescribeGeofenceCollectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGeofenceCollectionCommandInput, DescribeGeofenceCollectionCommandOutput>;
    private serialize;
    private deserialize;
}
