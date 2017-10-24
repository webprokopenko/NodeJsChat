var fs = require('fs');

fs.open(__filename, 'r', function(err,file){
    console.log("IO");
});
setImmediate(function(){
    console.log("immidiate"); // After IO
});
process.nextTick(function(){
    console.log("nextTick"); // Before IO
})