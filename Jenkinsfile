pipeline {
    agent any
    environment {
        REGISTER_CREDENTIAL = "docker-hub-credential"
    }
    stages {
        stage ("Build docker images") {
            steps {
                sh "docker-compose up --build -d"
            }
        }
        stage('Push Docker Images') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', REGISTER_CREDENTIAL) {                     
                        sh "docker tag backend-node-nodejs:latest martinez42/backend-node-nodejs:latest"
                        sh "docker tag backend-node-mongodb:latest martinez42/backend-node-mongodb:latest"                      
                        sh "docker push martinez42/backend-node-nodejs:latest"
                        sh "docker push martinez42/backend-node-mongodb:latest"
                    }
                }
            }
        }
        stage ("Test") {
            steps {
                echo "Testing application"
            }
        }
        stage ("Deploy") {
            steps {
                echo "Deploying application"
            }
        }
    }
}