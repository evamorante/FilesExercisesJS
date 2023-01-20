//js traduit directement un chiffre + un nom en les passant 
//directement en "string" - function toString no useful in this 
//case - called postfix
var aNumber =5;
var aString ="Hello";
var result = aNumber+aString
console.log(result);

var aNumber =5;
var aString ="3";
var result = aNumber+Number(aString);
console.log(result);

var apples = 3;
var text = " fruits";
var resultat = apples.toString()+text;
console.log(resultat);

function convert(cm){
  var mess1 = " centimeters are ";
  var mess2 = " inches.";
  var result = cm*0.3937;
  return cm.toString()+mess1+result.toString()+mess2;
}
console.log(result);