import { FastifyReply, FastifyRequest } from 'fastify';
import { ReplyDefault } from 'fastify/types/utils';
import { REPL_MODE_SLOPPY } from 'repl';


import { IReqParams } from './inerfaces';
import { getAll, getById, create, update, taskDelete } from './task.memory.repository';
import model from './task.model';


/**
 * returns all tasks
 * @param _ 
 * @param reply 
 * @return reply (AllTasks)
 */
const getAllTasks = async (_: FastifyRequest, reply: FastifyReply) => {
  const tasks = await getAll()
 
  reply.code(200).send(tasks);
  
};
///
/**
 * Gets Task by id
 * @param req as @type {req.params as {BOARDID, TASKID} }
 * @param reply 
 * @returns {reply.code(200)send(found task from db)} | or @type {reply.code(404)send()}
 */
const getTaskById = async(req: FastifyRequest, reply: FastifyReply) => {
  const { BOARDID, TASKID } = req.params as IReqParams;
 

  // const found = tasks.find(
  //   (task) => task.boardId === BOARDID || task.id === TASKID
  // );
  const found = await getById(BOARDID, TASKID)
console.log(found);

  if (found) {
    reply
      .code(200)
      .header('Content-Type', 'application/json').send(found);
  } else {
    reply.code(404).send();
  }
};

/**
 * Creates new task
 * @param req  takes req.body
 * @param reply
 * @returns new crated task
 */
const createTask = async(req: FastifyRequest,reply: FastifyReply) => {
  
  let options;

  if (typeof req.body === 'string') {
    options = JSON.parse(req.body);
  } else {
    options = req.body;
  }
  const { id } = req.params as { id: string }
  const taskModel = model(options, id);
  
  
  const newCreatedTask =await create(taskModel);
 
  
  reply.code(201).send({...newCreatedTask});
};

/**
 * Updates  existing task 
 * @param req takes req.body as object    and      @type { { BOARDID, TASKID }  =req.params}
 * @param reply 
 * @returns updated Task
 */
const updateTask = async(req: FastifyRequest, reply: FastifyReply) => {
   const { BOARDID, TASKID } = req.params as IReqParams;
   const { title, order, description } = req.body as { title: string, order: number, description: string }
  
    const updated=await update(BOARDID,TASKID,title,order,description)
   if(updated){
     
     
      reply
      .header('Content-Type', 'application/json')
      .code(200)
      .send(updated);
   }
   
   else {
    reply.code(401).send();
  }


};

/**
 * 
 * @param req  as  { BOARDID, TASKID } = req.params 
 * @param reply 
 * @returns reply.code(200)  |  reply.code(204)
 */

const deleteTask =async  (req: FastifyRequest, reply: FastifyReply) => {
  const { BOARDID, TASKID } = req.params as IReqParams;
  const deleted=await taskDelete( BOARDID, TASKID)
 reply.code(204).send();
    


 
};

/**
 * This function sets userId to null 
 * @param id 
 */
const unasighnUser = async (id: string) => {


  // tasks.forEach((task, index) => {
  //   if (task.userId === id) {
  //     tasks[index].userId = null
  //   }
  // })

}

/**
 * Deleted all Board tasks 
 * @param boardId 
 */
const deleteBoardTasks = (boardId: string) => {
  // const mod = tasks.filter(task => task.boardId !== boardId)
  // setTasks(mod)


}



export default { getAllTasks, createTask, getTaskById, deleteTask, updateTask, unasighnUser, deleteBoardTasks }
