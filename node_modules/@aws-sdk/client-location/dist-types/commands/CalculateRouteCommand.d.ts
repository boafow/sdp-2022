import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { CalculateRouteRequest, CalculateRouteResponse } from "../models/models_0";
export interface CalculateRouteCommandInput extends CalculateRouteRequest {
}
export interface CalculateRouteCommandOutput extends CalculateRouteResponse, __MetadataBearer {
}
/**
 * <p>
 *             <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters:
 *                 <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that
 *             you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a
 *                 route calculator resource</a>.</p>
 *         <p>By default, a request that doesn't specify a departure time uses the best time of day
 *             to travel with the best traffic conditions when calculating the route.</p>
 *         <p>Additional options include:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a
 *                         departure time</a> using either <code>DepartureTime</code> or
 *                         <code>DepartNow</code>. This calculates a route based on predictive traffic
 *                     data at the given time. </p>
 *                 <note>
 *                     <p>You can't specify both <code>DepartureTime</code> and
 *                             <code>DepartNow</code> in a single request. Specifying both parameters
 *                         returns a validation error.</p>
 *                 </note>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel
 *                         mode</a> using TravelMode sets the transportation mode used to calculate
 *                     the routes. This also lets you specify additional route preferences in
 *                         <code>CarModeOptions</code> if traveling by <code>Car</code>, or
 *                         <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p>
 *                 <note>
 *                   <p>If you specify <code>walking</code> for the travel mode and your data
 *                     provider is Esri, the start and destination must be within 40km.</p>
 *                </note>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CalculateRouteCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CalculateRouteCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CalculateRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CalculateRouteCommandInput} for command's `input` shape.
 * @see {@link CalculateRouteCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class CalculateRouteCommand extends $Command<CalculateRouteCommandInput, CalculateRouteCommandOutput, LocationClientResolvedConfig> {
    readonly input: CalculateRouteCommandInput;
    constructor(input: CalculateRouteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CalculateRouteCommandInput, CalculateRouteCommandOutput>;
    private serialize;
    private deserialize;
}
