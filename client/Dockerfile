FROM node:14

RUN mkdir -p /src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN npm install

COPY . .

RUN npm install sharp

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]