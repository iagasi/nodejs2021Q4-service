FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json  ./

RUN npm ci --production=true
#  RUN npm install -g node-prune
COPY ./dist ./dist
#  RUN npm prune --production



FROM node:16-alpine
COPY --from=build  ./app/dist/ /app/dist
COPY --from=build ./app/node_modules  /app/node_modules
 COPY  --from=build ./app/package*.json  /app
 COPY ./.env /app/
COPY ./ormconfig.js /app/
WORKDIR /app
 CMD ["npm","start"]