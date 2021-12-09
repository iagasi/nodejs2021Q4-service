"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
// const swaggerUI = require('fastify-swagger');
// const path = require('path');
// const YAML = require('yamljs');
// import userRouter from './resources/users/user.router';
// import taskRouter from "./resources/tasks/task.router";
var board_router_1 = __importDefault(require("./resources/boards/board.router"));
//
var app = (0, fastify_1.default)();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
app.register(board_router_1.default);
// app.register( userRouter);
// app.register(taskRouter)
app.get('/', function (_, reply) {
    reply.send("Service working");
});
exports.default = app;
