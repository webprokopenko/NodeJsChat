var util = require('util');

function Animal(name){
    this.name = name;
}
//Parent
Animal.prototype.walk = function(){
    console.log("Walk " + this.name);
}
//Children
function Rabbit(name){
    this.name = name;
}
util.inherits(Rabbit,Animal);

Rabbit.prototype.jump = function(){
    console.log("Jump " + this.name);
}
//Used
var rabbit = new Rabbit("Rabbit #1");
rabbit.walk();
rabbit.jump();
