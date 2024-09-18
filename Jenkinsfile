pipeline {
    agent any
    
    stages {
        stage('Instalar dependencias'){
            steps {
                sh 'npm install'
            }
            steps {
                sh 'npm run test'
            }
        }
    }
}