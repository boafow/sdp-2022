import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribeRouteCalculatorRequest, DescribeRouteCalculatorResponse } from "../models/models_0";
export interface DescribeRouteCalculatorCommandInput extends DescribeRouteCalculatorRequest {
}
export interface DescribeRouteCalculatorCommandOutput extends DescribeRouteCalculatorResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the route calculator resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DescribeRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link DescribeRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class DescribeRouteCalculatorCommand extends $Command<DescribeRouteCalculatorCommandInput, DescribeRouteCalculatorCommandOutput, LocationClientResolvedConfig> {
    readonly input: DescribeRouteCalculatorCommandInput;
    constructor(input: DescribeRouteCalculatorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRouteCalculatorCommandInput, DescribeRouteCalculatorCommandOutput>;
    private serialize;
    private deserialize;
}
