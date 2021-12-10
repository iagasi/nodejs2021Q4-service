import { IBoard, IReceivedRequestBody } from "./interfaces";

import { v4 as uuidv4 } from 'uuid'





const boardModel = (options: IReceivedRequestBody) => {

    const { id, title, columns, } = options

    if (!title || !columns || !Array.isArray(columns)) { return ("Error required options missinsg"); }
    
    const generatedBoard: IBoard = {
        id: id || uuidv4(),
        title,
        columns
    }

    return generatedBoard
}

export default boardModel