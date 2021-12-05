
const controller=require("./board.controller")
const routes=require("../lib")

const boardRouter=(fastify,options,done)=>{



fastify.get(routes.boards.getAll,(req,reply)=>{
const getAllBoards=controller.getAll()


    reply
    .code(200)
    .send(getAllBoards)
})

fastify.get(routes.boards.getById(":id"),(req,reply)=>{
 controller.getById(req,reply)
})


fastify.post(routes.boards.create,(req,reply)=>{
    controller.createBoard(req,reply)
   })
   fastify.put(routes.boards.update(":id"),(req,reply)=>{
    controller.modifyBoard(req,reply)
   })

   fastify.delete(routes.boards.delete(":id"),(req,reply)=>{
     
       controller.deleteBoard(req,reply)
   })
done()



}

module.exports=boardRouter