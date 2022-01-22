import { User_db } from "../../database/entities/User_db"
import * as bycrypt from "bcrypt"
export const createDefaultAdmin=async ()=>{
    const hash= await bycrypt.hash("admin",10)

const user=await  User_db.findOne({login:"admin"})
 if(user?.login!=="admin"){User_db.create({id:"1",login:"admin",name:"admin",password:hash}).save()}
}
////