pipeline {
    /* https://jenkins.io/doc/book/pipeline/syntax/ */

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
                steps {
                    git 'add .'
                    git 'commit -m "auto commit jenkins"'
                    git 'merge master'
                    git 'push origin master:master'
                    echo 'Deploying.....'
                }

            }
        }
}
