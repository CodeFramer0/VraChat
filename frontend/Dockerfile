# syntax=docker/dockerfile:1.4
FROM node:lts AS development

ENV CI=false
ENV PORT=8001

WORKDIR /frontend
COPY package.json /frontend/package.json
COPY package-lock.json /frontend/package-lock.json
# RUN npm ci
COPY . /frontend


CMD [ "npm", "start"]

FROM development as dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD [ "npm", "start" ]

FROM development AS builder
RUN npm install --save react-notifications 
RUN npm run build  

