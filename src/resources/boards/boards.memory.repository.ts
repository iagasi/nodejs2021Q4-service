import { IBoard } from "./interfaces"



const boards:Array<IBoard>=[]

const getAll=():Array<IBoard>=>boards

const getById=(id:string)=>{
  const foundBoard=boards.find((board:IBoard)=>board.id===id)
 return foundBoard
}

const createBoard=(board:IBoard)=>{
boards.push(board)
}
////REFACtor this
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