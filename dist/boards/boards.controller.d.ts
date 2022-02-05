import { BoardsService } from './boards.service';
import { BoardDto } from './boards.dto';
export declare class BoardsController {
    private boardService;
    constructor(boardService: BoardsService);
    getAll(): Promise<import("./boards.entity").Board_db[]>;
    getById(id: string): Promise<import("./boards.entity").Board_db>;
    create(body: BoardDto): Promise<import("./boards.entity").Board_db>;
    update(id: string, body: BoardDto): Promise<import("./boards.entity").Board_db>;
    delete(id: string): Promise<import("./boards.entity").Board_db>;
}
