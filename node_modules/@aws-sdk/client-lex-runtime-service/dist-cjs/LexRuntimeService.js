"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LexRuntimeService = void 0;
const DeleteSessionCommand_1 = require("./commands/DeleteSessionCommand");
const GetSessionCommand_1 = require("./commands/GetSessionCommand");
const PostContentCommand_1 = require("./commands/PostContentCommand");
const PostTextCommand_1 = require("./commands/PostTextCommand");
const PutSessionCommand_1 = require("./commands/PutSessionCommand");
const LexRuntimeServiceClient_1 = require("./LexRuntimeServiceClient");
class LexRuntimeService extends LexRuntimeServiceClient_1.LexRuntimeServiceClient {
    deleteSession(args, optionsOrCb, cb) {
        const command = new DeleteSessionCommand_1.DeleteSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSession(args, optionsOrCb, cb) {
        const command = new GetSessionCommand_1.GetSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    postContent(args, optionsOrCb, cb) {
        const command = new PostContentCommand_1.PostContentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    postText(args, optionsOrCb, cb) {
        const command = new PostTextCommand_1.PostTextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putSession(args, optionsOrCb, cb) {
        const command = new PutSessionCommand_1.PutSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.LexRuntimeService = LexRuntimeService;
