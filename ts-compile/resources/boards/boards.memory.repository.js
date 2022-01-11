"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boards = [];
/**
 *
 * @returns ALL Boards
 *  @type {Array<object>}
 */
const getAll = () => boards;
/**
 * @params id @type {string}
 * @returns found Board in array @type {object}
 */
const getById = (id) => {
    const foundBoard = boards.find((board) => board.id === id);
    return foundBoard;
};
/**
 * Creates New Board In Array
 * @param {id:string ,title:string,columns:Array<string>}  board
 * @returns {void}
 *
 */
const createBoard = (board) => {
    boards.push(board);
};
/**
 * Modifies existing Board by id id remains ame
 * @param {string} id
 * @param {{id:string ,title:string,columns:Array<string>}}options
 * @returns  found  boarts @type {IBoard}
 */
const modifyBoard = (id, options) => {
    let foundBoardIndex;
    boards.find((board, index) => {
        if (board.id.toString() === id) {
            foundBoardIndex = index;
            return;
        }
        return foundBoardIndex;
    });
    if (foundBoardIndex || foundBoardIndex === 0) {
        boards[foundBoardIndex].title = options.title;
        boards[foundBoardIndex].columns = options.columns;
    }
    else {
        return undefined;
    }
};
/**
 * Delete board by id
 * @param id
 * @
 * @returns deleted Board @type {object}
 * or
 * @returns {undefined}
 */
const deleteBoard = (id) => {
    let deletedUser;
    boards.forEach((element, index) => {
        if (element.id === id) {
            boards.splice(index, 1);
            deletedUser = element;
        }
        else {
            deletedUser = undefined;
        }
    });
    return deletedUser;
};
exports.default = { getAll, getById, createBoard, modifyBoard, deleteBoard };
