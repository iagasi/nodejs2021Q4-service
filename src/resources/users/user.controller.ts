import { FastifyReply, FastifyRequest } from 'fastify';
import { IUser, ReqBody } from './interfaces';

import User from './user.model';
import userService from './user.service';
import usersService from './user.service';

import unasighnUser from "../tasks/task.controller"


/**
 *
 * @param req -null
 * @param reply
 * @returns reply.send(200) @type { Array<object>}  without password
 */
const getAll = async (req: FastifyRequest, reply: FastifyReply) => {
  const users = await usersService.getAll();
  reply.code(200);
  reply.send(users.map((concreteUser: IUser) => User.toResponse(concreteUser)));
};

 /**
  * finds user by id 
  * @param req FastifyRequest
  * @param reply FastifyReply
  * returns found user | type string 'not found this user id'
  * 
  */
const getById = async (req: FastifyRequest, reply: FastifyReply) => {

  const { id } = req.params as { id: string };
  const foundUser = await userService.getById(id)

  if (foundUser !== undefined) {
    const modifiedUser = User.toResponse(foundUser);
    reply.code(200).send(modifiedUser);
  } else {
    reply.code(404).send('not found this user id');
  }
};
/**
 * Deletes existing user
 * @param req 
 * @param reply 
 * returns text deleted
 */
const userDelete =async (req: FastifyRequest, reply: FastifyReply) => {

  const { id } = req.params as { id: string }
 const unasighned= await usersService.deleteUser(id);
 

  
  reply.code(200);
  reply.send({...unasighned});
};
/**
 * Creates new user
 * @param req 
 * @param reply 
 * @returns new created user
 */
const userPost = async (req: FastifyRequest, reply: FastifyReply) => {

  let options;
  if (typeof req.body === 'string') {
    options = JSON.parse(req.body);
  } else {
    options = req.body;
  }
  const { name, login, password } = options as ReqBody;

  const newUser: IUser = new User({ name, login, password });
  
 const newCreatedUser= await usersService.create(newUser);


 // const newCreatedUser = users.find((user) => user.id === id);

  if (newCreatedUser) {
    const modificietUserForFesponse = User.toResponse(newCreatedUser);

    return reply
      .code(201)
      .header('Content-Type', 'application/json')
      .send(modificietUserForFesponse);
  } 
    reply.send();
  
};
/**
 * Modifies existing user data
 * @param req 
 * @param reply 
 * takes id from req.params
 * @returns modifies user | text cannot find this user
 */
const userPut = async(req: FastifyRequest, reply: FastifyReply) => {
  const { id } = req.params as { id: string };

  const modifiedUser = await usersService.modify(id, req.body as IUser);

  if (modifiedUser) {
    const modForReply =  User.toResponse(modifiedUser);

    reply.header('Content-Type', 'application/json').send({ ...modForReply });
  } else {
    reply
      .code(404)
      .header('Content-Type', 'application/json')
      .send('cannot find this user');
  }
};

export default { getAll, getById, userDelete, userPost, userPut };
