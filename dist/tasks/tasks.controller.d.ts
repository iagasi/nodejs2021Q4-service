import { TaskDto } from './tasks.dto';
import { TasksService } from './tasks.service';
export declare class TasksController {
    taskService: TasksService;
    constructor(taskService: TasksService);
    getAllByBoardId(boardId: string): Promise<import("./tasks.entity").Tasks_db[]>;
    getById(boardId: string, taskId: string): Promise<any>;
    create(task: TaskDto, boardId: string): Promise<import("./tasks.entity").Tasks_db>;
    update(boardId: string, taskId: string, task: TaskDto): Promise<import("./tasks.entity").Tasks_db>;
    delete(boardId: string, taskId: string): Promise<import("typeorm").DeleteResult>;
}
