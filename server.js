var user = require('./user');

var Vasya = new user.User("Vasya");
var Petya = new user.User("Petya");

Vasya.hello(Petya);

require ('./global_user.js');

var GlobalVasya = new User("Global vasya");
var GlobalPetya = new User("Global petya");
GlobalVasya.hello(GlobalPetya);