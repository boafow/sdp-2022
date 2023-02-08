"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
// Logging constants
var AWS_CLOUDWATCH_BASE_BUFFER_SIZE = 26;
exports.AWS_CLOUDWATCH_BASE_BUFFER_SIZE = AWS_CLOUDWATCH_BASE_BUFFER_SIZE;
var AWS_CLOUDWATCH_MAX_BATCH_EVENT_SIZE = 1048576;
exports.AWS_CLOUDWATCH_MAX_BATCH_EVENT_SIZE = AWS_CLOUDWATCH_MAX_BATCH_EVENT_SIZE;
var AWS_CLOUDWATCH_MAX_EVENT_SIZE = 256000;
exports.AWS_CLOUDWATCH_MAX_EVENT_SIZE = AWS_CLOUDWATCH_MAX_EVENT_SIZE;
var AWS_CLOUDWATCH_CATEGORY = 'Logging';
exports.AWS_CLOUDWATCH_CATEGORY = AWS_CLOUDWATCH_CATEGORY;
var AWS_CLOUDWATCH_PROVIDER_NAME = 'AWSCloudWatch';
exports.AWS_CLOUDWATCH_PROVIDER_NAME = AWS_CLOUDWATCH_PROVIDER_NAME;
var NO_CREDS_ERROR_STRING = 'No credentials';
exports.NO_CREDS_ERROR_STRING = NO_CREDS_ERROR_STRING;
var RETRY_ERROR_CODES = [
    'ResourceNotFoundException',
    'InvalidSequenceTokenException',
];
exports.RETRY_ERROR_CODES = RETRY_ERROR_CODES;
//# sourceMappingURL=Constants.js.map