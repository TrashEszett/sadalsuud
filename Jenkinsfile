pipeline {
    agent {
        docker {
            image 'node:12.11-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') { // Build라는 이름의 stage를 정의함.
            steps {
                sh 'yarn install'
                sh 'yarn build'
            }
        }
    }
}
