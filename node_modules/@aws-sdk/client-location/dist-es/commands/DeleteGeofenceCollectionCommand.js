import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteGeofenceCollectionRequestFilterSensitiveLog, DeleteGeofenceCollectionResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1DeleteGeofenceCollectionCommand, serializeAws_restJson1DeleteGeofenceCollectionCommand, } from "../protocols/Aws_restJson1";
var DeleteGeofenceCollectionCommand = (function (_super) {
    __extends(DeleteGeofenceCollectionCommand, _super);
    function DeleteGeofenceCollectionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteGeofenceCollectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DeleteGeofenceCollectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGeofenceCollectionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DeleteGeofenceCollectionResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGeofenceCollectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteGeofenceCollectionCommand(input, context);
    };
    DeleteGeofenceCollectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteGeofenceCollectionCommand(output, context);
    };
    return DeleteGeofenceCollectionCommand;
}($Command));
export { DeleteGeofenceCollectionCommand };
