import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListRouteCalculatorsRequestFilterSensitiveLog, ListRouteCalculatorsResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1ListRouteCalculatorsCommand, serializeAws_restJson1ListRouteCalculatorsCommand, } from "../protocols/Aws_restJson1";
var ListRouteCalculatorsCommand = (function (_super) {
    __extends(ListRouteCalculatorsCommand, _super);
    function ListRouteCalculatorsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListRouteCalculatorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "ListRouteCalculatorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRouteCalculatorsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: ListRouteCalculatorsResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRouteCalculatorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRouteCalculatorsCommand(input, context);
    };
    ListRouteCalculatorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRouteCalculatorsCommand(output, context);
    };
    return ListRouteCalculatorsCommand;
}($Command));
export { ListRouteCalculatorsCommand };
