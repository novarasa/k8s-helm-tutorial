```
minikube start --driver=virtualbox

minikube addons enable ingress

kubectl apply -f namespace.yaml

kubectl apply -f deployment-frontend.yaml

kubectl apply -f deployment-backend.yaml

kubectl apply -f service-frontend.yaml

kubectl apply -f service-backend.yaml

kubectl apply -f ingress.yaml
```

https://minikube.sigs.k8s.io/docs/handbook/accessing/
https://github.com/cloudxlab/minikube-static-apphttps://github.com/cloudxlab/minikube-static-app