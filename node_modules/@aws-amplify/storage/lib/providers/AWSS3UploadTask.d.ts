/// <reference types="node" />
import { UploadPartCommandInput, S3Client, PutObjectCommandInput } from '@aws-sdk/client-s3';
import * as events from 'events';
import { Canceler } from 'axios';
import { UploadTask } from '../types/Provider';
import { StorageAccessLevel } from '..';
export declare enum AWSS3UploadTaskState {
    INIT = 0,
    IN_PROGRESS = 1,
    PAUSED = 2,
    CANCELLED = 3,
    COMPLETED = 4
}
export declare enum TaskEvents {
    CANCEL = "cancel",
    UPLOAD_COMPLETE = "uploadComplete",
    UPLOAD_PROGRESS = "uploadPartProgress",
    ERROR = "error"
}
export interface AWSS3UploadTaskParams {
    s3Client: S3Client;
    file: Blob;
    storage: Storage;
    level: StorageAccessLevel;
    params: PutObjectCommandInput;
    prefixPromise: Promise<string>;
    emitter?: events.EventEmitter;
}
export interface InProgressRequest {
    uploadPartInput: UploadPartCommandInput;
    s3Request: Promise<any>;
    cancel: Canceler;
}
export interface UploadTaskCompleteEvent {
    key?: string;
}
export interface UploadTaskProgressEvent {
    /**
     * bytes that has been sent to S3 so far
     */
    loaded: number;
    /**
     * total bytes that needs to be sent to S3
     */
    total: number;
}
export interface FileMetadata {
    bucket: string;
    fileName: string;
    key: string;
    lastTouched: number;
    uploadId: string;
}
export declare class AWSS3UploadTask implements UploadTask {
    private readonly emitter;
    private readonly file;
    private readonly queueSize;
    private readonly s3client;
    private readonly storage;
    private readonly storageSync;
    private readonly fileId;
    private readonly params;
    private readonly prefixPromise;
    private partSize;
    private inProgress;
    private completedParts;
    private queued;
    private bytesUploaded;
    private totalBytes;
    private uploadId;
    state: AWSS3UploadTaskState;
    constructor({ s3Client, file, emitter, storage, params, level, prefixPromise, }: AWSS3UploadTaskParams);
    get percent(): number;
    get isInProgress(): boolean;
    private _listSingleFile;
    private _getFileId;
    private _findCachedUploadParts;
    private _emitEvent;
    private _validateParams;
    private _listCachedUploadTasks;
    private _cache;
    private _isCached;
    private _removeFromCache;
    private _onPartUploadCompletion;
    private _completeUpload;
    private _makeUploadPartRequest;
    private _startNextPart;
    /**
     * Verify on S3 side that the file size matches the one on the client side.
     *
     * @async
     * @throws throws an error if the file size does not match between local copy of the file and the file on s3.
     */
    private _verifyFileSize;
    private _isDone;
    private _createParts;
    private _initCachedUploadParts;
    private _initMultipartUpload;
    private _initializeUploadTask;
    resume(): void;
    private _startUpload;
    _cancel(): Promise<boolean>;
    /**
     * pause this particular upload task
     **/
    pause(): void;
}
