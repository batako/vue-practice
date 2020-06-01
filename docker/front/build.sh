#!/usr/bin/env bash

echo Building...
rm -fr /public/*
cd $APP_HOME
yarn build
mv dist/* /public
