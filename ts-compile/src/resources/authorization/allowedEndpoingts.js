"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowedAndpoints = void 0;
const jwt_1 = require("./jwt");
const allowedAndpoints = (fastify) => {
    fastify.addHook('onRequest', async (req, reply) => {
        const { body, url, query } = req;
        const token = req.headers.authorization;
        let createUser = false;
        if (url !== "/login" && url !== "/doc" && url !== "/" && !createUser) {
            let verified;
            if (!token) {
                reply.code(401).send("unauthorized");
                return undefined;
            }
            if (token) {
                verified = await (0, jwt_1.verifyToken)(token);
            }
            if (!verified) {
                reply.code(401).send(verified);
            }
        }
    });
};
exports.allowedAndpoints = allowedAndpoints;
//# sourceMappingURL=allowedEndpoingts.js.map