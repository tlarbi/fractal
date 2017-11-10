# if you're doing anything beyond your local machine, please pin this to a specific version at https://hub.docker.com/_/node/
FROM node:8

RUN mkdir -p /opt/app

# default port 3000
EXPOSE 3000

# install dependencies first, in a different location for easier app bind mounting for local development
WORKDIR /opt
COPY package.json package-lock.json* ./
RUN npm install && npm cache clean --force && npm install --save @frctl/fractal && npm i -g @frctl/fractal
ENV PATH /opt/node_modules/.bin:$PATH
# copy in our source code last, as it changes the most
WORKDIR /opt/app
COPY . /opt/app

CMD ["gulp"]
CMD [ "fractal", "start" ]
