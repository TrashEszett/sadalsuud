# 1. jenkinsci/biueocean 설치
#FROM node:12.11-alpine
#
#USER root
#
#ENV
#
#COPY /var/run/docker.sock /var/run/docker.sock


#FROM        jenkinsci/blueocean
CMD docker run \
  --rm \
  -u root \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  jenkinsci/blueocean
