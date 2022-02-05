import { TokenService } from './token.service';
import { UserService } from 'src/users/user.service';
import { IUser } from 'src/users/users.dto';
export declare class AuthService {
    private userService;
    private tokenService;
    constructor(userService: UserService, tokenService: TokenService);
    register(user: IUser): Promise<unknown>;
    login(user: IUser): Promise<string | {
        token: any;
    }>;
}
