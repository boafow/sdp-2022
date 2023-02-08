import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListDevicePositionsRequest, ListDevicePositionsResponse } from "../models/models_0";
export interface ListDevicePositionsCommandInput extends ListDevicePositionsRequest {
}
export interface ListDevicePositionsCommandOutput extends ListDevicePositionsResponse, __MetadataBearer {
}
/**
 * <p>A batch request to retrieve all device positions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListDevicePositionsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListDevicePositionsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListDevicePositionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevicePositionsCommandInput} for command's `input` shape.
 * @see {@link ListDevicePositionsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class ListDevicePositionsCommand extends $Command<ListDevicePositionsCommandInput, ListDevicePositionsCommandOutput, LocationClientResolvedConfig> {
    readonly input: ListDevicePositionsCommandInput;
    constructor(input: ListDevicePositionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDevicePositionsCommandInput, ListDevicePositionsCommandOutput>;
    private serialize;
    private deserialize;
}
