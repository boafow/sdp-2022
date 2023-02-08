import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { BatchUpdateDevicePositionRequestFilterSensitiveLog, BatchUpdateDevicePositionResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1BatchUpdateDevicePositionCommand, serializeAws_restJson1BatchUpdateDevicePositionCommand, } from "../protocols/Aws_restJson1";
var BatchUpdateDevicePositionCommand = (function (_super) {
    __extends(BatchUpdateDevicePositionCommand, _super);
    function BatchUpdateDevicePositionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    BatchUpdateDevicePositionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "BatchUpdateDevicePositionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchUpdateDevicePositionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: BatchUpdateDevicePositionResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchUpdateDevicePositionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchUpdateDevicePositionCommand(input, context);
    };
    BatchUpdateDevicePositionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchUpdateDevicePositionCommand(output, context);
    };
    return BatchUpdateDevicePositionCommand;
}($Command));
export { BatchUpdateDevicePositionCommand };
