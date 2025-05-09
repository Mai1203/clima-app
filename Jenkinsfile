pipeline {
    agent any

    stages {
        stage('Inicio') {
            steps {
                echo '¡Pipeline iniciado correctamente!'
            }
        }
        stage('Clonar código') {
            steps {
                git 'https://github.com/Mai1203/clima-app'
            }
        }
        stage('Construcción') {
            steps {
                echo 'Ejecutando fase de construcción...'
            }
        }
        stage('Final') {
            steps {
                echo 'Pipeline finalizado con éxito.'
            }
        }
    }
}
