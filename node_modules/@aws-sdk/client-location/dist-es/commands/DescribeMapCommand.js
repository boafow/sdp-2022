import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeMapRequestFilterSensitiveLog, DescribeMapResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1DescribeMapCommand, serializeAws_restJson1DescribeMapCommand, } from "../protocols/Aws_restJson1";
var DescribeMapCommand = (function (_super) {
    __extends(DescribeMapCommand, _super);
    function DescribeMapCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeMapCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DescribeMapCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMapRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribeMapResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMapCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeMapCommand(input, context);
    };
    DescribeMapCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeMapCommand(output, context);
    };
    return DescribeMapCommand;
}($Command));
export { DescribeMapCommand };
