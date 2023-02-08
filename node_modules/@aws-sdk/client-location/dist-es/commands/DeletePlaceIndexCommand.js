import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeletePlaceIndexRequestFilterSensitiveLog, DeletePlaceIndexResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1DeletePlaceIndexCommand, serializeAws_restJson1DeletePlaceIndexCommand, } from "../protocols/Aws_restJson1";
var DeletePlaceIndexCommand = (function (_super) {
    __extends(DeletePlaceIndexCommand, _super);
    function DeletePlaceIndexCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeletePlaceIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DeletePlaceIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePlaceIndexRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DeletePlaceIndexResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePlaceIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePlaceIndexCommand(input, context);
    };
    DeletePlaceIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePlaceIndexCommand(output, context);
    };
    return DeletePlaceIndexCommand;
}($Command));
export { DeletePlaceIndexCommand };
