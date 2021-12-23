import fastify,{ FastifyReply,FastifyPluginCallback} from "fastify"
// const swaggerUI = require('fastify-swagger');
// const path = require('path');
// const YAML = require('yamljs');
import userRouter from './resources/users/user.router';
import taskRouter from "./resources/tasks/task.router";
import boardrouter from "./resources/boards/board.router"



import LoggerandErrorHandler from "./Logging&ErrorHandling/ErrorHandler";

//
const app= fastify();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));


LoggerandErrorHandler(app)
// app.addHook("preValidation",async(req,reply)=>{
//     const {body,url,params}=req as {body:object,url:string,params:string}
// //     const log=JSON.stringify(body) +url+JSON.stringify({paramsis:params})
// //  fs.writeFileSync("./k.json",log)
// logger.info(" body is-"+JSON.stringify(body))

// })


app.register(boardrouter)
app.register( userRouter);
app.register(taskRouter)

// Promise.reject(Error('Oops!'));


app.get('/', (_, reply:FastifyReply) => {
 
    reply.send("Service working");
    

  
});




export default app
