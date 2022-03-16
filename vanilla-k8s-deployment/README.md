```
# Start Minikube
minikube start --driver=docker

# Install Ingress (minikube addons enable ingress - has a bug in ConfigMap name)
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml

# Use Minikube's Docker Daemon
minikube docker-env
minikube docker-env | Invoke-Expression
docker image ls

# Build necessary images
docker build -t novarasa/app-showcase-frontend-nodejs:0.0.2 .\app-showcase-frontend-nodejs\
```

```
minikube start --driver=docker

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml

minikube addons enable ingress
minikube addons enable ingress-dns

kubectl apply -f namespace.yaml

kubectl apply -f deployment-frontend.yaml

kubectl apply -f deployment-backend.yaml

kubectl create deployment hello --image=gcr.io/google-samples/hello-app:1.0
kubectl expose deployment hello --type=NodePort --port=8080s

kubectl apply -f service-frontend.yaml

kubectl apply -f service-backend.yaml

kubectl apply -f ingress.yaml

# Tunnel for ingress-nginx-controller
minikube service ingress-nginx-controller -n ingress-nginx
```

Ingress
https://minikube.sigs.k8s.io/docs/handbook/accessing/
https://github.com/cloudxlab/minikube-static-app
https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/
https://minikube.sigs.k8s.io/docs/handbook/addons/ingress-dns/

Java - Liveness and Readiness
https://www.baeldung.com/spring-liveness-readiness-probes
https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/


## Diary 
### 12 March 2022
* ingress-controller port wasn't exposed by `minikube tunnel` as the command was hanging
* Downloaded the latest minikube from https://minikube.sigs.k8s.io/docs/start/ & retried

### 13 Mar 2022
* minikube addons ingress had a bug with a configMap name. Resolved it by disabling the addon and installing ingress using instructions at https://kubernetes.github.io/ingress-nginx/deploy/#using-helm
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml
```
* In the ingress kind definition, the annotations for ingress.name should be present

https://robearlam.com/blog/nginx-ingress-breaking-change-ingress.class-now-required

kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80

Regular Expression
https://kubernetes.github.io/ingress-nginx/user-guide/ingress-path-matching/