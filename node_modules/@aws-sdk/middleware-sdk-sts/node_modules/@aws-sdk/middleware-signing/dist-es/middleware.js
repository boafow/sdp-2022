import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { getSkewCorrectedDate } from "./utils/getSkewCorrectedDate";
import { getUpdatedSystemClockOffset } from "./utils/getUpdatedSystemClockOffset";
export var awsAuthMiddleware = function (options) {
    return function (next, context) {
        return function (args) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var authScheme, signer, output, _d, _e, dateHeader;
                var _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            if (!HttpRequest.isInstance(args.request))
                                return [2, next(args)];
                            authScheme = (_c = (_b = (_a = (context.endpointV2)) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b.authSchemes) === null || _c === void 0 ? void 0 : _c[0];
                            return [4, options.signer(authScheme)];
                        case 1:
                            signer = _g.sent();
                            _d = next;
                            _e = [__assign({}, args)];
                            _f = {};
                            return [4, signer.sign(args.request, {
                                    signingDate: getSkewCorrectedDate(options.systemClockOffset),
                                    signingRegion: context["signing_region"],
                                    signingService: context["signing_service"],
                                })];
                        case 2: return [4, _d.apply(void 0, [__assign.apply(void 0, _e.concat([(_f.request = _g.sent(), _f)]))]).catch(function (error) {
                                var _a;
                                var serverTime = (_a = error.ServerTime) !== null && _a !== void 0 ? _a : getDateHeader(error.$response);
                                if (serverTime) {
                                    options.systemClockOffset = getUpdatedSystemClockOffset(serverTime, options.systemClockOffset);
                                }
                                throw error;
                            })];
                        case 3:
                            output = _g.sent();
                            dateHeader = getDateHeader(output.response);
                            if (dateHeader) {
                                options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
                            }
                            return [2, output];
                    }
                });
            });
        };
    };
};
var getDateHeader = function (response) { var _a, _b, _c; return HttpResponse.isInstance(response) ? (_b = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.date) !== null && _b !== void 0 ? _b : (_c = response.headers) === null || _c === void 0 ? void 0 : _c.Date : undefined; };
export var awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
export var getAwsAuthPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
    },
}); };
export var getSigV4AuthPlugin = getAwsAuthPlugin;
