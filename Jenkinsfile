pipeline {
    agent any
        stages {
            stage ("Build docker image") {
                steps {
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