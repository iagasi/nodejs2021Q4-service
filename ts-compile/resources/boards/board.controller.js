"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_service_1 = __importDefault(require("./board.service"));
const boards_memory_repository_1 = __importDefault(require("./boards.memory.repository"));
const board_model_1 = __importDefault(require("./board.model"));
const getAll = async (req, reply) => {
    const boards = await board_service_1.default.getAll();
    if (!boards) {
        reply.send(undefined);
    }
    else {
        reply.send(boards);
    }
};
const getById = async (req, reply) => {
    const { id } = req.params;
    const board = await board_service_1.default.getById(id);
    if (board) {
        reply
            .code(200)
            .send(board);
    }
    else {
        reply
            .code(404)
            .send("Not found");
    }
};
const createBoard = async (req, reply) => {
    let options;
    if (typeof req.body === "string") {
        options = JSON.parse(req.body);
    }
    else {
        options = req.body;
    }
    const model = (0, board_model_1.default)(options);
    const newCreatedBoard = await boards_memory_repository_1.default.createNewBoard(model);
    if (!newCreatedBoard) {
        reply
            .code(500)
            .send(newCreatedBoard);
    }
    else {
        reply
            .code(201)
            .send(newCreatedBoard);
    }
};
const modifyBoard = async (req, reply) => {
    const { id } = req.params;
    const receivedOptions = req.body;
    const board = (0, board_model_1.default)(receivedOptions);
    const ModifiedBoardInDb = await board_service_1.default.modifyBoard(id, board);
    if (ModifiedBoardInDb) {
        reply
            .header("Content-Type", "application/json")
            .code(200)
            .send({ ...ModifiedBoardInDb });
    }
    else {
        reply.code(401).send();
    }
};
const deleteBoard = async (req, reply) => {
    const { id } = req.params;
    const deleted = await board_service_1.default.deleteBoard(id);
    if (deleted !== undefined) {
        reply.send(deleted);
    }
    else {
        reply.code(401).send();
    }
};
exports.default = { getAll, getById, createBoard, modifyBoard, deleteBoard };
//# sourceMappingURL=board.controller.js.map