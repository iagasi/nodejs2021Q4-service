import { format } from "path/posix";
import * as winston from "winston"
const combine = winston.format
 
const logger = winston.createLogger({
    
    format: winston.format.simple(),
    //defaultMeta: { service: 'user-service' },
    transports: [
   new winston.transports.Console()
      // new winston.transports.File({ filename: 'error.log', level: 'error' }),
      // new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

  export default logger


  // // 
  // //   logger: {
  //       // @ts-ignore
  //       level: "info",
  //       // @ts-ignore
  //       file: "./u.json"
  //     }