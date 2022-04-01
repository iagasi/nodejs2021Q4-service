import { BaseEntity } from "typeorm";
export declare class Tasks_db extends BaseEntity {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    USERID: string | null;
    boardId: string | null;
    BOARDID: string | null;
    columnId: string;
}
