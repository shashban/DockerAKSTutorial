FROM node:6.14.2
EXPOSE 8181
COPY server.js .
CMD node server.js
