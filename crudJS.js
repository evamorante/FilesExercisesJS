//sélectionner un élément de la page de construction web
const title = document.getElementById("title");
const myButton = document.getElementById("myButton");
const notExisting = document.getElementById("notExisting");
const myTextBox = document.getElementById("MyTextBox");

console.log(title);
console.log(myButton);
console.log(notExisting);


//sélectionner un ou des éléments sans ID
//avec class - on obtient une collection, pour définir une liste de 
//cette collection créer une loop avec itération et extraire à partir
//de la position 0 - donc [i]
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

for (let i = 0; i<paragraphs.length; i++){
    console.log(paragraphs[i]);
}
//sélectionner un ou des éléments sans ID, sans class
//toutefois tous les <p> même avec class seront sélectionnés
const paragrafs = document.getElementsByTagName("p");
    console.log(paragrafs);
for (let i = 0; i<paragrafs.length; i++){
    console.log(paragrafs[i]);
}

//"updater" les valeurs des données dans html via JS
//with elements between tags
//title.innerHTML = "The title has changed !";
//with elements without closing tags, means with anchor tags <input...>
//myButton.value = "Submit here!";

//change the title clicking on the MyButton 
//using the paragdim of events with the addEventListener method
function changeTitle() {
    //title.innerText = "New Title";
    title.innerText = myTextBox.value;
}

myButton.addEventListener("click", changeTitle);

//POURQUOI CELA NE FONCTIONNE PAS SI J'AI UPDATE LES DONNEES DANS LE TITRE ET DANS LE MYBUTTON
