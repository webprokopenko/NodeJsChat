var util = require('util');
var str = util.format("My %s %d %j", "String",123,{test:"obj"});
console.log(str);