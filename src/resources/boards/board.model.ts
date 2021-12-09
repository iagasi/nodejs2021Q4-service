const { v4: uuidv4 } = require('uuid')
import { IBoard, IReceivedRequestBody } from "./interfaces";





const boardModel = (options: IReceivedRequestBody) => {

    let { id, title, columns, } = options

    if (!title || !columns || !Array.isArray(columns)) { return ("Error required options missinsg"); }
    
    const generatedBoard: IBoard = {
        id: id || uuidv4(),
        title,
        columns
    }

    return generatedBoard
}

export default boardModel