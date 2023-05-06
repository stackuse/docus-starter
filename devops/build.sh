#!/usr/bin/env bash

npm install -g pnpm
pnpm install

mv ../src-app ./
mv ./src-app/.env ./

pnpm build
