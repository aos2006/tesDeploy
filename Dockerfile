# Set the base image to Ubuntu
FROM ubuntu:16.04


# Install Node.js and other dependencies
RUN apt-get update
RUN apt-get -y install sudo
RUN apt-get -y install curl
RUN apt-get -y install git
RUN apt-get -y install wget
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash
RUN apt-get install --yes nodejs
RUN npm install -g yarn
RUN npm install pm2@latest -g
RUN pm2 update
RUN npm install -g babel-cli babel-core
RUN npm install babel-preset-env babel-preset-stage-2 babel-preset-react babel-preset-react-optimize --save-dev
RUN mkdir -p /var/www/dwy
WORKDIR /var/www/dwy

ADD . /var/www/dwy
RUN node ./src/server.js
RUN npm -v && node -v
# RUN yarn install
# RUN npm install source-map-support
# RUN yarn run build
# Expose port
EXPOSE 3000

# Run app
CMD ["node" "./build/server.js"]