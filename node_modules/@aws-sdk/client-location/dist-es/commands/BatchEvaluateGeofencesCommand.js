import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { BatchEvaluateGeofencesRequestFilterSensitiveLog, BatchEvaluateGeofencesResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1BatchEvaluateGeofencesCommand, serializeAws_restJson1BatchEvaluateGeofencesCommand, } from "../protocols/Aws_restJson1";
var BatchEvaluateGeofencesCommand = (function (_super) {
    __extends(BatchEvaluateGeofencesCommand, _super);
    function BatchEvaluateGeofencesCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    BatchEvaluateGeofencesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "BatchEvaluateGeofencesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchEvaluateGeofencesRequestFilterSensitiveLog,
            outputFilterSensitiveLog: BatchEvaluateGeofencesResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchEvaluateGeofencesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchEvaluateGeofencesCommand(input, context);
    };
    BatchEvaluateGeofencesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchEvaluateGeofencesCommand(output, context);
    };
    return BatchEvaluateGeofencesCommand;
}($Command));
export { BatchEvaluateGeofencesCommand };
