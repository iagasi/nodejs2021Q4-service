const User = require('./user.model');
const usersService = require('./user.service');




const users= usersService.getAll()

const getAll=(req,reply)=>{
    


    reply.code(200)
    reply.send(users.map((concreteUser)=>(User.toResponse(concreteUser))) );
}


const getById=async(req,reply)=>{
    const {id} = req.params
 // const users=usersService.getAll()
        const foundUser=await users.find(user=>user.id===id)
        if(foundUser!==undefined){
            const modifiedUser=User.toResponse(foundUser)
    reply
    .code(200)
    .send(modifiedUser)  
        }
  
  
  else{
    reply.code(401)
    .send()
  }
}



const userDelete=(req,reply)=>{
    const {id} = req.params.id

    usersService.deleteUser(id)
    reply.code(200)
   reply.send("deleted")
}


const userPost=(req,reply)=>{
    const newUser= new User({name:req.body.name,login:req.body.login,password:req.body.password})
    const {id} = newUser
    // const users=usersService.getAll()
     usersService.create({...newUser})
     
    const newCreatedUser=users.find(user=>user.id===id) 
    
    const modificietUserForFesponse=User.toResponse(newCreatedUser)
  
    reply
    .code(201)
    .header('Content-Type', 'application/json')
    .send(modificietUserForFesponse)
}


const userPut=(req,reply)=>{
    const {id} = req.params
const modifiedUser= usersService.modify(id,req.body)
const modForReply=User.toResponse(modifiedUser)
reply
.send(modForReply)
}

module.exports={getAll,getById,userDelete,userPost,userPut}