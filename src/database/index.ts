import { createConnection } from "typeorm"
import { Board_db } from "./entities/Board_db";
import { Columns_db } from "./entities/Columns_db";
import { Tasks_db } from "./entities/Tasks_db";
import { User_db } from './entities/User_db';


export const connectToDb=async()=>{


const connection = await createConnection()


   
try {
  await connection.runMigrations().then(() => { console.log("Connected To db"); })
}
catch (error) {
console.log(error);

}

}