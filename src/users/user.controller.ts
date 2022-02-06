import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import route from "../lib";
import  {IUser}  from "./users.dto";
import { JwtAuthGuard } from "src/auth/jw-auth.guard";


@Controller()
 export class UserController {
     constructor(private userService: UserService) { }
     @UseGuards(JwtAuthGuard)
    @Get(route.users.getAll)
    async getAll() {
     
        
        const users = this.userService.getAll()
        return users
    }
    
    @UseGuards(JwtAuthGuard)
    @Get(route.users.getById(":id"))
    async getById(@Param("id") id: string) {
        
        const foundUser = await this.userService.getById(id)
        return foundUser
    };
    @UseGuards(JwtAuthGuard)
     @Post(route.users.create)
  async create (@Body() user:IUser){
      console.log(user);
      
      
      const newUser=this.userService.create(user)
        return newUser
  }
  @UseGuards(JwtAuthGuard)
    @Put(route.users.update(":id"))
    async update(@Param("id") id:string, @Body() user:IUser) {
     
        const updated= this.userService.update(id,user)
        return updated 
    }
 
   @UseGuards(JwtAuthGuard)
    @Delete(route.users.delete(":id"))
    async delete(@Param("id") id:string){
        this.userService.delete(id)

    }

}