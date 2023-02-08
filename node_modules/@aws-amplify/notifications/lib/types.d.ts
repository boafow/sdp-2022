import { InAppMessagingConfig } from './InAppMessaging';
export declare type NotificationsCategory = 'Notifications';
export interface NotificationsConfig extends Record<any, any> {
    Notifications?: {
        InAppMessaging?: InAppMessagingConfig;
    };
}
