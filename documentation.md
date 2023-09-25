# Selego API Documentation

Welcome to the Selego API documentation. This guide provides information on accessing the live API, pushing new code to production, and setting up Kubernetes for efficient traffic handling.

## Accessing the API

You can access the Selego API live at [https://selego-api.onrender.com/](https://selego-api.onrender.com/).

## Pushing New Code to Production

To deploy new code to production, follow these steps:

1. **Code Pipeline Validation:** Ensure the code passes through our pipeline, including build and unit tests.

2. **Tagging Docker Image:** Push a new tag to your Docker image with the updated code.

3. **Rendering the Tag:** Render, our deployment platform, will read the tag. Verify everything before applying the update to the live environment.

All these steps are realized during the github action

## More Information

- The secret "SECRET_ENV" should be rotated as it is still in the .git of the first commit.
- checkov test should be set when the infra is set up in IaC

## Setting Up Kubernetes for Traffic Handling

To efficiently handle traffic, set up Kubernetes as follows:

1. **Create EKS Cluster:** Create an EKS cluster (or equivalent in your cloud provider).

2. **Configure Kubeconfig:** Update the Kubeconfig for your EKS cluster in the desired region using the following command:

   ```shell
   aws eks --region eu-east-1 update-kubeconfig --name selego

3. **deploy your application:** kubectl apply -f your-deployment.yaml
4. **link with your elb :**Create a link between your application and the Elastic Load Balancer (ELB) to efficiently handle incoming traffic.

