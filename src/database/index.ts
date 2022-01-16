import { createConnection } from "typeorm"


export const connectToDb=async()=>{


const connection = await createConnection()


   
try {
  await connection.runMigrations().then(() => { console.log("Connected To db"); })
}
catch (error) {
console.log(error);

}

}