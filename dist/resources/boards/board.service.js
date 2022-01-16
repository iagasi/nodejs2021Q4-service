"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boards_memory_repository_1 = __importDefault(require("./boards.memory.repository"));
const getAll = () => boards_memory_repository_1.default.getAll();
const getById = (id) => boards_memory_repository_1.default.getById(id);
const createBoard = (board) => boards_memory_repository_1.default.createBoard(board);
const modifyBoard = (id, board) => boards_memory_repository_1.default.modifyBoard(id, board);
const deleteBoard = (id) => boards_memory_repository_1.default.deleteBoard(id);
exports.default = { getAll, getById, createBoard, modifyBoard, deleteBoard };
//# sourceMappingURL=board.service.js.map