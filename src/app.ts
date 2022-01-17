import fastify,{ FastifyReply,FastifyPluginCallback} from "fastify"
// const swaggerUI = require('fastify-swagger');
// const path = require('path');
// const YAML = require('yamljs');
import userRouter from './resources/users/user.router';
import taskRouter from "./resources/tasks/task.router";
import boardrouter from "./resources/boards/board.router"

import LoggerandErrorHandler from "./Logging&ErrorHandling/ErrorHandler";
import regRouter from "./resources/authorization/index";



const app= fastify();
/** ERROR an LOGGING Handler
 * @params app instance of fastify
 */
//LoggerandErrorHandler(app)
regRouter(app)
app.register(regRouter)

app.register(boardrouter)
app.register( userRouter);
app.register(taskRouter)

//throw new Error("Error ocuured")
 //Promise.reject(Error('Oops!'));


app.get('/', (_, reply:FastifyReply) => {
 
    reply.send("servece vvvvvvvvvvvvvvvvvv");
    

  
});




export default app
