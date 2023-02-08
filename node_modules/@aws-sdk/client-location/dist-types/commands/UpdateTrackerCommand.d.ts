import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { UpdateTrackerRequest, UpdateTrackerResponse } from "../models/models_0";
export interface UpdateTrackerCommandInput extends UpdateTrackerRequest {
}
export interface UpdateTrackerCommandOutput extends UpdateTrackerResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified properties of a given tracker resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new UpdateTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrackerCommandInput} for command's `input` shape.
 * @see {@link UpdateTrackerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class UpdateTrackerCommand extends $Command<UpdateTrackerCommandInput, UpdateTrackerCommandOutput, LocationClientResolvedConfig> {
    readonly input: UpdateTrackerCommandInput;
    constructor(input: UpdateTrackerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrackerCommandInput, UpdateTrackerCommandOutput>;
    private serialize;
    private deserialize;
}
