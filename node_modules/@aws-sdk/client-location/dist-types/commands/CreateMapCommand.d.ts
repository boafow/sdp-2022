import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { CreateMapRequest, CreateMapResponse } from "../models/models_0";
export interface CreateMapCommandInput extends CreateMapRequest {
}
export interface CreateMapCommandOutput extends CreateMapResponse, __MetadataBearer {
}
/**
 * <p>Creates a map resource in your AWS account, which provides map tiles of different
 *             styles sourced from global location data providers.</p>
 *         <note>
 *             <p>If your application is tracking or routing assets you use in your business, such
 *                 as delivery vehicles or employees, you may only use HERE as your geolocation
 *                 provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">AWS
 *                     service terms</a> for more details.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreateMapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMapCommandInput} for command's `input` shape.
 * @see {@link CreateMapCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class CreateMapCommand extends $Command<CreateMapCommandInput, CreateMapCommandOutput, LocationClientResolvedConfig> {
    readonly input: CreateMapCommandInput;
    constructor(input: CreateMapCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMapCommandInput, CreateMapCommandOutput>;
    private serialize;
    private deserialize;
}
