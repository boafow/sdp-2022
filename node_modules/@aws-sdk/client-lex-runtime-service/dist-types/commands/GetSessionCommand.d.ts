import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LexRuntimeServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeServiceClient";
import { GetSessionRequest, GetSessionResponse } from "../models/models_0";
export interface GetSessionCommandInput extends GetSessionRequest {
}
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {
}
/**
 * <p>Returns session information for a specified bot, alias, and user
 *       ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, GetSessionCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, GetSessionCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * const client = new LexRuntimeServiceClient(config);
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for LexRuntimeServiceClient's `config` shape.
 *
 */
export declare class GetSessionCommand extends $Command<GetSessionCommandInput, GetSessionCommandOutput, LexRuntimeServiceClientResolvedConfig> {
    readonly input: GetSessionCommandInput;
    constructor(input: GetSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexRuntimeServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSessionCommandInput, GetSessionCommandOutput>;
    private serialize;
    private deserialize;
}
