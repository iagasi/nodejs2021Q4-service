import { FastifyInstance } from "fastify"

import controller from "./user.controller"


import lib from "../lib"



const getAllUsers=async (fastify:FastifyInstance) => {



 
  fastify.get(lib.users.getAll,(req,reply)=>{ 
  controller.getAll(req,reply)
 
    })


fastify.get(lib.users.getById(":id"),(req,reply)=>{
 controller.getById(req,reply)

})


  fastify.post(lib.users.create,(req,reply)=>{

 controller.userPost(req,reply)
  
  })


fastify.put(lib.users.update(":id"),(req,reply)=>{
controller.userPut(req,reply)
})


fastify.delete(lib.users.delete(":id"),(req,reply)=>{
controller.userDelete(req,reply)
})


}

export default getAllUsers
