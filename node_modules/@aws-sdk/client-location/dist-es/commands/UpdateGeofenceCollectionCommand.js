import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateGeofenceCollectionRequestFilterSensitiveLog, UpdateGeofenceCollectionResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1UpdateGeofenceCollectionCommand, serializeAws_restJson1UpdateGeofenceCollectionCommand, } from "../protocols/Aws_restJson1";
var UpdateGeofenceCollectionCommand = (function (_super) {
    __extends(UpdateGeofenceCollectionCommand, _super);
    function UpdateGeofenceCollectionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateGeofenceCollectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "UpdateGeofenceCollectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGeofenceCollectionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: UpdateGeofenceCollectionResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGeofenceCollectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateGeofenceCollectionCommand(input, context);
    };
    UpdateGeofenceCollectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateGeofenceCollectionCommand(output, context);
    };
    return UpdateGeofenceCollectionCommand;
}($Command));
export { UpdateGeofenceCollectionCommand };
