"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTasks = exports.tasks = void 0;
let tasks = [];
exports.tasks = tasks;
/**
 *modifies tasks array
 * @param mod
 */
const setTasks = async (mod) => {
    exports.tasks = tasks = mod;
};
exports.setTasks = setTasks;
