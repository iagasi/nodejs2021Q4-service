import { FastifyReply, FastifyRequest } from "fastify"
import { IBoard, IReceivedRequestBody } from "./interfaces"



import boardService from "./board.service"
import boardModel from"./board.model"


// TASKS=require("../tasks/task.memory.repository")


// const deletesTasksIfBoardDeleted=(BOARDID)=>{

//   let index
//   TASKS.forEach((el,i)=>{if(el.boardId===BOARDID){index=i}})
//   TASKS.splice(index,1)
// }






//get All



const getAll=()=>boardService.getAll()
/// Get by id
const getById=(req:FastifyRequest,reply:FastifyReply)=>{
    const {id} = req.params as {id:string}
    const board=boardService.getById(id)

    if(board){reply
    .code(200)
    .send(board)}
    else{
        reply
        .code(404)
        .send("Not found")
    }
    
}



// CREATES NEW BOARD
const createBoard=(req:FastifyRequest,reply:FastifyReply)=>{
   let options :IReceivedRequestBody
  if(typeof req.body==="string"){options=JSON.parse(req.body)}
 else{options=req.body as{id:string,title:string,columns:[]}}

let newCreatedBoard =boardModel(options)
if(typeof newCreatedBoard=="string"){
 reply 
 .code(500)
 .send(newCreatedBoard)
}
else{boardService.createBoard(newCreatedBoard)
reply
.code(201)
.send(newCreatedBoard)
}



}



/// MODIFY BOARD
const modifyBoard=(req:FastifyRequest,reply:FastifyReply)=>{
    const {id} = req.params as { id: string }
    const receivedOptions=req.body as {id:string,title:string,columns:Array<object>}
    const board=boardModel(receivedOptions)
if(typeof board=="object"){
 const ModifiedBoardInDb=  boardService.modifyBoard(id,board)
 reply
 .send(ModifiedBoardInDb)  
}
else{reply.code(401).send()}
   

  

}
// DDELETES BOARD
const deleteBoard=(req:FastifyRequest,reply:FastifyReply)=>{
   
    const {id} = req.params as { id: string }
const deleted=boardService.deleteBoard(id)
 
if(deleted!==undefined){
 //deletesTasksIfBoardDeleted(id)
  reply.send(deleted)}
else{reply.code(401).send()}

}
module.exports={getAll,getById,createBoard,modifyBoard,deleteBoard}