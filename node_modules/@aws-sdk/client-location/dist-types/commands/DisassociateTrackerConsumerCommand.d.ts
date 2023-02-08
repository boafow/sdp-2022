import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DisassociateTrackerConsumerRequest, DisassociateTrackerConsumerResponse } from "../models/models_0";
export interface DisassociateTrackerConsumerCommandInput extends DisassociateTrackerConsumerRequest {
}
export interface DisassociateTrackerConsumerCommandOutput extends DisassociateTrackerConsumerResponse, __MetadataBearer {
}
/**
 * <p>Removes the association between a tracker resource and a geofence collection.</p>
 *         <note>
 *             <p>Once you unlink a tracker resource from a geofence collection, the tracker
 *                 positions will no longer be automatically evaluated against geofences.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DisassociateTrackerConsumerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DisassociateTrackerConsumerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DisassociateTrackerConsumerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTrackerConsumerCommandInput} for command's `input` shape.
 * @see {@link DisassociateTrackerConsumerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class DisassociateTrackerConsumerCommand extends $Command<DisassociateTrackerConsumerCommandInput, DisassociateTrackerConsumerCommandOutput, LocationClientResolvedConfig> {
    readonly input: DisassociateTrackerConsumerCommandInput;
    constructor(input: DisassociateTrackerConsumerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateTrackerConsumerCommandInput, DisassociateTrackerConsumerCommandOutput>;
    private serialize;
    private deserialize;
}
