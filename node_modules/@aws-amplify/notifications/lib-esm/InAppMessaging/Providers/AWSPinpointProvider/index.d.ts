import { NotificationsCategory } from '../../../types';
import { InAppMessage, InAppMessagingEvent, InAppMessagingProvider, NotificationsSubcategory, UserInfo } from '../../types';
export default class AWSPinpointProvider implements InAppMessagingProvider {
    static category: NotificationsCategory;
    static subCategory: NotificationsSubcategory;
    static providerName: string;
    private clientInfo;
    private config;
    private configured;
    private endpointInitialized;
    private initialized;
    private sessionMessageCountMap;
    private sessionTracker;
    constructor();
    /**
     * get the category of the plugin
     */
    getCategory(): "Notifications";
    /**
     * get the sub-category of the plugin
     */
    getSubCategory(): "InAppMessaging";
    /**
     * get provider name of the plugin
     */
    getProviderName(): string;
    configure: (config?: {}) => object;
    getInAppMessages: () => Promise<any>;
    processInAppMessages: (messages: any[], event: InAppMessagingEvent) => Promise<InAppMessage[]>;
    identifyUser: (userId: string, userInfo: UserInfo) => Promise<void>;
    private init;
    private initPinpointClient;
    private getEndpointId;
    private updateEndpoint;
    private getCredentials;
    private sessionStateChangeHandler;
    private isBelowCap;
    private getSessionCount;
    private getDailyCount;
    private getTotalCountMap;
    private getTotalCount;
    private getMessageCounts;
    private setSessionCount;
    private setDailyCount;
    private setTotalCountMap;
    private setTotalCount;
    private incrementCounts;
    private normalizeMessages;
    private recordMessageEvent;
}
