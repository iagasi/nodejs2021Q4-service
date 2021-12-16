import { IBoard } from "./interfaces"



const boards:Array<IBoard>=[]
/**
 * 
 * @returns ALL Boards
 *  @type {Array<object>}
 */
const getAll=():Array<IBoard>=>boards


/**
 * @params id @type {string}
 * @returns found Board in array @type {object}
 */
const getById=(id:string)=>{
  const foundBoard=boards.find((board:IBoard)=>board.id===id)
 return foundBoard
}

/**
 * Creates New Board In Array
 * @param {id:string ,title:string,columns:Array<string>}  board 
 * @returns {void}
 * 
 */
const createBoard=(board:IBoard)=>{
boards.push(board)
}
/**
 * 
 * @param {string} id 
 * @param {{id:string ,title:string,columns:Array<string>}}options 
 * @returns  found  boarts @type {IBoard}
 */
const modifyBoard=(id:string,options:IBoard)=>{
  
 let foundBoardIndex:number|undefined
boards.find((board,index)=>{
  if (board.id.toString()===id){foundBoardIndex= index ;return}
 return foundBoardIndex
})


if(foundBoardIndex||foundBoardIndex===0){
  
  boards[foundBoardIndex].title=options.title
  boards[foundBoardIndex].columns=options.columns
  

}

else{return undefined}

}

const deleteBoard=(id:string)=>{
  let deletedUser:IBoard|undefined
 
boards.forEach((element,index) => {
  if(element.id===id){boards.splice(index,1)
    deletedUser=element
  }

  else{deletedUser=undefined}
});
  return deletedUser

  }


export default{getAll,getById,createBoard,modifyBoard,deleteBoard}