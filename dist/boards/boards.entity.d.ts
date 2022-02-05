import { BaseEntity } from "typeorm";
import { Columns_db } from "./columns.entity";
export declare class Board_db extends BaseEntity {
    id: string;
    title: string;
    columns: Columns_db[];
}
