FROM ruby:2.7.1-alpine3.11

ENV LANG C.UTF-8
ENV APP_HOME /api

RUN apk update; \
    apk add --update --no-cache --virtual=.build-dependencies \
        build-base \
        curl-dev \
        libxml2-dev \
        libxslt-dev \
        linux-headers \
        ruby-dev \
        yaml-dev \
        zlib-dev \
    ; \
    apk add --update --no-cache \
        git \
        nodejs \
        openssh \
        ruby-json \
        sqlite-dev \
        tzdata \
        xz-libs \
        yaml \
        # test environment
        less \
        # deployment environment
        yarn \
        # for dbconsole
        sqlite \
    ;

WORKDIR $APP_HOME
ADD [ \
      "api/Gemfile", \
      "api/Gemfile.lock", \
      "./" \
    ]

RUN gem install bundler -v 1.17.2; \
    bundle install -j$(getconf _NPROCESSORS_ONLN); \
    apk del .build-dependencies;
