import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateRouteCalculatorRequestFilterSensitiveLog, UpdateRouteCalculatorResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1UpdateRouteCalculatorCommand, serializeAws_restJson1UpdateRouteCalculatorCommand, } from "../protocols/Aws_restJson1";
var UpdateRouteCalculatorCommand = (function (_super) {
    __extends(UpdateRouteCalculatorCommand, _super);
    function UpdateRouteCalculatorCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateRouteCalculatorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "UpdateRouteCalculatorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRouteCalculatorRequestFilterSensitiveLog,
            outputFilterSensitiveLog: UpdateRouteCalculatorResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRouteCalculatorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRouteCalculatorCommand(input, context);
    };
    UpdateRouteCalculatorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRouteCalculatorCommand(output, context);
    };
    return UpdateRouteCalculatorCommand;
}($Command));
export { UpdateRouteCalculatorCommand };
