FROM node:14-alpine

WORKDIR /

ENV PORT 3000

ENV REACT_APP_API_URL http://localhost:8080/

COPY package.json /package.json

RUN npm install

COPY . /

RUN npm run build

CMD [ "npm","run", "start" ]