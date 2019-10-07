pipeline {
    agent {
        docker {
            image 'node:12.11-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
            stage('Install') {
                steps {
                    sh 'yarn install'
                    echo 'installing...'
                }
            }stage('Build') {
                steps {
                    sh 'yarn build'
                    echo 'Building..'
                }
            }
            stage('Test') {
                steps {
                    sh 'yarn test'
                    echo 'Testing..'
                }
            }
            stage('Deploy') {
                when {
                  expression {
                    currentBuild.result == null || currentBuild.result == 'SUCCESS'
                  }
                }
                steps {
                    echo 'Deploying....'
                }
            }
        }
}
