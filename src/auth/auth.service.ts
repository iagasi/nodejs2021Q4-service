import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import * as bcrypt from "bcrypt"
import { TokenService } from './token.service';

import { UserService } from 'src/users/user.service';
import { IUser } from 'src/users/users.dto';

@Injectable()
export class AuthService {
  constructor(     private userService:  UserService, 
                   private tokenService: TokenService,  ) { }
                

async register(user:IUser){
 
  const candidate=await this.userService.getByLogin(user.login)
  if(candidate){
    throw new HttpException("user already exists",HttpStatus.BAD_REQUEST)
  }
   const hashPassword= await bcrypt.hash(user.password,10)
   const newUser=await this.userService.create({...user,password:hashPassword})
   return this.tokenService.generateToken(newUser.id,newUser.login)
}




  async login(user: IUser) {
   
    let veryfiedPassword = false
    let token

    const findUser = await this.userService.getByLogin(user.login)
    
    
    if (findUser) {veryfiedPassword = await bcrypt.compare(user.password,findUser.password) }
    if (!findUser) { return user.login+"user with this email or password not found" }
    if (veryfiedPassword && findUser) {
      token = await this.tokenService.generateToken(findUser.id, findUser.login)
      return { token }
    }
    else { return veryfiedPassword+"token not generated" }
  }

}
