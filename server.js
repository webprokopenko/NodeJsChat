var user = require('./user');

function run(){
    var Vasya = new user("Vasya");
    var Petya = new user("Petya");
    
    Vasya.hello(Petya);
    
    require ('./global_user.js');
    
    var GlobalVasya = new User("Global vasya");
    var GlobalPetya = new User("Global petya");
    GlobalVasya.hello(GlobalPetya);
}
if(module.parent){
    exports.run = run;
}else{
    run();
}
