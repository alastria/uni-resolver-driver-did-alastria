FROM node:14.19.1-alpine

RUN apk add git

ENV DOCROOT /var/www/service
WORKDIR ${DOCROOT}

COPY . /var/www/service

RUN npm install

EXPOSE 3000
ENTRYPOINT ["node","web.js"]