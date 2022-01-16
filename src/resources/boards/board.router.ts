import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify"

import controller from "./board.controller"
import routes from "../lib"

const boardRouter = async (fastify: FastifyInstance,) => {


    /**
     * @returns   .code(200) .send(All boards from db) @type {Array<objects>}
      
     */
    fastify.get(routes.boards.getAll, (req: FastifyRequest, reply: FastifyReply) => {
         controller.getAll(req,reply)


      
    })
    /**
     * @function fastify.get(:id) calls with HTTP.get request with Dynamic ID
     *
     */
    fastify.get(routes.boards.getById(":id"), (req: FastifyRequest, reply: FastifyReply) => {
        controller.getById(req, reply)
    })

    /**
     *  @function fastify.post() calls with HTTP.post 
     */
    fastify.post(routes.boards.create, (req: FastifyRequest, reply: FastifyReply) => {
        controller.createBoard(req, reply)
    })

    /**
     *  @function fastify.put(:id) calls with HTTP.put request with Dynamic ID 
     */
    fastify.put(routes.boards.update(":id"), (req: FastifyRequest, reply: FastifyReply) => {
        controller.modifyBoard(req, reply)
    })
    /**
     *  @function fastify.delete(:id) calls with HTTP.delete request with Dynamic ID 
     * 
     */
    fastify.delete(routes.boards.delete(":id"), async(req: FastifyRequest, reply: FastifyReply) => {

       await controller.deleteBoard(req, reply)
    })




}

export default boardRouter