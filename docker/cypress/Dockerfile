FROM cypress/base:10

ENV LANG ja_JP.UTF-8
ENV LC_CTYPE ja_JP.UTF-8
ENV CI 1

RUN apt-get update; \
    apt-get install -y locales locales-all; \
    apt-get remove fonts-vlgothic; \
    apt-get install -y fonts-vlgothic; \
    locale-gen ja_JP.UTF-8; \
    localedef -f UTF-8 -i ja_JP ja_JP.utf8;

ENV APP_HOME /cypress
WORKDIR $APP_HOME

ADD [ \
      "front/package.json", \
      "front/yarn.lock", \
      "./" \
    ]

RUN yarn install; \
    npx cypress verify;
