"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
/**
 * this class generates id
 * this class generates user
 */
class User {
    /**
     * generates id with uuid
     * @param param0 {req.body}
     *
     */
    constructor({ id = (0, uuid_1.v4)(), name = 'USER', login = 'user', password = 'P@55w0rd' } = {}) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    /**
     * this metod retunrns NO PASSWORD
     * @params user @type { id, name, login,password }
     * @returns { id, name, login }
     */
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
exports.default = User;
