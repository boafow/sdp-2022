import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeGeofenceCollectionRequestFilterSensitiveLog, DescribeGeofenceCollectionResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1DescribeGeofenceCollectionCommand, serializeAws_restJson1DescribeGeofenceCollectionCommand, } from "../protocols/Aws_restJson1";
var DescribeGeofenceCollectionCommand = (function (_super) {
    __extends(DescribeGeofenceCollectionCommand, _super);
    function DescribeGeofenceCollectionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeGeofenceCollectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DescribeGeofenceCollectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGeofenceCollectionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribeGeofenceCollectionResponseFilterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGeofenceCollectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeGeofenceCollectionCommand(input, context);
    };
    DescribeGeofenceCollectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeGeofenceCollectionCommand(output, context);
    };
    return DescribeGeofenceCollectionCommand;
}($Command));
export { DescribeGeofenceCollectionCommand };
