# Library API

[![Release Version](https://img.shields.io/badge/release-v.1.0-blue)](https://github.com/HiRahmat-Dev/library-api/releases/tag/1.0) [![Node JS](https://img.shields.io/badge/Dependencies-Express%20JS-green)](https://nodejs.org/en/)
![GitHub repo size](https://img.shields.io/github/repo-size/HiRahmat-Dev/library-api)
![GitHub contributors](https://img.shields.io/github/contributors/HiRahmat-Dev/library-api)
![GitHub stars](https://img.shields.io/github/stars/HiRahmat-Dev/library-api?style=social)
![GitHub forks](https://img.shields.io/github/forks/HiRahmat-Dev/library-api?style=social)
![Tweet](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FHiRahmat-Dev%2Flibrary-api
)
<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

## Table of Contents
- [Prerequiste](#prerequiste)
- [Instalation](#installation)
- [Link Collection Postman](#link-collection-postman)
- [Structure Folder](#structure-folder)
- [Contributing](#contributing)
- [Related Project](#related-project)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/).
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Redis - Download and Install [Redis](https://redis.io/)

## Installation
### Clone
```
$ git clone https://github.com/m-joseph27/Library-API.git
$ cd library-API
$ npm install
```

### Create Environment Variable
```
$ touch .env
$ nano .env
```

```
DB_HOST=YOUR_DB_HOST
DB_USER=YOUR_DB_USER
DB_PASSWORD=YOUR_DB_PASSWORD
DB_NAME=YOUR_TABLE_NAME

SERVER_PORT=YOUR_PORT

EMAIL=YOUR_EMAIL_ACTIVATION
PASSWORD=YOUR_EMAIL_PASSWORD

SECRET_KEY=YOUR_SECRET_KEY

SERVER_HOST=YOUR_HOST
SERVER_PORT=YOUR_PORT
SERVER_PORT_FRONT=YOUR_PORT_FRONT_END
PORT_REDIS=YOUR_PORT_REDIS / default => 6379

```

### Start Development Server
```
$ npm run serve
```
## Link Collection Postman
[Postman](https://www.getpostman.com/collections/bb923819853137d50b60)

## Structure Folder
```
\---src
|    \---Config
|    |   +---db.js            
|    \---Controllers
|    |   +---book.js
|    |   +---category.js
|    |   +---loan.js
|    |   +---user.js
|    \---helpers
|    |   +---auth.js
|    |   +---helpers.js
|    \---models
|    |   +---books.js
|    |   +---category.js
|    |   +---loan.js
|    |   +---user.js
|    \---routers
|    |   +---books.js
|    |   +---category.js
|    |   +---loan.js
|    |   +---user.js
+---app.js
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
1. Create your Feature Branch  ```git checkout -b [feature]```
2. Commit your Changes ```git commit -m 'Add some feature'```
3. Push to the Branch ```git push origin [feature]```
4. Open a Pull Request

## Related Project

* [`Frontend-Library-VueJS`](https://github.com/m-joseph27/Library_with-vue.js)
* [`Backend-Library`](https://github.com/m-joseph27/Library-API)

