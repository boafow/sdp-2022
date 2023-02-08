import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { GetDevicePositionRequest, GetDevicePositionResponse } from "../models/models_0";
export interface GetDevicePositionCommandInput extends GetDevicePositionRequest {
}
export interface GetDevicePositionCommandOutput extends GetDevicePositionResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a device's most recent position according to its sample time.</p>
 *          <note>
 *             <p>Device positions are deleted after 30 days.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetDevicePositionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicePositionCommandInput} for command's `input` shape.
 * @see {@link GetDevicePositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class GetDevicePositionCommand extends $Command<GetDevicePositionCommandInput, GetDevicePositionCommandOutput, LocationClientResolvedConfig> {
    readonly input: GetDevicePositionCommandInput;
    constructor(input: GetDevicePositionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDevicePositionCommandInput, GetDevicePositionCommandOutput>;
    private serialize;
    private deserialize;
}
