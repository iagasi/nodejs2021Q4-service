"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("./winston"));
// const u=(err:any)=>{
//     return new Promise((resolve,reject) => {
//         // do some async task
//         resolve(  logger.error(err.message));
//      });
// }
function LoggerandErrorHandler(fastify) {
    fastify.addHook("preValidation", async (req, reply) => {
        const { body, url, query } = req;
        winston_1.default.info(" body is-" + JSON.stringify(body) + " ,url is----" + url + ", query is---" + JSON.stringify(query));
    });
    fastify.addHook("onResponse", (req, reply) => {
        winston_1.default.info("reply statuscode----" + reply.statusCode);
    });
    process.on('uncaughtException', async (err, origin) => {
        winston_1.default.error(err.message);
        setTimeout(() => { process.exit(1); }, 1000);
    });
    process.on("unhandledRejection", (reason) => {
        winston_1.default.error(reason.message);
        setTimeout(() => { process.exit(1); }, 1000);
    });
}
exports.default = LoggerandErrorHandler;
