"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var options_1 = __importDefault(require("./options"));
var jws_1 = __importDefault(require("jws"));
/**
 * Verify a token, ensuring that it matches your secret/key,
 * returns a payload depending on return options

 * returns null if the token is invalid
 */
function verify(token, options) {
    if (options === void 0) { options = {}; }
    var decoded = jws_1["default"].decode(token);
    if (!decoded)
        return null;
    var alg = decoded.header.alg;
    var secOrKey = alg === "ES256" ||
        alg == "ES384" ||
        alg === "ES512" ||
        alg === "PS256" ||
        alg === "PS384" ||
        alg === "PS512" ||
        alg === "RS256" ||
        alg === "RS384" ||
        alg === "RS512"
        ? options.publicKey || options_1["default"].publicKey || undefined
        : alg === "HS256" || alg === "HS384" || alg === "HS512"
            ? options.secret || options_1["default"].secret || undefined
            : options.secret || options_1["default"].secret;
    var returnHeader = options.returnHeader || options_1["default"].returnHeader || false;
    if (secOrKey && jws_1["default"].verify(token, alg, secOrKey)) {
        // All good
        if (alg === "none") {
            if (secOrKey === "") {
                var warn = options_1["default"].warnings || true;
                if (warn) {
                    console.error('Your secret is "", so tokens with no signature will pass successfully, it is recommended to add a non-empty secret to prevent this behavior');
                }
                if (returnHeader) {
                    return {
                        header: decoded.header,
                        payload: decoded.payload
                    };
                }
                else {
                    return decoded.payload;
                }
            }
            return null;
        }
        if (returnHeader) {
            return {
                header: decoded.header,
                payload: decoded.payload
            };
        }
        else {
            return decoded.payload;
        }
    }
    else if (secOrKey === null) {
    }
    else if (secOrKey === undefined) {
        console.log(secOrKey);
        throw new Error("No decode algorithm provided to verify()");
    }
    else {
        // Its an invalid secOrKey String
        return null;
    }
    return {};
}
exports["default"] = verify;
