FROM node:14.3.0-alpine3.11

RUN apk update; \
    npm install -g @vue/cli;

ENV APP_HOME /front
WORKDIR $APP_HOME
ADD [ \
      "docker/front/build.sh", \
      "front/package.json", \
      "front/yarn.lock", \
      "./" \
    ]

RUN yarn install; \
    mv build.sh /build.sh;
