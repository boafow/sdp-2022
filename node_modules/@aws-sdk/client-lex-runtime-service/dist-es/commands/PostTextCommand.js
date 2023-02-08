import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { PostTextRequestFilterSensitiveLog, PostTextResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1PostTextCommand, serializeAws_restJson1PostTextCommand, } from "../protocols/Aws_restJson1";
var PostTextCommand = (function (_super) {
    __extends(PostTextCommand, _super);
    function PostTextCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    PostTextCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeServiceClient";
        var commandName = "PostTextCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PostTextRequestFilterSensitiveLog,
            outputFilterSensitiveLog: PostTextResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PostTextCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PostTextCommand(input, context);
    };
    PostTextCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PostTextCommand(output, context);
    };
    return PostTextCommand;
}($Command));
export { PostTextCommand };
