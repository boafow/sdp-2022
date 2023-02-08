/// <reference types="node" />
import { ICredentials } from '@aws-amplify/core';
import { StorageAccessLevel, CustomPrefix } from '../types';
import { InitializeMiddleware, InitializeHandlerOptions, FinalizeRequestHandlerOptions, FinalizeRequestMiddleware } from '@aws-sdk/types';
import { S3ClientConfig, S3Client } from '@aws-sdk/client-s3';
import { CancelTokenSource } from 'axios';
import * as events from 'events';
export declare const getPrefix: (config: {
    credentials: ICredentials;
    level?: StorageAccessLevel;
    customPrefix?: CustomPrefix;
    identityId?: string;
}) => string;
export declare const createPrefixMiddleware: (opt: Record<string, any>, key: string) => InitializeMiddleware<any, any>;
export declare const autoAdjustClockskewMiddleware: (config: S3ClientConfig) => FinalizeRequestMiddleware<any, any>;
export declare const autoAdjustClockskewMiddlewareOptions: FinalizeRequestHandlerOptions;
export declare const prefixMiddlewareOptions: InitializeHandlerOptions;
export declare const credentialsProvider: () => Promise<{
    accessKeyId: any;
    sessionToken: any;
    secretAccessKey: any;
    identityId: any;
    authenticated: any;
} | {
    accessKeyId: string;
    secretAccessKey: string;
}>;
export declare const createS3Client: (config: {
    region?: string;
    cancelTokenSource?: CancelTokenSource;
    dangerouslyConnectToHttpEndpointForTesting?: boolean;
    useAccelerateEndpoint?: boolean;
}, emitter?: events.EventEmitter) => S3Client;
export declare const DEFAULT_PART_SIZE: number;
export declare const MAX_OBJECT_SIZE: number;
export declare const MAX_PARTS_COUNT = 10000;
export declare const DEFAULT_QUEUE_SIZE = 4;
export declare const calculatePartSize: (totalSize: number) => number;
