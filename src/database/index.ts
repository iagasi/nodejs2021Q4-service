import { createConnection } from "typeorm"
import { Board_db } from "./entities/Board_db";
import { Columns_db } from "./entities/Columns_db";
import { Tasks_db } from "./entities/Tasks_db";
import { User_db } from './entities/User_db';


export const connectToDb=async()=>{





   const connection = await createConnection({
    type: "postgres",
    host: "db-postgres",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "test",
    entities: [User_db,Board_db,Tasks_db,Columns_db]

  })
try {
  await connection.synchronize().then(() => { console.log("Connected To db"); })
}
catch (error) {

}

}