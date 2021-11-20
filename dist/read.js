"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jws_1 = __importDefault(require("jws"));
/**
 * Read a Tokens Paylad without verifying the signature, returns undefined if the JWT is invalid
 *
 *
 */
function read(token) {
    if (jws_1["default"].isValid(token)) {
        return jws_1["default"].decode(token).payload;
    }
    else {
        return undefined;
    }
}
exports["default"] = read;
