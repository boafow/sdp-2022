import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DisassociateTrackerConsumerRequestFilterSensitiveLog, DisassociateTrackerConsumerResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1DisassociateTrackerConsumerCommand, serializeAws_restJson1DisassociateTrackerConsumerCommand, } from "../protocols/Aws_restJson1";
var DisassociateTrackerConsumerCommand = (function (_super) {
    __extends(DisassociateTrackerConsumerCommand, _super);
    function DisassociateTrackerConsumerCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DisassociateTrackerConsumerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DisassociateTrackerConsumerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateTrackerConsumerRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DisassociateTrackerConsumerResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateTrackerConsumerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateTrackerConsumerCommand(input, context);
    };
    DisassociateTrackerConsumerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateTrackerConsumerCommand(output, context);
    };
    return DisassociateTrackerConsumerCommand;
}($Command));
export { DisassociateTrackerConsumerCommand };
