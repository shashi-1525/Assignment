var url = "https://google.com";

function log(message){
    console.log("Logging logger module....");
    console.log(module);
}

module.exports.log = log;
module.exports.googleUrl = url