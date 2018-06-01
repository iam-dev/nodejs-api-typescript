# RESTful Web APIs with Node.js, Express, MongoDB and Typescript

Proof of concept RESTful Web API's using Typescript.


## Getting Started
I love to code javascript using Typescript. Due this I thought I would look into the MEAN stack while writing NodeJS with Typescript. 

## Project Structure
```
- environments
    - environments.prod.ts
    - environments.ts
- node_modules
- src
    - routes
        - app.routes.ts
    - user
        - user.controller.ts
        - user.model.ts
        - user.routes.ts
    - app.ts
    - server.ts
- .gitignore
- packages.json
- README.md
- tsconfig.json
```
### Prerequisites
Install nodejs

Install TypeScript and TypeScript Node

```
npm install -g typescript ts-node

```
#### Create MongoDB mblab
https://mlab.com/

#### Change envoriment file


environments.ts example:
```
export const environment = {
    production: false,
    username: 'test',
    password: 'password123',
    secret: 'secret123',
    mongodb: '@ds241530.mlab.com:port/dbname'
};

```

## Install 
```
git clone https://github.com/iam-dev/nodejs-api-typescript.git
cd nodejs-api-typescript
npm install
npm run dev
```

## Run

Run in development mode
```
npm run dev
```

Run in production mode
```
npm run prod
```

# API

## User
- /api/v1/user (GET) - to return all users
- /api/v1/user (POST) - to add a new user 
- /api/v1/user/{usertId} (GET) - to return a specific user when given userId
- /api/v1/user/{usertId} (PUT) - to update a specific user when given userId
- /api/v1/user/{usertId} (DELETE) - to remove a specific user when given userId

#Testing

The default URL is: http://localhost:3000
GET all users

Send GET request to http://localhost:3000/v1/api/user/


