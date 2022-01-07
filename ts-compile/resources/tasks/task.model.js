"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
/**
 *
 * @param options @type { id: string,title: string, order: string,  description: string,userId: string|null,  boardId: string|null}
  
 * @param boaidId @type {string}
 * @returns object from param option and generated UUID
 */
function taskModel(options, boaidId) {
    const { id, title, order, description, columnId, userId } = options;
    return {
        id: id || (0, uuid_1.v4)(),
        title,
        order,
        description,
        userId,
        boardId: boaidId,
        columnId,
    };
}
exports.default = taskModel;
