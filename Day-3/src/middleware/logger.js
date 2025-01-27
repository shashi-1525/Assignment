import fs from 'fs';
import path from 'path';
export const log = (req, res, next) => {
    try{
        let data = req.method + " " + new Date() + " " + req.baseUrl + " " + req.url;
        console.log(__dirname);
        fs.writeFile('log/log.txt', data, (err) => {
            // if(err) throw err;
            console.log("Writing into file: " + data);
        });
        next();
    }
    catch(err){
        console.log(err);
    }
    finally {
        // fs.close();
    }

}
