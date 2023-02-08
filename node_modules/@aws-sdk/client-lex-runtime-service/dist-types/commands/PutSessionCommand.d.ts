import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LexRuntimeServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeServiceClient";
import { PutSessionRequest, PutSessionResponse } from "../models/models_0";
export interface PutSessionCommandInput extends PutSessionRequest {
}
export interface PutSessionCommandOutput extends PutSessionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new session or modifies an existing session with an Amazon Lex
 *       bot. Use this operation to enable your application to set the state of the
 *       bot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-session-api.html">Managing
 *         Sessions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, PutSessionCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, PutSessionCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * const client = new LexRuntimeServiceClient(config);
 * const command = new PutSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSessionCommandInput} for command's `input` shape.
 * @see {@link PutSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for LexRuntimeServiceClient's `config` shape.
 *
 */
export declare class PutSessionCommand extends $Command<PutSessionCommandInput, PutSessionCommandOutput, LexRuntimeServiceClientResolvedConfig> {
    readonly input: PutSessionCommandInput;
    constructor(input: PutSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexRuntimeServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutSessionCommandInput, PutSessionCommandOutput>;
    private serialize;
    private deserialize;
}
