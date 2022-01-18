import { FastifyInstance,FastifyRequest,FastifyReply } from "fastify"



 const regRouter = async (fastify: FastifyInstance) => {
    
     
   fastify.get('/l', async(req: FastifyRequest, reply: FastifyReply) => {
       
 reply.send("loginnnn")

})

}

export default regRouter