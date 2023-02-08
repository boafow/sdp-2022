import { __extends } from "tslib";
import { ServiceException as __ServiceException, } from "@aws-sdk/smithy-client";
var LocationServiceException = (function (_super) {
    __extends(LocationServiceException, _super);
    function LocationServiceException(options) {
        var _this = _super.call(this, options) || this;
        Object.setPrototypeOf(_this, LocationServiceException.prototype);
        return _this;
    }
    return LocationServiceException;
}(__ServiceException));
export { LocationServiceException };
