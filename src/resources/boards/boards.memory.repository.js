const boards=[]

const getAll=()=>boards

const getById=(id)=>{
  
  const foundBoard=boards.find((board)=>board.id===id)
 return foundBoard
}

const createBoard=(board)=>{
boards.push(board)
}

const modifyBoard=(id,options)=>{
  
 let foundBoardIndex
boards.find((board,index)=>{
  if (board.id.toString()===id){foundBoardIndex= index ;return""}
return null 
})


if(foundBoardIndex||foundBoardIndex===0){
  
  boards[foundBoardIndex].title=options.title
  boards[foundBoardIndex].columns=options.columns

}

return boards[foundBoardIndex]

}

const deleteBoard=(id)=>{
  let deletedUser=""
 
boards.forEach((element,index) => {
  if(element.id===id){boards.splice(index,1)}
  deletedUser=element
});
  return deletedUser

  }


module.exports={getAll,getById,createBoard,modifyBoard,deleteBoard}