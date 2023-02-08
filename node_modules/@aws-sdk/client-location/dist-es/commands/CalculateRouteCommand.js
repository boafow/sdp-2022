import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CalculateRouteRequestFilterSensitiveLog, CalculateRouteResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1CalculateRouteCommand, serializeAws_restJson1CalculateRouteCommand, } from "../protocols/Aws_restJson1";
var CalculateRouteCommand = (function (_super) {
    __extends(CalculateRouteCommand, _super);
    function CalculateRouteCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CalculateRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "CalculateRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CalculateRouteRequestFilterSensitiveLog,
            outputFilterSensitiveLog: CalculateRouteResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CalculateRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CalculateRouteCommand(input, context);
    };
    CalculateRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CalculateRouteCommand(output, context);
    };
    return CalculateRouteCommand;
}($Command));
export { CalculateRouteCommand };
