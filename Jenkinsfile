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
            AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
            AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
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
            stage('Git') {
                steps {
/*                    git branch: 'dev',
                        credentialsId: 'eszett',
                        url: 'https://github.com/TrashEszett/sadalsuud.git' */
                    sshagent(['0703fafa-8243-4f8f-a20e-9f3d2e19741b']) {
                        sh 'which git'
                         sh '/usr/local/bin/git add .'
                         sh '/usr/local/bin/git commit -m "auto commit jenkins"'
                         sh '/usr/local/bin/git merge master'
                         sh '/usr/local/bin/git push origin master:master'

                         echo 'Deploying......'
                     }


                }

            }
        }
}
