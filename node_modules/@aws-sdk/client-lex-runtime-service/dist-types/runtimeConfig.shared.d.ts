import { Logger as __Logger } from "@aws-sdk/types";
import { LexRuntimeServiceClientConfig } from "./LexRuntimeServiceClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: LexRuntimeServiceClientConfig) => {
    apiVersion: string;
    disableHostPrefix: boolean;
    logger: __Logger;
    regionInfoProvider: import("@aws-sdk/types").RegionInfoProvider;
    serviceId: string;
    urlParser: import("@aws-sdk/types").UrlParser;
};
