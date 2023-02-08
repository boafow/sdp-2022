import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetGeofenceRequestFilterSensitiveLog, GetGeofenceResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1GetGeofenceCommand, serializeAws_restJson1GetGeofenceCommand, } from "../protocols/Aws_restJson1";
var GetGeofenceCommand = (function (_super) {
    __extends(GetGeofenceCommand, _super);
    function GetGeofenceCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetGeofenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "GetGeofenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGeofenceRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetGeofenceResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGeofenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetGeofenceCommand(input, context);
    };
    GetGeofenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetGeofenceCommand(output, context);
    };
    return GetGeofenceCommand;
}($Command));
export { GetGeofenceCommand };
