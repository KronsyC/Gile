"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jws_1 = __importDefault(require("jws"));
var options_1 = __importDefault(require("./options"));
/**
 * Read a Tokens Paylad and verifies the signature, returns undefined if the JWT is invalid
 *
 *
 */
function verify(token) {
    if (!options_1["default"].configured) {
        throw new Error("Attempted to create a token, but no configuration detected");
    }
    if (jws_1["default"].isValid(token) && jws_1["default"].verify(token, options_1["default"].algorithm, options_1["default"].secret)) {
        return jws_1["default"].decode(token).payload;
    }
    else {
        return undefined;
    }
}
exports["default"] = verify;
