"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const token_service_1 = require("./token.service");
const user_service_1 = require("../users/user.service");
const users_dto_1 = require("../users/users.dto");
let AuthService = class AuthService {
    constructor(userService, tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async register(user) {
        const candidate = await this.userService.getByLogin(user.login);
        if (candidate) {
            throw new common_1.HttpException("user already exists", common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(user.password, 10);
        const newUser = await this.userService.create(Object.assign(Object.assign({}, user), { password: hashPassword }));
        return this.tokenService.generateToken(newUser.id, newUser.login);
    }
    async login(user) {
        let veryfiedPassword = false;
        let token;
        const findUser = await this.userService.getByLogin(user.login);
        if (findUser) {
            veryfiedPassword = await bcrypt.compare(user.password, findUser.password);
        }
        if (!findUser) {
            return user.login + "user with this email or password not found";
        }
        if (veryfiedPassword && findUser) {
            token = await this.tokenService.generateToken(findUser.id, findUser.login);
            return { token };
        }
        else {
            return veryfiedPassword + "token not generated";
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        token_service_1.TokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map