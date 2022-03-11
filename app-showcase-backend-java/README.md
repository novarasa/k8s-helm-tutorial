# App Showcase Backend Java
A simple Java Spring Boot application packaged as a container image. The app exposes simple HTTP endpoints `/ping` to echo requests. 

## Pre-requisites
* [Java](https://openjdk.java.net/install/) 11+
* [Gradle](https://gradle.org/install/) 7+
* [Docker](https://docs.docker.com/get-docker/) (for local build)


## Quickstart
### Build 
#### Build JAR file & run Junit tests
```
./gradlew clean test
```
#### Build Container Image (using Docker)
```
./gradlew clean test jibDockerBuild
```

### Run
#### Docker
```
# Launch
docker run -p 9090:9090 -d novarasa/app-showcase-backend-java

# Check Process
docker ps
```

### Test
Open http://localhost:9090/ping in your web browser or CURL


## References
* https://github.com/claudioaltamura/springboot-jib-helloworld
* https://spring.io/guides/gs/testing-web/ 
* https://github.com/marketplace/actions/publish-unit-test-results
* https://github.com/actions/starter-workflows/issues/171 (gradlew chmod)
* https://medium.com/bb-tutorials-and-thoughts/how-to-use-own-local-doker-images-with-minikube-2c1ed0b0968