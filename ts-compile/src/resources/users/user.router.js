"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("./user.controller"));
const lib_1 = __importDefault(require("../lib"));
const getAllUsers = async (fastify) => {
    fastify.get(lib_1.default.users.getAll, (req, reply) => {
        user_controller_1.default.getAll(req, reply);
    });
    fastify.get(lib_1.default.users.getById(":id"), (req, reply) => {
        user_controller_1.default.getById(req, reply);
    });
    fastify.post(lib_1.default.users.create, (req, reply) => {
        user_controller_1.default.userPost(req, reply);
    });
    fastify.put(lib_1.default.users.update(":id"), (req, reply) => {
        user_controller_1.default.userPut(req, reply);
    });
    fastify.delete(lib_1.default.users.delete(":id"), (req, reply) => {
        user_controller_1.default.userDelete(req, reply);
    });
};
exports.default = getAllUsers;
//# sourceMappingURL=user.router.js.map