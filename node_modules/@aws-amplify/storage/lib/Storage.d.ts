import { StorageCopySource, StorageCopyDestination, StorageGetConfig, StorageProvider, StoragePutConfig, StorageRemoveConfig, StorageListConfig, StorageCopyConfig, StorageGetOutput, StoragePutOutput, StorageRemoveOutput, StorageListOutput, StorageCopyOutput, UploadTask } from './types';
/**
 * Provide storage methods to use AWS S3
 */
export declare class Storage {
    /**
     * @private
     */
    private _config;
    private _pluggables;
    /**
     * Similar to the API module. This weak map allows users to cancel their in-flight request made using the Storage
     * module. For every get or put request, a unique cancel token will be generated and injected to it's underlying
     * AxiosHttpHandler. This map maintains a mapping of Request to CancelTokenSource. When .cancel is invoked, it will
     * attempt to retrieve it's corresponding cancelTokenSource and cancel the in-flight request.
     */
    private _cancelTokenSourceMap;
    /**
     * @public
     */
    vault: Storage;
    /**
     * Initialize Storage
     * @param {Object} config - Configuration object for storage
     */
    constructor();
    getModuleName(): string;
    /**
     * add plugin into Storage category
     * @param {Object} pluggable - an instance of the plugin
     */
    addPluggable(pluggable: StorageProvider): {};
    /**
     * Get the plugin object
     * @param providerName - the name of the plugin
     */
    getPluggable(providerName: string): StorageProvider;
    /**
     * Remove the plugin object
     * @param providerName - the name of the plugin
     */
    removePluggable(providerName: string): void;
    /**
     * Configure Storage
     * @param {Object} config - Configuration object for storage
     * @return {Object} - Current configuration
     */
    configure(config?: any): any;
    private getCancellableTokenSource;
    private updateRequestToBeCancellable;
    private isUploadTask;
    /**
     * Cancels an inflight request
     *
     * @param request - The request to cancel
     * @param [message] - A message to include in the cancelation exception
     */
    cancel(request: UploadTask, message?: string): Promise<boolean>;
    cancel(request: Promise<any>, message?: string): void;
    /**
     * Copies a file from src to dest.
     *
     * @param src - The source object.
     * @param dest - The destination object.
     * @param [config] - config for the Storage operation.
     * @return A promise resolves to the copied object's key.
     */
    copy<T extends Record<string, any>>(src: StorageCopySource, dest: StorageCopyDestination, config?: StorageCopyConfig<T>): StorageCopyOutput<T>;
    /**
     * Get a presigned URL of the file or the object data when download:true
     *
     * @param key - key of the object
     * @param [config] - config for the Storage operation.
     * @return - A promise resolves to either a presigned url or the object
     */
    get<T extends Record<string, any> & {
        download?: boolean;
    }>(key: string, config?: StorageGetConfig<T>): StorageGetOutput<T>;
    isCancelError(error: any): boolean;
    /**
     * Put a file in storage bucket specified to configure method
     * @param key - key of the object
     * @param object - File to be put in bucket
     * @param [config] - { level : private|protected|public, contentType: MIME Types,
     *  progressCallback: function }
     * @return - promise resolves to object on success
     */
    put<T extends Record<string, any>>(key: string, object: any, config?: StoragePutConfig<T>): StoragePutOutput<T>;
    /**
     * Remove the object for specified key
     * @param key - key of the object
     * @param [config] - { level : private|protected|public }
     * @return - Promise resolves upon successful removal of the object
     */
    remove<T extends Record<string, any>>(key: string, config?: StorageRemoveConfig<T>): StorageRemoveOutput<T>;
    /**
     * List bucket objects relative to the level and prefix specified
     * @param path - the path that contains objects
     * @param [config] - { level : private|protected|public, maxKeys: NUMBER }
     * @return - Promise resolves to list of keys for all objects in path
     */
    list<T extends Record<string, any>>(key: string, config?: StorageListConfig<T>): StorageListOutput<T>;
}
export declare const StorageInstance: Storage;
