# OS Module
OS in an inbuilt node module. It has some useful methods and fields to know about the operating system. Some of the most useful function includes:
- totalmem -> to know totla memory
- freemem -> to know total free memory
- type -> to know type of os 
- uptime -> to know total uptime of os in seconds
- version -> to know version of OS

## How to import os module
To import os module we can use any of the below code:
```
const os = require('node:os');
```
```
const os = require('os');
```

## How to use os module methods
To use os module methods we need to import the os module then we can use the method in following manner:
```
const os = require('os');
var toalMemory = os.totalmem();
```

## How to run this application
To run this application open terminal and move to Day-1/OSModule directory. The the below command
```
node app.js
```
