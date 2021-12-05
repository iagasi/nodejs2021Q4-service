const fastify=require("fastify");
// const swaggerUI = require('fastify-swagger');
// const path = require('path');
// const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter=require("./resources/boards/board.router");
const taskRouter = require("./resources/tasks/task.router");

//
const app = fastify();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));




app.register(boardRouter)
app.register( userRouter);
app.register(taskRouter)




app.get('/', (req, res) => {
 
    res.send("Service working");
    

  
});




module.exports = app;
