import fs from 'fs';

export const log = async (req, res, next) => {
    try{
        let data = "\n" + req.method + " " + new Date() + " " + req.baseUrl + " " + req.url;
        await fs.appendFile('log/log.txt', data, (err) => {
            if(err) throw err;
        });
        next();
    }
    catch(err) {
        console.log(err);
    }

}
