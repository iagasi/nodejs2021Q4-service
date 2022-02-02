import { IUser } from "./users.dto";
import { v4 as uuidv4 } from 'uuid'

// export const returnUserWithoutPassword=(users:IUser)=>{
//     const { id, name, login } = users;
//     return { id, name, login };
// }


class User  implements IUser {
    id:string
  
    name:string
  
    login:string
  
    password:string
  /**
   * generates id with uuid
   * @param param0 {req.body}
   * 
   */
    constructor({
      id = uuidv4(),
      name = 'USER',
      login = 'user',
      password = 'P@55w0rd'
    }  = {}) {
      this.id = id;
      this.name = name;
      this.login = login;
      this.password = password;
    }
  /**
   * this metod retunrns NO PASSWORD
   * @params user @type { id, name, login,password }
   * @returns { id, name, login }
   */
    static toResponse(user:IUser) {
      const { id, name, login } = user;
      return { id, name, login };
    }
  }
  
  export default User;
