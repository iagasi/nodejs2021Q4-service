"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("../lib"));
const task_controller_1 = __importDefault(require("./task.controller"));
const taskRouter = async (fastify) => {
    /**
     *  @function fastify.get() calls with HTTP.get request
     */
    fastify.get(lib_1.default.tasks.getById(":BOARDID", ":TASKID"), (req, reply) => {
        task_controller_1.default.getTaskById(req, reply);
    });
    /**
     * @function fastify.get(:id) calls with HTTP.get request with Dynamic ID
     */
    fastify.get(lib_1.default.tasks.getAll(":id"), (req, reply) => {
        task_controller_1.default.getAllTasks(req, reply);
    });
    /**
     *  @function fastify.post(:id) calls with HTTP.post request with Dynamic ID
     */
    fastify.post(lib_1.default.tasks.create(":id"), (req, reply) => {
        task_controller_1.default.createTask(req, reply);
    });
    /**
     * @function fastify.put(:BOARDID,:TASKID) calls with HTTP.putrequest with Dynamic":BOARDID", ":TASKID"
     */
    fastify.put(lib_1.default.tasks.update(":BOARDID", ":TASKID"), (req, reply) => {
        task_controller_1.default.updateTask(req, reply);
    });
    /**
     * @function fastify.delete(:BOARDID,:TASKID) calls with HTTP.delete
     */
    fastify.delete(lib_1.default.tasks.delete(":BOARDID", ":TASKID"), (req, reply) => {
        task_controller_1.default.deleteTask(req, reply);
    });
};
exports.default = taskRouter;
