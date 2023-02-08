"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStreamPayloadHandler = void 0;
const eventstream_codec_1 = require("@aws-sdk/eventstream-codec");
const stream_1 = require("stream");
const EventSigningStream_1 = require("./EventSigningStream");
class EventStreamPayloadHandler {
    constructor(options) {
        this.eventSigner = options.eventSigner;
        this.eventStreamCodec = new eventstream_codec_1.EventStreamCodec(options.utf8Encoder, options.utf8Decoder);
    }
    async handle(next, args, context = {}) {
        const request = args.request;
        const { body: payload } = request;
        if (!(payload instanceof stream_1.Readable)) {
            throw new Error("Eventstream payload must be a Readable stream.");
        }
        const payloadStream = payload;
        request.body = new stream_1.PassThrough({
            objectMode: true,
        });
        let result;
        try {
            result = await next(args);
        }
        catch (e) {
            request.body.end();
            throw e;
        }
        const match = (request.headers["authorization"] || "").match(/Signature=([\w]+)$/);
        const priorSignature = (match || [])[1];
        const signingStream = new EventSigningStream_1.EventSigningStream({
            priorSignature,
            eventStreamCodec: this.eventStreamCodec,
            eventSigner: await this.eventSigner(),
        });
        (0, stream_1.pipeline)(payloadStream, signingStream, request.body, (err) => {
            if (err) {
                throw err;
            }
        });
        return result;
    }
}
exports.EventStreamPayloadHandler = EventStreamPayloadHandler;
