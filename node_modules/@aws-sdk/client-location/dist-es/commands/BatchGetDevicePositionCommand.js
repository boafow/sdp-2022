import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { BatchGetDevicePositionRequestFilterSensitiveLog, BatchGetDevicePositionResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1BatchGetDevicePositionCommand, serializeAws_restJson1BatchGetDevicePositionCommand, } from "../protocols/Aws_restJson1";
var BatchGetDevicePositionCommand = (function (_super) {
    __extends(BatchGetDevicePositionCommand, _super);
    function BatchGetDevicePositionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    BatchGetDevicePositionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "BatchGetDevicePositionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetDevicePositionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: BatchGetDevicePositionResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetDevicePositionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchGetDevicePositionCommand(input, context);
    };
    BatchGetDevicePositionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchGetDevicePositionCommand(output, context);
    };
    return BatchGetDevicePositionCommand;
}($Command));
export { BatchGetDevicePositionCommand };
