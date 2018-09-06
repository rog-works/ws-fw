FROM node:10.9-alpine

WORKDIR /opt/app

COPY ./package.json /opt/app/
COPY ./package-lock.json /opt/app/

RUN apk add --update --no-cache tzdata \
 && ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
 && echo 'Asia/Tokyo' > /etc/timezone \
 && npm install --save

COPY ./ /opt/app

