FROM node:14.3.0-alpine3.11

RUN apk update; \
    npm install -g @vue/cli@4.4.0;

WORKDIR /front
ADD [ \
      "front/package.json", \
      "./" \
    ]

RUN yarn install;
