FROM node:6.8

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -y && apt-get install -y yarn libelf1

RUN mkdir -p /srv/app

WORKDIR /srv/app

COPY ./package.json /srv/app/package.json
COPY ./yarn.lock /srv/app/yarn.lock
RUN yarn

VOLUME /srv/app/node_modules

COPY . /srv/app/

RUN yarn run build

EXPOSE 3000
CMD ["yarn", "run", "serve"]
