# BookHaven DevOps Engineering Capstone Explanation

## 1. Project Overview

BookHaven is a MERN-stack library catalog application consisting of a React frontend, a Node.js/Express backend, and MongoDB as the database.

The objective of this capstone was to extend the application into a complete DevOps workflow covering:

- Git source control and collaborative workflow
- Continuous Integration and Continuous Delivery
- Docker containerization
- Docker Compose orchestration
- Terraform infrastructure as code
- Ansible configuration management
- Kubernetes orchestration on Google Kubernetes Engine (GKE)
- Persistent database storage
- Health monitoring and resource management
- Documentation and architecture visualization

The final implementation provides a complete path from source code to a publicly reachable Kubernetes application.

The deployed application is available at:

**http://136.116.76.12**

---

# 2. Phase 1 — Git Workflow and Source Control

## Repository and Branching Strategy

The BookHaven starter repository was forked into my GitHub account and cloned locally.

Repository:

**https://github.com/cyganouko/BookHaven**

Development was organized using feature branches instead of making all changes directly on the main branch.

The project contains feature branches including:

- `feature/foundation`
- `feature/containerization`
- `feature/ci-cd`
- `feature/terraform`
- `feature/ansible`

The completed work was integrated into `main` through pull requests and merge commits where appropriate.

This approach made the development history traceable and allowed individual DevOps phases to be developed independently.

## Commit Strategy

The repository contains more than the required 15 descriptive commits.

Examples include:

- `feat: add multi-stage backend dockerfile`
- `feat: add multi-stage frontend dockerfile`
- `feat: add docker compose orchestration`
- `ci: add GitHub Actions test workflow`
- `feat: provision bookhaven cloud infrastructure`
- `feat: add Kubernetes deployment manifests`
- `feat: add backend health check endpoint`
- `fix: use health endpoint for backend probes`
- `infra: increase GKE node pool machine size`
- `docs: add project README and capstone explanation`
- `docs: add BookHaven architecture diagram`
- `chore: exclude Terraform variable files from Git`

These commits document the evolution of the application from the original starter project through containerization, automation, infrastructure provisioning, Kubernetes deployment, troubleshooting, and final documentation.

## `.gitignore` and Sensitive Files

The repository uses `.gitignore` to prevent sensitive files, dependencies, generated infrastructure state, and local configuration from being committed.

Important exclusions include:

```text
.env
.env.*
node_modules/
.terraform/
*.tfstate
*.tfstate.*
.vagrant/
*.retry
vault.yml
vars.yml
terraform.tfvars
