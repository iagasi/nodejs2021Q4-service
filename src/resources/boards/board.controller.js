const boardService=require("./board.service")
const boardModel=require("./board.model")
const common=require("../commons")

// get All
const getAll=()=>boardService.getAll()
/// Get by id
const getById=(req,reply)=>{
    const {id} = req.params
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
const createBoard=(req,reply)=>{
   let options
 if(typeof req.body==="string"){options=JSON.parse(req.body)}
 else(options=req.body)
const newCreatedBoard=boardModel(options)
common.setId(newCreatedBoard.id)
boardService.createBoard(newCreatedBoard)

reply
.code(201)
.send(newCreatedBoard)

}



/// MODIFY BOARD
const modifyBoard=(req,reply)=>{
    const {id} = req.params
    const receivedOptions=req.body
    const options=boardModel(receivedOptions)
   const ModifiedBoardInDb= boardService.modifyBoard(id,options)
if(ModifiedBoardInDb){
  reply
.send(ModifiedBoardInDb)  
}
  else{reply.code(401).send()}

}
// DDELETES BOARD
const deleteBoard=(req,reply)=>{
   
    const {id} = req.params
const deleted=boardService.deleteBoard(id)
if(deleted!==undefined){reply.send(deleted)}
else{reply.code(401).send()}

}
module.exports={getAll,getById,createBoard,modifyBoard,deleteBoard}