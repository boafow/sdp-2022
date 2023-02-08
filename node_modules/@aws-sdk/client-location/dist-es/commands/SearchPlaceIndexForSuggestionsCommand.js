import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { SearchPlaceIndexForSuggestionsRequestFilterSensitiveLog, SearchPlaceIndexForSuggestionsResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommand, serializeAws_restJson1SearchPlaceIndexForSuggestionsCommand, } from "../protocols/Aws_restJson1";
var SearchPlaceIndexForSuggestionsCommand = (function (_super) {
    __extends(SearchPlaceIndexForSuggestionsCommand, _super);
    function SearchPlaceIndexForSuggestionsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SearchPlaceIndexForSuggestionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "SearchPlaceIndexForSuggestionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchPlaceIndexForSuggestionsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: SearchPlaceIndexForSuggestionsResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchPlaceIndexForSuggestionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchPlaceIndexForSuggestionsCommand(input, context);
    };
    SearchPlaceIndexForSuggestionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommand(output, context);
    };
    return SearchPlaceIndexForSuggestionsCommand;
}($Command));
export { SearchPlaceIndexForSuggestionsCommand };
