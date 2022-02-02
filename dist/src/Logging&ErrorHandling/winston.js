"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const dotenv_1 = require("dotenv");
dotenv_1.default.config();
const combine = winston.format;
const logger = winston.createLogger({
    level: process.env.WINSTON_ERROR_LEVEL,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: './logs/error.log', level: 'error', }),
        new winston.transports.File({ filename: './logs/combined.log', }),
    ],
    exitOnError: true
});
exports.default = logger;
//# sourceMappingURL=winston.js.map