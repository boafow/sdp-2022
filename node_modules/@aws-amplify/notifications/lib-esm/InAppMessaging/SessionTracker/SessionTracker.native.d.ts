import { SessionState, SessionStateChangeHandler, SessionTrackerInterface } from './types';
export default class SessionTracker implements SessionTrackerInterface {
    private currentAppState;
    private sessionStateChangeHandler;
    constructor(sessionStateChangeHandler?: SessionStateChangeHandler);
    start: () => SessionState;
    end: () => SessionState;
    private getSessionState;
    private appStateChangeHandler;
}
