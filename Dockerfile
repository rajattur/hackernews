FROM node:latest

MAINTAINER Raj Attur

ENV NODE_ENV=production
ENV PORT=8000

COPY . /var/www
WORKDIR /var/www

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]