//sélectionner un élément de la page de construction web
const title = document.getElementById("title");
const myButton = document.getElementById("myButton");
const notExisting = document.getElementById("notExisting");

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
title.innerHTML = "The title has changed !";
//with elements without closing tags, means with anchor tags <input...>
myButton.value = "Submit here!";