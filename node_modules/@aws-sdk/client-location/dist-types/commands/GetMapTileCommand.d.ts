import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { GetMapTileRequest, GetMapTileResponse } from "../models/models_0";
export interface GetMapTileCommandInput extends GetMapTileRequest {
}
export interface GetMapTileCommandOutput extends GetMapTileResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to
 *             render a map. they're addressed using a grid arrangement with an X coordinate, Y
 *             coordinate, and Z (zoom) level. </p>
 *         <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles
 *             both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0)
 *             will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapTileCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapTileCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetMapTileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMapTileCommandInput} for command's `input` shape.
 * @see {@link GetMapTileCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export declare class GetMapTileCommand extends $Command<GetMapTileCommandInput, GetMapTileCommandOutput, LocationClientResolvedConfig> {
    readonly input: GetMapTileCommandInput;
    constructor(input: GetMapTileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMapTileCommandInput, GetMapTileCommandOutput>;
    private serialize;
    private deserialize;
}
