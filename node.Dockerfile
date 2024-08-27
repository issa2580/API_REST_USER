FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 5000
ENV MONGODB_URL=mongodb+srv://garmi2580:UdepxRoZ2yjvspZx@cluster0.ft6f7gv.mongodb.net/API_USER_MANAGER_AUTH
CMD ["node", "server.js"]