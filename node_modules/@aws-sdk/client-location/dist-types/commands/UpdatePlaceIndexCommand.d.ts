import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { UpdatePlaceIndexRequest, UpdatePlaceIndexResponse } from "../models/models_0";
export interface UpdatePlaceIndexCommandInput extends UpdatePlaceIndexRequest {
}
export interface UpdatePlaceIndexCommandOutput extends UpdatePlaceIndexResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified properties of a given place index resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdatePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdatePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new UpdatePlaceIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link UpdatePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class UpdatePlaceIndexCommand extends $Command<UpdatePlaceIndexCommandInput, UpdatePlaceIndexCommandOutput, LocationClientResolvedConfig> {
    readonly input: UpdatePlaceIndexCommandInput;
    constructor(input: UpdatePlaceIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePlaceIndexCommandInput, UpdatePlaceIndexCommandOutput>;
    private serialize;
    private deserialize;
}
