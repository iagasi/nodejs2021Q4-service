import { BaseEntity } from "typeorm";
import { Board_db } from "./boards.entity";
export declare class Columns_db extends BaseEntity {
    id: string;
    title: string;
    order: number;
    board: Board_db;
}
