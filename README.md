## Prerequisites
Before you begin, ensure that you have the following prerequisites installed:

<a href='https://git-scm.com/'>
    <img src="https://img.shields.io/badge/git-181c1c?style=for-the-badge&logo=git"/>
</a>
<a href='https://docs.docker.com/engine/install/'>
    <img src="https://img.shields.io/badge/Docker-181c1c?style=for-the-badge&logo=docker"/>
</a>

## Getting Started
To run this application, follow these steps:
### 1. Clone the Repository
Open a terminal or command prompt and clone the repository using the following command:
```bash
git clone https://github.com/kwsv/test-task
```
### 2. Set the environment
Add a .env file to the project root with the following content:
``` js
POSTGRES_BD_USER=admin
POSTGRES_BD_PASSWORD=admin
POSTGRES_BD_HOST_PORT=5432
POSTGRES_BD_NAME=database

FRONTEND_DOMAIN=http://localhost
FRONTEND_PORT=3000

BACKEND_DOMAIN=http://localhost
BACKEND_PORT=8000
```

### 3. Run project
```bash
docker compose up --build -d
```
