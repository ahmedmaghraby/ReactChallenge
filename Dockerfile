FROM node:20.10.0 as develop-stage

WORKDIR /app

COPY package*.json ./

RUN npm i

RUN npm install --save-dev husky

RUN npx husky install
