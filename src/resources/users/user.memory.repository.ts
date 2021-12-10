import { IUser } from "./interfaces";

let db: Array<IUser> = [];

const getAll = () => db



const create = (data: IUser) => db.push(data)





const modify = (id: string, options: IUser) => {
  const index = db.findIndex(user => user.id===id );
  
// console.log("ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"+index);
// console.log(db)
// console.log(id);

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

const deleteUser = (id: string) => {
  db = db.filter(user => user.id !== id)

}


export = { getAll, create, modify, deleteUser };


