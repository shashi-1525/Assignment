# Module Wrapper Function
Each node module is wrapped in function whne the js file is interpreated. All the user written code is conveted to be part of that wrapper function. The wrapper function has following arguments:
- exports
- require
- module
- __filename
- __dirname

## Example of wrapper function
```
(function (exports, require, module, __filename, __dirname){
    function log(){
        console.log(`Logging ----`);
    }
    module.exports.log = log;
})
```

## How to run this application
To run this application open terminal and move to Day-1/WrapperModuleFunction directory. The the below command
```
node app.js
```