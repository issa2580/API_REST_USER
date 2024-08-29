pipeline {
    agent any
    environment {
        NODE_IMAGE = "martinez42/"
        MONGO_IMAGE = ""
    }
        stages {
            stage ("Build docker images") {
                steps {
                    sh "docker-compose up --build -d"
                }
            }
            // stage ("Push docker images") {
            //     steps {
            //         sh "docker tag "
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