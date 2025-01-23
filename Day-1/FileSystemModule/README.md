# FileSystem Module
FileSystem in an inbuilt node module. It has some useful methods and fields to play with file system. Some of the commonly used function includes:
- readdirSync
- readdir 
- write 
- open 
- close 
- append

## How to import file system module
To import FileSystem module we can use any of the below code:
```
const fs = require('node:fs');
```
```
const fs = require('fs');
```

## How to use FileSystem module methods
To use fs module methods we need to import the fs module then we can use the method in following manner:
```
const fs = require('fs');
 fs.readdir('./', function(err, files){
    if(err) console.log('Error: ', err);
    else console.log('Result: ', files);
 })
```

## How to run this application
To run this application open terminal and move to Day-1/FileSystemModule directory. The the below command
```
node app.js
```
