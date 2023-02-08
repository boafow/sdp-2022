import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { AssociateTrackerConsumerRequestFilterSensitiveLog, AssociateTrackerConsumerResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1AssociateTrackerConsumerCommand, serializeAws_restJson1AssociateTrackerConsumerCommand, } from "../protocols/Aws_restJson1";
var AssociateTrackerConsumerCommand = (function (_super) {
    __extends(AssociateTrackerConsumerCommand, _super);
    function AssociateTrackerConsumerCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    AssociateTrackerConsumerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "AssociateTrackerConsumerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateTrackerConsumerRequestFilterSensitiveLog,
            outputFilterSensitiveLog: AssociateTrackerConsumerResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateTrackerConsumerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateTrackerConsumerCommand(input, context);
    };
    AssociateTrackerConsumerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateTrackerConsumerCommand(output, context);
    };
    return AssociateTrackerConsumerCommand;
}($Command));
export { AssociateTrackerConsumerCommand };
