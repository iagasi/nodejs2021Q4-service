import { FastifyInstance,FastifyRequest,FastifyReply } from "fastify"



 const regRouter = async (fastify: FastifyInstance) => {
     console.log("eeeeee");
     
   fastify.get('/l', async(req: FastifyRequest, reply: FastifyReply) => {
       
await reply.send("loginnnn")

})

}

export default regRouter