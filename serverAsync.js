var http = require('http');
var fs = require('fs');

/**
 * 1 Не Блокирует
 * 2 Не Работает try catch
 * 3 Прост и понятен
 */
http.createServer(function(req,res){
    var info;

    if(req.url == '/'){
        
            info = fs.readFile('inde.html',function(err,info){
                if(err){
                    console.log(err);
                    res.statusCode = 500;
                    res.end("На сервере произошла ошибка");
                    return;
                }
                res.end(info);
            });
    }else {
        /**
         * 404
         */
    }
}).listen(3000);