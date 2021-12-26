import fastify,{ FastifyReply,FastifyPluginCallback} from "fastify"
// const swaggerUI = require('fastify-swagger');
// const path = require('path');
// const YAML = require('yamljs');
import userRouter from './resources/users/user.router';
import taskRouter from "./resources/tasks/task.router";
import boardrouter from "./resources/boards/board.router"
import LoggerandErrorHandler from "./Logging&ErrorHandling/ErrorHandler";


const app= fastify();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
LoggerandErrorHandler(app)



app.register(boardrouter)
app.register( userRouter);
app.register(taskRouter)
//throw new Error("aaaaaaaaaaaaaa")
 //Promise.reject(Error('Oops!'));


app.get('/', (_, reply:FastifyReply) => {
 
    reply.send("Service working");
    

  
});




export default app
