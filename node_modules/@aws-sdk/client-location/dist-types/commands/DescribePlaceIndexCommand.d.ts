import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribePlaceIndexRequest, DescribePlaceIndexResponse } from "../models/models_0";
export interface DescribePlaceIndexCommandInput extends DescribePlaceIndexRequest {
}
export interface DescribePlaceIndexCommandOutput extends DescribePlaceIndexResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the place index resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DescribePlaceIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link DescribePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class DescribePlaceIndexCommand extends $Command<DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput, LocationClientResolvedConfig> {
    readonly input: DescribePlaceIndexCommandInput;
    constructor(input: DescribePlaceIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput>;
    private serialize;
    private deserialize;
}
