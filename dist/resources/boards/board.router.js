"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller = require("./board.controller");
var routes = require("../lib");
var boardRouter = function (fastify, options, done) {
    fastify.get(routes.boards.getAll, function (req, reply) {
        var getAllBoards = controller.getAll();
        reply
            .code(200)
            .send(getAllBoards);
    });
    fastify.get(routes.boards.getById(":id"), function (req, reply) {
        controller.getById(req, reply);
    });
    fastify.post(routes.boards.create, function (req, reply) {
        controller.createBoard(req, reply);
    });
    fastify.put(routes.boards.update(":id"), function (req, reply) {
        controller.modifyBoard(req, reply);
    });
    fastify.delete(routes.boards.delete(":id"), function (req, reply) {
        controller.deleteBoard(req, reply);
    });
    done();
};
exports.default = boardRouter;
