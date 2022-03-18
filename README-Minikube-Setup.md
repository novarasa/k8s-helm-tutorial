# Kubernetes and Helm Tutorial - Minikube Setup

## Minikube - Setup & Notes
**Start Minikube with Docker driver**
```
minikube start --driver=docker
```
**Use Minikube's Docker daemon:** This is important. Build container images after the daemon is started, if not minikube won't see the new / updated images.
```
minikube docker-env
```
**Check Minikube's Docker daemon**
```
## Windows
minikube docker-env
minikube docker-env | Invoke-Expression
docker image ls

## Linux / MacOS
minikube docker-env
eval $(minikube -p minikube docker-env)
docker image ls
```
**Notes**
* Minikube comes with its own docker daemon and not able to find images by default
* We need to set the environment variables with eval $(minikube docker-env).
* We need to build the docker image after we set the environment variables above and make sure to tag the image as same as in the deployment yaml file.
* We have to set ImagePullPolicy to `Never` in order to use local docker images with the deployment.
* We can unset the environment variables (after the tutorial) with this command eval $(minikube docker-env -u)

## NGINX Ingress Controller
[NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/) will be used to manage ingress routes.
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml
```

## References
* https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/
* https://codefresh.io/docs/docs/new-helm/helm-best-practices/
* https://www.youtube.com/watch?v=Uh3rqCR69MA&ab_channel=AntonPutra
* https://helm.sh/docs/chart_template_guide/subcharts_and_globals/
* https://medium.com/bb-tutorials-and-thoughts/how-to-use-own-local-doker-images-with-minikube-2c1ed0b0968
* https://medium.com/@maumribeiro/running-your-own-docker-images-in-minikube-for-windows-ea7383d931f6