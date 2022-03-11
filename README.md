# Kubernetes and Helm Tutorial
In this tutorial, you will learn how to use Kubernetes and Helm locally on your workstation. 

1. Start Minikube (with Ingress Controller & Docker Daemon)
2. Build a container image for app-showcase-frontend-nodejs
3. Build a container image for app-showcase-backend-java
4. Helm install (2 deployments)

## References
NGINX Ingress - Minikube https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/

https://codefresh.io/docs/docs/new-helm/helm-best-practices/
https://insights.project-a.com/whats-the-best-way-to-manage-helm-charts-1cbf2614ec40
https://www.youtube.com/watch?v=Uh3rqCR69MA&ab_channel=AntonPutra
https://helm.sh/docs/chart_template_guide/subcharts_and_globals/

## Minikube - NGINX Ingress Installation
https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/
```
minikube addons enable ingress

kubectl get pods -n ingress-nginx
```

## Create Sample Deployments
```
kubectl create deployment frontend --image=novarasa/tut-app-showcase-frontend-nodejs:latest
kubectl create deployment backend --image=novarasa/tut-app-showcase-backend-java:latest
```

## Using Local Docker Images in Minikube
https://medium.com/bb-tutorials-and-thoughts/how-to-use-own-local-doker-images-with-minikube-2c1ed0b0968
https://medium.com/@maumribeiro/running-your-own-docker-images-in-minikube-for-windows-ea7383d931f6
### Windows
```
minikube start --driver=docker
minikube docker-env
minikube docker-env | Invoke-Expression
docker images
docker build -t novarasa/app-showcase-frontend-nodejs .\app-showcase-frontend-nodejs\
```
```
eval $(minikube -p minikube docker-env)

minikube ssh

docker images
```
Minikube comes with its own docker daemon and not able to find images by default
We need to set the environment variables with eval $(minikube docker-env).
We need to build the docker image after we set the environment variables above and make sure to tag the image as same as in the deployment yaml file.
We have to set ImagePullPolicy to Never in order to use local docker images with the deployment.
We can unset the environment variables with this command eval $(minikube docker-env -u)