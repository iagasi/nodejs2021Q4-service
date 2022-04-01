import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Tasks_db } from 'src/tasks/tasks.entity';
import { BoardsController } from './boards.controller';
import { Board_db } from './boards.entity';
import { BoardModel } from './boards.model';
import { BoardsService } from './boards.service';
import { Columns_db } from './columns.entity';

@Module({
  controllers:[BoardsController],
  providers: [BoardsService,BoardModel],
  imports:[TypeOrmModule.forFeature([Board_db,Columns_db,Tasks_db]),
   BoardModel,
   forwardRef(()=>AuthModule)
]

})
export class BoardsModule {}
