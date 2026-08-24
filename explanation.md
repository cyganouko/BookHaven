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
