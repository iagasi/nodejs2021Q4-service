import { v4 as uuidv4 } from 'uuid'
import { ITask } from "./inerfaces"


function taskModel(options:ITask,  boaidId: string|null){

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