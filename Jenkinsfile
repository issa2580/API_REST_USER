pipeline {
    agent any
        stages {
            stage ("Build docker images") {
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