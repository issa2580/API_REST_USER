pipeline {
    agent any
        stages {
            stage ("Build docker image") {
                steps {
                    sh "docker-compose build"
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