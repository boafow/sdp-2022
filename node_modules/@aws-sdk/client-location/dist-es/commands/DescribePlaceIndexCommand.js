import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribePlaceIndexRequestFilterSensitiveLog, DescribePlaceIndexResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1DescribePlaceIndexCommand, serializeAws_restJson1DescribePlaceIndexCommand, } from "../protocols/Aws_restJson1";
var DescribePlaceIndexCommand = (function (_super) {
    __extends(DescribePlaceIndexCommand, _super);
    function DescribePlaceIndexCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribePlaceIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DescribePlaceIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePlaceIndexRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribePlaceIndexResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePlaceIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribePlaceIndexCommand(input, context);
    };
    DescribePlaceIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribePlaceIndexCommand(output, context);
    };
    return DescribePlaceIndexCommand;
}($Command));
export { DescribePlaceIndexCommand };
