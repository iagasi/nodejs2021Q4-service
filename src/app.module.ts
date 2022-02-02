import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { FileController } from './file/file.controller';
import { FileModule } from './file/file.module';
//import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { BoardsController } from './boards/boards.controller';
import { BoardsModule } from './boards/boards.module';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';

@Module({

    imports:[
    // ServeStaticModule.forRoot({
    //      rootPath: join( __dirname,"static"),
    // }),
    TypeOrmModule.forRoot(),
    UserModule,
    FileModule,
    AuthModule,
    BoardsModule,
    ]
  ,
  controllers: [],
  providers: [],
})
export class AppModule {}
