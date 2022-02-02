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
exports.Columns_db = void 0;
const typeorm_1 = require("typeorm");
const boards_entity_1 = require("./boards.entity");
let Columns_db = class Columns_db extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Columns_db.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Columns_db.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Columns_db.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => boards_entity_1.Board_db, board => board.columns),
    __metadata("design:type", boards_entity_1.Board_db)
], Columns_db.prototype, "board", void 0);
Columns_db = __decorate([
    (0, typeorm_1.Entity)()
], Columns_db);
exports.Columns_db = Columns_db;
//# sourceMappingURL=columns.entity.js.map