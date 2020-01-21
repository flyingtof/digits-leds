#!/usr/bin/env bash
if [ ! -d ./dist ]
then
  echo 'build assets'
  yarn -s build
fi
yarn -s execute
