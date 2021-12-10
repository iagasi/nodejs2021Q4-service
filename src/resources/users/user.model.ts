import { IBoard } from "../boards/interfaces";
import { IUser } from "./interfaces";



const { v4 : uuidv4 } =require('uuid') 

class User implements IUser  {
  id:string
  name:string
  login:string
  password:string
  constructor({
    id = uuidv4(),
    name ='USER',
    login = 'user',
    password = 'P@55w0rd'
  }  ) {
    this.id = id  ;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user:IUser) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
