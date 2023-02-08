/// <reference types="node" />
import { EventStreamCodec } from "@aws-sdk/eventstream-codec";
import { EventSigner } from "@aws-sdk/types";
import { Transform, TransformCallback, TransformOptions } from "stream";
export interface EventSigningStreamOptions extends TransformOptions {
    priorSignature: string;
    eventSigner: EventSigner;
    eventStreamCodec: EventStreamCodec;
}
/**
 * A transform stream that signs the eventstream
 */
export declare class EventSigningStream extends Transform {
    private priorSignature;
    private eventSigner;
    private eventStreamCodec;
    constructor(options: EventSigningStreamOptions);
    _transform(chunk: Uint8Array, encoding: string, callback: TransformCallback): Promise<void>;
}
