import { __extends } from "tslib";
import { DeleteSessionCommand, } from "./commands/DeleteSessionCommand";
import { GetSessionCommand } from "./commands/GetSessionCommand";
import { PostContentCommand } from "./commands/PostContentCommand";
import { PostTextCommand } from "./commands/PostTextCommand";
import { PutSessionCommand } from "./commands/PutSessionCommand";
import { LexRuntimeServiceClient } from "./LexRuntimeServiceClient";
var LexRuntimeService = (function (_super) {
    __extends(LexRuntimeService, _super);
    function LexRuntimeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LexRuntimeService.prototype.deleteSession = function (args, optionsOrCb, cb) {
        var command = new DeleteSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexRuntimeService.prototype.getSession = function (args, optionsOrCb, cb) {
        var command = new GetSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexRuntimeService.prototype.postContent = function (args, optionsOrCb, cb) {
        var command = new PostContentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexRuntimeService.prototype.postText = function (args, optionsOrCb, cb) {
        var command = new PostTextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexRuntimeService.prototype.putSession = function (args, optionsOrCb, cb) {
        var command = new PutSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return LexRuntimeService;
}(LexRuntimeServiceClient));
export { LexRuntimeService };
