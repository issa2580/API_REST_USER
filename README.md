📌️ This repository implements a CI/CD pipeline for seamless deployment and monitoring of a Kubernetes-based application.

📍️Pipeline Workflow

1- Code Push (GitHub): Code is pushed to the GitHub repository, triggering the pipeline.
2- Continuous Integration (Jenkins): Jenkins pulls the code, runs tests, and builds Docker images.
3- Code Quality (SonarQube): Static code analysis is performed to ensure code quality and security.
4- Build & Dockerization: The application is built and containerized using Docker.
5- Continuous Deployment (Kubernetes): Docker images are deployed to the Kubernetes cluster for production.
6- Monitoring (Prometheus & Grafana): Prometheus collects metrics, and Grafana visualizes them for real-time monitoring.

📍️Tools Used

1- GitHub: Version control
2- Jenkins: CI/CD automation
3- SonarQube: Code quality checks
3- Docker: Containerization
5- Kubernetes: Orchestration
6- Prometheus: Metrics collection
7- Grafana: Monitoring dashboard

📍️Quickstart Guide

👉️ Push changes to the repository.
👉️ Jenkins will automatically build and deploy the application.
👉️ Monitor the app using Grafana dashboards.
