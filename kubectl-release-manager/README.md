# Vanilla Kubernetes Deployments

## Setup Minikube, NGINX Ingress Controller & Docker daemon
```
# Start Minikube
minikube start --driver=docker

# Install Ingress (minikube addons enable ingress - has a bug in ConfigMap name)
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml

# Use Minikube's Docker Daemon
minikube docker-env
minikube docker-env | Invoke-Expression
docker image ls
```

## Build Container Imanges (using Minikube's Docker daemon)
```
docker build -t novarasa/app-showcase-frontend-nodejs:0.0.2 .\app-showcase-frontend-nodejs\
```

## KUBECTL - Create Deployments, Services & Ingress
```
# Create namespace
kubectl apply -f 01-namespace.yaml

# Create Frontend deployment and Service
kubectl apply -f 02-frontend-deployment-service.yaml

# Create Backend deployment and Service
kubectl apply -f 03-backend-deployment-service.yaml

# Create Ingress
kubectl apply -f 04-ingress.yaml

# Expose ingress-nginx-controller
kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80
```

## Access the apps
```
curl http://127.0.0.1:8080/frontend/headers
curl http://127.0.0.1:8080/frontend/health
curl http://127.0.0.1:8080/frontend/ping

curl http://127.0.0.1:8080/backend/ping
curl http://127.0.0.1:8080/backend/actuator/health
```

## KUBECTL - Delete Deployments, Services & Ingress (Backup)
```
# Delete Ingress
kubectl delete ingress vanillaverse-ingress -n vanillaverse

# Delete Backend Service and Deployment
kubectl delete service backend-service -n vanillaverse
kubectl delete deployment backend-deployment -n vanillaverse

# Delete Frontend Service and Deployment
kubectl delete service frontend-service -n vanillaverse
kubectl delete deployment frontend-deployment -n vanillaverse

# Delete namespace
kubectl delete namespace vanillaverse
```

## References
### Ingress
* https://kubernetes.github.io/ingress-nginx/user-guide/ingress-path-matching/
* https://kubernetes.github.io/ingress-nginx/examples/rewrite/
* https://minikube.sigs.k8s.io/docs/handbook/accessing/
* https://github.com/cloudxlab/minikube-static-app
* https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/
* https://minikube.sigs.k8s.io/docs/handbook/addons/ingress-dns/

### Java - Liveness and Readiness
* https://www.baeldung.com/spring-liveness-readiness-probes
* https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/

### minikube addons (gotcha)
* https://robearlam.com/blog/nginx-ingress-breaking-change-ingress.class-now-required 