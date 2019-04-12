FROM node:6.14.2
EXPOSE 8181
COPY server.js .
COPY AKSDeployment.yaml .
CMD node server.js
