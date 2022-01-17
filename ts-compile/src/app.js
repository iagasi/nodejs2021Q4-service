"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const user_router_1 = __importDefault(require("./resources/users/user.router"));
const task_router_1 = __importDefault(require("./resources/tasks/task.router"));
const board_router_1 = __importDefault(require("./resources/boards/board.router"));
const index_1 = __importDefault(require("./resources/authorization/index"));
const app = (0, fastify_1.default)();
(0, index_1.default)(app);
app.register(index_1.default);
app.register(board_router_1.default);
app.register(user_router_1.default);
app.register(task_router_1.default);
app.get('/', (_, reply) => {
    reply.send("servece vvvvvvvvvvvvvvvvvv");
});
exports.default = app;
//# sourceMappingURL=app.js.map