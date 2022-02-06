import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasks_db } from 'src/tasks/tasks.entity';
import { TasksModule } from 'src/tasks/tasks.module';
import { User_db } from 'src/users/user.entity';
import { UserModule } from 'src/users/user.module';
import { UserService } from 'src/users/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService,TokenService,UserService],
  imports:[
    forwardRef(()=>UserModule),
   
    TypeOrmModule.forFeature([User_db,Tasks_db]),
  
  ],
  exports:[
    AuthService,
    TokenService
   
  ]
  
})
export class AuthModule {}
