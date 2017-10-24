function User(name){
    this.name = name;
}
User.prototype.hello = function(who){
    console.log("Hello " + who.name);
}
console.log("User Js is required");

exports.User = User;