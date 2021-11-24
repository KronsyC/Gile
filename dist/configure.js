"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var options_1 = __importDefault(require("./options"));
/**
 * Convenient way to configure Gile so you dont have to repeat configuration
 
 * *note: Setting nested properties deletes their siblings*
 * ```
 * import gile from "gile"
 *
 * gile.configure(
 * {
 *     algorithm : "RS256",
 *     secret: "superSecretString",
 *     defaults: {
 *        rol: ["user"],
 *        iss: "epicServer"
 *    }
 * })
 * ```
 *
 *
 */
function configure(options) {
    var keys = Object.keys(options);
    keys.forEach(function (key) {
        // TODO: Implement some sort of check to replace only specific properties
        options_1["default"][key] = options[key];
    });
}
exports["default"] = configure;
