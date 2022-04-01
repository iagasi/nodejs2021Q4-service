import { User_db } from 'src/users/user.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: User_db): Promise<string | {
        token: any;
    }>;
    register(body: User_db): Promise<unknown>;
}
