import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DeletePlaceIndexRequest, DeletePlaceIndexResponse } from "../models/models_0";
export interface DeletePlaceIndexCommandInput extends DeletePlaceIndexRequest {
}
export interface DeletePlaceIndexCommandOutput extends DeletePlaceIndexResponse, __MetadataBearer {
}
/**
 * <p>Deletes a place index resource from your AWS account.</p>
 *         <note>
 *             <p>This operation deletes the resource permanently.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeletePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeletePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeletePlaceIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link DeletePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class DeletePlaceIndexCommand extends $Command<DeletePlaceIndexCommandInput, DeletePlaceIndexCommandOutput, LocationClientResolvedConfig> {
    readonly input: DeletePlaceIndexCommandInput;
    constructor(input: DeletePlaceIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePlaceIndexCommandInput, DeletePlaceIndexCommandOutput>;
    private serialize;
    private deserialize;
}
