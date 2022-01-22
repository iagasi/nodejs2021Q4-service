"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const user_router_1 = __importDefault(require("./resources/users/user.router"));
const task_router_1 = __importDefault(require("./resources/tasks/task.router"));
const board_router_1 = __importDefault(require("./resources/boards/board.router"));
const allowedEndpoingts_1 = require("./resources/authorization/allowedEndpoingts");
const login_1 = __importDefault(require("./resources/authorization/login"));
const app = (0, fastify_1.default)();
(0, allowedEndpoingts_1.allowedAndpoints)(app);
app.register(login_1.default);
app.register(board_router_1.default);
app.register(user_router_1.default);
app.register(task_router_1.default);
app.get('/', (_, reply) => {
    reply.send("Service workin");
});
exports.default = app;
//# sourceMappingURL=app.js.map