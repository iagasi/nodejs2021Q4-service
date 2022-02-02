import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import {validate} from "class-validator"
import {plainToClass} from "class-transformer"
@Injectable()
export class ValidationPipe implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata) {
        const obj=plainToClass(metadata.metatype,value)
        
        
      const err=  await validate(obj)
        console.log(err.const);
        
    }

}