import { __assign, __awaiter, __generator, __read } from "tslib";
import { memoize } from "@aws-sdk/property-provider";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { normalizeProvider } from "@aws-sdk/util-middleware";
var CREDENTIAL_EXPIRE_WINDOW = 300000;
export var resolveAwsAuthConfig = function (input) {
    var normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    var _a = input.signingEscapePath, signingEscapePath = _a === void 0 ? true : _a, _b = input.systemClockOffset, systemClockOffset = _b === void 0 ? input.systemClockOffset || 0 : _b, sha256 = input.sha256;
    var signer;
    if (input.signer) {
        signer = normalizeProvider(input.signer);
    }
    else if (input.regionInfoProvider) {
        signer = function () {
            return normalizeProvider(input.region)()
                .then(function (region) { return __awaiter(void 0, void 0, void 0, function () {
                var _a, _b, _c;
                var _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _b = (_a = input).regionInfoProvider;
                            _c = [region];
                            _d = {};
                            return [4, input.useFipsEndpoint()];
                        case 1:
                            _d.useFipsEndpoint = _e.sent();
                            return [4, input.useDualstackEndpoint()];
                        case 2: return [4, _b.apply(_a, _c.concat([(_d.useDualstackEndpoint = _e.sent(),
                                    _d)]))];
                        case 3: return [2, [
                                (_e.sent()) || {},
                                region
                            ]];
                    }
                });
            }); })
                .then(function (_a) {
                var _b = __read(_a, 2), regionInfo = _b[0], region = _b[1];
                var signingRegion = regionInfo.signingRegion, signingService = regionInfo.signingService;
                input.signingRegion = input.signingRegion || signingRegion || region;
                input.signingName = input.signingName || signingService || input.serviceId;
                var params = __assign(__assign({}, input), { credentials: normalizedCreds, region: input.signingRegion, service: input.signingName, sha256: sha256, uriEscapePath: signingEscapePath });
                var SignerCtor = input.signerConstructor || SignatureV4;
                return new SignerCtor(params);
            });
        };
    }
    else {
        signer = function (authScheme) { return __awaiter(void 0, void 0, void 0, function () {
            var signingRegion, signingService, params, SignerCtor;
            return __generator(this, function (_a) {
                if (!authScheme) {
                    throw new Error("Unexpected empty auth scheme config");
                }
                signingRegion = authScheme.signingScope;
                signingService = authScheme.signingName;
                input.signingRegion = input.signingRegion || signingRegion;
                input.signingName = input.signingName || signingService || input.serviceId;
                params = __assign(__assign({}, input), { credentials: normalizedCreds, region: input.signingRegion, service: input.signingName, sha256: sha256, uriEscapePath: signingEscapePath });
                SignerCtor = input.signerConstructor || SignatureV4;
                return [2, new SignerCtor(params)];
            });
        }); };
    }
    return __assign(__assign({}, input), { systemClockOffset: systemClockOffset, signingEscapePath: signingEscapePath, credentials: normalizedCreds, signer: signer });
};
export var resolveSigV4AuthConfig = function (input) {
    var normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    var _a = input.signingEscapePath, signingEscapePath = _a === void 0 ? true : _a, _b = input.systemClockOffset, systemClockOffset = _b === void 0 ? input.systemClockOffset || 0 : _b, sha256 = input.sha256;
    var signer;
    if (input.signer) {
        signer = normalizeProvider(input.signer);
    }
    else {
        signer = normalizeProvider(new SignatureV4({
            credentials: normalizedCreds,
            region: input.region,
            service: input.signingName,
            sha256: sha256,
            uriEscapePath: signingEscapePath,
        }));
    }
    return __assign(__assign({}, input), { systemClockOffset: systemClockOffset, signingEscapePath: signingEscapePath, credentials: normalizedCreds, signer: signer });
};
var normalizeCredentialProvider = function (credentials) {
    if (typeof credentials === "function") {
        return memoize(credentials, function (credentials) {
            return credentials.expiration !== undefined &&
                credentials.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW;
        }, function (credentials) { return credentials.expiration !== undefined; });
    }
    return normalizeProvider(credentials);
};
