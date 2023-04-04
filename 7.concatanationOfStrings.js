//base string & int
var message = "Hello";
console.log(message);
var message = 12;
console.log(message);
//base fonction
function sayCoucou(name){
    console.log("Hello "+name);
}
sayCoucou("Rick");
sayCoucou("Lory");

//base fonction à plusieurs paramètres
function sayHello(firstname,secondname){
    console.log("Hello "+firstname+secondname);
}
sayHello("Eva "+"Morante ");


//base fonction avec variable
function salutations(firstname,secondname){
    var message = "Hello "+firstname+secondname+", how are you ?";
    return message;
}
console.log(salutations("Eva", " Morante"));


