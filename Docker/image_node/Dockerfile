FROM alpine:latest

Maintainer Paul Rosset

RUN apk update
RUN apk add nginx
RUN apk add nodejs
RUN npm install pm2 -g
RUN npm install gulp -g
RUN apk add git

RUN git clone https://github.com/PaulRosset/morning-Knowing.git /var/www/morning_knowing

RUN chmod 777 /var/www/
RUN cd /var/www/morning_knowing; npm install

EXPOSE 8080 80

CMD ["gulp", "--gulpfile", "/var/www/morning_knowing/gulpfile.js", "prod"]
CMD ["node", "/var/www/morning_knowing/index.js"]