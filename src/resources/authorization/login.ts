import { FastifyInstance,FastifyRequest,FastifyReply } from "fastify"
import { User_db } from "../../database/entities/User_db"
import * as bycrypt from "bcrypt"
import { singhAcessToken } from "./jwt"


 export const login = async (fastify: FastifyInstance) => {
    
     
   fastify.post('/login', async(req: FastifyRequest, reply: FastifyReply) => {
       
 
    const{login,password}=req.body as {login:string,password:string}


    const candidate=await User_db.findOne({login:login})
    let checkPassword
if(candidate){

  
 checkPassword= await bycrypt.compare(password,candidate.password)

 
//
 
}
if(candidate&&checkPassword){
 const token=  await singhAcessToken(candidate.id,login)
 reply.code(200).send({token:token})
}

else{ reply.code(403).send("usernotfound")}

})

}

export default login