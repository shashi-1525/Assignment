# Node Module System

In this module i have learned what a mode module is and how to create it and load it other module. This folder contains two files app.js and logger.js
- app.js -> main code which is using the looger module funtion and variables
- logger.js -> It is a module with function and variable which has been exported in orser to be used by other modules.

## How to export any member of a module
```
module.exports.<any_name> = <member_name>;
Example:
    module.exports.sayHelloFunction = sayHello; 
```

## How to Load any module
```
const <any_name> = require('<module_path>');
Example:
    const logger = require('./logger') ;
```

## How to run this application
To run this application open terminal and move to Day-1/ModuleSystem directory. The the below command
```
node app.js
```