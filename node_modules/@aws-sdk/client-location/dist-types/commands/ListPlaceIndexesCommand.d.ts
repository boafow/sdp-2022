import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListPlaceIndexesRequest, ListPlaceIndexesResponse } from "../models/models_0";
export interface ListPlaceIndexesCommandInput extends ListPlaceIndexesRequest {
}
export interface ListPlaceIndexesCommandOutput extends ListPlaceIndexesResponse, __MetadataBearer {
}
/**
 * <p>Lists place index resources in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListPlaceIndexesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListPlaceIndexesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListPlaceIndexesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlaceIndexesCommandInput} for command's `input` shape.
 * @see {@link ListPlaceIndexesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class ListPlaceIndexesCommand extends $Command<ListPlaceIndexesCommandInput, ListPlaceIndexesCommandOutput, LocationClientResolvedConfig> {
    readonly input: ListPlaceIndexesCommandInput;
    constructor(input: ListPlaceIndexesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPlaceIndexesCommandInput, ListPlaceIndexesCommandOutput>;
    private serialize;
    private deserialize;
}
