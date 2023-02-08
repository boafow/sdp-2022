import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetMapGlyphsRequestFilterSensitiveLog, GetMapGlyphsResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1GetMapGlyphsCommand, serializeAws_restJson1GetMapGlyphsCommand, } from "../protocols/Aws_restJson1";
var GetMapGlyphsCommand = (function (_super) {
    __extends(GetMapGlyphsCommand, _super);
    function GetMapGlyphsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetMapGlyphsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "GetMapGlyphsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMapGlyphsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetMapGlyphsResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMapGlyphsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMapGlyphsCommand(input, context);
    };
    GetMapGlyphsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMapGlyphsCommand(output, context);
    };
    return GetMapGlyphsCommand;
}($Command));
export { GetMapGlyphsCommand };
