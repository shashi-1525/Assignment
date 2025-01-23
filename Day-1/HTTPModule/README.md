# HTTP Module

HTTP is s module that let us create server for our application. Here i have learned how to create a server.

# How to create a server

In order to create a server we need to follwo these steps:
1. import http module 
```
const http = require('http');
```
2. Call createServer method from http: we can use any of the below methods to create server
    i. call createServer method and then emit an event  
    ```
    const server = http.createServer();

    server.on('connection', (socket) => { // emit an event
        console.log("new Connection...");
    });
    ```
    ii. call createServer method with a function as an argument
    ```
    const server = http.createServer((req, res) => {
        if(req.url === '/'){
            res.write("Server running......");
            res.end();
        }

        if(req.url === '/greet'){
            res.write("Hello User");
            res.end();
        }
    
    });
    ```
3. Start the server on particular port number
```
sever.listen(3000); // server will run on port 3000
```

# How to run the server

To run this sever open terminal and move to Day-1/HTTPModule directory. Then run the below command
```
node app.js
```
Now open browser and search for http://localhost:3000 or http://localhost:3000/greet