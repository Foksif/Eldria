<div align="center">

# Eldria <br> ❗ :shield: ❗

![](https://img.shields.io/badge/License-MIT-green.svg)
![](https://img.shields.io/badge/Author-Foks_f-orange.svg)
![](https://img.shields.io/badge/Node->=10-red.svg)
![](https://img.shields.io/badge/Python-3.12-blue.svg)

</div>


## Tech Stack

**Client:** React

**Server:** Node, Express, HardNet


## Plugins

**Client:** Redux, Redux Toolkit, Axios

**Server:** Bcryptjs, Cors, Mongoose, Request, UUID
**Python-Server:** Request, Flask

## Installation

Before running the application, make sure you have configured the configuration file!

## Path:
```path
  client:
    "src/configs/index.js"

  server:
    "configs/config.js"
```

## Client

```bash
  cd Eldria/client
  npm install
  npm start
```

## Server

```bash
  cd Eldria/server
  npm install
  npm run dev
```
    
## API Reference
#### Authorization:

#### Registration

```http
  POST /api/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**.|
| `password` | `string` | **Required**.|
| `email` | `string` | **Required**.|

## Responses

```javascript
{
  "message" : string,
  "success" : bool,
  "token"    : string
}
```

#### Authorization

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**.|
| `email` | `string` | **Required**.|

## Responses

```javascript
{
  "message" : string,
  "success" : bool,
  "token"    : string
}
```

#### Get Users

```http
  GET /api/auth/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.|

## Responses

```javascript
{
  "users" : json,
}
```

#### Get Me

```http
  GET /api/auth/getme
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.|

## Responses

```javascript
{
  "user" : json,
}
```



## Author

- [@Foks_f](https://www.github.com/foksif)

