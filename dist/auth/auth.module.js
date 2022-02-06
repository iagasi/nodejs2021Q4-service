"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tasks_entity_1 = require("../tasks/tasks.entity");
const tasks_module_1 = require("../tasks/tasks.module");
const user_entity_1 = require("../users/user.entity");
const user_module_1 = require("../users/user.module");
const user_service_1 = require("../users/user.service");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const token_service_1 = require("./token.service");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, token_service_1.TokenService, user_service_1.UserService],
        imports: [
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User_db, tasks_entity_1.Tasks_db]),
        ],
        exports: [
            auth_service_1.AuthService,
            token_service_1.TokenService
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map