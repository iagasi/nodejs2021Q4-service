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
exports.Tasks_db = void 0;
const typeorm_1 = require("typeorm");
const boards_entity_1 = require("../boards/boards.entity");
const user_entity_1 = require("../users/user.entity");
let Tasks_db = class Tasks_db extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Tasks_db.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tasks_db.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Tasks_db.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tasks_db.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tasks_db.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User_db, User_db => User_db.id),
    (0, typeorm_1.JoinColumn)({ name: "userId" }),
    __metadata("design:type", String)
], Tasks_db.prototype, "USERID", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tasks_db.prototype, "boardId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => boards_entity_1.Board_db, Board_db => Board_db.id),
    (0, typeorm_1.JoinColumn)({ name: "boardId" }),
    __metadata("design:type", String)
], Tasks_db.prototype, "BOARDID", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tasks_db.prototype, "columnId", void 0);
Tasks_db = __decorate([
    (0, typeorm_1.Entity)()
], Tasks_db);
exports.Tasks_db = Tasks_db;
//# sourceMappingURL=tasks.entity.js.map