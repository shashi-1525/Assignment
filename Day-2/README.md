# 🚀 About this project

This is a learning project to implement CRUD operation. I have created a user model which consists of three fileds name, email, phone and performed CRUD opertaion on the model.

## 🔖 Software Requirements

1. Nodejs
2. MongoDB

## Get User

```
http://localhost:3000/api/users/
```
This is a GET request and it is used to "get" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).

A successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data.

## Create User

```
http://localhost:3000/api/users/
```
This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.
A successful POST request typically returns a 200 OK or 201 Created response code.

```
{
	"name": "Shashi Ranjan",
    "email": "shashi@gmail.com",
    "phone": "9809785609"
}
```

## Update user

```
http://localhost:3000/api/users/shashi@gmail.com
```
This is a PUT request and it is used to overwrite an existing piece of data. For instance, after you create an entity with a POST request, you may want to modify that later. You can do that using a PUT request. You typically identify the entity being updated by including an identifier in the URL.
A successful PUT request typically returns a 200 OK, 201 Created, or 204 No Content response code.
```
{
	"name": "Shashi",
    "phone": "8987855106"
}
```

## Delete User
```
http://localhost:3000/api/users/shashi@gmail.com
```
This is a DELETE request, and it is used to delete data that was previously created via a POST request. You typically identify the entity being updated by including an identifier in the URL.
A successful DELETE request typically returns a 200 OK, 202 Accepted, or 204 No Content response code.
