import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { BatchUpdateDevicePositionRequest, BatchUpdateDevicePositionResponse } from "../models/models_0";
export interface BatchUpdateDevicePositionCommandInput extends BatchUpdateDevicePositionRequest {
}
export interface BatchUpdateDevicePositionCommandOutput extends BatchUpdateDevicePositionResponse, __MetadataBearer {
}
/**
 * <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location
 *            uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30
 *            days.</p>
 *          <note>
 *            <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker.
 *                When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections,
 *                and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than
 *                every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p>
 *             <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence
 *                 collections only if the device has moved more than 30 m (98.4 ft).</p>
 *             <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering,
 *                 location data is stored and evaluated against linked geofence collections only if the
 *                 device has moved more than the measured accuracy. For example, if two consecutive
 *                 updates from a device have a horizontal accuracy of 5 m and 10 m, the second update
 *                 is neither stored or evaluated if the device has moved less than 15 m. If
 *                 <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location
 *                 uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on
 *                 a <code>DevicePositionUpdate</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchUpdateDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchUpdateDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchUpdateDevicePositionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateDevicePositionCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateDevicePositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class BatchUpdateDevicePositionCommand extends $Command<BatchUpdateDevicePositionCommandInput, BatchUpdateDevicePositionCommandOutput, LocationClientResolvedConfig> {
    readonly input: BatchUpdateDevicePositionCommandInput;
    constructor(input: BatchUpdateDevicePositionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchUpdateDevicePositionCommandInput, BatchUpdateDevicePositionCommandOutput>;
    private serialize;
    private deserialize;
}
