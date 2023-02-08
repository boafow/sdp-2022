import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreatePlaceIndexRequestFilterSensitiveLog, CreatePlaceIndexResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1CreatePlaceIndexCommand, serializeAws_restJson1CreatePlaceIndexCommand, } from "../protocols/Aws_restJson1";
var CreatePlaceIndexCommand = (function (_super) {
    __extends(CreatePlaceIndexCommand, _super);
    function CreatePlaceIndexCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreatePlaceIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "CreatePlaceIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePlaceIndexRequestFilterSensitiveLog,
            outputFilterSensitiveLog: CreatePlaceIndexResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePlaceIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePlaceIndexCommand(input, context);
    };
    CreatePlaceIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePlaceIndexCommand(output, context);
    };
    return CreatePlaceIndexCommand;
}($Command));
export { CreatePlaceIndexCommand };
