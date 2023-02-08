/**
 * Storage instance options
 */
import { ICredentials } from '@aws-amplify/core';
import { StorageProvider, StorageProviderApi, AWSS3Provider, StorageProviderWithCopy, S3ProviderGetOuput, S3ProviderRemoveOutput, S3ProviderListOutput, S3ProviderCopyOutput, S3ProviderPutOutput } from '../';
declare type Tail<T extends any[]> = ((...t: T) => void) extends (h: any, ...r: infer R) => void ? R : never;
declare type Last<T extends any[]> = T[Exclude<keyof T, keyof Tail<T>>];
declare type LastParameter<F extends (...args: any) => any> = Last<Parameters<F>>;
export interface StorageOptions {
    credentials?: ICredentials;
    region?: string;
    level?: StorageAccessLevel;
    bucket?: string;
    provider?: string;
    /**
     * Custom mapping of your prefixes.
     * For example, customPrefix: { public: 'myPublicPrefix' } will make public level operations access 'myPublicPrefix/'
     * instead of the default 'public/'.
     */
    customPrefix?: CustomPrefix;
    /**
     * if set to true, automatically sends Storage Events to Amazon Pinpoint
     **/
    track?: boolean;
    dangerouslyConnectToHttpEndpointForTesting?: boolean;
}
export declare type StorageAccessLevel = 'public' | 'protected' | 'private';
export declare type CustomPrefix = {
    [key in StorageAccessLevel]?: string;
};
export declare type StorageCopyTarget = {
    key: string;
    level?: string;
    identityId?: string;
};
export declare type StorageCopySource = StorageCopyTarget;
export declare type StorageCopyDestination = Omit<StorageCopyTarget, 'identityId'>;
/**
 * If provider is AWSS3, provider doesn't have to be specified since it's the default, else it has to be passed into
 * config.
 */
declare type StorageOperationConfig<T extends StorageProvider | StorageProviderWithCopy, U extends StorageProviderApi> = ReturnType<T['getProviderName']> extends 'AWSS3' ? LastParameter<AWSS3Provider[U]> : T extends StorageProviderWithCopy ? LastParameter<T[U]> & {
    provider: ReturnType<T['getProviderName']>;
} : LastParameter<T[Exclude<U, 'copy'>]> & {
    provider: ReturnType<T['getProviderName']>;
};
export declare type StorageGetConfig<T extends Record<string, any>> = T extends StorageProvider ? StorageOperationConfig<T, 'get'> : StorageOperationConfigMap<StorageOperationConfig<AWSS3Provider, 'get'>, T>;
export declare type StoragePutConfig<T extends Record<string, any>> = T extends StorageProvider ? StorageOperationConfig<T, 'put'> : StorageOperationConfigMap<StorageOperationConfig<AWSS3Provider, 'put'>, T>;
export declare type StorageRemoveConfig<T extends Record<string, any>> = T extends StorageProvider ? StorageOperationConfig<T, 'remove'> : StorageOperationConfigMap<StorageOperationConfig<AWSS3Provider, 'remove'>, T>;
export declare type StorageListConfig<T extends Record<string, any>> = T extends StorageProvider ? StorageOperationConfig<T, 'list'> : StorageOperationConfigMap<StorageOperationConfig<AWSS3Provider, 'list'>, T>;
export declare type StorageCopyConfig<T extends Record<string, any>> = T extends StorageProviderWithCopy ? StorageOperationConfig<T, 'copy'> : StorageOperationConfigMap<StorageOperationConfig<AWSS3Provider, 'copy'>, T>;
/**
 * Utility type for checking if the generic type is a provider or a Record that has the key 'provider'.
 * If it's a provider, check if it's the S3 Provider, use the default type else use the generic's 'get' method
 * return type.
 * If it's a Record, check if provider is 'AWSS3', use the default type else use any.
 */
declare type PickProviderOutput<DefaultOutput, T, api extends StorageProviderApi> = T extends StorageProvider ? T['getProviderName'] extends 'AWSS3' ? DefaultOutput : T extends StorageProviderWithCopy ? ReturnType<T[api]> : ReturnType<T[Exclude<api, 'copy'>]> : T extends {
    provider: string;
} ? T extends {
    provider: 'AWSS3';
} ? DefaultOutput : Promise<any> : DefaultOutput;
export declare type StorageGetOutput<T extends StorageProvider | Record<string, any>> = PickProviderOutput<Promise<S3ProviderGetOuput<T>>, T, 'get'>;
export declare type StoragePutOutput<T> = PickProviderOutput<S3ProviderPutOutput<T>, T, 'put'>;
export declare type StorageRemoveOutput<T> = PickProviderOutput<Promise<S3ProviderRemoveOutput>, T, 'remove'>;
export declare type StorageListOutput<T> = PickProviderOutput<Promise<S3ProviderListOutput>, T, 'list'>;
export declare type StorageCopyOutput<T> = PickProviderOutput<Promise<S3ProviderCopyOutput>, T, 'copy'>;
/**
 * Utility type to allow custom provider to use any config keys, if provider is set to AWSS3 then it should use
 * AWSS3Provider's config.
 */
export declare type StorageOperationConfigMap<Default, T extends Record<string, any>> = T extends {
    provider: string;
} ? T extends {
    provider: 'AWSS3';
} ? Default : T & {
    provider: string;
} : Default;
export {};
