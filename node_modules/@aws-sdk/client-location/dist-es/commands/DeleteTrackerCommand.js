import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteTrackerRequestFilterSensitiveLog, DeleteTrackerResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1DeleteTrackerCommand, serializeAws_restJson1DeleteTrackerCommand, } from "../protocols/Aws_restJson1";
var DeleteTrackerCommand = (function (_super) {
    __extends(DeleteTrackerCommand, _super);
    function DeleteTrackerCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteTrackerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DeleteTrackerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTrackerRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DeleteTrackerResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTrackerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteTrackerCommand(input, context);
    };
    DeleteTrackerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteTrackerCommand(output, context);
    };
    return DeleteTrackerCommand;
}($Command));
export { DeleteTrackerCommand };
