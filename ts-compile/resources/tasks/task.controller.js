"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_memory_repository_1 = require("./task.memory.repository");
const task_model_1 = __importDefault(require("./task.model"));
const getAllTasks = async (_, reply) => {
    const tasks = await (0, task_memory_repository_1.getAll)();
    reply.code(200).send(tasks);
};
const getTaskById = async (req, reply) => {
    const { BOARDID, TASKID } = req.params;
    const found = await (0, task_memory_repository_1.getById)(BOARDID, TASKID);
    if (found) {
        reply
            .code(200)
            .header('Content-Type', 'application/json').send(found);
    }
    else {
        reply.code(404).send();
    }
};
const createTask = async (req, reply) => {
    let options;
    if (typeof req.body === 'string') {
        options = JSON.parse(req.body);
    }
    else {
        options = req.body;
    }
    const { id } = req.params;
    const taskModel = (0, task_model_1.default)(options, id);
    const newCreatedTask = await (0, task_memory_repository_1.create)(taskModel);
    reply.code(201).send({ ...newCreatedTask });
};
const updateTask = async (req, reply) => {
    const { BOARDID, TASKID } = req.params;
    const { title, order, description, userId, boardId } = req.body;
    const updated = await (0, task_memory_repository_1.update)(BOARDID, TASKID, title, order, description);
    if (updated) {
        reply
            .header('Content-Type', 'application/json')
            .code(200)
            .send(updated);
    }
    else {
        reply.code(401).send();
    }
};
const deleteTask = async (req, reply) => {
    const { BOARDID, TASKID } = req.params;
    const deleted = await (0, task_memory_repository_1.taskDelete)(BOARDID, TASKID);
    reply.code(204).send();
};
const unasighnUser = async (id) => {
};
const deleteBoardTasks = (boardId) => {
};
exports.default = { getAllTasks, createTask, getTaskById, deleteTask, updateTask, unasighnUser, deleteBoardTasks };
//# sourceMappingURL=task.controller.js.map