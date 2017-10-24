var util = require('util');
var obj = {
    a: 5,
    b: 10,
    c: "Like a string",
    inspect : function(){
        return 123;
    }
};
obj.self = obj;

console.log(util.inspect(obj));