import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { FileModule } from './file/file.module';
import { AuthModule } from './auth/auth.module';
import { BoardsModule } from './boards/boards.module';
import { CustomHttpInterceptor } from './Logging&ErrorHandling/Middleware';

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
    CustomHttpInterceptor
    ]
  ,
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
   consumer
   .apply(CustomHttpInterceptor)
   .forRoutes({path: "*",method:RequestMethod.ALL})
  }
}