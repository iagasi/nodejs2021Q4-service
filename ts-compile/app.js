"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
// const swaggerUI = require('fastify-swagger');
// const path = require('path');
// const YAML = require('yamljs');
const user_router_1 = __importDefault(require("./resources/users/user.router"));
const task_router_1 = __importDefault(require("./resources/tasks/task.router"));
const board_router_1 = __importDefault(require("./resources/boards/board.router"));
const ErrorHandler_1 = __importDefault(require("./Logging&ErrorHandling/ErrorHandler"));
const app = (0, fastify_1.default)();
/** ERROR an LOGGING Handler
 * @params app instance of fastify
 */
(0, ErrorHandler_1.default)(app);
app.register(board_router_1.default);
app.register(user_router_1.default);
app.register(task_router_1.default);
//throw new Error("Error ocuured")
//Promise.reject(Error('Oops!'));
app.get('/', (_, reply) => {
    reply.send("Service working");
});
exports.default = app;
