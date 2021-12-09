import { FastifyReply, FastifyRequest } from 'fastify';
import { RouteGenericInterface } from 'fastify/types/route';

import { IReqParams, IReq } from './inerfaces';
import {tasks,setTasks} from './task.memory.repository';
//import setTasks from './task.memory.repository';
import model from './task.model';

interface IReqBody {
  id: string;
}

const getAllTasks = (_: FastifyRequest, reply: FastifyReply) => {
  reply.code(200).send(tasks);
};

/// /gets Task by id
const getTaskById = (req: FastifyRequest, reply: FastifyReply) => {
  const { BOARDID, TASKID } = req.params as IReqParams;

  const found = tasks.find(
    (task) => task.boardId === BOARDID || task.id === TASKID
  );

  if (found) {
    reply.header('Content-Type', 'application/json').send(found);
  } else {
    reply.code(404).send();
  }
};

/// Creates New Task
const createTask = (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  let options;

  if (typeof req.body === 'string') {
    options = JSON.parse(req.body);
  } else {
    options = req.body;
  }
  const id = req.params.id;
  const taskModel = model(options, id);
  tasks.push(taskModel);
  reply.code(201).send(taskModel);
};

/// Updates existing TASK
const updateTask = (req: IReq, reply: FastifyReply) => {
  const { BOARDID, TASKID } = req.params as IReqParams;

  let foundindex;

  tasks.forEach((task, index) => {
    if (task.boardId === BOARDID && task.id === TASKID) {
      foundindex = index;
    }
  });

  if (foundindex !== undefined) {
    tasks[foundindex].title = req.body.title;
    tasks[foundindex].order = req.body.order;
    tasks[foundindex].description = req.body.description;

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
  if (found !== undefined) {
    const modified= tasks.filter(
      (task) => task.boardId !== BOARDID && task.id !== TASKID
    );
    setTasks(modified)
    reply.code(200).send();
  } else {
    reply.code(404).send();
  }
};

export default { getAllTasks, createTask, getTaskById, deleteTask, updateTask };
