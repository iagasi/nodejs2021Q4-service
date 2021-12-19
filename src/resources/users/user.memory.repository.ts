import { IUser } from "./interfaces";

let db: Array<IUser> = [];
/**
 * 
 * @returns all db @type {Array<IUser>  }
 */
const getAll = () => db


/**
 * Pushes new user to Db
 * @param data 
 *
 */
const create = (data: IUser) => db.push(data)




/**
 * Modifies existin user by ID
 * @param id 
 * @param options 
 * @returns modified user || undefined
 */
const modify = (id: string, options: IUser) => {
  const index = db.findIndex(user => user.id===id );
  


if(index!==-1)
{
  if (options.name) {
    db[index].name = options.name;
  }
  if (options.password) {
    db[index].password = options.password;
  }
  if (options.login) {
    db[index].login = options.login;
  }
   return db[index]
}
}
/**
 * Deletes existing user By id
 * @param id 
 */
const deleteUser = (id: string) => {
  db = db.filter(user => user.id !== id)

}


export = { getAll, create, modify, deleteUser };


