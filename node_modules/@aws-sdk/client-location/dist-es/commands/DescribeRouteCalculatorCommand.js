import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeRouteCalculatorRequestFilterSensitiveLog, DescribeRouteCalculatorResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1DescribeRouteCalculatorCommand, serializeAws_restJson1DescribeRouteCalculatorCommand, } from "../protocols/Aws_restJson1";
var DescribeRouteCalculatorCommand = (function (_super) {
    __extends(DescribeRouteCalculatorCommand, _super);
    function DescribeRouteCalculatorCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeRouteCalculatorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DescribeRouteCalculatorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRouteCalculatorRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribeRouteCalculatorResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRouteCalculatorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeRouteCalculatorCommand(input, context);
    };
    DescribeRouteCalculatorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeRouteCalculatorCommand(output, context);
    };
    return DescribeRouteCalculatorCommand;
}($Command));
export { DescribeRouteCalculatorCommand };
