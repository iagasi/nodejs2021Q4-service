"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("../lib"));
const task_controller_1 = __importDefault(require("./task.controller"));
const taskRouter = async (fastify) => {
    fastify.get(lib_1.default.tasks.getById(":BOARDID", ":TASKID"), (req, reply) => {
        task_controller_1.default.getTaskById(req, reply);
    });
    fastify.get(lib_1.default.tasks.getAll(":id"), (req, reply) => {
        task_controller_1.default.getAllTasks(req, reply);
    });
    fastify.post(lib_1.default.tasks.create(":id"), (req, reply) => {
        task_controller_1.default.createTask(req, reply);
    });
    fastify.put(lib_1.default.tasks.update(":BOARDID", ":TASKID"), (req, reply) => {
        task_controller_1.default.updateTask(req, reply);
    });
    fastify.delete(lib_1.default.tasks.delete(":BOARDID", ":TASKID"), (req, reply) => {
        task_controller_1.default.deleteTask(req, reply);
    });
};
exports.default = taskRouter;
//# sourceMappingURL=task.router.js.map