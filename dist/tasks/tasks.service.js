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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tasks_entity_1 = require("./tasks.entity");
const tasks_model_1 = require("./tasks.model");
let TasksService = class TasksService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getAll() {
        return this.taskRepository.find();
    }
    async getById(boardId, taskId) {
        let toReturn;
        if (taskId) {
            const byTaskId = await this.taskRepository.findOne({ id: taskId });
            toReturn = byTaskId;
        }
        else {
            const byBoardId = await this.taskRepository.findOne({ boardId: boardId });
            toReturn = byBoardId;
        }
        if (!toReturn) {
            throw new common_1.HttpException("", common_1.HttpStatus.NOT_FOUND);
        }
        else
            return toReturn;
    }
    async create(options, boardId) {
        let task;
        if (typeof options === 'string') {
            task = JSON.parse(options);
        }
        else {
            task = options;
        }
        const taskModel = (0, tasks_model_1.default)(task, boardId);
        const newTask = this.taskRepository.create(taskModel);
        await newTask.save();
        return newTask;
    }
    async update(boardId, taskId, receivedTask) {
        const updated = await tasks_entity_1.Tasks_db.update({ id: taskId }, { title: receivedTask.title, order: receivedTask.order, description: receivedTask.description });
        const task = await tasks_entity_1.Tasks_db.findOne({ id: taskId });
        return task;
    }
    async delete(boardId, taskId) {
        return await tasks_entity_1.Tasks_db.delete({ id: taskId });
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tasks_entity_1.Tasks_db)),
    __metadata("design:paramtypes", [Object])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map