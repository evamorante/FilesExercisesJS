//const title = document.getElementById("title"); WON'T BE USED HERE !!!

const text = document.getElementById("myTextBox");
const button = document.getElementById("myButton");
const content = document.getElementById("content");
//pour ajouter, à savoir donc créer de nouveau/x élément/s 
//on utilise la méthode document.createElement(le nom du tag souhaité)

const newParagraph = document.createElement("p");
//now the command on the new constant variable
//is defined and storage in the RAM-Memory
newParagraph.innerText = "Hey ! I'm here !";
//as the line above the setting innerText has
//set the new <p> we can add the innerText now
//in it and to choose which text, but as is a 
//storage in the RAM-Memory we have to say what
//it has be to be run now and so we need to embed
//that in the choosen tag <div> to which we have a
//assigned a class = content - and the method is
//.appendChild(newParagraph)
content.appendChild(newParagraph);

//now as we want the text to be displayed when clicking
//the click button, we have to build a function

function addParagraph() {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = text.value;
    content.appendChild(newParagraph);
}
button.addEventListener("click", addParagraph);

//DON'T FORGET THE PARENTESIS IN THE SYNTAX OF THE MAIN STATEMENT
//OF THE FUNCTION

//we could link css-feature directly within the JS-file with 
//some method --> this case calling one choosen class !!!
//see between the code lines how it is written !