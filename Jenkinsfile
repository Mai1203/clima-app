pipeline {
    agent any

    stages {
        stage('Inicio') {
            steps {
                echo 'Iniciando pruebas para clima-app...'
            }
        }

        stage('Instalación') {
            steps {
                bat 'npm install'
            }
        }

        stage('Pruebas') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Final') {
            steps {
                echo 'Pipeline ejecutado correctamente.'
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente.'
        }
        failure {
            echo 'Pipeline falló.'
        }
    }
}

