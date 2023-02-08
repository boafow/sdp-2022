import { NotificationsCategory } from '../types';
import { AWSPinpointProviderConfig } from './Providers/AWSPinpointProvider/types';
export declare type NotificationsSubcategory = 'InAppMessaging';
export declare type UserInfo = {
    attributes?: Record<string, string[]>;
    demographic?: {
        appVersion?: string;
        locale?: string;
        make?: string;
        model?: string;
        modelVersion?: string;
        platform?: string;
        platformVersion?: string;
        timezone?: string;
    };
    location?: {
        city?: string;
        country?: string;
        latitude?: number;
        longitude?: number;
        postalCode?: string;
        region?: string;
    };
    metrics?: Record<string, number>;
};
export declare type InAppMessagingEvent = {
    name: string;
    attributes?: Record<string, string>;
    metrics?: Record<string, number>;
};
export interface InAppMessagingConfig {
    listenForAnalyticsEvents?: boolean;
    AWSPinpoint?: AWSPinpointProviderConfig;
}
export interface InAppMessagingProvider {
    configure(config: object): object;
    getCategory(): NotificationsCategory;
    getSubCategory(): NotificationsSubcategory;
    getProviderName(): string;
    getInAppMessages(): Promise<any>;
    processInAppMessages(messages: InAppMessage[], event: InAppMessagingEvent): Promise<InAppMessage[]>;
    identifyUser(userId: string, userInfo: UserInfo): Promise<void>;
}
export declare type InAppMessageLayout = 'BOTTOM_BANNER' | 'CAROUSEL' | 'FULL_SCREEN' | 'MIDDLE_BANNER' | 'MODAL' | 'TOP_BANNER';
export declare type InAppMessageAction = 'CLOSE' | 'DEEP_LINK' | 'LINK';
export declare type InAppMessageTextAlign = 'center' | 'left' | 'right';
interface InAppMessageContainer {
    style?: InAppMessageStyle;
}
interface InAppMessageHeader {
    content: string;
    style?: InAppMessageStyle;
}
interface InAppMessageBody {
    content: string;
    style?: InAppMessageStyle;
}
export interface InAppMessageImage {
    src: string;
}
export interface InAppMessageButton {
    title: string;
    action: InAppMessageAction;
    url?: string;
    style?: InAppMessageStyle;
}
export interface InAppMessageStyle {
    backgroundColor?: string;
    borderRadius?: number;
    color?: string;
    textAlign?: InAppMessageTextAlign;
}
export interface InAppMessageContent {
    container?: InAppMessageContainer;
    header?: InAppMessageHeader;
    body?: InAppMessageBody;
    image?: InAppMessageImage;
    primaryButton?: InAppMessageButton;
    secondaryButton?: InAppMessageButton;
}
export interface InAppMessage {
    id: string;
    layout: InAppMessageLayout;
    content: InAppMessageContent[];
    metadata?: any;
}
export declare type OnMessageInteractionEventHandler = (message: InAppMessage) => any;
export interface OnMessageInteractionEventListener {
    handleEvent: OnMessageInteractionEventHandler;
    remove: () => void;
}
export declare enum InAppMessageInteractionEvent {
    MESSAGE_RECEIVED = "MESSAGE_RECEIVED_EVENT",
    MESSAGE_DISPLAYED = "MESSAGE_DISPLAYED_EVENT",
    MESSAGE_DISMISSED = "MESSAGE_DISMISSED_EVENT",
    MESSAGE_ACTION_TAKEN = "MESSAGE_ACTION_TAKEN_EVENT"
}
export declare type InAppMessageConflictHandler = (messages: InAppMessage[]) => InAppMessage;
export {};
