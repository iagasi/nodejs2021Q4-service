"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jwt = require("jsonwebtoken");
const common_1 = require("@nestjs/common");
const jwtSecret = "10";
let TokenService = class TokenService {
    async generateToken(userId, login) {
        const payload = {
            userId,
            login
        };
        return new Promise((resolve, reject) => {
            jwt.sign(payload, jwtSecret, {}, (error, token) => { resolve(token); });
        });
    }
    async verifyToken(token) {
        try {
            return jwt.verify(token, jwtSecret);
        }
        catch (error) {
            return undefined;
        }
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)()
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map