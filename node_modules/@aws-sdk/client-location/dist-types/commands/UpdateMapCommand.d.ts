import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { UpdateMapRequest, UpdateMapResponse } from "../models/models_0";
export interface UpdateMapCommandInput extends UpdateMapRequest {
}
export interface UpdateMapCommandOutput extends UpdateMapResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified properties of a given map resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new UpdateMapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMapCommandInput} for command's `input` shape.
 * @see {@link UpdateMapCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class UpdateMapCommand extends $Command<UpdateMapCommandInput, UpdateMapCommandOutput, LocationClientResolvedConfig> {
    readonly input: UpdateMapCommandInput;
    constructor(input: UpdateMapCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMapCommandInput, UpdateMapCommandOutput>;
    private serialize;
    private deserialize;
}
