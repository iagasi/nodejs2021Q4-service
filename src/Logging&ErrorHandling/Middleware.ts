import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import logger from "./winston"
@Injectable()
export class CustomHttpInterceptor implements NestMiddleware{
    use(req: Request, res:Response, next: () => void) {
      logger.info(" body is-"+JSON.stringify(req.body)+" ,url is----"+req.path +", query is---"+JSON.stringify(req.params))
      

  
  
 
        next()
   logger.info("response is ---"+res.statusCode)
    }

}