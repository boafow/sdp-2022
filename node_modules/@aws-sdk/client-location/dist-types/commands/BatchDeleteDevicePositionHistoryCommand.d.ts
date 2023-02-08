import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { BatchDeleteDevicePositionHistoryRequest, BatchDeleteDevicePositionHistoryResponse } from "../models/models_0";
export interface BatchDeleteDevicePositionHistoryCommandInput extends BatchDeleteDevicePositionHistoryRequest {
}
export interface BatchDeleteDevicePositionHistoryCommandOutput extends BatchDeleteDevicePositionHistoryResponse, __MetadataBearer {
}
/**
 * <p>Deletes the position history of one or more devices from a tracker resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchDeleteDevicePositionHistoryCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchDeleteDevicePositionHistoryCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchDeleteDevicePositionHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteDevicePositionHistoryCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDevicePositionHistoryCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class BatchDeleteDevicePositionHistoryCommand extends $Command<BatchDeleteDevicePositionHistoryCommandInput, BatchDeleteDevicePositionHistoryCommandOutput, LocationClientResolvedConfig> {
    readonly input: BatchDeleteDevicePositionHistoryCommandInput;
    constructor(input: BatchDeleteDevicePositionHistoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteDevicePositionHistoryCommandInput, BatchDeleteDevicePositionHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
