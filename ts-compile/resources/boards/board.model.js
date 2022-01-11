"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
/**
 * Generates id if id udefined
 * @param options  @type { id:string||undefined, title:string, columns:Array, }
 * @returns    new object @type  { id:uuidv4() title, columns, }
 */
const boardModel = (options) => {
    const { id, title, columns, } = options;
    if (!title || !columns || !Array.isArray(columns)) {
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
