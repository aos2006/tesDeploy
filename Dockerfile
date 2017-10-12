FROM keymetrics/pm2:latest

# Set a working directory
WORKDIR /usr/src/app

COPY ./build/package.json .
COPY ./build/yarn.lock .
COPY ./pm2.prod.json .
RUN ls -al -R
# Install Node.js dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN yarn add global pm2
# RUN yarn install --production --no-progress
RUN pm2 install pm2-auto-pull
RUN pm2 update
EXPOSE 3000
# Copy application files
COPY ./build .


CMD [ "pm2-docker", "start", "--format", "pm2.prod.json", "-i", "max"]
