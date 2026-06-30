"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuiltinTools = void 0;
const builtin_1 = require("./docx/builtin");
const buildin_1 = require("./im/buildin");
const builtin_2 = require("./sheets/builtin");
exports.BuiltinTools = [...builtin_1.docxBuiltinTools, ...buildin_1.imBuiltinTools, ...builtin_2.sheetsBuiltinTools];
