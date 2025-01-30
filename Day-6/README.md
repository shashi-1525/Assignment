# User CRUD

Implemented JWT authentication, Middleware on a small project where user can signup using email and password. Then they can login using their email and password. 
Once the user is logged in they get a JWT token which has userId. If the token passed in header has the valid token then it will pass an userId to next method where user can fill their details and can even view their data using get route.
## 🔖 Software Requirements

1. Nodejs
2. MongoDB

## SignUp 

```
http://localhost:3000/api/v1/signup
```
This is a POST request and it is used to create a new user using email and password.

A successful POST response will have a `200 OK` status, and should include some response body including token.

```
{
    "email": "xyz@gmail.com",
    "password": "pass123"
}
```
On successful user signup a response in below format will be returned:
```
{
    "message": "User created successfully.",
    "user": {
        "email": "xyz@gmail.com",
        "password": "$2b$12$3h0QpMRlqL4qPCz3M4TnIOKujb6jhBcOX9hzsKlC9gl7l33XTVWmS",
        "_id": "679b463de73ed7d9725a4fd7",
        "createdAt": "2025-01-30T09:28:29.751Z",
        "updatedAt": "2025-01-30T09:28:29.751Z",
        "__v": 0
    }
}
```

## Login

```
http://localhost:3000/api/v1/login
```
This is a POST request and it is used to login. It takes email and password and returns a token on successful login.
```
{
    "email": "xyz@gmail.com",
    "password": "pass123"
}
```
On Successful login you will get the following result.
```
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWI0NjNkZTczZWQ3ZDk3MjVhNGZkNyIsImlhdCI6MTczODIyOTQxOCwiZXhwIjoxNzM4MjMzMDE4fQ.IqZMzwGwEp0VEEj9BYTYQBcngtLSUDsYUqcbLWuA97o",
    "user": {
        "_id": "679b463de73ed7d9725a4fd7",
        "email": "xyz@gmail.com",
        "password": "$2b$12$3h0QpMRlqL4qPCz3M4TnIOKujb6jhBcOX9hzsKlC9gl7l33XTVWmS",
        "createdAt": "2025-01-30T09:28:29.751Z",
        "updatedAt": "2025-01-30T09:28:29.751Z",
        "__v": 0
    }
}
```
## Register

```
http://localhost:3000/api/v1/register
```
This is a POST request and it is used to take the user details in json format and store in the db.This request will also need a header which is provided while user login.
```
BODY:
{
    "name": "Shashi Ranjan",
    "address": "Delhi",
    "occupation": "Engineer"
}
HEADER:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWI0NjNkZTczZWQ3ZDk3MjVhNGZkNyIsImlhdCI6MTczODIyOTQxOCwiZXhwIjoxNzM4MjMzMDE4fQ.IqZMzwGwEp0VEEj9BYTYQBcngtLSUDsYUqcbLWuA97o
```
Successful response:
```
{
    "status": "success",
    "user": {
        "user": "679b463de73ed7d9725a4fd7",
        "name": "Shashi Ranjan",
        "address": "Delhi",
        "occupation": "Engineer",
        "_id": "679b4f394184e1af16851525",
        "createdAt": "2025-01-30T10:06:49.650Z",
        "updatedAt": "2025-01-30T10:06:49.650Z",
        "__v": 0
    },
    "message": "User details created successfully."
}
```
## Get User

```
http://localhost:3000/api/v1/get
```
This is a GET request, to get the registered user details. 
This GET request will need a header.
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWI0NjNkZTczZWQ3ZDk3MjVhNGZkNyIsImlhdCI6MTczODIyOTQxOCwiZXhwIjoxNzM4MjMzMDE4fQ.IqZMzwGwEp0VEEj9BYTYQBcngtLSUDsYUqcbLWuA97o
```
On successful response you will get this response:
```
{
    "status": "success",
    "user": {
        "_id": "679b4f394184e1af16851525",
        "user": "679b463de73ed7d9725a4fd7",
        "name": "Shashi Ranjan",
        "address": "Noida",
        "occupation": "Engineer",
        "createdAt": "2025-01-30T10:06:49.650Z",
        "updatedAt": "2025-01-30T10:06:49.650Z",
        "__v": 0
    },
    "message": "User details fetched successfully."
}
```


## How to run this application
To run this application open terminal and move to Day-3/ directory. Then run below command
```
npm install
npm run start
```

