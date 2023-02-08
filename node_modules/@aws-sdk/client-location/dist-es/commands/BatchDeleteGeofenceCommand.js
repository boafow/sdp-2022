import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { BatchDeleteGeofenceRequestFilterSensitiveLog, BatchDeleteGeofenceResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1BatchDeleteGeofenceCommand, serializeAws_restJson1BatchDeleteGeofenceCommand, } from "../protocols/Aws_restJson1";
var BatchDeleteGeofenceCommand = (function (_super) {
    __extends(BatchDeleteGeofenceCommand, _super);
    function BatchDeleteGeofenceCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    BatchDeleteGeofenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "BatchDeleteGeofenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteGeofenceRequestFilterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteGeofenceResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteGeofenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchDeleteGeofenceCommand(input, context);
    };
    BatchDeleteGeofenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchDeleteGeofenceCommand(output, context);
    };
    return BatchDeleteGeofenceCommand;
}($Command));
export { BatchDeleteGeofenceCommand };
