const http = require('http');


// method-1
/*
const server = http.createServer();

server.on('connection', (socket) => {
    console.log("new Connection...");
});
*/

// method-2
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
server.listen(3000);

console.log("Listening on port 3000...");