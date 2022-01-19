import { FastifyReply, FastifyRequest } from "fastify"
import { IBoard, IReceivedRequestBody } from "./interfaces"

import boardService from "./board.service"
import repository from "./boards.memory.repository"
import boardModel from "./board.model"

/**
 * Returns Array of Boards
 * @returns {Array<IBoard>}
 */
const getAll = async(req: FastifyRequest, reply: FastifyReply) =>{
   const boards=await boardService.getAll()
    
  if(!boards){reply.send(undefined)  }
  else{reply.send(boards) }

} 


/**
 *  GET BY ID
 * @param req.params.id
 * @param reply.code(200)  |  .code(404)
 * @returns   board  found By Id
 */
const getById = async(req: FastifyRequest, reply: FastifyReply) => {
    const { id } = req.params as { id: string }
    const board = await boardService.getById(id)

    if (board) {
        reply
            .code(200)
        .send(board)
    }
    else {
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
const createBoard =async  (req: FastifyRequest, reply: FastifyReply) => {
    let options: IReceivedRequestBody
    if (typeof req.body === "string") { options = JSON.parse(req.body) }
    else { options = req.body as { id: string, title: string, columns: []} }
   const model=boardModel(options)
   
 const newCreatedBoard =await repository.createNewBoard(model)

   
   
   
    if (! newCreatedBoard ) {
        reply
            .code(500)
            .send(newCreatedBoard)
    }
    else {
        
        reply
            .code(201)
            .send(newCreatedBoard)
    }

}




/** 
 * Modifies existing Board
 * @param req.parms.id  finds board for modifiing 
 * @params req.params.body   takes new  body for modifying
 * @return reply  code(200).send(MODIFIED BOARD)  ||  code (401)
 */
const modifyBoard = async(req: FastifyRequest, reply: FastifyReply) => {
    const { id } = req.params as { id: string }
    const receivedOptions = req.body as { id: string, title: string, columns: [] }
     const board = boardModel(receivedOptions)
    

     const ModifiedBoardInDb = await boardService.modifyBoard(id, board)
      
        if( ModifiedBoardInDb){
           
           
            
            reply
            .header("Content-Type", "application/json")
            .code(200)
            .send({...ModifiedBoardInDb}) 
        }
       
    
    else { reply.code(401).send() }

   


}

/**
 *  DELETES BOARD
 * @param req.params.id
 * @param reply  
 * @returns reply reply   .code(200).send(DeletedBoard)  ||  .code(401)
 */
const deleteBoard = async (req: FastifyRequest, reply: FastifyReply) => {

    const { id } = req.params as { id: string }
    const deleted =await  boardService.deleteBoard(id)
  


if (deleted !== undefined) {
    reply.send(deleted)
}
else { reply.code(401).send() }

}
export default { getAll, getById, createBoard, modifyBoard, deleteBoard }