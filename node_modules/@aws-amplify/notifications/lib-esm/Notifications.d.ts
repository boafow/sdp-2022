import InAppMessaging from './InAppMessaging';
import { NotificationsCategory, NotificationsConfig } from './types';
declare class NotificationsClass {
    private config;
    private inAppMessaging;
    constructor();
    /**
     * Get the name of the module category
     * @returns {string} name of the module category
     */
    getModuleName(): NotificationsCategory;
    /**
     * Configure Notifications
     * @param {Object} config - Notifications configuration object
     */
    configure: ({ Notifications: config }?: NotificationsConfig) => Record<string, any>;
    get InAppMessaging(): InAppMessaging;
}
declare const Notifications: NotificationsClass;
export default Notifications;
