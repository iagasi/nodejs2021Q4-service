import { FastifyInstance, } from "fastify"

import routes from "../lib"
import controller from "./task.controller"


const taskRouter = async (fastify: FastifyInstance) => {

  /**
   *  @function fastify.get() calls with HTTP.get request
   */
  fastify.get(routes.tasks.getById(":BOARDID", ":TASKID"), (req, reply) => {

    controller.getTaskById(req, reply)

  })
  /**
   * @function fastify.get(:id) calls with HTTP.get request with Dynamic ID
   */
  fastify.get(routes.tasks.getAll(":id"), (req, reply) => {

    controller.getAllTasks(req, reply)

  })
 /**
  *  @function fastify.post(:id) calls with HTTP.post request with Dynamic ID
  */
  fastify.post(routes.tasks.create(":id"), (req, reply) => {

    controller.createTask(req, reply)
  })
/**
 * @function fastify.put(:BOARDID,:TASKID) calls with HTTP.putrequest with Dynamic":BOARDID", ":TASKID"
 */
  fastify.put(routes.tasks.update(":BOARDID", ":TASKID"), (req, reply) => {
    controller.updateTask(req, reply)
  })

/**
 * @function fastify.delete(:BOARDID,:TASKID) calls with HTTP.delete 
 */
  fastify.delete(routes.tasks.delete(":BOARDID", ":TASKID"), (req, reply) => {
    controller.deleteTask(req, reply)
  })

}

export default taskRouter