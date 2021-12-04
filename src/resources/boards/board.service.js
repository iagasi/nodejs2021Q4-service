const repositoryService=require("./boards.memory.repository")





const getAll=()=>repositoryService.getAll()
const getById=(id)=>repositoryService.getById(id)
const createBoard=(board)=>repositoryService.createBoard(board)
const modifyBoard=(id,options)=>repositoryService.modifyBoard(id,options)
const deleteBoard=(id)=>repositoryService.deleteBoard(id)
module.exports={getAll,getById,createBoard,modifyBoard,deleteBoard}