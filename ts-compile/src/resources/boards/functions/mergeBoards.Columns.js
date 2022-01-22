"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeBoardsColumns = void 0;
const mergeBoardsColumns = (board, columns) => {
    const plainColumns = [];
    columns.forEach(element => {
        plainColumns.push({
            order: element.order,
            title: element.title
        });
    });
    if (board && columns) {
        return {
            id: board.id,
            title: board.title,
            columns: plainColumns
        };
    }
    else {
        return undefined;
    }
};
exports.mergeBoardsColumns = mergeBoardsColumns;
//# sourceMappingURL=mergeBoards.Columns.js.map