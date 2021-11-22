"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var options_1 = __importDefault(require("./options"));
/**
 * Create a new JWT with the given payload
 *
 */
function create(payload, settings) {
    var algorithm = settings.algorithm || options_1["default"].algorithm || "HS256";
    var header = settings.header || options_1["default"].header || { typ: "JWT", alg: algorithm };
    var secret = settings.secret || options_1["default"].secret || undefined;
    var privKey = settings.privateKey || options_1["default"].privateKey || undefined;
    switch (algorithm) {
        case "ES256":
        case "ES384":
        case "ES512":
            // Asymmetrical
            if (!privKey) {
                throw new Error("Asymmetrical Encrytion chosen but no private key defined");
            }
            break;
    }
}
exports["default"] = create;
