pipeline {
    agent any
    stages {
        stage ("Build docker images") {
            steps {
                sh "docker-compose up --build -d"
            }
        }
        stage('Push Docker Images') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credential') {
                        sh "docker tag backend-node-nodejs:latest martinez42/backend-node-nodejs:latest"
                        sh "docker tag backend-node-mongodb:latest martinez42/backend-node-mongodb:latest"
                        sh "docker push martinez42/backend-node-nodejs:latest"
                        sh "docker push martinez42/backend-node-mongodb:latest"
                    }
                }
            }
        }
        stage ("Analysis with SonarQube") {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh "npm install"
                    withSonarQubeEnv('sonar') {
                        sh "npm install sonar-scanner"
                        sh "npm run sonar"
                    }
                }
            }
        }
        stage ("Deploy") {
            steps {
                echo "Deploying application"
            }
        }
    }
}