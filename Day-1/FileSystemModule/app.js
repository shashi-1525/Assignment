 const fs = require('fs');

const f = fs.readdirSync('../');
console.log("Files under Day-1 diectory: ", f);


 fs.readdir('./', function(err, files){
    if(err) console.log('Error: ', err);
    else console.log('Result: ', files);
 })


 fs.readdir('$', function(err, files){
     console.log('-----When error Occurs-----')
    if(err) console.log('Error: ', err);
    else console.log('Result: ', files);
 })