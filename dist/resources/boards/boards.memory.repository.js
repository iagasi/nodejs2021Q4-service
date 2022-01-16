"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Board_db_1 = require("../../database/entities/Board_db");
const boards = [];
const getAll = async () => {
    return await Board_db_1.Board_db.find();
};
const getById = async (id) => {
    const foundBoard = await Board_db_1.Board_db.findOneOrFail(id);
    return foundBoard;
};
const createBoard = async (board) => {
};
const modifyBoard = async (id, options) => {
};
const deleteBoard = async (id) => {
    const candidate = await Board_db_1.Board_db.findOne(id);
    if (candidate) {
        await Board_db_1.Board_db.delete({ id: id });
        return candidate;
    }
    else {
        return undefined;
    }
};
exports.default = { getAll, getById, createBoard, modifyBoard, deleteBoard };
//# sourceMappingURL=boards.memory.repository.js.map