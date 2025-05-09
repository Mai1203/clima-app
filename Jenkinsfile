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

        stage('Final') {
            steps {
                echo 'Pipeline ejecutado correctamente.'
            }
        }
    }
}

