import { ITask } from "./inerfaces"

let  tasks:Array<ITask>=  []

const setTasks=async (mod:Array<ITask>)=>{
 tasks=mod
}

export  {tasks,setTasks} 


