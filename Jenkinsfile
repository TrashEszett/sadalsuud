pipeline {
    /* https://jenkins.io/doc/book/pipeline/syntax/ */

    agent {
        /*
        docker {
            image 'node:12.11-alpine'
            args '-p 3000:3000'
        }dc908839d1db2bbf5989182278c978034216210f
        */
        docker {
            image 'git:'
        }
    }
    options {
        parallelsAlwaysFailFast()
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
                  branch 'dev'
                }
                /* 동시실 */
                parallel {
                    steps {
                        sh 'git add .'
                        sh 'git commit -m "auto commit jenkins"'
                        sh 'git merge master'
                        sh 'git push origin master:master'
                        echo 'Deploying.....'
                    }
                }
            }
        }
}
