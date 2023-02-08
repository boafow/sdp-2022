import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetMapStyleDescriptorRequestFilterSensitiveLog, GetMapStyleDescriptorResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1GetMapStyleDescriptorCommand, serializeAws_restJson1GetMapStyleDescriptorCommand, } from "../protocols/Aws_restJson1";
var GetMapStyleDescriptorCommand = (function (_super) {
    __extends(GetMapStyleDescriptorCommand, _super);
    function GetMapStyleDescriptorCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetMapStyleDescriptorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "GetMapStyleDescriptorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMapStyleDescriptorRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetMapStyleDescriptorResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMapStyleDescriptorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMapStyleDescriptorCommand(input, context);
    };
    GetMapStyleDescriptorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMapStyleDescriptorCommand(output, context);
    };
    return GetMapStyleDescriptorCommand;
}($Command));
export { GetMapStyleDescriptorCommand };
