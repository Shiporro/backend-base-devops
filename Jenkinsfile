pipeline {
    agent any
    stages {
        stage('Build and test'){
            agent {
                docker {
                    image 'node:20.11.1-alpine3.19'
                }
            }
            stages {
                stage('Instalar dependencias') {
                    steps {
                        sh 'npm install'
                    }       
                }
                stage('Ejecucion de Test') {
                    steps {
                        sh 'npm run test'
                    }       
                }
                stage('Ejecucion de Build') {
                    steps {
                        sh 'npm run build'
                    }       
                }
            }
        }
    }
}