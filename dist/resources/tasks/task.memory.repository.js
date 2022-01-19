"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskDelete = exports.update = exports.create = exports.getAll = exports.getById = void 0;
let tasks = [];
const setTasks = async (mod) => {
    tasks = mod;
};
const getAll = async () => {
};
exports.getAll = getAll;
const getById = async (TASKID, BOARDID) => {
};
exports.getById = getById;
const create = async (options) => {
};
exports.create = create;
const update = async (TASKID, BOARDID, title, order, description) => {
};
exports.update = update;
const taskDelete = async (TASKID, BOARDID) => {
};
exports.taskDelete = taskDelete;
//# sourceMappingURL=task.memory.repository.js.map