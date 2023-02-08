import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteMapRequestFilterSensitiveLog, DeleteMapResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1DeleteMapCommand, serializeAws_restJson1DeleteMapCommand, } from "../protocols/Aws_restJson1";
var DeleteMapCommand = (function (_super) {
    __extends(DeleteMapCommand, _super);
    function DeleteMapCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteMapCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DeleteMapCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMapRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DeleteMapResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMapCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteMapCommand(input, context);
    };
    DeleteMapCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteMapCommand(output, context);
    };
    return DeleteMapCommand;
}($Command));
export { DeleteMapCommand };
