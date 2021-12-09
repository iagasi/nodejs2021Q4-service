"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var board_service_1 = __importDefault(require("./board.service"));
var board_model_1 = __importDefault(require("./board.model"));
// TASKS=require("../tasks/task.memory.repository")
// const deletesTasksIfBoardDeleted=(BOARDID)=>{
//   let index
//   TASKS.forEach((el,i)=>{if(el.boardId===BOARDID){index=i}})
//   TASKS.splice(index,1)
// }
//get All
var getAll = function () { return board_service_1.default.getAll(); };
/// Get by id
var getById = function (req, reply) {
    var id = req.params.id;
    var board = board_service_1.default.getById(id);
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
// CREATES NEW BOARD
var createBoard = function (req, reply) {
    var options;
    if (typeof req.body === "string") {
        options = JSON.parse(req.body);
    }
    else {
        options = req.body;
    }
    var newCreatedBoard = (0, board_model_1.default)(options);
    if (typeof newCreatedBoard == "string") {
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
/// MODIFY BOARD
var modifyBoard = function (req, reply) {
    var id = req.params.id;
    var receivedOptions = req.body;
    var board = (0, board_model_1.default)(receivedOptions);
    if (typeof board == "object") {
        var ModifiedBoardInDb = board_service_1.default.modifyBoard(id, board);
        reply
            .send(ModifiedBoardInDb);
    }
    else {
        reply.code(401).send();
    }
};
// DDELETES BOARD
var deleteBoard = function (req, reply) {
    var id = req.params.id;
    var deleted = board_service_1.default.deleteBoard(id);
    if (deleted !== undefined) {
        //deletesTasksIfBoardDeleted(id)
        reply.send(deleted);
    }
    else {
        reply.code(401).send();
    }
};
module.exports = { getAll: getAll, getById: getById, createBoard: createBoard, modifyBoard: modifyBoard, deleteBoard: deleteBoard };
