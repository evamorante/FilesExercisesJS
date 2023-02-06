function moneyConverter(swissfrancs){
    messageOne = " Swiss Francs are "
    messageTwo = " American Dollars"
    var dollars = swissfrancs * 1.02
    return swissfrancs+messageOne+dollars+messageTwo
}

var swissfrancs = 34;
console.log(moneyConverter(swissfrancs));
var swissfrancs = 22;
console.log(moneyConverter(swissfrancs));
var swissfrancs = 145;
console.log(moneyConverter(swissfrancs));

