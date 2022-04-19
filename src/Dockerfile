FROM node:14.15.4

ADD . .

ENV DOCROOT /var/www/service
WORKDIR ${DOCROOT}

RUN npm install

CMD [ "npm", "start" ]