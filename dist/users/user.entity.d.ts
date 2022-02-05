import { BaseEntity } from "typeorm";
export declare class User_db extends BaseEntity {
    id: string;
    name: string;
    login: string;
    password: string;
}
