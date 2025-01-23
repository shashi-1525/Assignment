const path = require('path');

var pathObj = path.parse(__filename);
var baseName = path.basename("cd:/Shashi/Day-1/PathModule/app.js");
var dirName = path.dirname("cd:/Shashi/Day-1/PathModule/app.js");
var extName = path.extname("cd:/Shashi/Day-1/PathModule/app.js");

console.log("Path Object: ",pathObj);
console.log("Base name of cd:/Shashi/Day-1/PathModule/app.js : ", baseName);
console.log("Directory name of cd:/Shashi/Day-1/PathModule/app.js : ", dirName);
console.log("Extenstion name of cd:/Shashi/Day-1/PathModule/app.js file: ", extName);