import { FastifyReply, FastifyRequest } from "fastify"
import { IBoard, IReceivedRequestBody } from "./interfaces"

import boardService from "./board.service"
import boardModel from"./board.model"


/**
 * 
 * @returns Array of Boards
 */
const getAll=()=>boardService.getAll()


/**
 *  GET BY ID
 * @param req.params.id
 * @param reply.code(200)  |  .code(404)
 * @returns   board  found By Id
 */
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




/**
 *  CREATES NEW BOARD
 * @param req.body  takes   id:string,title:string,columns:Array
 * @param reply  .code(201)||.code(500)
 * @returns  new Created Board
 */
const createBoard=(req:FastifyRequest,reply:FastifyReply)=>{
   let options :IReceivedRequestBody
  if(typeof req.body==="string"){options=JSON.parse(req.body)}
 else{options=req.body as{id:string,title:string,columns:[]}}

const newCreatedBoard =boardModel(options)
if(typeof newCreatedBoard==="string"){
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




/** 
 * Modifies existing Board
 * @param req.parms.id  finds board for modifiing 
 * @params req.params.body   takes new  body for modifying
 * @param reply  code(200).send(MODIFIED BOARD)  ||  code (401)
 */
const modifyBoard=(req:FastifyRequest,reply:FastifyReply)=>{
    const {id} = req.params as { id: string }
    const receivedOptions=req.body as {id:string,title:string,columns:Array<object>}
    const board=boardModel(receivedOptions)
if(typeof board==="object"){
 const ModifiedBoardInDb=  boardService.modifyBoard(id,board)
 reply
 .header("Content-Type","application/json")
 .send(ModifiedBoardInDb)  
}
else{reply.code(401).send()}
   

  

}

/**
 *  DDELETES BOARD
 * @param req.params.id
 * @param reply   .code(200).send(DeletedBoard)  ||  .code(401)
 */
const deleteBoard=(req:FastifyRequest,reply:FastifyReply)=>{
   
    const {id} = req.params as { id: string }
const deleted=boardService.deleteBoard(id)
 
if(deleted!==undefined){
 // deletesTasksIfBoardDeleted(id)
  reply.send(deleted)}
else{reply.code(401).send()}

}
export default {getAll,getById,createBoard,modifyBoard,deleteBoard}