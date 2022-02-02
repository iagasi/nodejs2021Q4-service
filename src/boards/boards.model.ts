import { BoardDto } from "./boards.dto";
import { v4 as uuidv4 } from "uuid"
import { Injectable } from "@nestjs/common";
@Injectable()
export class BoardModel{
    constructor(){
       
    }

    generateBoard(data:BoardDto){
        const { id, title, columns, } = data
        return{
            id: id || uuidv4(),
            title,
            columns
        }
    }
}