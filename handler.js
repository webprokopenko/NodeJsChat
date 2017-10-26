var fs = require('fs');

module.exports = function handler(req,res){
    if(req.url == '/'){
        fs.readFile('__filename', function(err, content){
            if (err) throw Error;

            res.end(content);
        })
    }else{
        res.statusCode = 404;
        res.end("Not Found");
    }
}