import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LexRuntimeServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeServiceClient";
import { DeleteSessionRequest, DeleteSessionResponse } from "../models/models_0";
export interface DeleteSessionCommandInput extends DeleteSessionRequest {
}
export interface DeleteSessionCommandOutput extends DeleteSessionResponse, __MetadataBearer {
}
/**
 * <p>Removes session information for a specified bot, alias, and user ID.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, DeleteSessionCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, DeleteSessionCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * const client = new LexRuntimeServiceClient(config);
 * const command = new DeleteSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for LexRuntimeServiceClient's `config` shape.
 *
 */
export declare class DeleteSessionCommand extends $Command<DeleteSessionCommandInput, DeleteSessionCommandOutput, LexRuntimeServiceClientResolvedConfig> {
    readonly input: DeleteSessionCommandInput;
    constructor(input: DeleteSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexRuntimeServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSessionCommandInput, DeleteSessionCommandOutput>;
    private serialize;
    private deserialize;
}
