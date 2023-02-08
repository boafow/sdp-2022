import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { PostContentRequestFilterSensitiveLog, PostContentResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1PostContentCommand, serializeAws_restJson1PostContentCommand, } from "../protocols/Aws_restJson1";
var PostContentCommand = (function (_super) {
    __extends(PostContentCommand, _super);
    function PostContentCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    PostContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeServiceClient";
        var commandName = "PostContentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PostContentRequestFilterSensitiveLog,
            outputFilterSensitiveLog: PostContentResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PostContentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PostContentCommand(input, context);
    };
    PostContentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PostContentCommand(output, context);
    };
    return PostContentCommand;
}($Command));
export { PostContentCommand };
