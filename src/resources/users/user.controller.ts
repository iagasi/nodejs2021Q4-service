import { FastifyReply, FastifyRequest } from 'fastify';
import { IUser, ReqBody } from './interfaces';

import User from './user.model';
import userService from './user.service';
import usersService from './user.service';

import unasighnUser from "../tasks/task.controller"

/**
 *
 * @param req -null
 * @param reply.send(200) @type { Array<object>}  without password
 */
const getAll = (req: FastifyRequest, reply: FastifyReply) => {
  const users = usersService.getAll();
  reply.code(200);
  reply.send(users.map((concreteUser: IUser) => User.toResponse(concreteUser)));
};

const getById = async (req: FastifyRequest, reply: FastifyReply) => {
  const users = usersService.getAll();
  const { id } = req.params as { id: string };
  const foundUser = users.find((user) => user.id === id);

  if (foundUser !== undefined) {
    const modifiedUser = User.toResponse(foundUser);
    reply.code(200).send(modifiedUser);
  } else {
    reply.code(404).send('not found this user id');
  }
};

const userDelete = (req: FastifyRequest, reply: FastifyReply) => {
  const { id } = req.params as { id: string }
  usersService.deleteUser(id);
  unasighnUser.unasighnUser(id)
  reply.code(200);
  reply.send('deleted');
};

const userPost = async (req: FastifyRequest, reply: FastifyReply) => {
  const users = userService.getAll();

  let options;
  if (typeof req.body === 'string') {
    options = JSON.parse(req.body);
  } else {
    options = req.body;
  }
  const { name, login, password } = options as ReqBody;

  const newUser: IUser = new User({ name, login, password });
  const { id } = newUser;
  usersService.create({ ...newUser });

  const newCreatedUser = users.find((user) => user.id === id);

  if (newCreatedUser) {
    const modificietUserForFesponse = User.toResponse(newCreatedUser);

    return reply
      .code(201)
      .header('Content-Type', 'application/json')
      .send(modificietUserForFesponse);
  } 
    reply.send();
  
};

const userPut = (req: FastifyRequest, reply: FastifyReply) => {
  const { id } = req.params as { id: string };

  const modifiedUser = usersService.modify(id, req.body as IUser);

  if (modifiedUser) {
    const modForReply = User.toResponse(modifiedUser);

    reply.header('Content-Type', 'application/json').send({ ...modifiedUser });
  } else {
    reply
      .code(404)
      .header('Content-Type', 'application/json')
      .send('cannot find this user');
  }
};

export default { getAll, getById, userDelete, userPost, userPut };
