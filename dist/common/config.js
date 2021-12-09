"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env')
});
var forExport = {
    PORT: process.env.PORT,
    //NODE_ENV: process.env.NODE_ENV,
    // MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
    // JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    // AUTH_MODE: process.env.AUTH_MODE === 'true'
};
exports.default = forExport;
