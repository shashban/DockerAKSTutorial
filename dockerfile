FROM node:10-alpine
LABEL "name"="Simple Node Js App"
COPY . .
EXPOSE 8181
CMD node server.js
