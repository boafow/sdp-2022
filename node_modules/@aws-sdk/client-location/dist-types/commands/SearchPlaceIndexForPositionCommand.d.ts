import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { SearchPlaceIndexForPositionRequest, SearchPlaceIndexForPositionResponse } from "../models/models_0";
export interface SearchPlaceIndexForPositionCommandInput extends SearchPlaceIndexForPositionRequest {
}
export interface SearchPlaceIndexForPositionCommandOutput extends SearchPlaceIndexForPositionResponse, __MetadataBearer {
}
/**
 * <p>Reverse geocodes a given coordinate and returns a legible address. Allows you to
 *             search for Places or points of interest near a given position.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, SearchPlaceIndexForPositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, SearchPlaceIndexForPositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new SearchPlaceIndexForPositionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchPlaceIndexForPositionCommandInput} for command's `input` shape.
 * @see {@link SearchPlaceIndexForPositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class SearchPlaceIndexForPositionCommand extends $Command<SearchPlaceIndexForPositionCommandInput, SearchPlaceIndexForPositionCommandOutput, LocationClientResolvedConfig> {
    readonly input: SearchPlaceIndexForPositionCommandInput;
    constructor(input: SearchPlaceIndexForPositionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchPlaceIndexForPositionCommandInput, SearchPlaceIndexForPositionCommandOutput>;
    private serialize;
    private deserialize;
}
