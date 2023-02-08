import { __assign, __awaiter, __generator } from "tslib";
export var serializerMiddleware = function (options, serializer) {
    return function (next, context) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var endpoint, request;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        endpoint = ((_a = context.endpointV2) === null || _a === void 0 ? void 0 : _a.url) && options.urlParser
                            ? function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2, options.urlParser(context.endpointV2.url)];
                            }); }); }
                            : options.endpoint;
                        if (!endpoint) {
                            throw new Error("No valid endpoint provider available.");
                        }
                        return [4, serializer(args.input, __assign(__assign({}, options), { endpoint: endpoint }))];
                    case 1:
                        request = _b.sent();
                        return [2, next(__assign(__assign({}, args), { request: request }))];
                }
            });
        }); };
    };
};
