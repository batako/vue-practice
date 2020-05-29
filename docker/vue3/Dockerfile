FROM node:14.3.0-alpine3.11

RUN apk update; \
    npm install -g @vue/cli;

WORKDIR /vue3
ADD [ \
      "vue3/package.json", \
      "./" \
    ]

RUN yarn install;
