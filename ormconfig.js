const dotenv=require("dotenv")
dotenv.config()

module.exports={
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port:   parseInt( process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
     password: process.env.POSTGRES_PASSWORD,
   
    database: process.env.POSTGRESS_NAME_DATABASE,
    entities: ["dist/**/*.entity{.ts,.js}"],
    
    synchronize: true
  }

  // module.exports={
  //   type: "postgres",
  //   host: "db-postgres",
  //   port: 5432,
  //   username: "postgres",
  //    password: "docker",

  //   database: "test",
  //   entities: ["dist/**/*.entity{.ts,.js}"],
    
  //   synchronize: true
  // }