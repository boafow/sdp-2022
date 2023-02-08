"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LexRuntimeServiceServiceException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
class LexRuntimeServiceServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, LexRuntimeServiceServiceException.prototype);
    }
}
exports.LexRuntimeServiceServiceException = LexRuntimeServiceServiceException;
