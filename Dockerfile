FROM node:14

WORKDIR /usr/src/app

COPY . .

CMD ["yarn", "start"]
