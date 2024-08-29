pipeline {
    agent any
        stages {
            stage ("Build docker images") {
                steps {
                    sh "export DOCKER_HOST=unix:///run/docker.sock"
                    sh "docker-compose up --build -d"
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