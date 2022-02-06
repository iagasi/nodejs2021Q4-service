import { IsString, IsInt, IsArray } from "class-validator"
export class BoardDto{
  
    readonly id:string;
    @IsString({message:"title must be string"})
    readonly title:string
    @IsArray({message:"Columns must be array"})
    readonly columns:Array<{title:string,order:number}> 
}