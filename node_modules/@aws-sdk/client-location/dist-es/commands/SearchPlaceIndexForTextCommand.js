import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { SearchPlaceIndexForTextRequestFilterSensitiveLog, SearchPlaceIndexForTextResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1SearchPlaceIndexForTextCommand, serializeAws_restJson1SearchPlaceIndexForTextCommand, } from "../protocols/Aws_restJson1";
var SearchPlaceIndexForTextCommand = (function (_super) {
    __extends(SearchPlaceIndexForTextCommand, _super);
    function SearchPlaceIndexForTextCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SearchPlaceIndexForTextCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "SearchPlaceIndexForTextCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchPlaceIndexForTextRequestFilterSensitiveLog,
            outputFilterSensitiveLog: SearchPlaceIndexForTextResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchPlaceIndexForTextCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchPlaceIndexForTextCommand(input, context);
    };
    SearchPlaceIndexForTextCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchPlaceIndexForTextCommand(output, context);
    };
    return SearchPlaceIndexForTextCommand;
}($Command));
export { SearchPlaceIndexForTextCommand };
