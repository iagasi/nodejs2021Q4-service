import { IUser } from "./users.dto";
declare class User implements IUser {
    id: string;
    name: string;
    login: string;
    password: string;
    constructor({ id, name, login, password }?: {
        id?: string;
        name?: string;
        login?: string;
        password?: string;
    });
    static toResponse(user: IUser): {
        id: string;
        name: string;
        login: string;
    };
}
export default User;
