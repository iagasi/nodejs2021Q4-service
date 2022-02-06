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
exports.IUser = void 0;
const class_validator_1 = require("class-validator");
class IUser {
}
__decorate([
    (0, class_validator_1.IsString)({ message: "name must be string" }),
    __metadata("design:type", String)
], IUser.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "login must be string" }),
    __metadata("design:type", String)
], IUser.prototype, "login", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "password must be string" }),
    (0, class_validator_1.Length)(3, 30, { message: "password mustbe not less than 3 sumbol" }),
    __metadata("design:type", String)
], IUser.prototype, "password", void 0);
exports.IUser = IUser;
//# sourceMappingURL=users.dto.js.map