"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_memory_repository_1 = require("./task.memory.repository");
const task_model_1 = __importDefault(require("./task.model"));
/**
 * returns all tasks
 * @param _
 * @param reply
 * @return reply (AllTasks)
 */
const getAllTasks = (_, reply) => {
    reply.code(200).send(task_memory_repository_1.tasks);
};
/**
 * Gets Task by id
 * @param req as @type {req.params as {BOARDID, TASKID} }
 * @param reply
 * @returns {reply.code(200)send(found task from db)} | or @type {reply.code(404)send()}
 */
const getTaskById = (req, reply) => {
    const { BOARDID, TASKID } = req.params;
    console.log(TASKID);
    const found = task_memory_repository_1.tasks.find((task) => task.boardId === BOARDID || task.id === TASKID);
    if (found) {
        reply
            .code(200)
            .header('Content-Type', 'application/json').send(found);
    }
    else {
        reply.code(404).send();
    }
};
/**
 * Creates new task
 * @param req  takes req.body
 * @param reply
 * @returns new crated task
 */
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
    task_memory_repository_1.tasks.push(taskModel);
    reply.code(201).send(taskModel);
};
/**
 * Updates  existing task
 * @param req takes req.body as object    and      @type { { BOARDID, TASKID }  =req.params}
 * @param reply
 * @returns updated Task
 */
const updateTask = (req, reply) => {
    const { BOARDID, TASKID } = req.params;
    let foundindex;
    task_memory_repository_1.tasks.forEach((task, index) => {
        if (task.boardId === BOARDID && task.id === TASKID) {
            foundindex = index;
        }
    });
    if (foundindex !== undefined) {
        const { title, order, description } = req.body;
        task_memory_repository_1.tasks[foundindex].title = title;
        task_memory_repository_1.tasks[foundindex].order = order;
        task_memory_repository_1.tasks[foundindex].description = description;
        reply.header('Content-Type', 'application/json').send(task_memory_repository_1.tasks[foundindex]);
    }
    else {
        reply.code(401).send();
    }
};
/**
 *
 * @param req  as  { BOARDID, TASKID } = req.params
 * @param reply
 * @returns reply.code(200)  |  reply.code(204)
 */
const deleteTask = (req, reply) => {
    const { BOARDID, TASKID } = req.params;
    const found = task_memory_repository_1.tasks.find((task) => task.boardId === BOARDID || task.id === TASKID);
    if (found) {
        const modified = task_memory_repository_1.tasks.filter((task) => task.boardId !== BOARDID && task.id !== TASKID);
        (0, task_memory_repository_1.setTasks)(modified);
        reply.code(200).send();
    }
    else {
        reply.code(204).send();
    }
};
/**
 * This function sets userId to null
 * @param id
 */
const unasighnUser = async (id) => {
    task_memory_repository_1.tasks.forEach((task, index) => {
        if (task.userId === id) {
            task_memory_repository_1.tasks[index].userId = null;
        }
    });
};
/**
 * Deleted all Board tasks
 * @param boardId
 */
const deleteBoardTasks = (boardId) => {
    const mod = task_memory_repository_1.tasks.filter(task => task.boardId !== boardId);
    (0, task_memory_repository_1.setTasks)(mod);
};
exports.default = { getAllTasks, createTask, getTaskById, deleteTask, updateTask, unasighnUser, deleteBoardTasks };
