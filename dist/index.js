"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getConfig = exports.create = exports.options = exports.configure = void 0;
var configure_1 = __importDefault(require("./configure"));
exports.configure = configure_1["default"];
var options_1 = __importDefault(require("./options"));
exports.options = options_1["default"];
var create_1 = __importDefault(require("./create"));
exports.create = create_1["default"];
var options_2 = __importDefault(require("./options"));
exports.getConfig = options_2["default"];
exports["default"] = { configure: configure_1["default"], options: options_1["default"], create: create_1["default"], getConfig: options_2["default"] };
