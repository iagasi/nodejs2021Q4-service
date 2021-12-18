import repositoryService from "./boards.memory.repository"
import { IBoard,} from "./interfaces"


/**
 * 
 *  Connects @module board.controller with @module board.memory.repository
 */

const getAll=()=>repositoryService.getAll()
const getById=(id:string)=>repositoryService.getById(id)
const createBoard=(board:IBoard)=>repositoryService.createBoard(board)
const modifyBoard=(id:string,board:IBoard)=>repositoryService.modifyBoard(id,board)
const deleteBoard=(id:string)=>repositoryService.deleteBoard(id)
export default{getAll,getById,createBoard,modifyBoard,deleteBoard}