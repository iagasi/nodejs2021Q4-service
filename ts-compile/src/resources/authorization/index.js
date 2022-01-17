"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regRouter = async (fastify) => {
    console.log("eeeeee");
    fastify.get('/l', async (req, reply) => {
        await reply.send("loginnnn");
    });
};
exports.default = regRouter;
//# sourceMappingURL=index.js.map