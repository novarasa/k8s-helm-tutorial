# App Showcase Frontend NodeJS
A Simple NodeJS / Express Simple Frontend packaged as a container image. The app has a simple UI with 3 HTTP endpoints `/headers` `/health` and `/ping`

### Pre-Requisites
* Docker
* Node Package Manager (NPM)

### Local Build & Run
```
npm install
node app.js
```
### Build Docker image
```
docker build -t novarasa/app-showcase-frontend-nodejs .
```

### Run Docker image
```
# Launch
docker run -p 8084:8084 -d novarasa/app-showcase-frontend-nodejs

# Check Process
docker ps
```

### Inspect
#### UI
Go to http://localhost:8084 on your web browser

#### APIs
```
# List all incoming request headers
curl --request GET --url http://localhost:8084/headers

# Return sample health
curl --request GET --url http://localhost:8084/health
```

### References
* https://morioh.com/p/c5b5044d4257
* https://www.section.io/engineering-education/static-site-dynamic-nodejs-web-app/
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data