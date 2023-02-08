import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListDevicePositionsRequestFilterSensitiveLog, ListDevicePositionsResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1ListDevicePositionsCommand, serializeAws_restJson1ListDevicePositionsCommand, } from "../protocols/Aws_restJson1";
var ListDevicePositionsCommand = (function (_super) {
    __extends(ListDevicePositionsCommand, _super);
    function ListDevicePositionsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListDevicePositionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "ListDevicePositionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDevicePositionsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: ListDevicePositionsResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDevicePositionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDevicePositionsCommand(input, context);
    };
    ListDevicePositionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDevicePositionsCommand(output, context);
    };
    return ListDevicePositionsCommand;
}($Command));
export { ListDevicePositionsCommand };
