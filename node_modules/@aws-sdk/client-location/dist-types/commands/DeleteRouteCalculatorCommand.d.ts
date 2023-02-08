import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DeleteRouteCalculatorRequest, DeleteRouteCalculatorResponse } from "../models/models_0";
export interface DeleteRouteCalculatorCommandInput extends DeleteRouteCalculatorRequest {
}
export interface DeleteRouteCalculatorCommandOutput extends DeleteRouteCalculatorResponse, __MetadataBearer {
}
/**
 * <p>Deletes a route calculator resource from your AWS account.</p>
 *         <note>
 *             <p>This operation deletes the resource permanently.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeleteRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class DeleteRouteCalculatorCommand extends $Command<DeleteRouteCalculatorCommandInput, DeleteRouteCalculatorCommandOutput, LocationClientResolvedConfig> {
    readonly input: DeleteRouteCalculatorCommandInput;
    constructor(input: DeleteRouteCalculatorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRouteCalculatorCommandInput, DeleteRouteCalculatorCommandOutput>;
    private serialize;
    private deserialize;
}
