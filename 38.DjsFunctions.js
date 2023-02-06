//LA BASE DE LA BASE <3
function sayHello(){
    console.log("Hello !");
}

function greet(name){
    console.log("Hello"+name);
}

function addTwoNumbers(a,b){
    return a+b;
}

//calling the functions
sayHello();
greet("World");
console.log(addTwoNumbers(5,2));



//storing a function --> RETURN & anonymous function WHAT'S THE WHAT !!!
var multiply = function(x,y){
    return x*y;
}
var result = multiply(5,3);
console.log(result);


//function called into the function
function call(msgBefore, msgAfter, fn){
    console.log(msgBefore);
    fn();
    console.log(msgAfter);
}

function display(){
    console.log("Called inside the function !");
}

call("Before", "After", display);


//same as above example but with an anonymous function (???????)
function call(msgBefore, msgAfter, fn){
    console.log(msgBefore);
    fn();
    console.log(msgAfter);
}

call("Before", "After", function(){
    console.log("Called inside the function !");
});
