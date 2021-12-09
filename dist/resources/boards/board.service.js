"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var boards_memory_repository_1 = __importDefault(require("./boards.memory.repository"));
var getAll = function () { return boards_memory_repository_1.default.getAll(); };
var getById = function (id) { return boards_memory_repository_1.default.getById(id); };
var createBoard = function (board) { return boards_memory_repository_1.default.createBoard(board); };
var modifyBoard = function (id, board) { return boards_memory_repository_1.default.modifyBoard(id, board); };
var deleteBoard = function (id) { return boards_memory_repository_1.default.deleteBoard(id); };
exports.default = { getAll: getAll, getById: getById, createBoard: createBoard, modifyBoard: modifyBoard, deleteBoard: deleteBoard };
