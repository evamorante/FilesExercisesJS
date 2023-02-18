//a paragraph of text which should be empty 
//when the page is first opened
//a textbox
//a button
//When the button is clicked, the paragraph of text will 
//display what is currently in the textbox


const p = document.getElementById ("1");
//vraisemblablement on arrive pas à "updater" un paragraphe existant
//vide ou pas, si on l'appelle avec un getElementsByTagName("p"), il
//faut lui attribuer un ID ;)
const textbox = document.getElementById ("textbox");
const button = document.getElementById ("button");

function fullingParagraph() {
    p.innerText = textbox.value;
   // p.className = "beautify"; doesn't work ! why ?
    
}
button.addEventListener("click", fullingParagraph);

//to go on we the exercise, it has to be ADDED (not remplaced)
//these new elements :
// another button
// a second text box

// When the user clicks on the new button, it should add the content 
// of the second text box between the text box and the elements 
// you did set in the previous exercise. These new paragraphs should 
// also implement a style class.

const buttonTwo = document.getElementById("new_button");
const boxTwo = document.getElementById("new_textbox");
const newPlace = document.getElementById("newPlace");

console.log(buttonTwo);
//test - oui, ça fait le output dans la console - mais
//il faut désactiver la fonction en bas ! why ?



function addingParagraph() {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = boxTwo.value;
    newParagraph.className = "beautify";//tenté de changer le style de police ! no ! why ?
    newPlace.appendChild(newParagraph);
}

buttonTwo.addEventListener("click", addingParagraph);

const title = document.getElementById("title");
const removeButton = document.getElementById("remove_button");

function removeTitle() {
    title.remove();
}
removeButton.addEventListener("click", removeTitle);
//yourrraaaiie I didn't use the same way with .removeChild in
//ID div, but IDing the title and using the .remove()-method

//now, trickiest --> removing the first line of the displaying
//text of my boxTwo with the previous exercise


//and more and more trickiest --> remove from the end of the 
//displayed list