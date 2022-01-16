"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_controller_1 = __importDefault(require("./board.controller"));
const lib_1 = __importDefault(require("../lib"));
const boardRouter = async (fastify) => {
    fastify.get(lib_1.default.boards.getAll, (req, reply) => {
        board_controller_1.default.getAll(req, reply);
    });
    fastify.get(lib_1.default.boards.getById(":id"), (req, reply) => {
        board_controller_1.default.getById(req, reply);
    });
    fastify.post(lib_1.default.boards.create, (req, reply) => {
        board_controller_1.default.createBoard(req, reply);
    });
    fastify.put(lib_1.default.boards.update(":id"), (req, reply) => {
        board_controller_1.default.modifyBoard(req, reply);
    });
    fastify.delete(lib_1.default.boards.delete(":id"), (req, reply) => {
        board_controller_1.default.deleteBoard(req, reply);
    });
};
exports.default = boardRouter;
//# sourceMappingURL=board.router.js.map