import { FastifyReply, FastifyRequest } from "fastify"


interface IReqParams {
  BOARDID: string
  TASKID: string
}

interface ITask {
  id: string
  title: string,
  order: number
  description: string,
  userId: string|null,
  boardId: string|null
  columnId: string,
}

interface IReq extends FastifyRequest 
{
  body: { title: string,
     order: string,
      description: string }
}


export { IReqParams, ITask, IReq }