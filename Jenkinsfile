pipeline {
    agent {
        docker {
            image 'node:12.11-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
            stage('Prepare') {
                steps {
                    sh 'yarn install'
                    echo 'installing...'
                }
            }
            stage('Test') {
                steps {
                    sh 'yarn test'
                    echo 'Testing..'
                }
            }
            stage('Build') {
                steps {
                    sh 'yarn build'
                    echo 'Building..'
                }
            }
            stage('Git') {
                when {
                  expression {
                    currentBuild.result == null || currentBuild.result == 'SUCCESS'
                  }
                }
                steps {
                    sh 'git add .'
                    sh 'git commit -m auto commit jenkins'
                    sh 'git merge master'
                    sh 'git push origin master:master'
                    echo 'Deploying.....'
                }
            }
        }
}
