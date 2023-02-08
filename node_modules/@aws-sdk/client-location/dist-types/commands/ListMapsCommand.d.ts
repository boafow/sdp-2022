import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListMapsRequest, ListMapsResponse } from "../models/models_0";
export interface ListMapsCommandInput extends ListMapsRequest {
}
export interface ListMapsCommandOutput extends ListMapsResponse, __MetadataBearer {
}
/**
 * <p>Lists map resources in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListMapsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListMapsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListMapsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMapsCommandInput} for command's `input` shape.
 * @see {@link ListMapsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class ListMapsCommand extends $Command<ListMapsCommandInput, ListMapsCommandOutput, LocationClientResolvedConfig> {
    readonly input: ListMapsCommandInput;
    constructor(input: ListMapsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMapsCommandInput, ListMapsCommandOutput>;
    private serialize;
    private deserialize;
}
