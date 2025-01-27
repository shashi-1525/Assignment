# Employee CRUD

Implemented Filters and Dynamic routing this project. Also explored about use of regular expression in dynamic routing.


## 🔖 Software Requirements

1. Nodejs
2. MongoDB

## Get User using filters

```
http://localhost:3000/api/employee/get
```
This is a GET request and it is used to "get" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).

A successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data.

## Get User using dynamic routing

```
http://localhost:3000/api/employee/getByEmail
```
This is a GET request and it is used to "get" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`). It is using regular expression to identify the req.params as email.

A successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data.


## Create Employee

```
http://localhost:3000/api/employee/create
```
This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.
A successful POST request typically returns a 200 OK or 201 Created response code.

```
{
     "emp_id": 99999,
      "first_name": "Shashi",
      "last_name": "Ranjan",
      "email": "shashi@gmail.com",
      "gender": "Male",
      "city": "Kolkata",
      "state": "West Bengal",
      "salary": 45289,
      "designation": "Trainee",
      "date_of_joining": "2025-01-15",
      "phone": "7462082370"
}
```


## How to run this application
To run this application open terminal and move to Day-3/ directory. Then run below command
```
npm install
npm run start
```

