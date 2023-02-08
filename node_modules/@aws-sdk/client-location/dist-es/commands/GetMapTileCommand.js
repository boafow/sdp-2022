import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetMapTileRequestFilterSensitiveLog, GetMapTileResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1GetMapTileCommand, serializeAws_restJson1GetMapTileCommand, } from "../protocols/Aws_restJson1";
var GetMapTileCommand = (function (_super) {
    __extends(GetMapTileCommand, _super);
    function GetMapTileCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetMapTileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "GetMapTileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMapTileRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetMapTileResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMapTileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMapTileCommand(input, context);
    };
    GetMapTileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMapTileCommand(output, context);
    };
    return GetMapTileCommand;
}($Command));
export { GetMapTileCommand };
