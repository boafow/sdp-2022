"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationServiceException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
class LocationServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, LocationServiceException.prototype);
    }
}
exports.LocationServiceException = LocationServiceException;
