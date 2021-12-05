let TASKS=require("./task.memory.repository")
const model=require("./task.model")


const getAllTasks=(_,reply)=>
{
    reply
  .code(200)
    .send(TASKS)
}

/// /gets Task by id
const getTaskById=(req,reply)=>{
const {BOARDID,TASKID}=req.params


const found=TASKS.find((task)=>task.boardId===BOARDID||task.id===TASKID)
if(found!==undefined){
  reply
.header("Content-Type","application/json")
.send(found)  
}
else{
    reply.code(404).send()
}
}
/// Creates New Task
const createTask=(req,reply)=>{
    let options
    
    if(typeof req.body==="string"){options=JSON.parse(req.body)}
    else{options=req.body}
    const taskModel=model(options,{boardId:req.params.id})
    TASKS.push(taskModel)
    reply
    .code(201)
    .send(taskModel)
}



/// Updates existing TASK
const updateTask=(req,reply)=>{
  const {BOARDID,TASKID}=req.params
  // let options
  let foundindex
  // if(typeof req.body==="string"){options=JSON.parse(req.body)}
  // else(options=req.body)
TASKS.forEach((task,index)=>{
  if(task.boardId===BOARDID&&task.id===TASKID){
    foundindex=index

  }
})

if(foundindex!==undefined){
TASKS[foundindex].title=req.body.title
TASKS[foundindex].order=req.body.order
TASKS[foundindex].description=req.body.description

reply
.header('Content-Type', 'application/json')
.send(TASKS[foundindex])
}
else{
  reply
  .code(401)
  .send()
}




 

}







/// /Deletes existing task

const deleteTask=(req,reply)=>{
   const {BOARDID,TASKID}=req.params
 const found=  TASKS.find(task=>task.boardId===BOARDID||task.id===TASKID)
 if(found!==undefined){
    TASKS=TASKS.filter(task=>task.boardId!==BOARDID&&task.id!==TASKID)

reply
.code(200)
.send()
 }
else{
  reply
.code(404)
.send()
}



}







module.exports={getAllTasks,createTask,getTaskById,deleteTask,updateTask}