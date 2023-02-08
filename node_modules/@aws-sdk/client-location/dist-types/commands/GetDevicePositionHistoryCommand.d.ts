import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { GetDevicePositionHistoryRequest, GetDevicePositionHistoryResponse } from "../models/models_0";
export interface GetDevicePositionHistoryCommandInput extends GetDevicePositionHistoryRequest {
}
export interface GetDevicePositionHistoryCommandOutput extends GetDevicePositionHistoryResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the device position history from a tracker resource within a specified range
 *             of time.</p>
 *          <note>
 *            <p>Device positions are deleted after 30 days.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetDevicePositionHistoryCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetDevicePositionHistoryCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetDevicePositionHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicePositionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetDevicePositionHistoryCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class GetDevicePositionHistoryCommand extends $Command<GetDevicePositionHistoryCommandInput, GetDevicePositionHistoryCommandOutput, LocationClientResolvedConfig> {
    readonly input: GetDevicePositionHistoryCommandInput;
    constructor(input: GetDevicePositionHistoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDevicePositionHistoryCommandInput, GetDevicePositionHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
