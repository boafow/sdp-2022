import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteRouteCalculatorRequestFilterSensitiveLog, DeleteRouteCalculatorResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1DeleteRouteCalculatorCommand, serializeAws_restJson1DeleteRouteCalculatorCommand, } from "../protocols/Aws_restJson1";
var DeleteRouteCalculatorCommand = (function (_super) {
    __extends(DeleteRouteCalculatorCommand, _super);
    function DeleteRouteCalculatorCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteRouteCalculatorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DeleteRouteCalculatorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRouteCalculatorRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DeleteRouteCalculatorResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRouteCalculatorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteRouteCalculatorCommand(input, context);
    };
    DeleteRouteCalculatorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteRouteCalculatorCommand(output, context);
    };
    return DeleteRouteCalculatorCommand;
}($Command));
export { DeleteRouteCalculatorCommand };
