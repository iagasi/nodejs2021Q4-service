"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_service_1 = __importDefault(require("./board.service"));
const board_model_1 = __importDefault(require("./board.model"));
const task_controller_1 = __importDefault(require("../tasks/task.controller"));
/**
 * Returns Array of Boards
 * @returns {Array<IBoard>}
 */
const getAll = () => board_service_1.default.getAll();
/**
 *  GET BY ID
 * @param req.params.id
 * @param reply.code(200)  |  .code(404)
 * @returns   board  found By Id
 */
const getById = (req, reply) => {
    const { id } = req.params;
    const board = board_service_1.default.getById(id);
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
/**
 *  CREATES NEW BOARD
 * @param req.body  takes   id:string,title:string,columns:Array
 * @param reply  .code(201)||.code(500)
 * @returns  new Created Board
 */
const createBoard = (req, reply) => {
    let options;
    if (typeof req.body === "string") {
        options = JSON.parse(req.body);
    }
    else {
        options = req.body;
    }
    const newCreatedBoard = (0, board_model_1.default)(options);
    if (typeof newCreatedBoard === "string") {
        reply
            .code(500)
            .send(newCreatedBoard);
    }
    else {
        board_service_1.default.createBoard(newCreatedBoard);
        reply
            .code(201)
            .send(newCreatedBoard);
    }
};
/**
 * Modifies existing Board
 * @param req.parms.id  finds board for modifiing
 * @params req.params.body   takes new  body for modifying
 * @return reply  code(200).send(MODIFIED BOARD)  ||  code (401)
 */
const modifyBoard = (req, reply) => {
    const { id } = req.params;
    const receivedOptions = req.body;
    const board = (0, board_model_1.default)(receivedOptions);
    if (typeof board === "object") {
        const ModifiedBoardInDb = board_service_1.default.modifyBoard(id, board);
        reply
            .header("Content-Type", "application/json")
            .send(ModifiedBoardInDb);
    }
    else {
        reply.code(401).send();
    }
};
/**
 *  DELETES BOARD
 * @param req.params.id
 * @param reply
 * @returns reply reply   .code(200).send(DeletedBoard)  ||  .code(401)
 */
const deleteBoard = (req, reply) => {
    const { id } = req.params;
    const deleted = board_service_1.default.deleteBoard(id);
    task_controller_1.default.deleteBoardTasks(id);
    if (deleted !== undefined) {
        reply.send(deleted);
    }
    else {
        reply.code(401).send();
    }
};
exports.default = { getAll, getById, createBoard, modifyBoard, deleteBoard };
