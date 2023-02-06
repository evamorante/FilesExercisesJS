var fruits = ["oranges", "apples", "bananas"];
console.log(fruits);
//Résultat :
//Array(3) [ "oranges", "apples", "bananas" ]

//pour extraire une valeur - zero-based !! attention !
var fruits = ["oranges", "apples", "bananas"];
var message = "The second value contains apples: " + fruits[1];
console.log(message);

//pour remplacer une valeur - zero-based !! toujours !!
var fruits = ["oranges", "apples", "bananas"];
fruits[1] = "kiwis";
var message = "The second value now contains kiwis: " + fruits[1];
console.log(message);

//pour rajouter une valeur
var fruits = ["oranges", "apples", "bananas"];
fruits.push("tomatoes");
console.log(fruits);
//Résultat :
//Array(4) [ "oranges", "apples", "bananas", "tomatoes" ]

//pour enlever une valeur - ZB 
var fruits = ["oranges", "apples", "bananas", "kiwis"];
fruits.splice(2, 1);
console.log(fruits);

// ????? doesn't work !
var fruits = ["oranges", "apples", "bananas", "kiwis"];
fruits.splice(2, 2);
console.log(fruits);

//trier
var fruits = ["oranges", "apples", "bananas", "kiwis"];
fruits.sort();
console.log(fruits);
//résultat :
//Array(4) [ "apples", "bananas", "kiwis", "oranges" ]

//inverser l'ordre
var fruits = ["oranges", "apples", "bananas", "kiwis"];
fruits.reverse();
console.log(fruits);

//pour obtenir la longueur de ton array
var fruits = ["oranges", "apples", "bananas", "kiwis"];
var fruitsCount = fruits.length;
console.log(fruitsCount);
//résultat dans la console SI ELLE VOULAIT BIEN FONCTIONNER !!!!!!!!!
//4
