import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdatePlaceIndexRequestFilterSensitiveLog, UpdatePlaceIndexResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1UpdatePlaceIndexCommand, serializeAws_restJson1UpdatePlaceIndexCommand, } from "../protocols/Aws_restJson1";
var UpdatePlaceIndexCommand = (function (_super) {
    __extends(UpdatePlaceIndexCommand, _super);
    function UpdatePlaceIndexCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdatePlaceIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "UpdatePlaceIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePlaceIndexRequestFilterSensitiveLog,
            outputFilterSensitiveLog: UpdatePlaceIndexResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePlaceIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePlaceIndexCommand(input, context);
    };
    UpdatePlaceIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePlaceIndexCommand(output, context);
    };
    return UpdatePlaceIndexCommand;
}($Command));
export { UpdatePlaceIndexCommand };
