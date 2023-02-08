import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListRouteCalculatorsRequest, ListRouteCalculatorsResponse } from "../models/models_0";
export interface ListRouteCalculatorsCommandInput extends ListRouteCalculatorsRequest {
}
export interface ListRouteCalculatorsCommandOutput extends ListRouteCalculatorsResponse, __MetadataBearer {
}
/**
 * <p>Lists route calculator resources in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListRouteCalculatorsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListRouteCalculatorsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListRouteCalculatorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRouteCalculatorsCommandInput} for command's `input` shape.
 * @see {@link ListRouteCalculatorsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class ListRouteCalculatorsCommand extends $Command<ListRouteCalculatorsCommandInput, ListRouteCalculatorsCommandOutput, LocationClientResolvedConfig> {
    readonly input: ListRouteCalculatorsCommandInput;
    constructor(input: ListRouteCalculatorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRouteCalculatorsCommandInput, ListRouteCalculatorsCommandOutput>;
    private serialize;
    private deserialize;
}
