import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DeleteTrackerRequest, DeleteTrackerResponse } from "../models/models_0";
export interface DeleteTrackerCommandInput extends DeleteTrackerRequest {
}
export interface DeleteTrackerCommandOutput extends DeleteTrackerResponse, __MetadataBearer {
}
/**
 * <p>Deletes a tracker resource from your AWS account.</p>
 *          <note>
 *             <p>This operation deletes the resource permanently. If the tracker resource is in use, you may
 *                 encounter an error. Make sure that the target resource isn't a dependency for your
 *                 applications.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeleteTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrackerCommandInput} for command's `input` shape.
 * @see {@link DeleteTrackerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class DeleteTrackerCommand extends $Command<DeleteTrackerCommandInput, DeleteTrackerCommandOutput, LocationClientResolvedConfig> {
    readonly input: DeleteTrackerCommandInput;
    constructor(input: DeleteTrackerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrackerCommandInput, DeleteTrackerCommandOutput>;
    private serialize;
    private deserialize;
}
