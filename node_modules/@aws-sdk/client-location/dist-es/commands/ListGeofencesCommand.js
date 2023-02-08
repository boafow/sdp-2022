import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListGeofencesRequestFilterSensitiveLog, ListGeofencesResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1ListGeofencesCommand, serializeAws_restJson1ListGeofencesCommand, } from "../protocols/Aws_restJson1";
var ListGeofencesCommand = (function (_super) {
    __extends(ListGeofencesCommand, _super);
    function ListGeofencesCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListGeofencesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "ListGeofencesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGeofencesRequestFilterSensitiveLog,
            outputFilterSensitiveLog: ListGeofencesResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGeofencesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListGeofencesCommand(input, context);
    };
    ListGeofencesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListGeofencesCommand(output, context);
    };
    return ListGeofencesCommand;
}($Command));
export { ListGeofencesCommand };
