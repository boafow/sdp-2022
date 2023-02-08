import { __extends } from "tslib";
import { ServiceException as __ServiceException, } from "@aws-sdk/smithy-client";
var LexRuntimeV2ServiceException = (function (_super) {
    __extends(LexRuntimeV2ServiceException, _super);
    function LexRuntimeV2ServiceException(options) {
        var _this = _super.call(this, options) || this;
        Object.setPrototypeOf(_this, LexRuntimeV2ServiceException.prototype);
        return _this;
    }
    return LexRuntimeV2ServiceException;
}(__ServiceException));
export { LexRuntimeV2ServiceException };
