
# Set the base image to Ubuntu
FROM ubuntu:16.04


# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    apt-get -y install git && \
    apt-get -y install wget && \
    apt-get -y install apt-utils && \
    apt-get -y install sudo && \
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - && \
    apt-get install --yes nodejs

# Install PM2
RUN npm install -g yarn
RUN npm install -g pm2
RUN mkdir -p /var/www/dwy

# Define working directory
WORKDIR /var/www/dwy

ADD . /var/www/dwy
RUN ls -la
RUN yarn install --production --no-progress 

# Expose port
EXPOSE 3000
# Run app
CMD pm2 start pm2.prod.json