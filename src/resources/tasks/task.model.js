const { v4 : uuidv4 } =require('uuid') 

function taskModel(options,id){

    const{idOfTask,title,order,description,columnId,userId}=options
const{boardId}=id



  return {
      id:idOfTask||uuidv4(),
        title,
        order,
        description,
        userId,
        boardId,
        columnId,
    }
}

module.exports=taskModel