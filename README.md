This repository is set up with a comprehensive CI/CD pipeline to ensure the smooth deployment and monitoring of our Kubernetes-based application. Below is a detailed description of each stage in the pipeline, from code push to production deployment, and its respective tools.

Pipeline Stages
1. Code Push (GitHub)
The pipeline begins when a developer pushes changes to the GitHub repository.
GitHub acts as the source control for tracking and managing our codebase.
2. Continuous Integration (CI)
Once a push is detected, the CI process starts automatically on Jenkins.
Jenkins pulls the latest code from GitHub to run tests and build the application.
3. Testing (SonarQube)
During this phase, Jenkins triggers a SonarQube scan.
SonarQube performs static code analysis to check for code quality, bugs, vulnerabilities, and other code smells.
The pipeline will fail if the code does not meet quality standards.
4. Build & Dockerization
After the testing phase, Jenkins builds the application into Docker images.
These Docker images are tagged and pushed to a Docker registry.
This stage ensures that the application is packaged consistently across different environments.
5. Continuous Deployment (CD)
Once the Docker images are built and pushed, Jenkins deploys them to a Kubernetes cluster.
This is achieved through a CD pipeline that uses Kubernetes to orchestrate and manage containerized applications.
6. Monitoring
Prometheus and Grafana are used to monitor the application running in the Kubernetes cluster.
Prometheus gathers metrics from the containers, while Grafana visualizes these metrics in dashboards.
This setup ensures real-time monitoring and alerting for issues in production.
Tools & Technologies
GitHub: Version control and source code repository.
Jenkins: Orchestrates the CI/CD pipeline.
SonarQube: Ensures code quality through static analysis.
Docker: Used for containerizing the application.
Kubernetes: Manages the deployment, scaling, and operation of containerized applications.
Prometheus: Collects metrics for monitoring.
Grafana: Visualizes metrics and provides monitoring dashboards.
How to Run
Code Changes: Push your changes to the repository.
Jenkins: Automatically starts the CI process, runs tests, and builds Docker images.
Deployment: Docker images are deployed to the Kubernetes cluster.
Monitoring: Use Grafana dashboards for monitoring metrics from Prometheus.
