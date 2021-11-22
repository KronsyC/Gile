"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jws_1 = __importDefault(require("jws"));
var options_1 = __importDefault(require("./options"));
var read_1 = __importDefault(require("./read"));
/**
 * Return True if a token has the specified role, otherwise false
 */
function role(token, role) {
    if (!options_1["default"].configured) {
        throw new Error("Attempted to create a token, but no configuration detected");
    }
    if (jws_1["default"].isValid(token) && jws_1["default"].verify(token, options_1["default"].algorithm, options_1["default"].secret)) {
        var data = read_1["default"](token);
        console.log("Valid");
        if (data.roles) {
            if (typeof (data.roles) === "string" && data.roles === role)
                return true;
            else if (Array.isArray(data.roles) && data.roles.includes(role))
                return true;
            else
                return false;
        }
    }
    else {
        return false;
    }
}
exports["default"] = role;
