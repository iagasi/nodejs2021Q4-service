"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("./user.model"));
const user_service_1 = __importDefault(require("./user.service"));
const user_service_2 = __importDefault(require("./user.service"));
const getAll = async (req, reply) => {
    const users = await user_service_2.default.getAll();
    reply.code(200);
    reply.send(users.map((concreteUser) => user_model_1.default.toResponse(concreteUser)));
};
const getById = async (req, reply) => {
    const { id } = req.params;
    const foundUser = await user_service_1.default.getById(id);
    if (foundUser !== undefined) {
        const modifiedUser = user_model_1.default.toResponse(foundUser);
        reply.code(200).send(modifiedUser);
    }
    else {
        reply.code(404).send('not found this user id');
    }
};
const userDelete = async (req, reply) => {
    const { id } = req.params;
    const unasighned = await user_service_2.default.deleteUser(id);
    reply.code(200);
    reply.send({ ...unasighned });
};
const userPost = async (req, reply) => {
    let options;
    if (typeof req.body === 'string') {
        options = JSON.parse(req.body);
    }
    else {
        options = req.body;
    }
    const { name, login, password } = options;
    const newUser = new user_model_1.default({ name, login, password });
    const newCreatedUser = await user_service_2.default.create(newUser);
    if (newCreatedUser) {
        const modificietUserForFesponse = user_model_1.default.toResponse(newCreatedUser);
        return reply
            .code(201)
            .header('Content-Type', 'application/json')
            .send(modificietUserForFesponse);
    }
    reply.send();
};
const userPut = async (req, reply) => {
    const { id } = req.params;
    const modifiedUser = await user_service_2.default.modify(id, req.body);
    if (modifiedUser) {
        const modForReply = user_model_1.default.toResponse(modifiedUser);
        reply.header('Content-Type', 'application/json').send({ ...modForReply });
    }
    else {
        reply
            .code(404)
            .header('Content-Type', 'application/json')
            .send('cannot find this user');
    }
};
exports.default = { getAll, getById, userDelete, userPost, userPut };
//# sourceMappingURL=user.controller.js.map