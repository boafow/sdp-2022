import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
export interface TagResourceCommandInput extends TagResourceRequest {
}
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {
}
/**
 * <p>Assigns one or more tags (key-value pairs) to the specified Amazon
 *             Location Service resource.</p>
 *
 *         <p>Tags can help you organize and categorize your resources.
 *             You can also use them to scope user permissions, by granting a user
 *             permission to access or change only resources with certain tag values.</p>
 *
 *         <p>You can use the <code>TagResource</code> operation with an Amazon Location Service
 *             resource that already has tags. If you specify a new tag key for the resource, this tag
 *             is appended to the tags already associated with the resource. If you specify a tag key
 *             that's already associated with the resource, the new tag value that you specify replaces
 *             the previous value for that tag. </p>
 *
 *         <p>You can associate up to 50 tags with a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, TagResourceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, TagResourceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class TagResourceCommand extends $Command<TagResourceCommandInput, TagResourceCommandOutput, LocationClientResolvedConfig> {
    readonly input: TagResourceCommandInput;
    constructor(input: TagResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagResourceCommandInput, TagResourceCommandOutput>;
    private serialize;
    private deserialize;
}
