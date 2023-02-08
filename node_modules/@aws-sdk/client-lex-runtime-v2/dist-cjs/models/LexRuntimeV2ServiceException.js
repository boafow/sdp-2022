"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LexRuntimeV2ServiceException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
class LexRuntimeV2ServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, LexRuntimeV2ServiceException.prototype);
    }
}
exports.LexRuntimeV2ServiceException = LexRuntimeV2ServiceException;
