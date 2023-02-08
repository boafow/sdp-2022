import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreateRouteCalculatorRequestFilterSensitiveLog, CreateRouteCalculatorResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1CreateRouteCalculatorCommand, serializeAws_restJson1CreateRouteCalculatorCommand, } from "../protocols/Aws_restJson1";
var CreateRouteCalculatorCommand = (function (_super) {
    __extends(CreateRouteCalculatorCommand, _super);
    function CreateRouteCalculatorCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreateRouteCalculatorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "CreateRouteCalculatorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRouteCalculatorRequestFilterSensitiveLog,
            outputFilterSensitiveLog: CreateRouteCalculatorResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRouteCalculatorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRouteCalculatorCommand(input, context);
    };
    CreateRouteCalculatorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRouteCalculatorCommand(output, context);
    };
    return CreateRouteCalculatorCommand;
}($Command));
export { CreateRouteCalculatorCommand };
