import fastify, { FastifyInstance } from "fastify"
import logger from "./winston"

function LoggerandErrorHandler(fastify:FastifyInstance):void{

fastify.addHook("preValidation",async(req,reply)=>{
    const {body,url,query}=req as {body:object,url:string,query:object}
 logger.info(" body is-"+JSON.stringify(body)+" ,url is----"+url +", query is---"+JSON.stringify(Object.getOwnPropertyNames(query)))



})

fastify.addHook("onResponse",(req,reply)=>{
    logger.info("reply statuscode----"+reply.statusCode);
    
})

    
process.on('uncaughtException',async (err, origin) => {
    logger.error(err.message)
   process.exit(1)})
process.on("unhandledRejection",(reason,promise)=>{
    logger.error(reason)
    process.exit(1)
})
}


export default LoggerandErrorHandler