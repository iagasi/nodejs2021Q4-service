const { v4 : uuidv4 } =require('uuid') 

const boardModel=(options)=>{
    
          
       
const {id,title,columns}=options




if(!title||!columns||!Array.isArray(columns)){return("Error required options missinsg");}

    return {
    id: id || uuidv4().toString(),
    title,
    columns
}

}

module.exports=boardModel