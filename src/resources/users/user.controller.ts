import { FastifyReply, FastifyRequest } from 'fastify';
import { IUser } from './interfaces';

import User from './user.model';
import usersService from './user.service';

const users = usersService.getAll();

const getAll = (req: FastifyRequest, reply: FastifyReply) => {
  reply.code(200);
  reply.send(users.map((concreteUser: IUser) => User.toResponse(concreteUser)));
};

const getById = async (req: FastifyRequest, reply: FastifyReply) => {
  const { id } = req.params as { id: string };
  // const users=usersService.getAll()
  const foundUser =  users.find((user) => user.id === id);
  
  
  if (foundUser !== undefined) {
    const modifiedUser = User.toResponse(foundUser);
    reply.code(200).send(modifiedUser);
  } else {
    reply.code(404).send("not found this user id");
  }
};

const userDelete = (req: FastifyRequest, reply: FastifyReply) => {
  const { id } = req.params as { id: string };

  usersService.deleteUser(id);
  reply.code(200);
  reply.send('deleted');
};

const userPost = async(req: FastifyRequest, reply: FastifyReply) => {
  let options
  if(typeof req.body==="string"){options=JSON.parse(req.body)}
  else{options=req.body}
  const { name, login, password } = options as {
    name: string;
    login: string;
    password: string;
  };

 
  
  
  
  const newUser: IUser =new User({ name, login, password });
  
  
  
 const { id } = newUser;

 
  
  // const users=usersService.getAll()
 usersService.create({ ...newUser });

  const newCreatedUser =  users.find((user) => user.id === id);
 
 
    
  if (newCreatedUser) {
  const modificietUserForFesponse = User.toResponse(newCreatedUser);



  return  reply
      .code(201)
      .header('Content-Type', 'application/json')
   .send(modificietUserForFesponse);
  }
  
console.log(id);
reply.send()


  

   

  
};

const userPut = (req: FastifyRequest, reply: FastifyReply) => {
  const { id } = req.params as { id: string };


  const modifiedUser = usersService.modify(id, req.body as IUser);
 
  
  if (modifiedUser) {
    const modForReply = User.toResponse(modifiedUser);
   
    
    reply
    .header("Content-Type","application/json")
    .send({...modifiedUser});
  } else {
    reply
    .code(404)
    .header("Content-Type","application/json")
    .send('cannot find this user');
  }
};

export default { getAll, getById, userDelete, userPost, userPut };
