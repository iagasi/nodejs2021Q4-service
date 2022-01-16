"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tasks_db_1 = require("../../database/entities/Tasks_db");
const Board_db_1 = require("../../database/entities/Board_db");
const Columns_db_1 = require("../../database/entities/Columns_db");
const mergeBoards_Columns_1 = require("./functions/mergeBoards.Columns");
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
    const board1 = await Board_db_1.Board_db.findOne(id);
    await Board_db_1.Board_db.update({ id: id }, { title: options.title });
    const columns1 = await Columns_db_1.Columns_db.find({ board: id });
    await Columns_db_1.Columns_db.remove(columns1);
    const columns2 = await Columns_db_1.Columns_db.find({ board: id });
    for await (const iterator of options.columns) {
        const create = Columns_db_1.Columns_db.create({ title: iterator.title, order: iterator.order, board: board1 });
        await create.save();
    }
    const board = await Board_db_1.Board_db.findOne(id);
    const boardColumns = await Columns_db_1.Columns_db.find({ board: board1.id });
    return (0, mergeBoards_Columns_1.mergeBoardsColumns)(board, boardColumns);
    return;
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