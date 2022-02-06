import { BoardDto } from './boards.dto';
import { Board_db } from './boards.entity';
import { BoardModel } from './boards.model';
import { Columns_db } from './columns.entity';
import { Tasks_db } from 'src/tasks/tasks.entity';
export declare class BoardsService {
    boardRepository: typeof Board_db;
    columnRepository: typeof Columns_db;
    taskRepository: typeof Tasks_db;
    private boardModel;
    constructor(boardRepository: typeof Board_db, columnRepository: typeof Columns_db, taskRepository: typeof Tasks_db, boardModel: BoardModel);
    getAll(): Promise<Board_db[]>;
    getById(id: string): Promise<Board_db>;
    create(body: BoardDto): Promise<Board_db>;
    update(id: string, board: BoardDto): Promise<Board_db>;
    delete(id: string): Promise<Board_db>;
}
