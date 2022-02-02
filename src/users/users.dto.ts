import { Length,IsString} from "class-validator"



export class IUser{
 

    public id:string
    @IsString({message:"name must be string"})
   public name:string
   @IsString({message:"login must be string"})
  public  login:string
  @IsString({message:"password must be string"})
  @Length(3,10,{message:"password mustbe not less than 3 sumbol"})
   public password:string
}
