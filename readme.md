### Start Server
```
  $ node app.js
```


### Start K8s service

```
>  kubectl apply -f .\deployment.yaml
>  kubectl apply -f .\service.yaml
```

* If you are using minikube, then you can launch service:-

```
> minikube service k8s-test-node-app
```

### Delete

```
>  kubectl delete -f .\deployment.yaml -f .\service.yaml
```