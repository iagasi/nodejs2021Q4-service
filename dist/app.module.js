"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./users/user.module");
const file_module_1 = require("./file/file.module");
const auth_module_1 = require("./auth/auth.module");
const boards_module_1 = require("./boards/boards.module");
const Middleware_1 = require("./Logging&ErrorHandling/Middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(Middleware_1.CustomHttpInterceptor)
            .forRoutes({ path: "*", method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            user_module_1.UserModule,
            file_module_1.FileModule,
            auth_module_1.AuthModule,
            boards_module_1.BoardsModule,
            Middleware_1.CustomHttpInterceptor
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map