# BookHaven

A library catalog app (MERN stack) — React frontend, Node/Express + MongoDB backend.

# Requirements
Install the following:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Docker](https://docs.docker.com/engine/install/) (for containerization)
- [Vagrant](https://www.vagrantup.com/) + [VirtualBox](https://www.virtualbox.org/) (for provisioning)
- [Ansible](https://docs.ansible.com/) (for configuration management)

## Run locally (without Docker)

```bash
# backend
cd backend
npm install
npm start   # runs on port 5000

# frontend (in a separate terminal)
cd client
npm install
npm start   # runs on port 3000
```

> **Note:** `npm start`/`npm run build` in `client/` set `NODE_OPTIONS=--openssl-legacy-provider`
> under the hood. This app uses an older react-scripts (3.x) whose bundled webpack 4
> is incompatible with the OpenSSL 3 changes in Node 17+. The flag works around it —
> no action needed, just don't remove it from `package.json`.

Seed some books via the "Add a book" form once both are running.

## How to run with Vagrant + Ansible

```bash
vagrant up --provision
```

This provisions a VM, then runs `playbook.yml`, which applies the three
roles in `roles/`:
- `setup-mongodb` — runs a MongoDB container
- `backend-deployment` — pulls and runs the backend image
- `frontend-deployment` — left for you to complete

See `Structure` for the ansible-playbook directory layout.
