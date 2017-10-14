# Set the base image to Ubuntu
FROM ubuntu:16.04


# Install Node.js and other dependencies
RUN apt-get update
RUN apt-get -y install sudo
RUN apt-get -y install curl
RUN apt-get -y install git
RUN apt-get -y install wget
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash
RUN apt-get install --yes nodejs
    

# Install PM2
RUN npm install -g yarn
RUN npm install -g pm2
RUN npm install -g babel-cli babel-core
RUN npm install babel-preset-env babel-preset-stage-2 babel-preset-react babel-preset-react-optimize --save-dev
RUN mkdir -p /var/www/dwy

# Define working directory
WORKDIR /var/www/dwy

ADD . /var/www/dwy

RUN yarn install 
RUN yarn build 

# Expose port
EXPOSE 3000

# Run app
CMD pm2 start --no-daemon  pm2.prod.json