"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tasks_db_1 = require("../../database/entities/Tasks_db");
const Board_db_1 = require("../../database/entities/Board_db");
const Columns_db_1 = require("../../database/entities/Columns_db");
const boards = [];
const getAll = async () => {
    return await Board_db_1.Board_db.find();
};
const getById = async (id) => {
    const foundBoard = await Board_db_1.Board_db.findOne(id);
    return foundBoard;
};
const createNewBoard = async (board) => {
    const newboard = Board_db_1.Board_db.create(board);
    await newboard.save();
    const columns = board.columns;
    for await (const iterator of columns) {
        const column = Columns_db_1.Columns_db.create({ title: iterator.title, order: iterator.order, board: newboard });
        await column.save();
    }
    return { ...newboard, columns };
};
const modifyBoard = async (id, options) => {
    return {};
};
const deleteBoard = async (id) => {
    const candidate = await Board_db_1.Board_db.findOne(id);
    if (candidate) {
        const { id } = candidate;
        await Tasks_db_1.Tasks_db.delete({ boardId: id });
        await Columns_db_1.Columns_db.delete({ board: id });
        await Board_db_1.Board_db.delete({ id: id });
        return candidate;
    }
    else {
        return undefined;
    }
    return undefined;
};
exports.default = { getAll, getById, createNewBoard, modifyBoard, deleteBoard };
//# sourceMappingURL=boards.memory.repository.js.map