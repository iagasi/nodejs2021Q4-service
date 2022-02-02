import { BadRequestException, HttpCode, HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tasks_db } from "src/tasks/tasks.entity";
import { TasksService } from "src/tasks/tasks.service";
import { IUser } from "./users.dto";
import { User_db } from "./user.entity";
import User from "./user.model";

@Injectable()
export class UserService{
   constructor(@InjectRepository(User_db) private userRepository:typeof User_db,
   @InjectRepository(Tasks_db)            private taskRepository:typeof Tasks_db){}



   async getAll(){
      const user=await this.userRepository.find()
      
      return user.map((currentUser:IUser)=>User.toResponse(currentUser))

   }
   
  async  getById(id:string){
    const user=await User_db.findOne(id)
 if(user!==undefined){
     const modifyUser=User.toResponse(user)
     return modifyUser
     // 
 }
 else{throw new BadRequestException('not found this user id')}
  }


async getByLogin(login:string){
  const user=await this.userRepository.findOne({login:login})
  return user
}


  async create (data_of_User: IUser)  {

    const genereateUser=new User({...data_of_User})
    const newUser=User_db.create(genereateUser)

    await newUser.save()
    return User.toResponse(newUser)
  }

  async update(id: string, options: IUser) {
    const user= await  User_db.update({id:id},options)
     return await User_db.findOneOrFail(id)
    }
  

    async delete(id: string) {
         await Tasks_db.update({userId:id},{userId:null})
         await User_db.delete({id:id})
           const y= await Tasks_db.findOne({id:id})
        return y
}



}