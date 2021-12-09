"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4 = require('uuid').v4;
var boardModel = function (options) {
    var id = options.id, title = options.title, columns = options.columns;
    if (!title || !columns || !Array.isArray(columns)) {
        return ("Error required options missinsg");
    }
    var generatedBoard = {
        id: id || uuidv4(),
        title: title,
        columns: columns
    };
    return generatedBoard;
};
exports.default = boardModel;
