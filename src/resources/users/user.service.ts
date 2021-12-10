import { IUser } from "./interfaces";

import usersRepo from "./user.memory.repository"

const getAll = () => usersRepo.getAll();
const create=(data:IUser)=>usersRepo.create(data)
const modify=(id:string,options:IUser)=>usersRepo.modify(id,options)
const deleteUser=(id:string)=>usersRepo.deleteUser(id)
export default { getAll,create ,modify,deleteUser};
