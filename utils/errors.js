var util = require('util');
var phrases = {
    "Hello": "Привет !",
    "world": "Мир !"
};
function PharseError(message){
    this.message = message;
    Error.captureStackTrace(this, PharseError);
}
util.inherits(PharseError,Error);
PharseError.prototype.name = 'PharseError';

function HttpError(status,message){
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError,Error);
HttpError.prototype.name = "HttpError";


function getPhrase(phrase){
    if(!phrases[phrase])
        throw new PharseError("Нет такой фразы : " + phrase);
    return phrases[phrase];
}

function makePage(url){
    if(url!='index.html')
    throw new HttpError(404,"Нет такой страницы");
    return util.format("%s, %s,", getPhrase("Hell", getPhrase("world")));
}

try{
    var page = makePage('index.html');
    console.log(page);
}catch(e){
    if(e instanceof HttpError){
        console.log(e.status, e.message);
    }else{
        console.error(" Ошибка %s\n сообщение: %s\n стек: %s", e.name, e.message, e.stack);
    }
}