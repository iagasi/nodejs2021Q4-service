"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskDelete = exports.update = exports.create = exports.getAll = exports.getById = void 0;
const Tasks_db_1 = require("../../database/entities/Tasks_db");
let tasks = [];
const setTasks = async (mod) => {
    tasks = mod;
};
const getAll = async () => {
    return await Tasks_db_1.Tasks_db.find({ relations: ["userId", "boardId"] });
};
exports.getAll = getAll;
const getById = async (BOARDID, TASKID) => {
    let toReturn;
    if (TASKID) {
        const byTaskId = await Tasks_db_1.Tasks_db.findOne({ id: TASKID }, { relations: ["userId", "boardId"] });
        toReturn = byTaskId;
    }
    else {
        const byBoardId = await Tasks_db_1.Tasks_db.findOne({ boardId: BOARDID });
        toReturn = byBoardId;
    }
    return toReturn;
};
exports.getById = getById;
const create = async (options) => {
    const task = Tasks_db_1.Tasks_db.create(options);
    await task.save();
    return task;
};
exports.create = create;
const update = async (BOARDID, TASKID, title, order, description) => {
    const updated = await Tasks_db_1.Tasks_db.update({ id: TASKID }, { title: title, order: order, description: description });
    const task = await Tasks_db_1.Tasks_db.findOne({ id: TASKID });
    console.log(task);
    return task;
};
exports.update = update;
const taskDelete = async (BOARDID, TASKID) => {
    return await Tasks_db_1.Tasks_db.delete({ id: TASKID });
};
exports.taskDelete = taskDelete;
//# sourceMappingURL=task.memory.repository.js.map