export declare type SessionState = 'started' | 'ended';
export declare type SessionStateChangeHandler = (state: SessionState) => void;
export interface SessionTrackerInterface {
    start: () => SessionState;
    end: () => SessionState;
}
