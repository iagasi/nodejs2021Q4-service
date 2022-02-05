import * as jwt from "jsonwebtoken";
export declare class TokenService {
    generateToken(userId: string, login: string): Promise<unknown>;
    verifyToken(token: string): Promise<string | jwt.JwtPayload>;
}
