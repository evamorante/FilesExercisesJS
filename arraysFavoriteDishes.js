//Create a JavaScript array to store your 3 favorite dish.
//List each of them in the console on their own separate line.
//Display the count of your favorite dishes.
//Add a 4th dish to the array.
//Display the count once more within a sentence such as "I have x favorite dishes."
//Remove the 2nd one!
//Sort them in alphabetical order.
//Display them once more but this time as an array in the console.
//Display the count again!

var myFavoriteDishes = ["Beefsteak", "PastaBolognaise", "FreshSalad"];
console.log(myFavoriteDishes[0]);
console.log(myFavoriteDishes[1]);
console.log(myFavoriteDishes[2]);

console.log(myFavoriteDishes.length);

myFavoriteDishes.push("Fondue");

myFavoriteDishes.splice(1,1);
console.log(myFavoriteDishes);

myFavoriteDishes.sort();
console.log(myFavoriteDishes);

myFavoriteDishes.reverse();
console.log(myFavoriteDishes);

console.log(myFavoriteDishes);

var message = "I have "+myFavoriteDishes.length.toString()+" favorite dishes.";
console.log(message);

