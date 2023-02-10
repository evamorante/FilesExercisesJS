const p = document.getElementsByTagName ("p");
const textBox = document.getElementbyId ("textbox");
const button = document.getElementbyId ("button");

function fullParagraphe() {
    textBox.innerText = textbox.value;
    
}
fullParagraphe.addEventListener ("click", fullParagraphe);

//check la correction !