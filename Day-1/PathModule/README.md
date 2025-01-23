# Path Module
Path in an inbuilt node module. It has some useful methods and fields to deal with path of the file. Some of the most useful function includes:
- parse -> to parse any of the directory
- basename -> to find the base file of the file name
- dirname -> to find the directory name od the file name
- extname -> to know the extention of the file

## How to import path module
To import path module we can use any of the below code:
```
const path = require('node:path');
```
```
const path = require('path');
```

## How to use path module methods
To use path module methods we need to import the path module then we can use the method in following manner:
```
const path = require('path');
var extention = path.extname("cd:/Shashi/Day-1/PathModule/app.js");
```

## How to run this application
To run this application open terminal and move to Day-1/PathModule directory. The the below command
```
node app.js
```
