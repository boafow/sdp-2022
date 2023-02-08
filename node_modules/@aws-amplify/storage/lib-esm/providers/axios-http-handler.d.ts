/// <reference types="node" />
import { HttpHandlerOptions } from '@aws-sdk/types';
import { HttpHandler, HttpRequest, HttpResponse } from '@aws-sdk/protocol-http';
import { CancelTokenSource, AxiosRequestHeaders, AxiosRequestTransformer } from 'axios';
import { FetchHttpHandlerOptions } from '@aws-sdk/fetch-http-handler';
import * as events from 'events';
/**
Extending the axios interface here to make headers required, (previously,
they were not required on the type we were using, but our implementation
does not currently account for missing headers. This worked previously,
because the previous `headers` type was `any`.
*/
interface AxiosTransformer extends Partial<AxiosRequestTransformer> {
    (data: any, headers: AxiosRequestHeaders): any;
}
export declare const SEND_UPLOAD_PROGRESS_EVENT = "sendUploadProgress";
export declare const SEND_DOWNLOAD_PROGRESS_EVENT = "sendDownloadProgress";
export declare type ErrorWithResponse = {
    response: {
        status: number;
    } & {
        [key: string]: any;
    };
};
export declare const reactNativeRequestTransformer: AxiosTransformer[];
export declare type AxiosHttpHandlerOptions = HttpHandlerOptions & {
    cancelTokenSource?: CancelTokenSource;
    emitter?: events.EventEmitter;
};
export declare class AxiosHttpHandler implements HttpHandler {
    private readonly httpOptions;
    private readonly emitter?;
    private readonly cancelTokenSource?;
    constructor(httpOptions?: FetchHttpHandlerOptions, emitter?: events.EventEmitter, cancelTokenSource?: CancelTokenSource);
    destroy(): void;
    handle(request: HttpRequest, options: AxiosHttpHandlerOptions): Promise<{
        response: HttpResponse;
    }>;
}
export {};
