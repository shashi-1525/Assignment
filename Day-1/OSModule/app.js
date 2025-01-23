const os = require('os');

var totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory}`);

var freeMemory = os.freemem();
console.log(`Free Memory: ${freeMemory}`);

var osName = os.type();
console.log(`OS Name: ${osName}`);

var osUptime = os.uptime();
console.log(`OS Uptime: ${osUptime}`);

var osVersion = os.version();
console.log(`OS Version: ${osVersion}`);
