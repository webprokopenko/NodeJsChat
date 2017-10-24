function User(name){
    this.name = name;
}
User.prototype.hello = function(who){
    console.log("Hello " + who.name);
}
console.log("User Global Js is required");

global.User = User;