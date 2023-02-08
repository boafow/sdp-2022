import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { SearchPlaceIndexForTextRequest, SearchPlaceIndexForTextResponse } from "../models/models_0";
export interface SearchPlaceIndexForTextCommandInput extends SearchPlaceIndexForTextRequest {
}
export interface SearchPlaceIndexForTextCommandOutput extends SearchPlaceIndexForTextResponse, __MetadataBearer {
}
/**
 * <p>Geocodes free-form text, such as an address, name, city, or region to allow you to
 *             search for Places or points of interest. </p>
 *         <p>Optional parameters let you narrow your search results by bounding box or country, or
 *             bias your search toward a specific position on the globe.</p>
 *         <note>
 *             <p>You can search for places near a given position using <code>BiasPosition</code>,
 *                 or filter results within a bounding box using <code>FilterBBox</code>. Providing
 *                 both parameters simultaneously returns an error.</p>
 *         </note>
 *         <p>Search results are returned in order of highest to lowest relevance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, SearchPlaceIndexForTextCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, SearchPlaceIndexForTextCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new SearchPlaceIndexForTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchPlaceIndexForTextCommandInput} for command's `input` shape.
 * @see {@link SearchPlaceIndexForTextCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class SearchPlaceIndexForTextCommand extends $Command<SearchPlaceIndexForTextCommandInput, SearchPlaceIndexForTextCommandOutput, LocationClientResolvedConfig> {
    readonly input: SearchPlaceIndexForTextCommandInput;
    constructor(input: SearchPlaceIndexForTextCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchPlaceIndexForTextCommandInput, SearchPlaceIndexForTextCommandOutput>;
    private serialize;
    private deserialize;
}
