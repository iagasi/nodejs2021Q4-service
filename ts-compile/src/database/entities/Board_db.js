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
exports.Board_db = void 0;
const typeorm_1 = require("typeorm");
const Columns_db_1 = require("./Columns_db");
let Board_db = class Board_db extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Board_db.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Board_db.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Columns_db_1.Columns_db, columns => columns.id, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Board_db.prototype, "columns", void 0);
Board_db = __decorate([
    (0, typeorm_1.Entity)()
], Board_db);
exports.Board_db = Board_db;
//# sourceMappingURL=Board_db.js.map