import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Board_db } from 'src/boards/boards.entity';
import { User_db } from 'src/users/user.entity';
import { TasksController } from './tasks.controller';
import { Tasks_db } from './tasks.entity';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers:[TasksService],
  imports:[
  TypeOrmModule.forFeature([Tasks_db,Board_db,User_db]),
  forwardRef(()=> AuthModule)
 ],
  exports:[TasksService]

})
export class TasksModule {}
