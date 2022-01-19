import { Tasks_db } from "../../database/entities/Tasks_db";
import { getConnection, getManager } from "typeorm";
import { Columns_db } from "../../database/entities/Columns_db";
import { User_db } from "../../database/entities/User_db";
import { IUser } from "./interfaces";
import userService from "./user.service";
import { taskDelete } from "../tasks/task.memory.repository";

const db: Array<IUser> = [];
/**
 * 
 * @returns all db @type {Array<IUser>  }
 */
const getAll =async () => await User_db.find()

const getById=async(id:string)=>{
  const user=await User_db.findOne(id)
return user
}



/**
 * Pushes new user to Db
 * @param data_of_User
 *
 */
const create = async(data_of_User: IUser) => {
  const newUser=User_db.create(data_of_User)
  await newUser.save()
  return newUser
}




/**
 * Modifies existin user by ID
 * @param id 
 * @param options 
 * @returns modified user || undefined
 */
const modify = async(id: string, options: IUser) => {
const user= await  User_db.update({id:id},options)
 return await User_db.findOneOrFail(id)
}
/**
 * Deletes existing user By id
 * @param id 
 */
const deleteUser = async(id: string) => {
 
// const task=await Tasks_db.findOne({userId:id})
//   await getConnection()
//   .createQueryBuilder()
//   .update(Tasks_db)
//   .set({ userId: null})
//   .where("userId = :id", { id: id })
//   .execute();
await Tasks_db.update({userId:id},{userId:null})
  await User_db.delete({id:id})
const y= await Tasks_db.findOne({id:id})
return y
}


export = { getAll, create, modify, deleteUser ,getById};


