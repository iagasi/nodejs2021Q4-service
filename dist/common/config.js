"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path_1 = require("path");
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env')
});
const forExport = {
    PORT: process.env.PORT,
};
exports.default = forExport;
//# sourceMappingURL=config.js.map