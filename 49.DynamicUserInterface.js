
//a paragraph of text which should be empty 
//when the page is first opened
//a textbox
//a button
//When the button is clicked, the paragraph of text will 
//display what is currently in the textbox


const p = document.getElementById ("1");
const textbox = document.getElementById ("textbox");
const button = document.getElementById ("button");

function fullingParagraphe() {
    p.innerText = textbox.value;
    
}
button.addEventListener("click", fullingParagraphe);

//check la correction !