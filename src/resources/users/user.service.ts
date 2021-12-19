import { IUser } from "./interfaces";

import usersRepo from "./user.memory.repository"
/**
 * @module this mdule connects user.controller with user.memoryrepository
 *
 */
const getAll = () => usersRepo.getAll();
const create=(data:IUser)=>usersRepo.create(data)
const modify=(id:string,options:IUser)=>usersRepo.modify(id,options)
const deleteUser=(id:string)=>usersRepo.deleteUser(id)
export default { getAll,create ,modify,deleteUser};
