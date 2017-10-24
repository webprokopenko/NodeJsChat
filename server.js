var user = require('./user');

var Vasya = new user.User("Vasya");
var Petya = new user.User("Petya");

Vasya.hello(Petya);