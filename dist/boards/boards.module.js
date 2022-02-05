"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const tasks_entity_1 = require("../tasks/tasks.entity");
const boards_controller_1 = require("./boards.controller");
const boards_entity_1 = require("./boards.entity");
const boards_model_1 = require("./boards.model");
const boards_service_1 = require("./boards.service");
const columns_entity_1 = require("./columns.entity");
let BoardsModule = class BoardsModule {
};
BoardsModule = __decorate([
    (0, common_1.Module)({
        controllers: [boards_controller_1.BoardsController],
        providers: [boards_service_1.BoardsService, boards_model_1.BoardModel],
        imports: [typeorm_1.TypeOrmModule.forFeature([boards_entity_1.Board_db, columns_entity_1.Columns_db, tasks_entity_1.Tasks_db]),
            boards_model_1.BoardModel,
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule)
        ]
    })
], BoardsModule);
exports.BoardsModule = BoardsModule;
//# sourceMappingURL=boards.module.js.map