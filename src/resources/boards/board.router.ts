import { FastifyInstance, FastifyPluginCallback, FastifyPluginOptions, FastifyRegisterOptions, FastifyReply, FastifyRequest } from "fastify"

import controller from "./board.controller"
import routes from "../lib"

const boardRouter=async(fastify:FastifyInstance,options:FastifyPluginOptions)=>{



fastify.get(routes.boards.getAll,(req:FastifyRequest,reply:FastifyReply)=>{
const getAllBoards=controller.getAll()


    reply
    .code(200)
    .send(getAllBoards)
})

fastify.get(routes.boards.getById(":id"),(req:FastifyRequest,reply:FastifyReply)=>{
 controller.getById(req,reply)
})

/**
 * 
 */
fastify.post(routes.boards.create,(req:FastifyRequest,reply:FastifyReply)=>{
    controller.createBoard(req,reply)
   })
   fastify.put(routes.boards.update(":id"),(req:FastifyRequest,reply:FastifyReply)=>{
    controller.modifyBoard(req,reply)
   })

   fastify.delete(routes.boards.delete(":id"),(req:FastifyRequest,reply:FastifyReply)=>{
     
       controller.deleteBoard(req,reply)
   })




}

export default boardRouter