"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSigningStream = void 0;
const stream_1 = require("stream");
class EventSigningStream extends stream_1.Transform {
    constructor(options) {
        super({
            autoDestroy: true,
            readableObjectMode: true,
            writableObjectMode: true,
            ...options,
        });
        this.priorSignature = options.priorSignature;
        this.eventSigner = options.eventSigner;
        this.eventStreamCodec = options.eventStreamCodec;
    }
    async _transform(chunk, encoding, callback) {
        try {
            const now = new Date();
            const dateHeader = {
                ":date": { type: "timestamp", value: now },
            };
            const signature = await this.eventSigner.sign({
                payload: chunk,
                headers: this.eventStreamCodec.formatHeaders(dateHeader),
            }, {
                priorSignature: this.priorSignature,
                signingDate: now,
            });
            this.priorSignature = signature;
            const serializedSigned = this.eventStreamCodec.encode({
                headers: {
                    ...dateHeader,
                    ":chunk-signature": {
                        type: "binary",
                        value: getSignatureBinary(signature),
                    },
                },
                body: chunk,
            });
            this.push(serializedSigned);
            return callback();
        }
        catch (err) {
            callback(err);
        }
    }
}
exports.EventSigningStream = EventSigningStream;
function getSignatureBinary(signature) {
    const buf = Buffer.from(signature, "hex");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}
