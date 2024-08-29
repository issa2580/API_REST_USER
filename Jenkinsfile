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
                script {
                    docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                        NODE_IMAGE.push('latest')
                        MONGO_IMAGE.push('latest')
                    }
                }
            }
        }
        // stage('Push Docker Images') {
        //     steps {
        //         script {
        //             docker.withRegistry('https://index.docker.io/v1/', REGISTER_CREDENTIAL) {                     
        //                 sh "docker tag backend-node-nodejs:latest martinez42/backend-node-nodejs:latest"
        //                 sh "docker tag backend-node-mongodb:latest martinez42/backend-node-mongodb:latest"                      
        //                 sh "docker push martinez42/backend-node-nodejs:latest"
        //                 sh "docker push martinez42/backend-node-mongodb:latest"
        //             }
        //         }
        //     }
        // }
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