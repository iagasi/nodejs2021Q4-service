import { ArgumentMetadata, HttpException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";

@Injectable()
export class ValidPipe implements PipeTransform{
   async  transform(value: any, metadata: ArgumentMetadata) {
        const obj=plainToClass(metadata.metatype,value)
        const errors=  await validate(obj)
        if(errors.length){
            let messages=[]
            errors.forEach(error => {
                messages.push({error:error.property,reason:error.constraints})
            })
                
             console.log("-------------------------------------------------------------------");
             
               
        //   const r=JSON.stringify(messages)
        //  throw new HttpException(r,200)
        }
   
    }

}