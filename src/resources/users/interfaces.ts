interface IUser{
    id:string
    name:string
    login:string
    password:string
  
  }

  interface ReqBody{
    name: string;
    login: string;
    password: string;
  }

  export {IUser,ReqBody}