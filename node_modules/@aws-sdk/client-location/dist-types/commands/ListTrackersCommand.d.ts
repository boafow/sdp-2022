import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListTrackersRequest, ListTrackersResponse } from "../models/models_0";
export interface ListTrackersCommandInput extends ListTrackersRequest {
}
export interface ListTrackersCommandOutput extends ListTrackersResponse, __MetadataBearer {
}
/**
 * <p>Lists tracker resources in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListTrackersCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListTrackersCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListTrackersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrackersCommandInput} for command's `input` shape.
 * @see {@link ListTrackersCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class ListTrackersCommand extends $Command<ListTrackersCommandInput, ListTrackersCommandOutput, LocationClientResolvedConfig> {
    readonly input: ListTrackersCommandInput;
    constructor(input: ListTrackersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrackersCommandInput, ListTrackersCommandOutput>;
    private serialize;
    private deserialize;
}
