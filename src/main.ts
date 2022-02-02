//import config from './common/config';



import { ValidationPipe } from './pipes/validation.pipe';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jw-auth.guard';
import { User_db } from './users/user.entity';



//const PORT: string | number = config.PORT || 4000



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 app.useGlobalPipes(new ValidationPipe())
  await app.listen(3001);
  const hash="$2b$10$pQGCi1Fu3Yo5EOGOnTbXluGZaSti4jT3XDyiYlR..z0JtfFYQMNga"
 await User_db.create({id:"123456",login:"admin",password:hash,name:"admin"}).save()
 

}
bootstrap();
