import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { TokenService } from "src/auth/token.service";
import { Tasks_db } from "src/tasks/tasks.entity";
import { TasksModule } from "src/tasks/tasks.module";

import { UserController } from "./user.controller";
import { User_db } from "./user.entity";
import { UserService } from "./user.service";

@Module({
    controllers:[UserController],
    imports:[
        TypeOrmModule.forFeature([User_db,Tasks_db]),
       AuthModule,
      
       forwardRef(()=> TasksModule)
      
    ],
    providers:[UserService],
    exports:[UserService]
})
export class UserModule{}