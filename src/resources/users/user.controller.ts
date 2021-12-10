import { FastifyReply, FastifyRequest } from "fastify";
import { IUser } from "./interfaces";

import User from './user.model'
import usersService from './user.service'




const users= usersService.getAll()

const getAll=(req:FastifyRequest,reply:FastifyReply)=>{
    


    reply.code(200)
    reply.send(users.map((concreteUser:IUser)=>(User.toResponse(concreteUser))) );
}


const getById=async(req:FastifyRequest,reply:FastifyReply)=>{
    const {id} = req.params as {id:string}
 // const users=usersService.getAll()
        const foundUser=await users.find(user=>user.id===id)
        if(foundUser!==undefined){
            const modifiedUser=User.toResponse(foundUser)
    reply
    .code(200)
    .send(modifiedUser)  
        }
  
  
  else{
    reply.code(401)
    .send()
  }
}



const userDelete=(req:FastifyRequest,reply:FastifyReply)=>{
    const {id} = req.params as {id:string}

    usersService.deleteUser(id)
    reply.code(200)
   reply.send("deleted")
}


const userPost=(req:FastifyRequest,reply:FastifyReply)=>{
    const{name,login,password}=req.body as {name:string,login:string,password:string}
    const newUser :IUser= new User({name,login,password})
    const {id} = newUser
    // const users=usersService.getAll()
     usersService.create({...newUser})
     
    const newCreatedUser=users.find(user=>user.id===id) 
    if(newCreatedUser){
        const modificietUserForFesponse=User.toResponse(newCreatedUser)

    reply
    .code(201)
    .header('Content-Type', 'application/json')
    .send(modificietUserForFesponse)

    }
}


const userPut=(req:FastifyRequest,reply:FastifyReply)=>{
    const {id} = req.params as {id:string}
  
const modifiedUser= usersService.modify(id,req.body as IUser)
if(modifiedUser){
  const modForReply=User.toResponse(modifiedUser)
reply
.send(modForReply)   
}
else{
    reply.send("cannot find this user")
}
    }



export {getAll,getById,userDelete,userPost,userPut}