import { StorageCopySource, StorageCopyDestination } from './Storage';
export interface StorageProvider {
    cancel?(request: Promise<any>): void;
    copy?(src: StorageCopySource, dest: StorageCopyDestination, config?: any): Promise<any>;
    configure(config: object): object;
    get(key: string, options?: any): Promise<string | Object>;
    put(key: string, object: any, options?: any): Promise<Object> | UploadTask;
    remove(key: string, options?: any): Promise<any>;
    list(path: any, options?: any): Promise<any>;
    getCategory(): string;
    getProviderName(): string;
}
export interface UploadTask {
    resume(): any;
    pause(): any;
    percent: number;
    isInProgress: boolean;
}
export interface StorageProviderWithCopy extends StorageProvider {
    copy(src: StorageCopySource, dest: StorageCopyDestination, config?: any): Promise<any>;
}
export declare type StorageProviderApi = 'copy' | 'get' | 'put' | 'remove' | 'list';
