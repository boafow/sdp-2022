import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CalculateRouteMatrixRequestFilterSensitiveLog, CalculateRouteMatrixResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1CalculateRouteMatrixCommand, serializeAws_restJson1CalculateRouteMatrixCommand, } from "../protocols/Aws_restJson1";
var CalculateRouteMatrixCommand = (function (_super) {
    __extends(CalculateRouteMatrixCommand, _super);
    function CalculateRouteMatrixCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CalculateRouteMatrixCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "CalculateRouteMatrixCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CalculateRouteMatrixRequestFilterSensitiveLog,
            outputFilterSensitiveLog: CalculateRouteMatrixResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CalculateRouteMatrixCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CalculateRouteMatrixCommand(input, context);
    };
    CalculateRouteMatrixCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CalculateRouteMatrixCommand(output, context);
    };
    return CalculateRouteMatrixCommand;
}($Command));
export { CalculateRouteMatrixCommand };
