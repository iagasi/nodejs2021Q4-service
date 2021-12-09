"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boards = [];
var getAll = function () { return boards; };
var getById = function (id) {
    var foundBoard = boards.find(function (board) { return board.id === id; });
    return foundBoard;
};
var createBoard = function (board) {
    boards.push(board);
};
////REFACtor this
var modifyBoard = function (id, options) {
    var foundBoardIndex;
    boards.find(function (board, index) {
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
var deleteBoard = function (id) {
    var deletedUser;
    boards.forEach(function (element, index) {
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
exports.default = { getAll: getAll, getById: getById, createBoard: createBoard, modifyBoard: modifyBoard, deleteBoard: deleteBoard };
