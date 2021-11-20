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
function create(payload) {
    if (!options_1["default"].configured) {
        throw new Error("Attempted to create a token, but no configuration detected");
    }
    if (!payload.iat) {
        payload.iat = Math.floor(Date.now() / 1000);
    }
    if (options_1["default"].defaults) {
        // Iterate over the configured defaults, and if they are not set, set them
        Object.keys(options_1["default"].defaults).forEach(function (option) {
            if (!payload[option]) {
                payload[option] = options_1["default"].defaults[option];
            }
        });
    }
    var header = {
        alg: options_1["default"].algorithm,
        typ: "JWT"
    };
    return jws_1["default"].sign({ header: header, payload: payload, secret: options_1["default"].secret });
}
exports["default"] = create;
