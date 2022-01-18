"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regRouter = async (fastify) => {
    fastify.get('/l', async (req, reply) => {
        reply.send("loginnnn");
    });
};
exports.default = regRouter;
//# sourceMappingURL=index.js.map