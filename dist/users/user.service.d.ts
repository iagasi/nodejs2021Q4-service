import { Tasks_db } from "src/tasks/tasks.entity";
import { IUser } from "./users.dto";
import { User_db } from "./user.entity";
export declare class UserService {
    private userRepository;
    private taskRepository;
    constructor(userRepository: typeof User_db, taskRepository: typeof Tasks_db);
    getAll(): Promise<{
        id: string;
        name: string;
        login: string;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        name: string;
        login: string;
    }>;
    getByLogin(login: string): Promise<User_db>;
    create(data_of_User: IUser): Promise<{
        id: string;
        name: string;
        login: string;
    }>;
    update(id: string, options: IUser): Promise<User_db>;
    delete(id: string): Promise<Tasks_db>;
}
