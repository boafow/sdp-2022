import { InAppMessage, InAppMessageInteractionEvent, OnMessageInteractionEventHandler, OnMessageInteractionEventListener } from './types';
export declare const notifyMessageInteractionEventListeners: (message: InAppMessage, event: InAppMessageInteractionEvent) => void;
export declare const addMessageInteractionEventListener: (handler: OnMessageInteractionEventHandler, event: InAppMessageInteractionEvent) => OnMessageInteractionEventListener;
