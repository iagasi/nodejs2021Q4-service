import { FastifyInstance, } from "fastify"

import routes from "../lib"
import controller from "./task.controller"


const taskRouter = async (fastify: FastifyInstance) => {

  fastify.get(routes.tasks.getById(":BOARDID", ":TASKID"), (req, reply) => {
    controller.getTaskById(req, reply)
  })
  
  fastify.get(routes.tasks.getAll(":id"), (req, reply) => {
    controller.getAllTasks(req, reply)
  })
 
  fastify.post(routes.tasks.create(":id"), (req, reply) => {
    controller.createTask(req, reply)
  })

  fastify.put(routes.tasks.update(":BOARDID", ":TASKID"), (req, reply) => {
    controller.updateTask(req, reply)
  })


  fastify.delete(routes.tasks.delete(":BOARDID", ":TASKID"), (req, reply) => {
    controller.deleteTask(req, reply)
  })

}

export default taskRouter