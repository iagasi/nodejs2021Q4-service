import * as jwt from "jsonwebtoken"
import * as dotenv from "dotenv";
import { Injectable } from "@nestjs/common";

const jwtSecret= "10"//process.env.JWT_SECRET_KEY as string||"10"
@Injectable()
export class TokenService{

   async generateToken(userId:string,login:string){
        const payload={
            userId,
            login
        }

        return new Promise((resolve,reject)=>{
        jwt.sign(payload,jwtSecret,{},(error,token)=>{resolve(token)})
        })
    }


    async verifyToken(token:string){
       

        try{
            
            return jwt.verify(token,jwtSecret)
        }

        catch(error){
           return undefined
        }
    }
}