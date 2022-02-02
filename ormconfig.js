module.exports={
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USERNAME,
     password: process.env.POSTGRES_PASSWORD,
    // password: "12362847",
    database: process.env.POSTGRESS_NAME_DATABASE,
    entities: ["dist/**/*.entity{.ts,.js}"],
    
    synchronize: true
  }