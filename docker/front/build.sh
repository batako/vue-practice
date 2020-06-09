#!/usr/bin/env sh

echo Building...
rm -fr /public/*
cd $APP_HOME
yarn build
mv dist/* /public
