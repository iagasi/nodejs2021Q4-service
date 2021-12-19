import { FastifyInstance } from "fastify"

import controller from "./user.controller"


import lib from "../lib"


/**
 * this function call http.get   rout /users
 * @param fastify 
 *
 */
const getAllUsers=async (fastify:FastifyInstance) => {



 
  fastify.get(lib.users.getAll,(req,reply)=>{ 
  controller.getAll(req,reply)
 
    })

/**
 * this function call http.get   rout /users  with dynamic :id
 * @param fastify 
 *
 */
fastify.get(lib.users.getById(":id"),(req,reply)=>{
 controller.getById(req,reply)

})

/**
 * this function call http.post   rout /users
 * @param fastify 
 *
 */
  fastify.post(lib.users.create,(req,reply)=>{

 controller.userPost(req,reply)
  
  })

/**
 * this function call http.put   rout /users with dumanic :id
 * @param fastify 
 *
 */
fastify.put(lib.users.update(":id"),(req,reply)=>{
controller.userPut(req,reply)
})

/**
 * this function call http.delete   rout /users with dunamic :id
 * @param fastify 
 *
 */
fastify.delete(lib.users.delete(":id"),(req,reply)=>{
controller.userDelete(req,reply)
})


}

export default getAllUsers
