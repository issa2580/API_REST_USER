pipeline {
    agent any
    environment {
        NODE_IMAGE = "martinez42/backend-node-nodejs"
        MONGO_IMAGE = ""
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
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credential', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {                     
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