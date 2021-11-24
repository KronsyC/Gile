"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jws_1 = __importDefault(require("jws"));
/**
 * Reads a token's value regardless of signature
 * returns a payload depending on return options

 * returns null if the token is invalid
 */
function read(token, options) {
    if (options === void 0) { options = {}; }
    var jwt;
    try {
        jwt = jws_1["default"].decode(token);
    }
    catch (_a) {
        return null;
    }
    if (!jwt)
        return null;
    if (options.returnHeader) {
        return {
            header: jwt.header,
            payload: jwt.payload
        };
    }
    else {
        return jwt.payload;
    }
}
exports["default"] = read;
