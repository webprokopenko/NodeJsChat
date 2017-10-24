var phrases = require("./ru.json");

function User(name){
    this.name = name;
}
User.prototype.hello = function(who){
    console.log(phrases.Hello + who.name);
}
console.log("User Js is required");

module.exports = User;