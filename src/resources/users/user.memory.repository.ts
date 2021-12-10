import { IUser } from "./interfaces";

let db:Array<IUser> = [];

const getAll =()=>db



const create = (data:IUser) => db.push(data);



const modify =  (id:string, options:IUser) => {
  const modifiedUser=db.find((user, index) => {
let moddedUSER
    if (user.id === id) {
     
      if (options.name) {
       db[index].name = options.name;
      }
      if (options.password) {
        db[index].password = options.password;
      }
      if (options.login) {
        db[index].login = options.login;
      }
      
 
   moddedUSER=user
    
    }
return moddedUSER


  });
 return modifiedUser

};

const deleteUser=(id:string)=>{
db=db.filter(user=>user.id!==id)

}


export= { getAll, create ,modify,deleteUser};


