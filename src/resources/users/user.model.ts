

import { v4 as uuidv4 } from 'uuid'

interface IUser{
  id:string
  name:string
  login:string
  password:string

}
/**
 * this class generates id
 * this class
 */
class User  implements IUser {
  id:string

  name:string

  login:string

  password:string

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
 * @params userInfo @type { id, name, login,password }
 * @returns { id, name, login }
 */
  static toResponse(user:IUser) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
