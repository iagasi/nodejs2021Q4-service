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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const jw_auth_guard_1 = require("../auth/jw-auth.guard");
const lib_1 = require("../lib");
const tasks_dto_1 = require("./tasks.dto");
const tasks_service_1 = require("./tasks.service");
let TasksController = class TasksController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    getAllByBoardId(boardId) {
        return this.taskService.getAll();
    }
    getById(boardId, taskId) {
        return this.taskService.getById(boardId, taskId);
    }
    create(task, boardId) {
        return this.taskService.create(task, boardId);
    }
    update(boardId, taskId, task) {
        return this.taskService.update(boardId, taskId, task);
    }
    delete(boardId, taskId) {
        return this.taskService.delete(boardId, taskId);
    }
};
__decorate([
    (0, common_1.Get)(lib_1.default.tasks.getAll(":boardId")),
    __param(0, (0, common_1.Param)("boardId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "getAllByBoardId", null);
__decorate([
    (0, common_1.Get)(lib_1.default.tasks.getById(":boardId", ":taskId")),
    __param(0, (0, common_1.Param)("boardId")),
    __param(1, (0, common_1.Param)("taskId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(lib_1.default.tasks.create(":boardId")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("boardId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tasks_dto_1.TaskDto, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(lib_1.default.tasks.update(":boardId", ":taskId")),
    __param(0, (0, common_1.Param)("boardId")),
    __param(1, (0, common_1.Param)("taskId")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, tasks_dto_1.TaskDto]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(lib_1.default.tasks.delete(":boardId", ":taskId")),
    __param(0, (0, common_1.Param)("boardId")),
    __param(1, (0, common_1.Param)("taskId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "delete", null);
TasksController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseGuards)(jw_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map