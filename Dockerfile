FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json  ./

RUN npm ci --production=true
#  RUN npm install -g node-prune
COPY ./ts-compile ./ts-compile
#  RUN npm prune --production



FROM node:16-alpine
COPY --from=build  ./app/ts-compile/ /app/
COPY --from=build ./app/node_modules  /app/node_modules
 COPY  --from=build ./app/package*.json  /app
COPY ./ormconfig.json /app/
WORKDIR /app
 CMD ["npm","start"]

# uncoment this for container auto restart testing, And comment  CMD ["npm","start"] then build new docker image with  docker-compose up
# CMD [ "node","ts-compile/server.js" ]

