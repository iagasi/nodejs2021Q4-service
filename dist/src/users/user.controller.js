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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const lib_1 = require("../lib");
const users_dto_1 = require("./users.dto");
const jw_auth_guard_1 = require("../auth/jw-auth.guard");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAll() {
        const users = this.userService.getAll();
        return users;
    }
    async getById(id) {
        const foundUser = await this.userService.getById(id);
        return foundUser;
    }
    ;
    async create(user) {
        const newUser = this.userService.create(user);
        return newUser;
    }
    async update(id, user) {
        const updated = this.userService.update(id, user);
        return updated;
    }
    async delete(id) {
        this.userService.delete(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jw_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(lib_1.default.users.getAll),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.UseGuards)(jw_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(lib_1.default.users.getById(":id")),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getById", null);
__decorate([
    (0, common_1.UseGuards)(jw_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(lib_1.default.users.create),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.IUser]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jw_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(lib_1.default.users.update(":id")),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, users_dto_1.IUser]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jw_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(lib_1.default.users.delete(":id")),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
UserController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map