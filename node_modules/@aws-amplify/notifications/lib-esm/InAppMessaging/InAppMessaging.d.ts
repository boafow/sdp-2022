import { InAppMessage, InAppMessageInteractionEvent, InAppMessagingConfig, InAppMessageConflictHandler, InAppMessagingEvent, InAppMessagingProvider, NotificationsSubcategory, OnMessageInteractionEventHandler, OnMessageInteractionEventListener, UserInfo } from './types';
export default class InAppMessaging {
    private config;
    private conflictHandler;
    private listeningForAnalyticEvents;
    private pluggables;
    private storageSynced;
    constructor();
    /**
     * Configure InAppMessaging
     * @param {Object} config - InAppMessaging configuration object
     */
    configure: ({ listenForAnalyticsEvents, ...config }?: InAppMessagingConfig) => InAppMessagingConfig;
    /**
     * Get the name of this module
     * @returns {string} name of this module
     */
    getModuleName(): NotificationsSubcategory;
    /**
     * Get a plugin from added plugins
     * @param {string} providerName - the name of the plugin to get
     */
    getPluggable: (providerName: string) => InAppMessagingProvider;
    /**
     * Add plugin into InAppMessaging
     * @param {InAppMessagingProvider} pluggable - an instance of the plugin
     */
    addPluggable: (pluggable: InAppMessagingProvider) => void;
    /**
     * Remove a plugin from added plugins
     * @param {string} providerName - the name of the plugin to remove
     */
    removePluggable: (providerName: string) => void;
    /**
     * Get the map resources that are currently available through the provider
     * @param {string} provider
     * @returns - Array of available map resources
     */
    syncMessages: () => Promise<void[]>;
    clearMessages: () => Promise<void[]>;
    dispatchEvent: (event: InAppMessagingEvent) => Promise<void>;
    identifyUser: (userId: string, userInfo: UserInfo) => Promise<void[]>;
    onMessageReceived: (handler: OnMessageInteractionEventHandler) => OnMessageInteractionEventListener;
    onMessageDisplayed: (handler: OnMessageInteractionEventHandler) => OnMessageInteractionEventListener;
    onMessageDismissed: (handler: OnMessageInteractionEventHandler) => OnMessageInteractionEventListener;
    onMessageActionTaken: (handler: OnMessageInteractionEventHandler) => OnMessageInteractionEventListener;
    notifyMessageInteraction: (message: InAppMessage, event: InAppMessageInteractionEvent) => void;
    setConflictHandler: (handler: InAppMessageConflictHandler) => void;
    private analyticsListener;
    private syncStorage;
    private getMessages;
    private setMessages;
    private removeMessages;
    private defaultConflictHandler;
}
