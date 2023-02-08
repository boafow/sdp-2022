import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListTrackerConsumersRequestFilterSensitiveLog, ListTrackerConsumersResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1ListTrackerConsumersCommand, serializeAws_restJson1ListTrackerConsumersCommand, } from "../protocols/Aws_restJson1";
var ListTrackerConsumersCommand = (function (_super) {
    __extends(ListTrackerConsumersCommand, _super);
    function ListTrackerConsumersCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListTrackerConsumersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "ListTrackerConsumersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTrackerConsumersRequestFilterSensitiveLog,
            outputFilterSensitiveLog: ListTrackerConsumersResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTrackerConsumersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTrackerConsumersCommand(input, context);
    };
    ListTrackerConsumersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTrackerConsumersCommand(output, context);
    };
    return ListTrackerConsumersCommand;
}($Command));
export { ListTrackerConsumersCommand };
