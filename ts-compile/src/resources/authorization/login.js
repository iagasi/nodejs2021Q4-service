"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const User_db_1 = require("../../database/entities/User_db");
const bycrypt = __importStar(require("bcrypt"));
const jwt_1 = require("./jwt");
const login = async (fastify) => {
    fastify.post('/login', async (req, reply) => {
        const { login, password } = req.body;
        const candidate = await User_db_1.User_db.findOne({ login: login });
        let checkPassword;
        if (candidate) {
            checkPassword = await bycrypt.compare(password, candidate.password);
        }
        if (candidate && checkPassword) {
            const token = await (0, jwt_1.singhAcessToken)(candidate.id, login);
            reply.code(200).send({ token: token });
        }
        else {
            reply.code(403).send("usernotfound");
        }
    });
};
exports.login = login;
exports.default = exports.login;
//# sourceMappingURL=login.js.map