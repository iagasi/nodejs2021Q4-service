import { FastifyReply, FastifyRequest } from "fastify"


interface IReqParams {
  BOARDID: string
  TASKID: string
}

interface ITask {
  id: string
  title: string,
  order: string,
  description: string,
  userId: string,
  boardId: string,
  columnId: string,
}

interface IReq extends FastifyRequest 
{
  body: { title: string,
     order: string,
      description: string }
}


export { IReqParams, ITask, IReq }