import { UserService } from "./user.service";
import { IUser } from "./users.dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
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
    create(user: IUser): Promise<{
        id: string;
        name: string;
        login: string;
    }>;
    update(id: string, user: IUser): Promise<import("./user.entity").User_db>;
    delete(id: string): Promise<void>;
}
