"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function taskModel(options, boaidId) {
    const { title, order, description, columnId, userId } = options;
    return {
        id: (0, uuid_1.v4)(),
        title,
        order,
        description,
        userId,
        boardId: boaidId,
        columnId,
    };
}
exports.default = taskModel;
//# sourceMappingURL=tasks.model.js.map