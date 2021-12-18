import { v4 as uuidv4 } from 'uuid'
import { ITask } from "./inerfaces"

/**
 * 
 * @param options @type { id: string,title: string, order: string,  description: string,userId: string|null,  boardId: string|null}
  
 * @param boaidId @type {string}
 * @returns object from param option and generated UUID
 */
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