# BookHaven DevOps Engineering Capstone — Project Explanation

## 1. Project Overview

BookHaven is a MERN-stack library catalog application consisting of a React frontend, Node.js/Express backend, and MongoDB database.

The project implements a complete DevOps workflow:

```text
GitHub
   ↓
GitHub Actions
   ↓
Tests / Validation
   ↓
Docker Image Build
   ↓
Docker Hub
   ↓
Terraform
   ↓
Google Cloud / GKE
   ↓
Kubernetes
   ↓
Frontend → Backend → MongoDB
                 ↓
          Persistent Storage

## Architecture Diagram

The following diagram illustrates the complete BookHaven DevOps architecture, showing the relationship between source control, CI/CD, Docker Hub, Terraform, Google Cloud, Kubernetes, application workloads, and persistent MongoDB storage.

![BookHaven DevOps Architecture](docs/architecture.jpeg)
