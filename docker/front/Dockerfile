FROM node:14.3.0-alpine3.11

RUN apk update; \
    npm install -g @vue/cli;

ENV APP_HOME /front
WORKDIR $APP_HOME
ADD [ \
      "front/package.json", \
      "docker/front/build.sh", \
      "./" \
    ]

RUN yarn install;
