"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.read = exports.verify = exports.show = exports.create = exports.configure = void 0;
var configure_1 = __importDefault(require("./configure"));
exports.configure = configure_1["default"];
var create_1 = __importDefault(require("./create"));
exports.create = create_1["default"];
var options_1 = __importDefault(require("./options"));
var verify_1 = __importDefault(require("./verify"));
exports.verify = verify_1["default"];
var read_1 = __importDefault(require("./read"));
exports.read = read_1["default"];
// Temp debugging function PROD: Remove
function show() {
    console.log(options_1["default"]);
}
exports.show = show;
exports["default"] = { configure: configure_1["default"], show: show, create: create_1["default"], verify: verify_1["default"], read: read_1["default"] };
