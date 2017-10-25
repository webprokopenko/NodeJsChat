var fs = require('fs');

fs.writeFile("file.tmp", "data",function(err,){
    if(err) 
        throw err;
    fs.rename("file.tmp","newfile.tmp",function(err){
        if(err)
            throw err;
    });
    fs.unlink("newfile.tmp",function(err){
        if(err)
            throw err;
    });
});