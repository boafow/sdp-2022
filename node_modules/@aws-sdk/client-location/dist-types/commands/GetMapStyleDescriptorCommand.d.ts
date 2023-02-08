import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { GetMapStyleDescriptorRequest, GetMapStyleDescriptorResponse } from "../models/models_0";
export interface GetMapStyleDescriptorCommandInput extends GetMapStyleDescriptorRequest {
}
export interface GetMapStyleDescriptorCommandOutput extends GetMapStyleDescriptorResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the map style descriptor from a map resource. </p>
 *         <p>The style descriptor contains speciﬁcations on how features render on a map. For
 *             example, what data to display, what order to display the data in, and the style for the
 *             data. Style descriptors follow the Mapbox Style Specification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapStyleDescriptorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapStyleDescriptorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetMapStyleDescriptorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMapStyleDescriptorCommandInput} for command's `input` shape.
 * @see {@link GetMapStyleDescriptorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class GetMapStyleDescriptorCommand extends $Command<GetMapStyleDescriptorCommandInput, GetMapStyleDescriptorCommandOutput, LocationClientResolvedConfig> {
    readonly input: GetMapStyleDescriptorCommandInput;
    constructor(input: GetMapStyleDescriptorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMapStyleDescriptorCommandInput, GetMapStyleDescriptorCommandOutput>;
    private serialize;
    private deserialize;
}
