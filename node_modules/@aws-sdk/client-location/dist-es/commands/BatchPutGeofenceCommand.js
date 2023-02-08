import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { BatchPutGeofenceRequestFilterSensitiveLog, BatchPutGeofenceResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1BatchPutGeofenceCommand, serializeAws_restJson1BatchPutGeofenceCommand, } from "../protocols/Aws_restJson1";
var BatchPutGeofenceCommand = (function (_super) {
    __extends(BatchPutGeofenceCommand, _super);
    function BatchPutGeofenceCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    BatchPutGeofenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "BatchPutGeofenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchPutGeofenceRequestFilterSensitiveLog,
            outputFilterSensitiveLog: BatchPutGeofenceResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchPutGeofenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchPutGeofenceCommand(input, context);
    };
    BatchPutGeofenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchPutGeofenceCommand(output, context);
    };
    return BatchPutGeofenceCommand;
}($Command));
export { BatchPutGeofenceCommand };
