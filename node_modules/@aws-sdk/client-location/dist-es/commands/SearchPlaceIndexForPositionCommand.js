import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { SearchPlaceIndexForPositionRequestFilterSensitiveLog, SearchPlaceIndexForPositionResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1SearchPlaceIndexForPositionCommand, serializeAws_restJson1SearchPlaceIndexForPositionCommand, } from "../protocols/Aws_restJson1";
var SearchPlaceIndexForPositionCommand = (function (_super) {
    __extends(SearchPlaceIndexForPositionCommand, _super);
    function SearchPlaceIndexForPositionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SearchPlaceIndexForPositionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "SearchPlaceIndexForPositionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchPlaceIndexForPositionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: SearchPlaceIndexForPositionResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchPlaceIndexForPositionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchPlaceIndexForPositionCommand(input, context);
    };
    SearchPlaceIndexForPositionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchPlaceIndexForPositionCommand(output, context);
    };
    return SearchPlaceIndexForPositionCommand;
}($Command));
export { SearchPlaceIndexForPositionCommand };
