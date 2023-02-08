import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreateGeofenceCollectionRequestFilterSensitiveLog, CreateGeofenceCollectionResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1CreateGeofenceCollectionCommand, serializeAws_restJson1CreateGeofenceCollectionCommand, } from "../protocols/Aws_restJson1";
var CreateGeofenceCollectionCommand = (function (_super) {
    __extends(CreateGeofenceCollectionCommand, _super);
    function CreateGeofenceCollectionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreateGeofenceCollectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "CreateGeofenceCollectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGeofenceCollectionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: CreateGeofenceCollectionResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGeofenceCollectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateGeofenceCollectionCommand(input, context);
    };
    CreateGeofenceCollectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateGeofenceCollectionCommand(output, context);
    };
    return CreateGeofenceCollectionCommand;
}($Command));
export { CreateGeofenceCollectionCommand };
