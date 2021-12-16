import { FastifyReply, FastifyRequest } from 'fastify';


import { IReqParams } from './inerfaces';
import { tasks, setTasks } from './task.memory.repository';
// import setTasks from './task.memory.repository';
import model from './task.model';



const getAllTasks = (_: FastifyRequest, reply: FastifyReply) => {
  reply.code(200).send(tasks);
};

/// /gets Task by id
const getTaskById = (req: FastifyRequest, reply: FastifyReply) => {
  const { BOARDID, TASKID } = req.params as IReqParams;
console.log(TASKID);

  const found = tasks.find(
    (task) => task.boardId === BOARDID || task.id === TASKID
  );

  if (found) {
    reply
    .code(200)
    .header('Content-Type', 'application/json').send(found);
  } else {
    reply.code(404).send();
  }
};

/// Creates New Task
const createTask = (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  let options;

  if (typeof req.body === 'string') {
    options = JSON.parse(req.body);
  } else {
    options = req.body;
  }
  const {id} = req.params  as {id:string}
  const taskModel = model(options, id);
  tasks.push(taskModel);
  reply.code(201).send(taskModel);
};

/// Updates existing TASK
const updateTask = (req: FastifyRequest, reply: FastifyReply) => {
  const { BOARDID, TASKID } = req.params as IReqParams;

  let foundindex;

  tasks.forEach((task, index) => {
    if (task.boardId === BOARDID && task.id === TASKID) {
      foundindex = index;
    }
  });

  if (foundindex !== undefined) {

    const {title,order,description}=req.body as {title:string,order:string,description:string }
    tasks[foundindex].title = title;
    tasks[foundindex].order = order;
    tasks[foundindex].description = description;

    reply.header('Content-Type', 'application/json').send(tasks[foundindex]);
  } else {
    reply.code(401).send();
  }
};

/// /Deletes existing task

const deleteTask = (req: FastifyRequest, reply: FastifyReply) => {
  const { BOARDID, TASKID } = req.params as IReqParams;
  const found = tasks.find(
    (task) => task.boardId === BOARDID || task.id === TASKID
  );
  if (found ) {
    const modified = tasks.filter(
      (task) => task.boardId !== BOARDID && task.id !== TASKID
    );
    setTasks(modified);
    reply.code(200).send();
  } else {
    reply.code(204).send()
  }
};

 const unasighnUser=async(id:string)=>{
  
   
  tasks.forEach((task,index)=>{
    if(task.userId===id){
      tasks[index].userId=null
    }
  })
  console.log(tasks);
  

}
 const deleteBoardTasks=(boardId:string)=>{
const mod=tasks.filter(task=>task.boardId !== boardId)
setTasks(mod)


 }
  


export default { getAllTasks, createTask, getTaskById, deleteTask, updateTask,unasighnUser,deleteBoardTasks}
