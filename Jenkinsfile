node {
    agent any
    stages{
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
                     sh 'git add .'
                     sh 'git commit -m "auto commit jenkins"'
                     sh 'git merge master'
                     sh 'git push origin master:master'

                     echo 'Deploying......'
                }
            }
        }
    }
}

