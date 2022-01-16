"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const boardModel = (options) => {
    const { id, title, columns, } = options;
    if (!title || !columns) {
        return ("Error required options missinsg");
    }
    const generatedBoard = {
        id: id || (0, uuid_1.v4)(),
        title,
        columns
    };
    return generatedBoard;
};
exports.default = boardModel;
//# sourceMappingURL=board.model.js.map