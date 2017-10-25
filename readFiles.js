var fs = require('fs');

fs.readFile("blablalba",{encoding:"utf8"}, function(err,data){
    if(err.code = "ENOENT")
        console.log(err.message);
    else
        console.log(data);
})