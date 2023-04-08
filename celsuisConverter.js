function tempConverter(celsuis){
    var farenheit = (celsuis*9/5+32)
    return farenheit;
}

var userInput = window.prompt("Enter your choiced degree celsuis to convert: ");
var farenheitResult = tempConverter(userInput);
var message = userInput+" degrees celsuis are "+farenheitResult+" degrees farenheit"
console.log(message);


