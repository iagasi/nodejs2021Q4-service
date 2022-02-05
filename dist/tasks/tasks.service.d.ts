import { TaskDto } from './tasks.dto';
import { Tasks_db } from './tasks.entity';
export declare class TasksService {
    taskRepository: typeof Tasks_db;
    constructor(taskRepository: typeof Tasks_db);
    getAll(): Promise<Tasks_db[]>;
    getById(boardId: string, taskId: string): Promise<any>;
    create(options: TaskDto, boardId: string): Promise<Tasks_db>;
    update(boardId: string, taskId: string, receivedTask: TaskDto): Promise<Tasks_db>;
    delete(boardId: string, taskId: string): Promise<import("typeorm").DeleteResult>;
}
