import { ITask } from "./inerfaces"

import { v4 as uuidv4 } from 'uuid'

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