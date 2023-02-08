import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { UpdateRouteCalculatorRequest, UpdateRouteCalculatorResponse } from "../models/models_0";
export interface UpdateRouteCalculatorCommandInput extends UpdateRouteCalculatorRequest {
}
export interface UpdateRouteCalculatorCommandOutput extends UpdateRouteCalculatorResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified properties for a given route calculator resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new UpdateRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link UpdateRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class UpdateRouteCalculatorCommand extends $Command<UpdateRouteCalculatorCommandInput, UpdateRouteCalculatorCommandOutput, LocationClientResolvedConfig> {
    readonly input: UpdateRouteCalculatorCommandInput;
    constructor(input: UpdateRouteCalculatorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRouteCalculatorCommandInput, UpdateRouteCalculatorCommandOutput>;
    private serialize;
    private deserialize;
}
