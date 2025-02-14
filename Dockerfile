# Pull image from docker
FROM node:20

# Definir le repertoir de travail
WORKDIR /src/app

# Copier les des dependances
COPY package*.json ./

# Copier le code sources
COPY . .

# Exposer le port
EXPOSE 5000

# Demarrer l'app  
CMD ["node", "server.js",]



