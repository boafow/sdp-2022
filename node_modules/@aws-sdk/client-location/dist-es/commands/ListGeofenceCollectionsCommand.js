import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListGeofenceCollectionsRequestFilterSensitiveLog, ListGeofenceCollectionsResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1ListGeofenceCollectionsCommand, serializeAws_restJson1ListGeofenceCollectionsCommand, } from "../protocols/Aws_restJson1";
var ListGeofenceCollectionsCommand = (function (_super) {
    __extends(ListGeofenceCollectionsCommand, _super);
    function ListGeofenceCollectionsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListGeofenceCollectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "ListGeofenceCollectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGeofenceCollectionsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: ListGeofenceCollectionsResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGeofenceCollectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListGeofenceCollectionsCommand(input, context);
    };
    ListGeofenceCollectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListGeofenceCollectionsCommand(output, context);
    };
    return ListGeofenceCollectionsCommand;
}($Command));
export { ListGeofenceCollectionsCommand };
