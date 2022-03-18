# Helm Release Manager

## Scope
In this tutorial, you will be create a namespace called `athena` and creating a `deployment` and `service` for both (frontend) and (backend) apps and exposing the services via an `ingress`

```mermaid
graph LR;
 client([client])-. Ingress-managed <br> load balancer .->ingress[Ingress<br>athena-ingress];
 ingress-->|/frontend/*|service-frontend[Service<br>athena-frontend];
 ingress-->|/backend/*|service-backend[Service<br>athena-backend];

 subgraph athena-namespace
 ingress;
 service-frontend;
 service-backend;
 service-frontend-->pod1[Pod<br>athena-frontend];
 service-backend-->pod2[Pod<br>athena-backend];
 end

 subgraph cluster
 athena-namespace;
 end

 classDef plain fill:#ddd,stroke:#fff,stroke-width:4px,color:#000;
 classDef k8s fill:#326ce5,stroke:#fff,stroke-width:4px,color:#fff;
 classDef namespace fill:#fff,stroke:#bbb,stroke-width:2px,color:#326ce5;
 class ingress,service-frontend,service-backend,pod1,pod2 k8s;
 class client plain;
 class athena-namespace namespace;
```

## Instructions
```
$k8s-helm-tutorial (working directory)

# Create namespace
kubectl create namespace athena

# Helm Install (creates all resources defined in parent and sub charts)
helm install athena-release .\helm-release-manager\

# Helm Upgrade (if you are updating charts / values and redeploying)
helm upgrade athena-release .\helm-release-manager\

# Expose ingress-nginx-controller
kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80
```

## Access the apps
```
curl http://127.0.0.1:8080/athena-frontend/headers
curl http://127.0.0.1:8080/athena-frontend/health
curl http://127.0.0.1:8080/athena-frontend/ping

curl http://127.0.0.1:8080/athena-backend/ping
curl http://127.0.0.1:8080/athena-backend/actuator/health
```
