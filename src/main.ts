//import config from './common/config';




import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { User_db } from './users/user.entity';

import * as dotenv from "dotenv"
import { HttpExceptionFilter } from './exeptions/http-exeption.filter';
dotenv.config()


const PORT=process.env.PORT




async function bootstrap() {
  const app = await NestFactory.create(AppModule,);
  
 app.useGlobalPipes(new ValidationPipe())
 //app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(PORT);
 
 
  const hash="$2b$10$pQGCi1Fu3Yo5EOGOnTbXluGZaSti4jT3XDyiYlR..z0JtfFYQMNga"
 await User_db.create({id:"123456",login:"admin",password:hash,name:"admin"}).save()
  
console.log(PORT);

}
bootstrap();
