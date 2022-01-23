import { FastifyInstance } from "fastify"
import { verifyToken } from "./jwt"
import login from "./login"

export const allowedAndpoints = (fastify: FastifyInstance) => {
        fastify.addHook('onRequest', async (req, reply) => {
                const { body, url, query } = req as { body: object, url: string, query: object }
                const token = req.headers.authorization

const createUser=false
//if(url=="/users" &&req.method=="POST"){createUser=true}


                if (url !== "/login" && url !== "/doc" && url !== "/"&&!createUser) {
                        let verified
                        if (!token) {
                                reply.code(401).send("unauthorized")
                                return undefined
                        }

                        if (token) {
                                verified= await verifyToken(token)
                                }

                                if (!verified) {
                                        
                                        
                                   reply.code(401).send(verified)

                                }


                        }





                
          

        })
}