import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { CreateRouteCalculatorRequest, CreateRouteCalculatorResponse } from "../models/models_0";
export interface CreateRouteCalculatorCommandInput extends CreateRouteCalculatorRequest {
}
export interface CreateRouteCalculatorCommandOutput extends CreateRouteCalculatorResponse, __MetadataBearer {
}
/**
 * <p>Creates a route calculator resource in your AWS account.</p>
 *         <p>You can send requests to a route calculator resource to estimate travel time,
 *             distance, and get directions. A route calculator sources traffic and road network data
 *             from your chosen data provider.</p>
 *         <note>
 *             <p>If your application is tracking or routing assets you use in your business, such
 *                 as delivery vehicles or employees, you may only use HERE as your geolocation
 *                 provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">AWS
 *                     service terms</a> for more details.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreateRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link CreateRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class CreateRouteCalculatorCommand extends $Command<CreateRouteCalculatorCommandInput, CreateRouteCalculatorCommandOutput, LocationClientResolvedConfig> {
    readonly input: CreateRouteCalculatorCommandInput;
    constructor(input: CreateRouteCalculatorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRouteCalculatorCommandInput, CreateRouteCalculatorCommandOutput>;
    private serialize;
    private deserialize;
}
