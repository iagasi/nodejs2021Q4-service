import { format } from "path/posix";
import * as winston from "winston"
import* as dotenv from 'dotenv'
dotenv.config()

 
const logger = winston.createLogger({

  //  format: winston.format.simple(),
  level: process.env.WINSTON_ERROR_LEVEL||"info",
  //
    transports: [
   new winston.transports.Console(),
  new winston.transports.File({ filename: './logs/error.log', level: 'error' ,}),
       new winston.transports.File({ filename: './logs/combined.log',}),
    ],
    exitOnError: true
  });

  export default logger


  // // 
  // //   logger: {
  //       // @ts-ignore
  //       level: "info",
  //       // @ts-ignore
  //       file: "./u.json"
  //     }