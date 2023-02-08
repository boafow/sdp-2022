import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { CreatePlaceIndexRequest, CreatePlaceIndexResponse } from "../models/models_0";
export interface CreatePlaceIndexCommandInput extends CreatePlaceIndexRequest {
}
export interface CreatePlaceIndexCommandOutput extends CreatePlaceIndexResponse, __MetadataBearer {
}
/**
 * <p>Creates a place index resource in your AWS account. Use a place index resource to
 *             geocode addresses and other text queries by using the
 *                 <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by
 *             using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions
 *             by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p>
 *         <note>
 *             <p>If your application is tracking or routing assets you use in your business, such
 *                 as delivery vehicles or employees, you may only use HERE as your geolocation
 *                 provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">AWS
 *                     service terms</a> for more details.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreatePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreatePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreatePlaceIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link CreatePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class CreatePlaceIndexCommand extends $Command<CreatePlaceIndexCommandInput, CreatePlaceIndexCommandOutput, LocationClientResolvedConfig> {
    readonly input: CreatePlaceIndexCommandInput;
    constructor(input: CreatePlaceIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlaceIndexCommandInput, CreatePlaceIndexCommandOutput>;
    private serialize;
    private deserialize;
}
