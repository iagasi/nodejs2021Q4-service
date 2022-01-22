import fastify, { FastifyInstance } from "fastify"
import { type } from "os"
import { pipeline } from "stream"
import logger from "./winston"



function LoggerandErrorHandler(fastify:FastifyInstance):void{

fastify.addHook("preValidation",async(req,reply)=>{
    const {body,url,query}=req as {body:object,url:string,query:object}
 logger.info(" body is-"+JSON.stringify(body)+" ,url is----"+url +", query is---"+JSON.stringify(query))
})


fastify.addHook("onResponse",(req,reply)=>{
    logger.info("reply statuscode----"+reply.statusCode);
})

    
process.on('uncaughtException',async (err, origin) => {
    
   logger.error(err.message)
   setTimeout(()=>{process.exit(1)},1000)

})

interface Ireason{
    message:string
}
process.on("unhandledRejection",(reason:Ireason)=>{
logger.error(reason.message)
   setTimeout(()=>{process.exit(1)},1000)
})
}


export default LoggerandErrorHandler