FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
ENV MONGODB_URL=mongodb://mongodb:27017/API_USER_MANAGER_AUTH
CMD ["node", "server.js"]