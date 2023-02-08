import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateMapRequestFilterSensitiveLog, UpdateMapResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1UpdateMapCommand, serializeAws_restJson1UpdateMapCommand, } from "../protocols/Aws_restJson1";
var UpdateMapCommand = (function (_super) {
    __extends(UpdateMapCommand, _super);
    function UpdateMapCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateMapCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "UpdateMapCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMapRequestFilterSensitiveLog,
            outputFilterSensitiveLog: UpdateMapResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMapCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateMapCommand(input, context);
    };
    UpdateMapCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateMapCommand(output, context);
    };
    return UpdateMapCommand;
}($Command));
export { UpdateMapCommand };
