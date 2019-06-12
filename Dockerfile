FROM node:8

WORKDIR /project/

COPY ./ .

CMD npm install && npm start