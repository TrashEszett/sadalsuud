pipeline {
    agent {
        docker {
            image 'node:12.11-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
            stage('Build') {
                steps {
                    sh 'yarn install'
                    echo 'installing...'
                    sh 'yarn build'
                    echo 'Building..'
                }
            }
            stage('Test') {
                steps {
                    echo 'Testing..'
                }
            }
            stage('Deploy') {
                steps {
                    echo 'Deploying....'
                }
            }
        }
}
