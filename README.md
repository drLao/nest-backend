<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

=======
# nest-backend
Test Nest.js backend powers

Little API project with roles, authorization, validation, guards for endpoints,<br>
uploading files, creating posts, Swagger UI for API 

Pretty pointless, but fun to build.

To run project one need running postgresql service with that credentials.
```
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=root
POSTGRES_DB=nestcourse
```
To interact with Swagger UI for API go into your browser to<br/>
(port 5000 for dev, port 7000 for prod):
http://localhost:5000/api
