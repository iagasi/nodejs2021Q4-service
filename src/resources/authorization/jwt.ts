import * as jwt from "jsonwebtoken"

const jwtSecret="111"

 export  const   singhAcessToken=async(userId:string,login:string)=>{

        const payload={
            userId:userId,
            login:login
        }
        return new Promise((resolve,reject)=>{
 jwt.sign(payload,jwtSecret,{},(error,token)=>{ resolve(token);
        })
        
       
        })
       
    }
export const verifyToken=async(token:string)=>{
    const plaitToken=token.split("Bearer ")
    try{
 
   
        

        
        const verified= jwt.verify(plaitToken[1].toString(),jwtSecret)
      

        
            return verified
    }
    
     catch(error){
     // console.log(error);
      
         
         return undefined
     }
    

   

    


    }