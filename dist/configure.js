"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var options_1 = __importDefault(require("./options"));
/**
 * This function configures gile, Always call this function before using any gile features, otherwise you will be thrown an Error
 * usage example:
 * ```
 * import gile from "gile"
 *
 * gile.configure(
 * {
 *     algorithm : "RS256",
 *     secret: "superSecretString"
 * })
 * ```
 */
function configure(opts) {
    if (!opts.algorithm)
        opts.algorithm = "HS256"; // Use hmac sha-256 by default
    Object.keys(opts).forEach(function (key) {
        options_1["default"][key] = opts[key];
    });
    options_1["default"].configured = true;
}
exports["default"] = configure;
