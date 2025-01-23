// (function (exports, require, module, __filename, __dirname){
    var url = "https://www.google.com";

    function log(){
        console.log(`Logging exports: ${exports}`);
        console.log(`Logging require: ${require}`);
        console.log(`Logging module: ${module}`);
        console.log(`Logging filename: ${__filename}`);
        console.log(`Logging dirname: ${__dirname}`);
    }

    module.exports.log = log;
// })