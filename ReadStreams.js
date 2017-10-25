var fs = require('fs');

var stream = new fs.ReadStream("nono.html");

stream.on("readable",function(){
    var data = stream.read();
    console.log(data.length);
});
stream.on("end", function(){
    console.log("THE END!");
});
stream.on("error",function(err){
    if(err.code == "ENOENT"){
        console.log("File not found");
    }else{
        console.log(err);
    }
});