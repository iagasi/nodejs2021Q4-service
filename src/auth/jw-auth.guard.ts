import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";
@Injectable()
export class JwtAuthGuard implements CanActivate{
    constructor(private tokenService:TokenService){}
  async  canActivate(context: ExecutionContext) {
       const req=context.switchToHttp().getRequest()
   
    try{
    
    
        
const AuthorizationHeader=req.headers.authorization
if(!AuthorizationHeader){
    throw new UnauthorizedException("Auth header not present") 
   
}
const bearer=AuthorizationHeader.split(" ")[0]
const token=AuthorizationHeader.split(" ")[1]

if(!bearer||!token){
    throw new UnauthorizedException("problem with header")
}


const user=await this.tokenService.verifyToken(token)


if (user){req.user=user
return true}
else{return false}
    }
    catch(error){
       console.log(error);
        
throw new UnauthorizedException("the user not authorized")
    }
} 
}