"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_controller_1 = __importDefault(require("./board.controller"));
const lib_1 = __importDefault(require("../lib"));
const boardRouter = async (fastify) => {
    /**
     * @returns   .code(200) .send(All boards from db) @type {Array<objects>}
      
     */
    fastify.get(lib_1.default.boards.getAll, (req, reply) => {
        const getAllBoards = board_controller_1.default.getAll();
        reply
            .code(200)
            .send(getAllBoards);
    });
    /**
     * @function fastify.get(:id) calls with HTTP.get request with Dynamic ID
     *
     */
    fastify.get(lib_1.default.boards.getById(":id"), (req, reply) => {
        board_controller_1.default.getById(req, reply);
    });
    /**
     *  @function fastify.post() calls with HTTP.post
     */
    fastify.post(lib_1.default.boards.create, (req, reply) => {
        board_controller_1.default.createBoard(req, reply);
    });
    /**
     *  @function fastify.put(:id) calls with HTTP.put request with Dynamic ID
     */
    fastify.put(lib_1.default.boards.update(":id"), (req, reply) => {
        board_controller_1.default.modifyBoard(req, reply);
    });
    /**
     *  @function fastify.delete(:id) calls with HTTP.delete request with Dynamic ID
     *
     */
    fastify.delete(lib_1.default.boards.delete(":id"), (req, reply) => {
        board_controller_1.default.deleteBoard(req, reply);
    });
};
exports.default = boardRouter;
