"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpInterceptor = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("./winston");
let CustomHttpInterceptor = class CustomHttpInterceptor {
    async use(req, res, next) {
        winston_1.default.info(" body is-" + JSON.stringify(req.body) + " ,url is----" + req.path + ", query is---" + JSON.stringify(req.params));
        next();
        winston_1.default.info("response is ---" + res.statusCode);
    }
};
CustomHttpInterceptor = __decorate([
    (0, common_1.Injectable)()
], CustomHttpInterceptor);
exports.CustomHttpInterceptor = CustomHttpInterceptor;
//# sourceMappingURL=Middleware.js.map