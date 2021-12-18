import { ITask } from "./inerfaces"

let  tasks:Array<ITask>=  []
/**
 *modifies tasks array
 * @param mod 
 */
const setTasks=async (mod:Array<ITask>)=>{
 tasks=mod
}

export  {tasks,setTasks} 


