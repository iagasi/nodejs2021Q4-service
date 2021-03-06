import { BoardDto } from "./boards.dto";
export declare class BoardModel {
    generateBoard(data: BoardDto): {
        id: string;
        title: string;
        columns: {
            title: string;
            order: number;
        }[];
    };
}
