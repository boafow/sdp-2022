import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { BatchDeleteDevicePositionHistoryRequestFilterSensitiveLog, BatchDeleteDevicePositionHistoryResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand, serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand, } from "../protocols/Aws_restJson1";
var BatchDeleteDevicePositionHistoryCommand = (function (_super) {
    __extends(BatchDeleteDevicePositionHistoryCommand, _super);
    function BatchDeleteDevicePositionHistoryCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    BatchDeleteDevicePositionHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "BatchDeleteDevicePositionHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteDevicePositionHistoryRequestFilterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteDevicePositionHistoryResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteDevicePositionHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand(input, context);
    };
    BatchDeleteDevicePositionHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand(output, context);
    };
    return BatchDeleteDevicePositionHistoryCommand;
}($Command));
export { BatchDeleteDevicePositionHistoryCommand };
