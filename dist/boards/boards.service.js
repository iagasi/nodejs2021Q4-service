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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const boards_entity_1 = require("./boards.entity");
const boards_model_1 = require("./boards.model");
const columns_entity_1 = require("./columns.entity");
const tasks_entity_1 = require("../tasks/tasks.entity");
let BoardsService = class BoardsService {
    constructor(boardRepository, columnRepository, taskRepository, boardModel) {
        this.boardRepository = boardRepository;
        this.columnRepository = columnRepository;
        this.taskRepository = taskRepository;
        this.boardModel = boardModel;
    }
    async getAll() {
        return await this.boardRepository.find({ relations: ["columns"] });
    }
    async getById(id) {
        const board = await this.boardRepository.findOne({ id: id }, { relations: ["columns"] });
        if (board) {
            return board;
        }
        else {
            throw new common_1.HttpException(" Board not foud", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async create(body) {
        var e_1, _a;
        let data;
        if (typeof body === "string") {
            data = JSON.parse(body);
        }
        else {
            data = body;
        }
        const modelOfBoard = this.boardModel.generateBoard(data);
        const createdBoard = await this.boardRepository.create(modelOfBoard).save();
        const columns = createdBoard.columns;
        try {
            for (var columns_1 = __asyncValues(columns), columns_1_1; columns_1_1 = await columns_1.next(), !columns_1_1.done;) {
                const iterator = columns_1_1.value;
                const column = await columns_entity_1.Columns_db.create({ title: iterator.title, order: iterator.order, board: createdBoard }).save();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (columns_1_1 && !columns_1_1.done && (_a = columns_1.return)) await _a.call(columns_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!createdBoard) {
            throw new common_1.HttpException("", 500);
        }
        else {
            return await this.boardRepository.findOne({ id: modelOfBoard.id }, { relations: ["columns"] });
        }
    }
    async update(id, board) {
        const updateBoard = this.boardModel.generateBoard(Object.assign({ id: id }, board));
        await this.boardRepository.update({ id: id }, { title: updateBoard.title });
        return this.boardRepository.findOne(id);
    }
    async delete(id) {
        const candidate = await this.boardRepository.findOne(id);
        if (candidate) {
            await this.taskRepository.delete({ boardId: candidate.id });
            await this.columnRepository.delete({ board: candidate });
            await this.boardRepository.delete(id);
            return candidate;
        }
        else {
            return undefined;
        }
    }
};
BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(boards_entity_1.Board_db)),
    __param(1, (0, typeorm_1.InjectRepository)(columns_entity_1.Columns_db)),
    __param(2, (0, typeorm_1.InjectRepository)(tasks_entity_1.Tasks_db)),
    __metadata("design:paramtypes", [Object, Object, Object, boards_model_1.BoardModel])
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map