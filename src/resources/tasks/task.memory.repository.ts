import { Tasks_db } from "../../database/entities/Tasks_db"
import { ITask } from "./inerfaces"

let  tasks:Array<ITask>=  []
/**
 *modifies tasks array
 * @param mod 
 */
const setTasks=async (mod:Array<ITask>)=>{
 tasks=mod
}
const getAll=async()=>{
return await Tasks_db.find({relations: ["userId","boardId"]})
}

const getById=async(BOARDID:string,TASKID:string,)=>{
  let toReturn
  if(TASKID){
    
    const byTaskId=await Tasks_db.findOne({id:TASKID},{relations:["userId","boardId"]})
    toReturn=byTaskId
  }

  
  
  else{
    
    
    const byBoardId=await Tasks_db.findOne({boardId:BOARDID})
    toReturn=byBoardId
  }



  return toReturn

  // return {
  //   id:toReturn?.id,
  //   title:toReturn?.title,
  //   order:toReturn?.order,
  //   description:toReturn?.description,
  //   userId:toReturn?.userId,
  //    boardId:toReturn?.boardId.id,
  //   columnId:toReturn?.columnId,
    
   

  //  }
}

const create=async (options:ITask)=>{
 const task =Tasks_db.create(options)
 await task.save()
 return task
}

const update=async (BOARDID:string,TASKID:string,title:string,order:number,description:string)=>{
const updated=await Tasks_db.update({id:TASKID},{title:title,order:order,description:description})

const task=await Tasks_db.findOne({id:TASKID})
console.log(task);
return task



}

const taskDelete=async(BOARDID:string,TASKID:string,)=>{
 
  return await Tasks_db.delete({id:TASKID})
 

  
}
export  {getById, getAll,create,update,taskDelete} 


