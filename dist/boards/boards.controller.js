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
exports.BoardsController = void 0;
const common_1 = require("@nestjs/common");
const boards_service_1 = require("./boards.service");
const lib_1 = require("../lib");
const boards_dto_1 = require("./boards.dto");
const jw_auth_guard_1 = require("../auth/jw-auth.guard");
let BoardsController = class BoardsController {
    constructor(boardService) {
        this.boardService = boardService;
    }
    getAll() {
        return this.boardService.getAll();
    }
    getById(id) {
        return this.boardService.getById(id);
    }
    create(body) {
        return this.boardService.create(body);
    }
    update(id, body) {
        return this.boardService.update(id, body);
    }
    delete(id) {
        return this.boardService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(lib_1.default.boards.getAll),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(lib_1.default.boards.getById(":id")),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(lib_1.default.boards.create),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [boards_dto_1.BoardDto]),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(lib_1.default.boards.update(":id")),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, boards_dto_1.BoardDto]),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(lib_1.default.boards.delete(":id")),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "delete", null);
BoardsController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseGuards)(jw_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [boards_service_1.BoardsService])
], BoardsController);
exports.BoardsController = BoardsController;
//# sourceMappingURL=boards.controller.js.map