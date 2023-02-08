import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetPlaceRequestFilterSensitiveLog, GetPlaceResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1GetPlaceCommand, serializeAws_restJson1GetPlaceCommand, } from "../protocols/Aws_restJson1";
var GetPlaceCommand = (function (_super) {
    __extends(GetPlaceCommand, _super);
    function GetPlaceCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetPlaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "GetPlaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPlaceRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetPlaceResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPlaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPlaceCommand(input, context);
    };
    GetPlaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPlaceCommand(output, context);
    };
    return GetPlaceCommand;
}($Command));
export { GetPlaceCommand };
