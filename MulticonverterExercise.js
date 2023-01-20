function moneyConverter(francs){
    var dollars = francs*1.08;
    return dollars;
}
userInput = windows.prompt("Enter your needed change: ");
console.log(moneyConverter(francs));

function temperatureConverter(celsius){
    var farenheit = (celsius*9/5) + 32;
    return farenheit;
}
//userInput = windows.prompt("Enter your temperature in celsius: ");
var celsius = 35;
console.log(temperatureConverter(celsius));

function lengthConverter(cm){
    var meter = cm/100;
    return meter;
}
//userInput = windows.prompt("Enter your lenght to be changed: ");
var cm = 69;
console.log(lengthConverter(cm));

