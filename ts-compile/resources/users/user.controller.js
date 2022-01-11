"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("./user.model"));
const user_service_1 = __importDefault(require("./user.service"));
const user_service_2 = __importDefault(require("./user.service"));
const task_controller_1 = __importDefault(require("../tasks/task.controller"));
/**
 *
 * @param req -null
 * @param reply
 * @returns reply.send(200) @type { Array<object>}  without password
 */
const getAll = (req, reply) => {
    const users = user_service_2.default.getAll();
    reply.code(200);
    reply.send(users.map((concreteUser) => user_model_1.default.toResponse(concreteUser)));
};
/**
 * finds user by id
 * @param req FastifyRequest
 * @param reply FastifyReply
 * returns found user | type string 'not found this user id'
 *
 */
const getById = async (req, reply) => {
    const users = user_service_2.default.getAll();
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    if (foundUser !== undefined) {
        const modifiedUser = user_model_1.default.toResponse(foundUser);
        reply.code(200).send(modifiedUser);
    }
    else {
        reply.code(404).send('not found this user id');
    }
};
/**
 * Deletes existing user
 * @param req
 * @param reply
 * returns text deleted
 */
const userDelete = (req, reply) => {
    const { id } = req.params;
    user_service_2.default.deleteUser(id);
    task_controller_1.default.unasighnUser(id);
    reply.code(200);
    reply.send('deleted');
};
/**
 * Creates new user
 * @param req
 * @param reply
 * @returns new created user
 */
const userPost = async (req, reply) => {
    const users = user_service_1.default.getAll();
    let options;
    if (typeof req.body === 'string') {
        options = JSON.parse(req.body);
    }
    else {
        options = req.body;
    }
    const { name, login, password } = options;
    const newUser = new user_model_1.default({ name, login, password });
    const { id } = newUser;
    user_service_2.default.create({ ...newUser });
    const newCreatedUser = users.find((user) => user.id === id);
    if (newCreatedUser) {
        const modificietUserForFesponse = user_model_1.default.toResponse(newCreatedUser);
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
const userPut = (req, reply) => {
    const { id } = req.params;
    const modifiedUser = user_service_2.default.modify(id, req.body);
    if (modifiedUser) {
        const modForReply = user_model_1.default.toResponse(modifiedUser);
        reply.header('Content-Type', 'application/json').send({ ...modifiedUser });
    }
    else {
        reply
            .code(404)
            .header('Content-Type', 'application/json')
            .send('cannot find this user');
    }
};
exports.default = { getAll, getById, userDelete, userPost, userPut };
