import { createConnection } from "typeorm"


 const connectToDb=async()=>{

try{

  const connection = await createConnection()

  await connection.runMigrations().then(() => { console.log("Connected To db"); })
}


catch (error) {
console.log(error);

}

}

export default connectToDb

//