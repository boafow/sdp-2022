import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { GetPlaceRequest, GetPlaceResponse } from "../models/models_0";
export interface GetPlaceCommandInput extends GetPlaceRequest {
}
export interface GetPlaceCommandOutput extends GetPlaceResponse, __MetadataBearer {
}
/**
 * <p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search
 *             operations.</p>
 *         <note>
 *             <p>A PlaceId is valid only if all of the following are the same in the original
 *                 search request and the call to <code>GetPlace</code>.</p>
 *             <ul>
 *                <li>
 *                     <p>Customer AWS account</p>
 *                 </li>
 *                <li>
 *                     <p>AWS Region</p>
 *                 </li>
 *                <li>
 *                     <p>Data provider specified in the place index resource</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetPlaceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetPlaceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetPlaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPlaceCommandInput} for command's `input` shape.
 * @see {@link GetPlaceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class GetPlaceCommand extends $Command<GetPlaceCommandInput, GetPlaceCommandOutput, LocationClientResolvedConfig> {
    readonly input: GetPlaceCommandInput;
    constructor(input: GetPlaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPlaceCommandInput, GetPlaceCommandOutput>;
    private serialize;
    private deserialize;
}
