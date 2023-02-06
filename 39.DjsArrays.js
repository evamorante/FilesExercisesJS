//writing basical statements of the basic algorithm with arrays
var values = [13, "Hello", -5.6, "blue"];
console.log(values);

//accessing values
var firstElement = values[0];
var secontdElement = values[1];
console.log(firstElement);
console.log(secontdElement);
console.log(values[0]);
//value outside the array - not existing - no produce an error - produce "undifine"
console.log(values[10]);

//changing a data in the array
values[1] = "Goodbye";
console.log(values);

//to find out the "lenght" - it means how many datas - of the array
console.log(values.length);
//pour afficher la dernière entrée lenght -1 --- puisque zero-based

//adding a value - at the end
values.push(100);
console.log(values);

//adding a value - at the beginning
values.unshift("ECMAScript");
console.log(values);

// insérer une data à une place voulue
values.splice(1, 0, 65);
console.log(values);

//le contraire
//enlever une data - à la fin
var values = [13, "Hello", -5.6, "blue"];

var lastValue = values.pop();
console.log(lastValue);
console.log(values);
//ou
//console.log(values.pop);

//enlever une data au début - shift VS unshift
var firstValue = values.shift();
console.log(firstValue);
console.log(values);
//ou
//console.log(values.shift);

//pour enlever une data d'un endroit précis, aller à sa position dans l'index
//et enlever avec 1 
var secondValue = values.splice(1, 1);
console.log(secondValue);
console.log(values);
//ou
//console.log(values.splice(1, 1));

//reste trouver/merger/changer array--string/changer string--array/trier

//trouver
var values = ["Nick", "Robert", "Alice", "Julia", "Robert", "Sylvia"];

var julia = values.indexOf("Julia");
console.log(julia);

var jim = values.indexOf("Jim");
console.log(jim);

var robert = values.indexOf("Robert");
console.log(robert);
//ou
//console.log(value.indexOf("Julia"));


//pour fusionner 2 arrays
var firstTeam = ["Bob", "Jim"];
var secondTeam = ["Alice", "Julia"];

var bothTeams = firstTeam.concat(secondTeam);
console.log(bothTeams);
console.log(firstTeam);

[ 'Bob', 'Jim', 'Alice', 'Julia' ]
[ 'Bob', 'Jim' ]

//pour convertir une array en string - toString(); va séparer les données 
//des virgules
var colors = ["Blue", "Red", "Green"];

var colorString = colors.toString();
console.log(colorString);

console.log(colorString);


//pour convertir en string mais pour choisir le type de séparateur
var colors = ["Blue", "Red", "Green"];

var colorString = colors.toString();
console.log(colorString);

colorString = colors.join(" - ");
console.log(colorString);


//pour passer des datas de string en liste
var colorString = "Blue,Red,Green";
var colors = colorString.split(",");
console.log(colors);

//pour trier et renverser le tri
var scores = [10, 1, 45, 7, 3];

var sortedScores = scores.sort(function(a, b) {
    return a - b;
});

console.log(sortedScores);
//METHODE A UTILISER, CAR LE .SORT ET LE .REVERSE TRIE LES NOMBRES
//COMME S'ILS ETAIENT DES STRINGS --- LE 1 AVANT LE 3, LE 3 AVANT LE 4
//LE 4 AVANT LE 7 ---> 1, 10, 3, 45, 7....VOILA LE BOWWWDEL !!!


//27.01.2023 17:14 depuis hier mon code ne runnait pas sur le browser
//juste oublié de mettre une ; à la ligne 12 !!!