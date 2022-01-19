"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_memory_repository_1 = require("./task.memory.repository");
const task_model_1 = __importDefault(require("./task.model"));
const getAllTasks = async (_, reply) => {
    const tasks = await (0, task_memory_repository_1.getAll)();
    console.log(tasks);
    reply.code(200).send(tasks);
};
const getTaskById = (req, reply) => {
    const { BOARDID, TASKID } = req.params;
    console.log(TASKID);
    const found = (0, task_memory_repository_1.getById)(BOARDID, TASKID);
    if (found) {
        reply
            .code(200)
            .header('Content-Type', 'application/json').send(found);
    }
    else {
        reply.code(404).send();
    }
};
const createTask = (req, reply) => {
    let options;
    if (typeof req.body === 'string') {
        options = JSON.parse(req.body);
    }
    else {
        options = req.body;
    }
    const { id } = req.params;
    const taskModel = (0, task_model_1.default)(options, id);
    (0, task_memory_repository_1.create)(taskModel);
    reply.code(201).send(taskModel);
};
const updateTask = (req, reply) => {
    const { BOARDID, TASKID } = req.params;
    const { title, order, description } = req.body;
    const updated = (0, task_memory_repository_1.update)(TASKID, BOARDID, title, order, description);
    if (updated) {
        reply.header('Content-Type', 'application/json').send(updated);
    }
    else {
        reply.code(401).send();
    }
};
const deleteTask = (req, reply) => {
    const { BOARDID, TASKID } = req.params;
    const deleted = (0, task_memory_repository_1.taskDelete)(BOARDID, TASKID);
    if (!deleted) {
        reply.code(200).send();
    }
    else {
        reply.code(204).send();
    }
};
const unasighnUser = async (id) => {
};
const deleteBoardTasks = (boardId) => {
};
exports.default = { getAllTasks, createTask, getTaskById, deleteTask, updateTask, unasighnUser, deleteBoardTasks };
//# sourceMappingURL=task.controller.js.map