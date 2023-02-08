import { MqttOverWSProvider, MqttProviderOptions } from './MqttOverWSProvider';
export interface AWSIoTProviderOptions extends MqttProviderOptions {
    aws_pubsub_region?: string;
    aws_pubsub_endpoint?: string;
}
export declare class AWSIoTProvider extends MqttOverWSProvider {
    constructor(options?: AWSIoTProviderOptions);
    protected get region(): any;
    getProviderName(): string;
    protected get endpoint(): Promise<string>;
}
