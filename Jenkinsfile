pipeline {
    agent any
    environment {
        NodeImage = "martinez42/backend-node-nodejs"
        MongoImage = "martinez42/backend-node-mongodb"
        registryCredential = "docker-hub-credential"
    }
    stages {
        stage ("Build docker images") {
            steps {
                sh "docker-compose up --build -d"
            }
        }
        stage('Pushing Images to Docker Registry') {
            steps {
                echo "Testing application"
                script {
                    docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                        NodeImage.push('latest')
                        MongoImage.push('latest')
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