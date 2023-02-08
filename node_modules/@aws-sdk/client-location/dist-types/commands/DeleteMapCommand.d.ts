import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DeleteMapRequest, DeleteMapResponse } from "../models/models_0";
export interface DeleteMapCommandInput extends DeleteMapRequest {
}
export interface DeleteMapCommandOutput extends DeleteMapResponse, __MetadataBearer {
}
/**
 * <p>Deletes a map resource from your AWS account.</p>
 *         <note>
 *             <p>This operation deletes the resource permanently. If the map is being used in an application,
 *                 the map may not render.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeleteMapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMapCommandInput} for command's `input` shape.
 * @see {@link DeleteMapCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class DeleteMapCommand extends $Command<DeleteMapCommandInput, DeleteMapCommandOutput, LocationClientResolvedConfig> {
    readonly input: DeleteMapCommandInput;
    constructor(input: DeleteMapCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMapCommandInput, DeleteMapCommandOutput>;
    private serialize;
    private deserialize;
}
