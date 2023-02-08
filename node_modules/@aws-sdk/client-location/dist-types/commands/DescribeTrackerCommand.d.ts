import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribeTrackerRequest, DescribeTrackerResponse } from "../models/models_0";
export interface DescribeTrackerCommandInput extends DescribeTrackerRequest {
}
export interface DescribeTrackerCommandOutput extends DescribeTrackerResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the tracker resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DescribeTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrackerCommandInput} for command's `input` shape.
 * @see {@link DescribeTrackerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class DescribeTrackerCommand extends $Command<DescribeTrackerCommandInput, DescribeTrackerCommandOutput, LocationClientResolvedConfig> {
    readonly input: DescribeTrackerCommandInput;
    constructor(input: DescribeTrackerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrackerCommandInput, DescribeTrackerCommandOutput>;
    private serialize;
    private deserialize;
}
