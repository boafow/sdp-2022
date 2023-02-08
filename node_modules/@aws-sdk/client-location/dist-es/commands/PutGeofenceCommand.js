import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { PutGeofenceRequestFilterSensitiveLog, PutGeofenceResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1PutGeofenceCommand, serializeAws_restJson1PutGeofenceCommand, } from "../protocols/Aws_restJson1";
var PutGeofenceCommand = (function (_super) {
    __extends(PutGeofenceCommand, _super);
    function PutGeofenceCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    PutGeofenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "PutGeofenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutGeofenceRequestFilterSensitiveLog,
            outputFilterSensitiveLog: PutGeofenceResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutGeofenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutGeofenceCommand(input, context);
    };
    PutGeofenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutGeofenceCommand(output, context);
    };
    return PutGeofenceCommand;
}($Command));
export { PutGeofenceCommand };
