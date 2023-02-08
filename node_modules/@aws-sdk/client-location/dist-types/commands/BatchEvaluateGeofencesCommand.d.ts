import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { BatchEvaluateGeofencesRequest, BatchEvaluateGeofencesResponse } from "../models/models_0";
export interface BatchEvaluateGeofencesCommandInput extends BatchEvaluateGeofencesRequest {
}
export interface BatchEvaluateGeofencesCommandOutput extends BatchEvaluateGeofencesResponse, __MetadataBearer {
}
/**
 * <p>Evaluates device positions against the geofence geometries from a given geofence
 *             collection.</p>
 *         <p>This operation always returns an empty response because geofences are asynchronously
 *             evaluated. The evaluation determines if the device has entered or exited a geofenced
 *             area, and then publishes one of the following events to Amazon EventBridge:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>ENTER</code> if Amazon Location determines that the tracked device has entered
 *                     a geofenced area.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>EXIT</code> if Amazon Location determines that the tracked device has exited a
 *                     geofenced area.</p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>The last geofence that a device was observed within is tracked for 30 days after
 *                 the most recent device position update.</p>
 *         </note>
 *         <note>
 *             <p>Geofence evaluation uses the given device position. It does not account for the
 *                 optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p>
 *         </note>
 *         <note>
 *             <p>The <code>DeviceID</code> is used as a string to represent the device. You do not
 *                 need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchEvaluateGeofencesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchEvaluateGeofencesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchEvaluateGeofencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchEvaluateGeofencesCommandInput} for command's `input` shape.
 * @see {@link BatchEvaluateGeofencesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class BatchEvaluateGeofencesCommand extends $Command<BatchEvaluateGeofencesCommandInput, BatchEvaluateGeofencesCommandOutput, LocationClientResolvedConfig> {
    readonly input: BatchEvaluateGeofencesCommandInput;
    constructor(input: BatchEvaluateGeofencesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchEvaluateGeofencesCommandInput, BatchEvaluateGeofencesCommandOutput>;
    private serialize;
    private deserialize;
}
