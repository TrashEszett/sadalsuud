pipeline {
    /* https://jenkins.io/doc/book/pipeline/syntax/ */

    agent {
        docker {
            image 'node:12.11-alpine'
            args '-p 3000:3000'
        }
    }
    /*
    environment {
//             AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
//             AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
        }
        */
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

        }
}
