pipeline {
    agent any
    environment {
        NODE_IMAGE = "martinez42/backend-node-nodejs"
        MONGO_IMAGE = "martinez42/backend-node-mongodb"
        REGISTER_CREDENTIAL = "docker-hub-credential"
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
                        NODE_IMAGE.push('latest')
                        MONGO_IMAGE.push('latest')
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