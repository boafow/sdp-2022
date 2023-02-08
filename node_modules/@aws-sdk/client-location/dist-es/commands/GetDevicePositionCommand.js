import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetDevicePositionRequestFilterSensitiveLog, GetDevicePositionResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1GetDevicePositionCommand, serializeAws_restJson1GetDevicePositionCommand, } from "../protocols/Aws_restJson1";
var GetDevicePositionCommand = (function (_super) {
    __extends(GetDevicePositionCommand, _super);
    function GetDevicePositionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetDevicePositionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "GetDevicePositionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDevicePositionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetDevicePositionResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDevicePositionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDevicePositionCommand(input, context);
    };
    GetDevicePositionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDevicePositionCommand(output, context);
    };
    return GetDevicePositionCommand;
}($Command));
export { GetDevicePositionCommand };
