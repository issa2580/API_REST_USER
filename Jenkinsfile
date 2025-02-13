pipeline {
    agent any
        stages {
            stage('SonarQube Analysis') {
                steps {
                    script {
                        withSonarQubeEnv('sonar') {
                            sh '''
                            docker run --rm \
    --network sonarqube \
    -e SONAR_HOST_URL=http://sonarqube:9000 \
    -v /var/jenkins_home/workspace/rootkit:/usr/src \
    sonarsource/sonar-scanner-cli

                            '''
                        }
                    }
                }
            }
        // stage ("Docker build ") {
        //     steps {
        //         sh "docker-compose up --build -d"
        //     }
        // }
        // stage('Docker push') {
        //     steps {
        //         script {
        //             docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credential') {
        //                 sh "docker tag backend-node-nodejs:latest martinez42/backend-node-nodejs:latest"
        //                 sh "docker tag backend-node-mongodb:latest martinez42/backend-node-mongodb:latest"
        //                 sh "docker push martinez42/backend-node-nodejs:latest"
        //                 sh "docker push martinez42/backend-node-mongodb:latest"
        //             }
        //         }
        //     }
        // }
        // stage('SonarQube Analysis') {
        //     steps {
        //         script {
        //             def scannerHome = tool 'SonarScanner'
        //             withSonarQubeEnv('sonar') {
        //                 sh "${scannerHome}/bin/sonar-scanner"
        //             }
        //         }
        //     }
        // }
        // stage ("Kubernetes deploy") {
        //     steps {
        //         sh 'kubectl apply -f kubernetes/deployments'
        //         sh 'kubectl apply -f kubernetes/services'
        //         sh 'kubectl apply -f kubernetes/configmaps'
        //     }
        // }
    }
}