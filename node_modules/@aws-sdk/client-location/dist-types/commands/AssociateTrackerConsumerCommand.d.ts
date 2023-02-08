import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { AssociateTrackerConsumerRequest, AssociateTrackerConsumerResponse } from "../models/models_0";
export interface AssociateTrackerConsumerCommandInput extends AssociateTrackerConsumerRequest {
}
export interface AssociateTrackerConsumerCommandOutput extends AssociateTrackerConsumerResponse, __MetadataBearer {
}
/**
 * <p>Creates an association between a geofence collection and a tracker resource. This
 *             allows the tracker resource to communicate location data to the linked geofence
 *             collection. </p>
 *         <p>You can associate up to five geofence collections to each tracker resource.</p>
 *         <note>
 *             <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, AssociateTrackerConsumerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, AssociateTrackerConsumerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new AssociateTrackerConsumerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTrackerConsumerCommandInput} for command's `input` shape.
 * @see {@link AssociateTrackerConsumerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class AssociateTrackerConsumerCommand extends $Command<AssociateTrackerConsumerCommandInput, AssociateTrackerConsumerCommandOutput, LocationClientResolvedConfig> {
    readonly input: AssociateTrackerConsumerCommandInput;
    constructor(input: AssociateTrackerConsumerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateTrackerConsumerCommandInput, AssociateTrackerConsumerCommandOutput>;
    private serialize;
    private deserialize;
}
