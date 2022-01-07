"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_memory_repository_1 = __importDefault(require("./user.memory.repository"));
/**
 * @module this mdule connects user.controller with user.memoryrepository
 *
 */
const getAll = () => user_memory_repository_1.default.getAll();
const create = (data) => user_memory_repository_1.default.create(data);
const modify = (id, options) => user_memory_repository_1.default.modify(id, options);
const deleteUser = (id) => user_memory_repository_1.default.deleteUser(id);
exports.default = { getAll, create, modify, deleteUser };
