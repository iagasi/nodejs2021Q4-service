import { ITask } from "./inerfaces"

const { v4 : uuidv4 } =require('uuid') 

function taskModel(options:ITask,  boaidId: string){

    const{id,title,order,description,columnId,userId}=options




  return {
      id:id||uuidv4(),
        title,
        order,
        description,
        userId,
        boardId:boaidId,
        columnId,
    }
}

export default taskModel