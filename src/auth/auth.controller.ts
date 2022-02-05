import { Body, Controller, Param, Post } from '@nestjs/common';
import { IUser } from 'src/users/users.dto';
import { User_db } from 'src/users/user.entity';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private authService:AuthService){}

  @Post("/login")
    login(@Body() body:User_db){
     
       return  this.authService.login(body)
    }

  @Post("/register")  
    register(@Body() body:User_db){
      return  this.authService.register(body)
    }
}
