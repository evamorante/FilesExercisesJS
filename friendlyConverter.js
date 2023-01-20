function tempConverter(Celsuis){
    messageOne = " degrees Celsuis are"
    messageTwo = " degrees Farenheit."
    var Farenheit = (Celsuis * 9/5) + 32
    return Celsuis+messageOne+messageTwo+Farenheit;
}
var Celsuis = 21.5;
console.log(tempConverter(Celsuis));
var Celsuis = -7;
console.log(tempConverter(Celsuis));
var Celsuis = 11;
console.log(tempConverter(Celsuis));
var Celsuis = 0;
console.log(tempConverter(Celsuis));