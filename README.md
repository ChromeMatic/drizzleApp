
# Todo project

The project aims to develop a web application for managing tasks and to-do lists. This description focuses on the backend, which is built using Express, TypeScript, and Drizzle ORM, with PostgreSQL as the database.


## Installation

Set up the local PostgreSQL database by following these steps:

1. Install Docker on your system if it's not already installed.
2. Create an empty directory.
3. Within this directory, create a `docker-compose.yml` file using the content provided below.

```bash
  services:

  db:
    image: postgres:alpine3.20
    container_name: postgres_container
    restart: always
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: username
      POSTGRES_PASSWORD: database_password
    volumes:
      - postgres:/var/lib/postgres/data
    
  pgAdmin:
    image: dpage/pgadmin4:latest
    container_name: pgadmin_container
    restart: always
    ports:
      - "5050:80"
    environment:
      PGADMIN_DEFAULT_EMAIL: example@gmail.com
      PGADMIN_DEFAULT_PASSWORD: password
    volumes:
      - pgadmin:/var/lib/pgadmin

volumes:
  postgres:
  pgadmin:
```

To start a local PostgreSQL database, use the following command:
```bash
  docker compose up -d
```

To run the project locally, visit http://localhost:5000
```bash
 cd drizzleApp

 yarn install

 yarn migrate

 yarn dev
```

    
## Authors

- [Armani Brown](https://dev-main.tech/)
- [GitRepo](https://github.com/ChromeMatic/drizzleApp)