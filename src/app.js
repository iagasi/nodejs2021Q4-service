const fastify=require("fastify");
// swaggerUI = require('swagger-ui-express');
// const path = require('path');
// const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter=require("./resources/boards/board.router");
const taskRouter = require("./resources/tasks/task.router");

//
const app = fastify({logger:true});
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
app.register(boardRouter)
app.register( userRouter);
app.register(taskRouter)

// app.get('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get('/', (req, res) => {
 
    res.send('Service is running!');
    

  
});




module.exports = app;
