pipeline {
    agent any
        stages {
            stage('Checkout') {
                steps {
                    script {
                        checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/issa2580/API_REST_USER.git']])
                    }
                }
            }
            stage('SonarQube Analysis') {
                steps {
                    script {
                        nodejs(nodeJSInstallationName: 'nodejs'){
                            withSonarQubeEnv('sonar') {
                                sh '''
                                    npm install sonar-scanner
                                    npm run sonar
                                '''
                            }
                        }
                    }
                }
            }
            // stage('Quality gates analysis'){
            //     steps {
            //         script {
            //             waitForQualityGate abortPipeline: true, credentialsId: 'token-sonar'
            //         }
            //     }
            // }
            stage('Install dependancies') {
                steps {
                    script {
                        nodejs(nodeJSInstallationName: 'nodejs'){
                            sh "npm install"
                        }
                    }
                }
            }
            stage('Docker push') {
                steps {
                    script {
                        docker.withRegistry('docker', 'docker-hub') {
                            sh "docker tag api-rest-user:latest martinez42/api-rest-user:latest"
                            sh "docker push martinez42/api-rest-user:latest"
                        }
                    }
                }
            }
        // stage ("Kubernetes deploy") {
        //     steps {
        //         sh 'kubectl apply -f kubernetes/deployments'
        //         sh 'kubectl apply -f kubernetes/services'
        //         sh 'kubectl apply -f kubernetes/configmaps'
        //     }
        // }
    }
}