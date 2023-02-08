import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreateTrackerRequestFilterSensitiveLog, CreateTrackerResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1CreateTrackerCommand, serializeAws_restJson1CreateTrackerCommand, } from "../protocols/Aws_restJson1";
var CreateTrackerCommand = (function (_super) {
    __extends(CreateTrackerCommand, _super);
    function CreateTrackerCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreateTrackerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "CreateTrackerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTrackerRequestFilterSensitiveLog,
            outputFilterSensitiveLog: CreateTrackerResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTrackerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateTrackerCommand(input, context);
    };
    CreateTrackerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateTrackerCommand(output, context);
    };
    return CreateTrackerCommand;
}($Command));
export { CreateTrackerCommand };
