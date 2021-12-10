import { ITask } from "./inerfaces"

let tasks:Array<ITask>=[]

const setTasks=(mod:Array<ITask>)=>{
tasks=mod
}

export  {tasks,setTasks} 


