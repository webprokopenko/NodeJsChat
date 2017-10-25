var fs = require('fs');

fs.stat(__filename, function(err,stat){
    console.log(stat.isFile());
    console.log(stat);
});

fs.readFile("blablalba",{encoding:"utf8"}, function(err,data){
    if(err.code = "ENOENT")
        console.log(err.message);
    else
        console.log(data);
})