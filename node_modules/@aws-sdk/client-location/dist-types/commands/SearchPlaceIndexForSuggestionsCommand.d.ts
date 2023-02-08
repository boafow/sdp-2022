import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { SearchPlaceIndexForSuggestionsRequest, SearchPlaceIndexForSuggestionsResponse } from "../models/models_0";
export interface SearchPlaceIndexForSuggestionsCommandInput extends SearchPlaceIndexForSuggestionsRequest {
}
export interface SearchPlaceIndexForSuggestionsCommandOutput extends SearchPlaceIndexForSuggestionsResponse, __MetadataBearer {
}
/**
 * <p>Generates suggestions for addresses and points of interest based on partial or
 *             misspelled free-form text. This operation is also known as autocomplete, autosuggest, or
 *             fuzzy matching.</p>
 *         <p>Optional parameters let you narrow your search results by bounding box or country, or
 *             bias your search toward a specific position on the globe.</p>
 *         <note>
 *             <p>You can search for suggested place names near a specified position by using
 *                     <code>BiasPosition</code>, or filter results within a bounding box by using
 *                     <code>FilterBBox</code>. These parameters are mutually exclusive; using both
 *                     <code>BiasPosition</code> and <code>FilterBBox</code> in the same command
 *                 returns an error.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, SearchPlaceIndexForSuggestionsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, SearchPlaceIndexForSuggestionsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new SearchPlaceIndexForSuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchPlaceIndexForSuggestionsCommandInput} for command's `input` shape.
 * @see {@link SearchPlaceIndexForSuggestionsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class SearchPlaceIndexForSuggestionsCommand extends $Command<SearchPlaceIndexForSuggestionsCommandInput, SearchPlaceIndexForSuggestionsCommandOutput, LocationClientResolvedConfig> {
    readonly input: SearchPlaceIndexForSuggestionsCommandInput;
    constructor(input: SearchPlaceIndexForSuggestionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchPlaceIndexForSuggestionsCommandInput, SearchPlaceIndexForSuggestionsCommandOutput>;
    private serialize;
    private deserialize;
}
