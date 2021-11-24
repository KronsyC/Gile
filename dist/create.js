"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var options_1 = __importDefault(require("./options"));
var jws_1 = __importDefault(require("jws"));
/**
 * Create a new JWT with the given payload
 *
 */
function create(payload, settings) {
    if (settings === void 0) { settings = {}; }
    var algorithm = settings.algorithm || options_1["default"].algorithm || "HS256";
    var header = settings.header ||
        options_1["default"].header || { typ: "JWT", alg: algorithm };
    var secret = settings.secret || options_1["default"].secret || undefined;
    var privKey = settings.privateKey || options_1["default"].privateKey || undefined;
    var autoIat = settings.autoIat || options_1["default"].autoIat || true;
    options_1["default"].defaults && Object.keys(options_1["default"].defaults).forEach(function (d) {
        if (payload[d] === undefined) {
            payload[d] = options_1["default"].defaults[d];
        }
    });
    console.log(payload);
    if (autoIat && !payload.iat) {
        payload.iat = Math.floor(Date.now() / 1000);
    }
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
        throw new Error("Token with expiry before current time created");
    }
    switch (algorithm) {
        case "ES256":
        case "ES384":
        case "ES512":
        case "PS256":
        case "PS384":
        case "PS512":
        case "RS256":
        case "RS384":
        case "RS512":
            // Asymmetrical
            if (!privKey) {
                throw new Error("Asymmetrical Encrytion chosen but no private key defined");
            }
            return jws_1["default"].sign({
                header: header,
                payload: payload,
                privateKey: privKey
            });
        case "HS256":
        case "HS384":
        case "HS512":
            // Symmetrical
            if (!secret) {
                throw new Error("Symmetrical Encrytion chosen but no secret defined");
            }
            return jws_1["default"].sign({
                header: header,
                payload: payload,
                secret: secret
            });
        case "none":
            // Insecure JWT
            return jws_1["default"].sign({
                header: header,
                payload: payload
            });
    }
}
exports["default"] = create;
