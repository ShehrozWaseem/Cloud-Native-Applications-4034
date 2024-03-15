# Recreate deployment - for dev envr - there is downtime as the deployment is completely taken down and then started so there is a time in between where everything stays down
- in this strategy both the version are indp of each other

# rolling deployment: default deployment that comes up with kub
- this rollout the deployment to new version
- here all the pods are not terminated at once all the pods are terminated and crated one by one (replicas)
- Readiness probes: are useful for rolling updates to manage the traffic
- the probes manage the traffic such a way that it doesn't allow the traffic to the pods which are being created
- but there are edge cases in which probes can be failed
- probe can autoself recognise which pod health is bad and if the new deployment health is not better it will rollback the deployment by itself
- maxSurge (no of pods that can be created at any time) and maxUnavailable () 

# Ramped SLow Rollout:
- deployment is roll out in a slow manner to observe the performance of the new version, rpelicas are created very slowly

# B/G Deployment
- u ahve two version up and running
- rsc sensitive deployment
- u need a load balancer for this deployment
- 

so i have to do an assignment which involves a full stach application 
here is the below components
CI/CD
Terraform
Ansible
Kubernetes
GCP (GKE for cluster)
and pls tell me a workflow i will give a flow what i think and then u lemme know how it works
so in my assignment cloud is just required for basic deployment, u need to provision a vm via terraform and configure it using ansible and then deploy the kuberneets cluster on gke 

but now how will be the flow lets go one by one

So i need to demonstrate CI pipeline 
I will create the docker images for my full stack app three imgs each for backend, for blockchain network, and one for front end

now once the images are ready what will be next 

obviously it should be kubernetes and then using kubernetes i'll be applying different rscs techniques like scaling stateful sets, rbac policies ok now my ymls are ready 

now i'll deploy them in a git repo and integrate flux cd into that repo 

so theres still a question if my code changes obviously i would need to create new docker image and upoad them so how can i do that like how my kub repo will get to know if theres an update and now it has to pull the image again obviously if i mention the new image through code in my kub yml then it'd auto apply the configuration in the cluster

ok now with terraform what will i do? will i provision a vm on GCP and set up a GKE? is it possible via terraform
