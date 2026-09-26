pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Restart Express') {
            steps {
                sh 'sudo -u ec2-user /usr/lib/nodejs18/lib/node_modules/pm2/bin/pm2 restart express-frontend'
            }
        }
    }
}