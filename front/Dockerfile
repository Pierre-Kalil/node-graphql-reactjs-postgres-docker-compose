FROM node:14.17.3-buster

WORKDIR /app

COPY package.json package.json

RUN yarn

COPY . .

EXPOSE 3000

CMD "yarn start"