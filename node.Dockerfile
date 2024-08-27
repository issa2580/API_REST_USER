FROM node:20-alpine
WORKDIR /src/app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 5000
CMD ["node", "server.js"]