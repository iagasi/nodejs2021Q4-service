import fastify,{ FastifyReply} from "fastify"
// const swaggerUI = require('fastify-swagger');
// const path = require('path');
// const YAML = require('yamljs');
// import userRouter from './resources/users/user.router';
 
// import taskRouter from "./resources/tasks/task.router";
import boardrouter from "./resources/boards/board.router"
//
const app= fastify();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));




app.register(boardrouter)
// app.register( userRouter);
// app.register(taskRouter)




app.get('/', (_, reply:FastifyReply) => {
 
    reply.send("Service working");
    

  
});




export default app
