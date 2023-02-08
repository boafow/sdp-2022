"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@aws-amplify/core");
var InAppMessaging_1 = tslib_1.__importDefault(require("./InAppMessaging"));
var logger = new core_1.ConsoleLogger('Notifications');
var NotificationsClass = /** @class */ (function () {
    function NotificationsClass() {
        var _this = this;
        this.config = {};
        /**
         * Configure Notifications
         * @param {Object} config - Notifications configuration object
         */
        this.configure = function (_a) {
            var config = (_a === void 0 ? {} : _a).Notifications;
            _this.config = tslib_1.__assign(tslib_1.__assign({}, _this.config), config);
            logger.debug('configure Notifications', config);
            // Configure sub-categories
            _this.inAppMessaging.configure(_this.config.InAppMessaging);
            return _this.config;
        };
        this.inAppMessaging = new InAppMessaging_1.default();
    }
    /**
     * Get the name of the module category
     * @returns {string} name of the module category
     */
    NotificationsClass.prototype.getModuleName = function () {
        return 'Notifications';
    };
    Object.defineProperty(NotificationsClass.prototype, "InAppMessaging", {
        get: function () {
            return this.inAppMessaging;
        },
        enumerable: true,
        configurable: true
    });
    return NotificationsClass;
}());
var Notifications = new NotificationsClass();
exports.default = Notifications;
core_1.Amplify.register(Notifications);
//# sourceMappingURL=Notifications.js.map