FROM node:16.14-alpine
RUN mkdir /app
WORKDIR /app

# copy all files your app need (source -> dest inside container)
# avoid copying package-lock if you could use npm and yarn
COPY /build/* .
COPY /package.json .
COPY /.env .

# yarn is faster, but if you like snails use npm i
RUN yarn install --prod

# change (or remove) the port you use in your node (if you use one)
# EXPOSE 3000

# add here more arguments if you need them (this is the cmd which is executed inside the container)
CMD node index.js