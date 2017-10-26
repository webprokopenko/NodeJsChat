var domain = require("domain");
var ServerDomain = domain.create();

var server;

ServerDomain.on('error',function(err){
    console.log("Server error",err);
    /**
     * Мягкое завершение процесса
     */
    if(server) server.close();

    setTimeout(function(){
        process.exit(1);
    }, 1000).unref();
});
ServerDomain.run(function(){
    var http = require('http');
    var handler = require('./handler');

    server = http.createServer(function(req,res){
        var reqDomain = domain.create();
        reqDomain.add(res);
        reqDomain.add(req);

        reqDomain.on('error',function(err){
            res.statusCode = 500;
            res.end("Sorry ," + err);
            console.log("Error from req = " + err);
            ServerDomain.emit('error',err);
        });
        reqDomain.run(function(){
            handler(req,res);
        })
    }).listen(3000);
})