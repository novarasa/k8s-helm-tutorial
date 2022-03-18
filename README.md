# Kubernetes and Helm Tutorial
In this tutorial, you will learn how to build simple containerized applications using Docker and deploy the apps to Kubernetes.

## Prerequisites
* Java 11+ / Gradle 7+
* NPM
* [Docker](https://www.docker.com/get-started/) 
* [Minikube](https://minikube.sigs.k8s.io/docs/start/)
* [Helm3](https://helm.sh/docs/intro/install/) 

## Key Takeaways
1. Build container images for NodeJS / Java apps
2. Configure & Run Minikube (with Ingress Controller & Docker Daemon)
3. Deploying apps to Kubernetes (using kubectl)
4. Deploying apps to Kubernetes (using Helm3)

## Minikube - Setup & Notes
**Important:** Complete the [Minikube Setup](README-Minikube-Setup.md) before starting the tutorial

## Tutorial
### Step 1
Build a simple (frontend) NodeJS application. See [app-showcase-frontend-nodejs/README](app-showcase-frontend-nodejs/README.md)

### Step 2
Build a simple (backend) Java application. See [app-showcase-backend-java/README](app-showcase-backend-java/README.md)

### Step 3
Deploy the (frontend) and (backend) apps to Kubernetes (Minikube) using `kubectl`. See [kubectl-release-manager/README](kubectl-release-manager/README.md). It is important you understand the Kubernetes resource kinds, YAML specification & `kubectl` commands before moving to `helm`

### Step 4
Deploy the (frontend) and (backend) apps to Kubernetes (Minikube) using `helm`. See [helm-release-manager/README](helm-release-manager/README.md)