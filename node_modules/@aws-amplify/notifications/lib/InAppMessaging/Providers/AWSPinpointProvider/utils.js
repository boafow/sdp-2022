"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@aws-amplify/core");
var client_pinpoint_1 = require("@aws-sdk/client-pinpoint");
var isEmpty_1 = tslib_1.__importDefault(require("lodash/isEmpty"));
var AMPLIFY_SYMBOL = (typeof Symbol !== 'undefined' && typeof Symbol.for === 'function'
    ? Symbol.for('amplify_default')
    : '@@amplify_default');
var DELIVERY_TYPE = 'IN_APP_MESSAGE';
var eventNameMemo = {};
var eventAttributesMemo = {};
var eventMetricsMemo = {};
exports.logger = new core_1.ConsoleLogger('AWSPinpointProvider');
exports.dispatchInAppMessagingEvent = function (event, data, message) {
    core_1.Hub.dispatch('inAppMessaging', { event: event, data: data, message: message }, 'InAppMessaging', AMPLIFY_SYMBOL);
};
exports.recordAnalyticsEvent = function (event, message) {
    if (!message) {
        exports.logger.debug('Unable to record analytics event - no InAppMessage was received');
        return;
    }
    if (core_1.Amplify.Analytics && typeof core_1.Amplify.Analytics.record === 'function') {
        var id = message.id, metadata = message.metadata;
        core_1.Amplify.Analytics.record({
            name: event,
            attributes: {
                campaign_id: id,
                delivery_type: DELIVERY_TYPE,
                treatment_id: metadata === null || metadata === void 0 ? void 0 : metadata.treatmentId,
            },
        });
    }
    else {
        exports.logger.debug('Analytics module is not registered into Amplify');
    }
};
exports.getStartOfDay = function () {
    var now = new Date();
    now.setHours(0, 0, 0, 0);
    return now.toISOString();
};
exports.matchesEventType = function (_a, _b) {
    var CampaignId = _a.CampaignId, Schedule = _a.Schedule;
    var eventType = _b.name;
    var _c;
    var EventType = ((_c = Schedule === null || Schedule === void 0 ? void 0 : Schedule.EventFilter) === null || _c === void 0 ? void 0 : _c.Dimensions).EventType;
    var memoKey = CampaignId + ":" + eventType;
    if (!eventNameMemo.hasOwnProperty(memoKey)) {
        eventNameMemo[memoKey] = !!(EventType === null || EventType === void 0 ? void 0 : EventType.Values.includes(eventType));
    }
    return eventNameMemo[memoKey];
};
exports.matchesAttributes = function (_a, _b) {
    var CampaignId = _a.CampaignId, Schedule = _a.Schedule;
    var attributes = _b.attributes;
    var _c;
    var Attributes = ((_c = Schedule === null || Schedule === void 0 ? void 0 : Schedule.EventFilter) === null || _c === void 0 ? void 0 : _c.Dimensions).Attributes;
    if (isEmpty_1.default(Attributes)) {
        // if message does not have attributes defined it does not matter what attributes are on the event
        return true;
    }
    if (isEmpty_1.default(attributes)) {
        // if message does have attributes but the event does not then it always fails the check
        return false;
    }
    var memoKey = CampaignId + ":" + JSON.stringify(attributes);
    if (!eventAttributesMemo.hasOwnProperty(memoKey)) {
        eventAttributesMemo[memoKey] = Object.entries(Attributes).every(function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], Values = _b[1].Values;
            return Values.includes(attributes[key]);
        });
    }
    return eventAttributesMemo[memoKey];
};
exports.matchesMetrics = function (_a, _b) {
    var CampaignId = _a.CampaignId, Schedule = _a.Schedule;
    var metrics = _b.metrics;
    var _c;
    var Metrics = ((_c = Schedule === null || Schedule === void 0 ? void 0 : Schedule.EventFilter) === null || _c === void 0 ? void 0 : _c.Dimensions).Metrics;
    if (isEmpty_1.default(Metrics)) {
        // if message does not have metrics defined it does not matter what metrics are on the event
        return true;
    }
    if (isEmpty_1.default(metrics)) {
        // if message does have metrics but the event does not then it always fails the check
        return false;
    }
    var memoKey = CampaignId + ":" + JSON.stringify(metrics);
    if (!eventMetricsMemo.hasOwnProperty(memoKey)) {
        eventMetricsMemo[memoKey] = Object.entries(Metrics).every(function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], _c = _b[1], ComparisonOperator = _c.ComparisonOperator, Value = _c.Value;
            var compare = exports.getComparator(ComparisonOperator);
            // if there is some unknown comparison operator, treat as a comparison failure
            return compare ? compare(Value, metrics[key]) : false;
        });
    }
    return eventMetricsMemo[memoKey];
};
exports.getComparator = function (operator) {
    switch (operator) {
        case 'EQUAL':
            return function (metricsVal, eventVal) { return metricsVal === eventVal; };
        case 'GREATER_THAN':
            return function (metricsVal, eventVal) { return metricsVal < eventVal; };
        case 'GREATER_THAN_OR_EQUAL':
            return function (metricsVal, eventVal) { return metricsVal <= eventVal; };
        case 'LESS_THAN':
            return function (metricsVal, eventVal) { return metricsVal > eventVal; };
        case 'LESS_THAN_OR_EQUAL':
            return function (metricsVal, eventVal) { return metricsVal >= eventVal; };
        default:
            return null;
    }
};
exports.isBeforeEndDate = function (_a) {
    var Schedule = _a.Schedule;
    if (!(Schedule === null || Schedule === void 0 ? void 0 : Schedule.EndDate)) {
        return true;
    }
    return new Date() < new Date(Schedule.EndDate);
};
exports.isQuietTime = function (message) {
    var Schedule = message.Schedule;
    if (!(Schedule === null || Schedule === void 0 ? void 0 : Schedule.QuietTime)) {
        return false;
    }
    var pattern = /^[0-2]\d:[0-5]\d$/; // basic sanity check, not a fully featured HH:MM validation
    var _a = Schedule.QuietTime, Start = _a.Start, End = _a.End;
    if (!Start ||
        !End ||
        Start === End ||
        !pattern.test(Start) ||
        !pattern.test(End)) {
        return false;
    }
    var now = new Date();
    var start = new Date(now);
    var end = new Date(now);
    var _b = tslib_1.__read(Start.split(':'), 2), startHours = _b[0], startMinutes = _b[1];
    var _c = tslib_1.__read(End.split(':'), 2), endHours = _c[0], endMinutes = _c[1];
    start.setHours(Number.parseInt(startHours, 10), Number.parseInt(startMinutes, 10), 0, 0);
    end.setHours(Number.parseInt(endHours, 10), Number.parseInt(endMinutes, 10), 0, 0);
    // if quiet time includes midnight, bump the end time to the next day
    if (start > end) {
        end.setDate(end.getDate() + 1);
    }
    var isQuietTime = now >= start && now <= end;
    if (isQuietTime) {
        exports.logger.debug('message filtered due to quiet time', message);
    }
    return isQuietTime;
};
exports.clearMemo = function () {
    eventNameMemo = {};
    eventAttributesMemo = {};
    eventMetricsMemo = {};
};
// in the pinpoint console when a message is created with a Modal or Full Screen layout,
// it is assigned a layout value of MOBILE_FEED or OVERLAYS respectively in the message payload.
// In the future, Pinpoint will be updating the layout values in the aforementioned scenario
// to MODAL and FULL_SCREEN.
//
// This utility acts as a safeguard to ensure that:
// - 1. the usage of MOBILE_FEED and OVERLAYS as values for message layouts are not leaked
//      outside the Pinpoint provider
// - 2. Amplify correctly handles the legacy layout values from Pinpoint after they are updated
exports.interpretLayout = function (layout) {
    if (layout === client_pinpoint_1.Layout.MOBILE_FEED) {
        return 'MODAL';
    }
    if (layout === client_pinpoint_1.Layout.OVERLAYS) {
        return 'FULL_SCREEN';
    }
    // cast as PinpointInAppMessage['InAppMessage']['Layout'] allows `string` as a value
    return layout;
};
exports.extractContent = function (_a) {
    var message = _a.InAppMessage;
    var _b, _c;
    return ((_c = (_b = message === null || message === void 0 ? void 0 : message.Content) === null || _b === void 0 ? void 0 : _b.map(function (content) {
        var BackgroundColor = content.BackgroundColor, BodyConfig = content.BodyConfig, HeaderConfig = content.HeaderConfig, ImageUrl = content.ImageUrl, PrimaryBtn = content.PrimaryBtn, SecondaryBtn = content.SecondaryBtn;
        var defaultPrimaryButton = PrimaryBtn === null || PrimaryBtn === void 0 ? void 0 : PrimaryBtn.DefaultConfig;
        var defaultSecondaryButton = SecondaryBtn === null || SecondaryBtn === void 0 ? void 0 : SecondaryBtn.DefaultConfig;
        var extractedContent = {};
        if (BackgroundColor) {
            extractedContent.container = {
                style: {
                    backgroundColor: BackgroundColor,
                },
            };
        }
        if (HeaderConfig) {
            extractedContent.header = {
                content: HeaderConfig.Header,
                style: {
                    color: HeaderConfig.TextColor,
                    textAlign: HeaderConfig.Alignment.toLowerCase(),
                },
            };
        }
        if (BodyConfig) {
            extractedContent.body = {
                content: BodyConfig.Body,
                style: {
                    color: BodyConfig.TextColor,
                    textAlign: BodyConfig.Alignment.toLowerCase(),
                },
            };
        }
        if (ImageUrl) {
            extractedContent.image = {
                src: ImageUrl,
            };
        }
        if (defaultPrimaryButton) {
            extractedContent.primaryButton = {
                title: defaultPrimaryButton.Text,
                action: defaultPrimaryButton.ButtonAction,
                url: defaultPrimaryButton.Link,
                style: {
                    backgroundColor: defaultPrimaryButton.BackgroundColor,
                    borderRadius: defaultPrimaryButton.BorderRadius,
                    color: defaultPrimaryButton.TextColor,
                },
            };
        }
        if (defaultSecondaryButton) {
            extractedContent.secondaryButton = {
                title: defaultSecondaryButton.Text,
                action: defaultSecondaryButton.ButtonAction,
                url: defaultSecondaryButton.Link,
                style: {
                    backgroundColor: defaultSecondaryButton.BackgroundColor,
                    borderRadius: defaultSecondaryButton.BorderRadius,
                    color: defaultSecondaryButton.TextColor,
                },
            };
        }
        return extractedContent;
    })) !== null && _c !== void 0 ? _c : []);
};
exports.extractMetadata = function (_a) {
    var InAppMessage = _a.InAppMessage, Priority = _a.Priority, Schedule = _a.Schedule, TreatmentId = _a.TreatmentId;
    return ({
        customData: InAppMessage === null || InAppMessage === void 0 ? void 0 : InAppMessage.CustomConfig,
        endDate: Schedule === null || Schedule === void 0 ? void 0 : Schedule.EndDate,
        priority: Priority,
        treatmentId: TreatmentId,
    });
};
//# sourceMappingURL=utils.js.map