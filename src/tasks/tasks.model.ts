import { v4 as uuidv4 } from 'uuid'
import { TaskDto } from './tasks.dto'



function taskModel(options:TaskDto,  boaidId: string|null){

    const{title,order,description,columnId,userId}=options 




  return {
      id:uuidv4(),
        title,
        order,
        description,
        userId,
        boardId:boaidId,
        columnId,
    }
}

export default taskModel