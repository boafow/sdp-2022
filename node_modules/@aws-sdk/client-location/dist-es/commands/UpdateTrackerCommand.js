import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateTrackerRequestFilterSensitiveLog, UpdateTrackerResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1UpdateTrackerCommand, serializeAws_restJson1UpdateTrackerCommand, } from "../protocols/Aws_restJson1";
var UpdateTrackerCommand = (function (_super) {
    __extends(UpdateTrackerCommand, _super);
    function UpdateTrackerCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateTrackerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "UpdateTrackerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTrackerRequestFilterSensitiveLog,
            outputFilterSensitiveLog: UpdateTrackerResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTrackerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateTrackerCommand(input, context);
    };
    UpdateTrackerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateTrackerCommand(output, context);
    };
    return UpdateTrackerCommand;
}($Command));
export { UpdateTrackerCommand };
