FROM node:22-alpine3.19

RUN npm install typescript -g

WORKDIR /code

ARG PORT=3000
ENV PORT=$PORT


COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json 
# npm ci stands for npm clean-install. The ci command is supported by any npm version six or later. npm ci reads the package-lock. json file to determine the project's package versions and dependencies. Without changing package-lock
RUN npm ci

RUN npm install --include dev

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# copy in our source code last, as it changes the most
COPY . /code
RUN npm run build

EXPOSE 3000
CMD [ "npm","run", "start" ]
# This command for debug
# CMD ["sh", "-c", "while true; do sleep 3600; done"]

